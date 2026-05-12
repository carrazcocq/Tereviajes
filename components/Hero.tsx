import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, Users, ChevronDown } from 'lucide-react';
import { destinations } from '../data/destinations';

interface HeroProps {
  onSearch?: (id?: number) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  // State for destination selection
  const [selectedDestId, setSelectedDestId] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const phrases = ["Sueña", "Elige", "Realiza"];
  
  // Derived state for the date based on selection
  const selectedDestination = destinations.find(d => d.id.toString() === selectedDestId);
  const displayDate = selectedDestination ? selectedDestination.location : '';

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(30);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleSelectDestination = (id: number) => {
    setSelectedDestId(id.toString());
    setIsDropdownOpen(false);
  };

  const handleSearch = () => {
    if (onSearch) {
      if (selectedDestId) {
        onSearch(parseInt(selectedDestId));
      } else {
        onSearch();
      }
    }
  };

  return (
    <section className="relative pt-8 pb-12 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up z-10 relative">
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold text-center lg:text-left text-trip-black leading-[1.1] min-h-[3.3em] lg:min-h-[2.2em] tracking-tight mt-4">
              <span className="text-trip-primary">
                {text}
              </span>
              <span className="animate-pulse text-trip-primary font-light">|</span>
              <span className="block sm:inline"> tu escapada ideal.</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left leading-relaxed px-2 lg:px-0">
              Planificamos cada detalle de tu viaje. Tú solo encárgate de disfrutar y crear recuerdos inolvidables.
            </p>

            {/* Smart Selector Box */}
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 flex flex-col sm:flex-row gap-2 max-w-xl mx-auto lg:mx-0 relative z-40">
              
              {/* Destination Dropdown Trigger */}
              <div className="flex-1 px-4 py-3 flex items-center gap-3 border-b sm:border-b-0 sm:border-r border-gray-100 relative">
                <MapPin className="text-trip-primary flex-shrink-0" size={20} />
                <div 
                  className="text-left w-full cursor-pointer relative"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Elige tu Destino</p>
                  <div className="flex items-center justify-between">
                    <span className={`font-medium truncate block max-w-[150px] sm:max-w-full ${selectedDestination ? 'text-trip-black' : 'text-gray-400'}`}>
                      {selectedDestination ? selectedDestination.title : '¿A dónde quieres ir?'}
                    </span>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {/* Custom Pop-up Dropdown */}
                {isDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10 cursor-default" onClick={() => setIsDropdownOpen(false)}></div>
                    <div className="absolute top-full mt-2 left-0 w-full sm:min-w-[320px] max-h-[300px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 animate-fade-in custom-scrollbar divide-y divide-gray-50 ring-1 ring-black/5">
                      {destinations.map((dest) => (
                        <div 
                          key={dest.id} 
                          onClick={(e) => { e.stopPropagation(); handleSelectDestination(dest.id); }}
                          className="flex items-center gap-3 p-3 hover:bg-trip-ice transition-colors cursor-pointer group"
                        >
                          <img 
                            src={dest.image} 
                            alt={dest.title} 
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover border border-gray-100 shadow-sm" 
                          />
                          <div className="flex-1 min-w-0">
                             <p className="text-sm font-bold text-trip-black truncate group-hover:text-trip-primary transition-colors">
                               {dest.title}
                             </p>
                             <p className="text-xs text-gray-500 flex items-center gap-1">
                               {dest.location}
                             </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Date Display (Read Only) */}
              <div className="flex-1 px-4 py-3 flex items-center gap-3 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none">
                 <Calendar className={`flex-shrink-0 transition-colors ${selectedDestination ? 'text-trip-primary' : 'text-gray-400'}`} size={20} />
                 <div className="text-left w-full">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Fecha de Salida</p>
                  <div className={`font-medium text-sm md:text-base ${selectedDestination ? 'text-trip-black' : 'text-gray-400 italic'}`}>
                    {displayDate || 'Automático'}
                  </div>
                </div>
              </div>

              <button 
                onClick={handleSearch}
                className="bg-trip-primary hover:bg-trip-secondary text-white p-4 rounded-xl transition-all duration-300 flex justify-center items-center shadow-lg hover:shadow-trip-primary/30 active:scale-95"
              >
                <ArrowRight size={24} />
              </button>
            </div>

             {/* Mobile Hero Image (Visible only on small screens) */}
             <div className="mt-8 lg:hidden w-full h-64 rounded-3xl overflow-hidden shadow-xl relative animate-fade-in">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold shadow-lg text-trip-primary">
                    📍 Bali, Indonesia
                </div>
             </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
               <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
                  ].map((src, i) => (
                    <img key={i} src={src} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" alt="User" />
                  ))}
               </div>
               <div className="text-sm font-medium text-gray-600">
                 <span className="text-trip-primary font-bold">2.5k+</span> viajeros felices
               </div>
            </div>
          </div>

          {/* Hero Image Grid (Desktop Only) */}
          <div className="relative hidden lg:block h-[600px] animate-fade-in">
             <div className="absolute top-0 right-0 w-[80%] h-[90%] bg-trip-ice/50 rounded-[40px] -z-10 transform rotate-3"></div>
             
             {/* Main Big Image */}
             <div className="absolute top-10 right-10 w-[65%] h-[60%] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 duration-500">
               <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel Main" />
               <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold shadow-lg text-trip-primary">
                 📍 Roadtrip Adventure
               </div>
             </div>

             {/* Secondary Image Bottom Left */}
             <div className="absolute bottom-10 left-0 w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform hover:-translate-y-2 duration-500 delay-100">
               <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel Second" />
             </div>

             {/* Floating Badge */}
             <div className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-trip-ice p-2 rounded-full text-trip-primary">
                   <Users size={20} />
                </div>
                <div>
                   <p className="text-xs text-gray-500">Viajeros Activos</p>
                   <p className="font-bold text-trip-black">450+</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;