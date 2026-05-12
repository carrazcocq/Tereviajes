import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { generateTravelItinerary } from '../services/geminiService';
import { LoadingState } from '../types';
import ReactMarkdown from 'react-markdown';

const AIPlanner: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus(LoadingState.LOADING);
    try {
      const itinerary = await generateTravelItinerary(prompt);
      setResult(itinerary);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="planner" className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-6 border border-purple-100">
              <Sparkles size={16} />
              <span>Potenciado por Gemini AI</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-trip-black mb-4 md:mb-6 leading-tight">
              Diseña tu viaje soñado en <span className="text-purple-600">segundos</span>.
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Cuéntanos qué te gusta, cuántos días tienes y tu presupuesto. Nuestra IA creará un itinerario personalizado solo para ti.
            </p>

            <form onSubmit={handleSubmit} className="relative">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ej: Quiero un viaje romántico a Italia por 7 días, visitando viñedos y playas, con presupuesto medio..."
                className="w-full h-40 md:h-48 p-6 rounded-3xl bg-gray-50 border-2 border-gray-100 focus:border-trip-primary focus:bg-white outline-none transition-all resize-none text-base md:text-lg shadow-inner"
              />
              <div className="absolute bottom-4 right-4">
                 <button 
                  type="submit"
                  disabled={status === LoadingState.LOADING || !prompt.trim()}
                  className="bg-trip-black text-white p-3 rounded-full hover:bg-trip-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
                 >
                   {status === LoadingState.LOADING ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                 </button>
              </div>
            </form>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 min-h-[400px] md:min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
             {status === LoadingState.IDLE && (
               <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center m-auto">
                 <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <Sparkles size={32} className="text-gray-400" />
                 </div>
                 <p className="text-lg">Tu itinerario mágico aparecerá aquí.</p>
               </div>
             )}

             {status === LoadingState.LOADING && (
                <div className="h-full flex flex-col items-center justify-center space-y-4 m-auto">
                  <div className="w-16 h-16 border-4 border-trip-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-500 font-medium animate-pulse">Consultando con expertos...</p>
                </div>
             )}

             {status === LoadingState.SUCCESS && (
               <div className="animate-fade-in h-full flex flex-col">
                  <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
                     <ReactMarkdown
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-trip-primary mb-4" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-xl font-bold text-trip-black mb-3 mt-4" {...props} />,
                          p: ({node, ...props}) => <p className="text-gray-600 mb-3 leading-relaxed" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600" {...props} />,
                          li: ({node, ...props}) => <li className="ml-2" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-semibold text-trip-black" {...props} />,
                        }}
                     >
                        {result}
                     </ReactMarkdown>
                  </div>
                  <button 
                    onClick={() => {setResult(''); setPrompt(''); setStatus(LoadingState.IDLE)}}
                    className="mt-4 text-sm text-gray-500 hover:text-trip-primary underline self-start"
                  >
                    Crear otro viaje
                  </button>
               </div>
             )}

              {status === LoadingState.ERROR && (
               <div className="h-full flex flex-col items-center justify-center text-red-500 text-center m-auto">
                 <p className="text-lg font-semibold">Ups, algo salió mal.</p>
                 <p className="text-sm">Por favor intenta de nuevo.</p>
               </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIPlanner;