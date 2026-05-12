import React from 'react';
import { Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface FeaturedDestinationsProps {
  onBooking: (interest: string) => void;
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ onBooking }) => {
  const featuredTrips = [
    {
      id: 'paris',
      title: 'París',
      subtitle: 'La Ciudad de la Luz',
      dates: '25-28 de Junio',
      image: 'https://i.postimg.cc/TYb9CHdx/Paris.jpg',
      description: 'Vive el romance y el arte en la capital francesa. Torre Eiffel, Louvre y paseos por el Sena.',
      tag: 'Verano en París'
    },
    {
      id: 'roma',
      title: 'Roma',
      subtitle: 'La Ciudad Eterna',
      dates: '29 Oct - 1 Nov',
      image: 'https://i.postimg.cc/wTNV0b6Z/Roma.jpg',
      description: 'Historia viva en cada esquina. Coliseo, Vaticano y la mejor gastronomía italiana.',
      tag: 'Puente de Todos los Santos'
    },
    {
      id: 'dubai',
      title: 'Dubái',
      subtitle: 'Lujo y Futuro',
      dates: '18-22 de Noviembre',
      image: 'https://i.postimg.cc/gkhDNBzb/Dubai.webp',
      description: 'Rascacielos imposibles, desierto mágico y compras de lujo en una experiencia única.',
      tag: 'Experiencia Premium'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-trip-ice/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trip-primary/10 text-trip-primary font-bold text-sm mb-4 border border-trip-primary/20">
              <Sparkles size={16} />
              <span className="uppercase tracking-wider">Grandes Viajes 2026</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-display font-bold text-trip-black mb-4">
             Destinos Destacados
           </h2>
           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
             Selección exclusiva de viajes internacionales organizados al detalle para vivir experiencias inolvidables.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTrips.map((trip) => (
            <div 
              key={trip.id}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl transition-transform duration-500 hover:-translate-y-2"
              onClick={() => onBooking(`Interés en ${trip.title} (${trip.dates})`)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Top Tag */}
              <div className="absolute top-6 right-6">
                 <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">
                   {trip.tag}
                 </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-trip-tertiary font-medium mb-1 uppercase tracking-wider text-sm flex items-center gap-2">
                   <MapPin size={14} /> {trip.subtitle}
                </p>
                <h3 className="text-4xl font-display font-bold mb-4">{trip.title}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <Calendar className="text-trip-secondary" size={20} />
                    <span className="font-semibold text-lg">{trip.dates}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                    {trip.description}
                  </p>

                  <button className="w-full bg-white text-trip-black font-bold py-3 rounded-xl hover:bg-trip-secondary hover:text-white transition-colors flex items-center justify-center gap-2 mt-4">
                    Consultar Disponibilidad
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;