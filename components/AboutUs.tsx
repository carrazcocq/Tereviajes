import React from 'react';
import { ArrowLeft, Heart, Globe, ShieldCheck, Smile } from 'lucide-react';

interface AboutProps {
  onNavigate: (view: 'home' | 'terms' | 'privacy' | 'cookies' | 'about' | 'legal-notice' | 'contract-conditions') => void;
  onOpenBooking: () => void;
}

const AboutUs: React.FC<AboutProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="pt-28 pb-20 bg-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Back Button */}
        <div className="mb-16">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-500 hover:text-trip-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </button>
          
          <div className="text-center max-w-3xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-display font-bold text-trip-black mb-6">
               Más que una agencia, <br/>
               <span className="text-trip-primary">tu compañera de viaje.</span>
             </h1>
             <p className="text-lg text-gray-600 leading-relaxed">
               En Tereviajes no solo organizamos desplazamientos; diseñamos experiencias que se quedan grabadas en el corazón. Descubre quién hay detrás de tu próxima aventura.
             </p>
          </div>
        </div>

        {/* Story Section - Text Only Layout */}
        <div className="max-w-3xl mx-auto mb-20 bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
            <h2 className="text-trip-secondary font-bold tracking-wider uppercase text-sm mb-3 text-center">Nuestra Historia</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-trip-black mb-8 text-center">Viajando con Teresa</h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify md:text-left">
                <p>
                  Todo comenzó con una maleta llena de sueños y una firme convicción: viajar no debería ser estresante, sino transformador. 
                </p>
                <p>
                  Tras años recorriendo el mundo y conociendo culturas, decidí fundar <strong>Tereviajes</strong> (CICMA 4373) con un objetivo claro: ofrecer el trato cercano y humano que las grandes plataformas online habían perdido.
                </p>
                <p>
                  Hoy, somos una familia de viajeros ayudando a otros viajeros. Nos enorgullece decir que conocemos a nuestros clientes por su nombre, no por un número de reserva. Cuidamos cada detalle, desde la elección del hotel hasta esa recomendación de restaurante local que no sale en las guías.
                </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-200/60">
                <div className="text-center">
                  <p className="text-3xl font-bold text-trip-primary">10+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Años Exp.</p>
                </div>
                <div className="text-center border-l border-gray-200">
                  <p className="text-3xl font-bold text-trip-primary">5k+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Viajeros</p>
                </div>
                <div className="text-center border-l border-gray-200">
                  <p className="text-3xl font-bold text-trip-primary">50+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Destinos</p>
                </div>
            </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
           <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-3xl font-display font-bold text-trip-black mb-4">Nuestros Valores</h3>
              <p className="text-gray-600">Lo que nos mueve cada día para ofrecerte el mejor servicio.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 hover:border-trip-ice transition-all">
                 <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <Heart size={24} fill="currentColor" className="opacity-20 text-red-600" />
                    <Heart size={24} className="absolute" />
                 </div>
                 <h4 className="text-xl font-bold text-trip-black mb-3">Pasión por el detalle</h4>
                 <p className="text-gray-600">No dejamos nada al azar. Planificamos tu viaje como si fuera el nuestro propio.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 hover:border-trip-ice transition-all">
                 <div className="w-12 h-12 bg-blue-50 text-trip-primary rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck size={24} /> 
                 </div>
                 <h4 className="text-xl font-bold text-trip-black mb-3">Confianza y Seguridad</h4>
                 <p className="text-gray-600">Viaja tranquilo sabiendo que tienes un equipo respaldándote ante cualquier imprevisto.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 hover:border-trip-ice transition-all">
                 <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <Smile size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-trip-black mb-3">Cercanía</h4>
                 <p className="text-gray-600">Sin robots. Hablarás con personas reales que entienden tus necesidades.</p>
              </div>
           </div>
        </div>

        {/* CTA */}
        <div className="bg-trip-primary rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-trip-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
              <Globe className="mx-auto mb-6 opacity-80" size={48} />
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">¿Listo para tu próxima aventura?</h2>
              <p className="text-lg text-white/90 mb-8">
                 Deja que Teresa y su equipo diseñen el viaje perfecto para ti.
              </p>
              <button 
                onClick={onOpenBooking}
                className="bg-white text-trip-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                 Contactar Ahora
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;