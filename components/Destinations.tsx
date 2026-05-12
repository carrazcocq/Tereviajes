import React from 'react';
import { Star, Clock, CalendarRange, Eye } from 'lucide-react';
import { destinations } from '../data/destinations';

interface DestinationsProps {
  onSelectDestination: (id: number) => void;
  onOpenCalendar: () => void;
  highlightedId?: number | null;
}

const Destinations: React.FC<DestinationsProps> = ({ onSelectDestination, onOpenCalendar, highlightedId }) => {
  return (
    <section id="destinos" className="py-12 md:py-20 bg-trip-light scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
          <div className="max-w-xl w-full text-center md:text-left">
            <h2 className="text-trip-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Próximas Salidas</h2>
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-trip-black leading-tight">Explora nuestras excursiones</h3>
          </div>
          <button 
            onClick={onOpenCalendar}
            className="hidden md:block text-trip-black border-b-2 border-trip-black pb-1 hover:text-trip-primary hover:border-trip-primary transition-colors font-medium"
          >
            Ver calendario completo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest) => {
            const isHighlighted = highlightedId === dest.id;
            
            return (
              <div 
                key={dest.id} 
                id={`destination-card-${dest.id}`}
                onClick={() => onSelectDestination(dest.id)}
                className={`relative group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer border border-transparent hover:border-trip-ice flex flex-col h-full`}
              >
                {/* Highlight Overlay - Respects border radius and design */}
                {isHighlighted && (
                  <div className="absolute inset-0 z-20 rounded-3xl pointer-events-none animate-card-pulse border-2 border-trip-primary/50 bg-trip-primary/5"></div>
                )}

                <div className="relative h-56 sm:h-64 overflow-hidden flex-shrink-0 rounded-t-3xl">
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-trip-black flex items-center gap-1 shadow-sm">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    {dest.rating}
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <span className="bg-white/90 backdrop-blur-md text-trip-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                       <Eye size={16} /> Ver detalles
                    </span>
                  </div>
                </div>
                
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-auto">
                    <div className="max-w-[70%]">
                      <h4 className="text-lg md:text-xl font-bold text-trip-black mb-1 group-hover:text-trip-primary transition-colors leading-tight">{dest.title}</h4>
                      <p className="text-gray-500 flex items-center gap-1 text-xs md:text-sm mt-1">
                        <Clock size={14} /> {dest.days} {dest.days === 1 ? 'Día' : 'Días'}
                      </p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] md:text-xs text-gray-400">Desde</p>
                       <p className="text-lg md:text-xl font-bold text-trip-primary">{dest.price}€</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                    <span className="text-xs md:text-sm font-medium text-gray-500 flex items-center gap-2">
                      <CalendarRange size={16} className="text-trip-secondary"/>
                      <span className="truncate max-w-[120px]">{dest.location}</span>
                    </span>
                    <span
                      className="text-trip-black font-semibold text-sm hover:underline decoration-trip-primary decoration-2 group-hover:text-trip-primary transition-colors"
                    >
                      Más info
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button 
              onClick={onOpenCalendar}
              className="text-trip-black border-b-2 border-trip-black pb-1 hover:text-trip-primary hover:border-trip-primary transition-colors font-medium"
            >
                Ver calendario completo
            </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;