import React from 'react';
import { Flame, AlertTriangle, Plane } from 'lucide-react';

const OfferBar: React.FC = () => {
  const Items = () => (
    <>
      <div className="flex items-center gap-2">
        <Flame className="text-yellow-300 animate-pulse" size={20} fill="currentColor" />
        <span className="font-bold tracking-wide uppercase text-sm md:text-base whitespace-nowrap">Aprovecha nuestras ofertas de 2026</span>
      </div>

      <div className="flex items-center gap-2">
        <AlertTriangle className="text-orange-300" size={20} />
        <span className="font-bold tracking-wide uppercase text-sm md:text-base whitespace-nowrap">Plazas Limitadas</span>
      </div>

      <div className="flex items-center gap-2">
        <Plane className="text-trip-ice" size={20} />
        <span className="font-bold tracking-wide uppercase text-sm md:text-base whitespace-nowrap">¡Reserva tu próxima aventura hoy!</span>
      </div>
    </>
  );

  return (
    <div className="bg-trip-primary text-white py-3 overflow-hidden mt-16 md:mt-20 border-b border-trip-secondary/30 relative z-30">
      <div className="flex">
        {/* Block 1 */}
        <div className="animate-marquee flex-shrink-0 flex items-center gap-12 pr-12 min-w-full">
           <Items />
           <Items />
        </div>
        
        {/* Block 2 (Duplicate for seamless loop) */}
        <div className="animate-marquee flex-shrink-0 flex items-center gap-12 pr-12 min-w-full">
           <Items />
           <Items />
        </div>
      </div>
    </div>
  );
};

export default OfferBar;