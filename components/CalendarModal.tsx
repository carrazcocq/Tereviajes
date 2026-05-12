import React, { useEffect, useState } from 'react';
import { X, Calendar as CalendarIcon, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import { Destination } from '../types';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBooking: (interest: string) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose, onBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  // Group destinations by Month
  const groupedDestinations = destinations.reduce((acc, dest) => {
    // Extract month from "14-15 Febrero" -> "Febrero"
    const parts = dest.location.trim().split(' ');
    // Safer extraction: take the last part, if it exists
    const month = parts.length > 0 ? parts[parts.length - 1] : 'Otros'; 
    
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(dest);
    return acc;
  }, {} as Record<string, Destination[]>);

  // Order of months to sort the keys correctly (handling Spanish names)
  const monthOrder = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  const sortedMonths = Object.keys(groupedDestinations).sort((a, b) => {
    const indexA = monthOrder.indexOf(a);
    const indexB = monthOrder.indexOf(b);
    // If month not found in order list (e.g. typos), put at end
    const valA = indexA === -1 ? 999 : indexA;
    const valB = indexB === -1 ? 999 : indexB;
    return valA - valB;
  });

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-trip-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col relative overflow-hidden transform transition-all duration-500 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}
      >
        {/* Header */}
        <div className="bg-trip-primary px-6 py-6 md:px-8 md:py-8 flex justify-between items-center flex-shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 text-white">
            <h2 className="text-2xl md:text-3xl font-display font-bold flex items-center gap-3">
              <CalendarIcon className="text-trip-ice" />
              Calendario 2026
            </h2>
            <p className="text-trip-ice/80 text-sm mt-1">Próximas salidas confirmadas</p>
          </div>

          <button 
            onClick={onClose}
            className="relative z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 bg-gray-50">
          <div className="space-y-8">
            {sortedMonths.map((month) => (
              <div key={month} className="animate-fade-in">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-trip-black capitalize">{month}</h3>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedDestinations[month].map((dest) => (
                    <div 
                      key={dest.id}
                      onClick={() => {
                        onClose();
                        onBooking(dest.title);
                      }}
                      className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-trip-tertiary transition-all cursor-pointer group flex items-center gap-4"
                    >
                      <img 
                        src={dest.image} 
                        alt={dest.title} 
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-gray-100"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-trip-black truncate pr-2 group-hover:text-trip-primary transition-colors">
                            {dest.title}
                          </h4>
                          <span className="text-trip-primary font-bold text-sm bg-trip-ice px-2 py-0.5 rounded-md">
                            {dest.price}€
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <MapPin size={12} />
                          <span>{dest.location}</span>
                          <span className="mx-1">•</span>
                          <span>{dest.days} {dest.days === 1 ? 'día' : 'días'}</span>
                        </div>
                      </div>

                      <div className="text-gray-300 group-hover:text-trip-primary transition-colors">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <p className="text-blue-800 mb-2 font-medium">¿No encuentras la fecha que buscas?</p>
            <button 
              onClick={() => {
                onClose();
                onBooking("Consulta Personalizada");
              }}
              className="text-trip-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              Contáctanos para un viaje a medida <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;