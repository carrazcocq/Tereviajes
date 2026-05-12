import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, MapPin, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { Destination } from '../types';

interface DestinationDetailModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onBooking: (interest: string) => void;
}

const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({ destination, isOpen, onClose, onBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // FIX: Check !isOpen instead of !destination to ensure it unmounts when closed
  if (!isVisible && !isOpen) return null;
  
  // Ensure we don't render if destination is missing (safety check)
  if (!destination && isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl relative overflow-hidden flex flex-col md:flex-row transform transition-all duration-500 max-h-[90vh] md:max-h-[600px] ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-2/5 h-48 md:h-auto relative">
           <img 
             src={destination?.image} 
             alt={destination?.title} 
             className="w-full h-full object-cover"
           />
           <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-trip-black flex items-center gap-1 shadow-sm">
              <Star size={12} className="text-yellow-400 fill-current" />
              {destination?.rating}
           </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
           
           <div className="mb-auto">
             <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-trip-black leading-tight">
                  {destination?.title}
                </h2>
                <div className="text-right flex-shrink-0 ml-4">
                   <p className="text-2xl font-bold text-trip-primary">{destination?.price}€</p>
                </div>
             </div>

             <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                   <Calendar size={14} className="text-trip-secondary" />
                   {destination?.location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                   <Clock size={14} className="text-trip-secondary" />
                   {destination?.days} {destination?.days === 1 ? 'Día' : 'Días'}
                </span>
             </div>

             <div className="prose prose-sm text-gray-600 mb-6">
               <h4 className="text-trip-black font-bold text-lg mb-2">Sobre este destino</h4>
               <p className="leading-relaxed">
                 {destination?.description}
               </p>
             </div>

             {/* WhatsApp Itinerary Callout */}
             <div className="bg-green-50 p-4 rounded-xl mb-4 flex items-start gap-3 border border-green-100">
                <div className="bg-white p-1.5 rounded-full shadow-sm text-[#25D366] flex-shrink-0 mt-0.5">
                    <MessageCircle size={16} fill="currentColor" />
                </div>
                <p className="text-sm text-green-800 font-medium leading-snug">
                   Recibe el itinerario completo hablándonos por WhatsApp.
                </p>
             </div>
           </div>

           <div className="mt-auto pt-6 border-t border-gray-100">
             <button 
               onClick={() => {
                 onClose();
                 if (destination) onBooking(destination.title);
               }}
               className="w-full bg-trip-primary text-white py-3.5 rounded-xl font-bold hover:bg-trip-secondary transition-all transform hover:-translate-y-1 shadow-lg shadow-trip-primary/25 flex items-center justify-center gap-2 group"
             >
               Reservar Plaza
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </button>
             <p className="text-center text-xs text-gray-400 mt-3">
               Sin compromiso. Te informaremos personalmente.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailModal;