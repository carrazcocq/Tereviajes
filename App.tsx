import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import FeaturedDestinations from './components/FeaturedDestinations';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';
import CookieConsent from './components/CookieConsent';
import AboutUs from './components/AboutUs';
import AvisoLegal from './components/AvisoLegal';
import CondicionesGenerales from './components/CondicionesGenerales';
import BookingModal from './components/BookingModal';
import CalendarModal from './components/CalendarModal';
import DestinationDetailModal from './components/DestinationDetailModal';
import OfferBar from './components/OfferBar';
import { Destination } from './types';
import { destinations } from './data/destinations';

type ViewState = 'home' | 'terms' | 'privacy' | 'cookies' | 'about' | 'legal-notice' | 'contract-conditions';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  
  // Modal States
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [bookingInterest, setBookingInterest] = useState<string>('');
  
  // Destination Details State
  const [selectedDetailDest, setSelectedDetailDest] = useState<Destination | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Destination Highlighting State
  const [highlightedDestId, setHighlightedDestId] = useState<number | null>(null);

  // Global Body Scroll Lock Management
  useEffect(() => {
    const isAnyModalOpen = isBookingModalOpen || isCalendarModalOpen || isDetailModalOpen;
    
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Small delay to allow fade-out animations to finish before re-enabling scroll
      const timer = setTimeout(() => {
        document.body.style.overflow = 'unset';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isBookingModalOpen, isCalendarModalOpen, isDetailModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    if (view === 'terms' || view === 'privacy' || view === 'cookies' || view === 'about' || view === 'legal-notice' || view === 'contract-conditions') {
      window.scrollTo(0, 0);
    }
  };

  const handleOpenBooking = (interest: string = '') => {
    setBookingInterest(interest);
    setIsBookingModalOpen(true);
  };

  const handleOpenCalendar = () => {
    setIsCalendarModalOpen(true);
  };

  const handleDestinationClick = (id: number) => {
    const dest = destinations.find(d => d.id === id);
    if (dest) {
      setSelectedDetailDest(dest);
      setIsDetailModalOpen(true);
    }
  };

  // Improved Search Handler for Hero
  const handleHeroSearch = (id?: number) => {
    if (id) {
      handleDestinationClick(id);
    } else {
      // If no specific destination, scroll to list
      const element = document.getElementById('destinos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'terms':
        return <TermsAndConditions onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={handleNavigate} />;
      case 'cookies':
        return <CookiesPolicy onNavigate={handleNavigate} />;
      case 'legal-notice':
        return <AvisoLegal onNavigate={handleNavigate} />;
      case 'contract-conditions':
        return <CondicionesGenerales onNavigate={handleNavigate} />;
      case 'about':
        return <AboutUs onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking("Información General")} />;
      case 'home':
      default:
        return (
          <div className="flex flex-col animate-fade-in">
            <OfferBar />
            <Hero onSearch={handleHeroSearch} />
            
            <Destinations 
              onSelectDestination={handleDestinationClick}
              onOpenCalendar={handleOpenCalendar}
              highlightedId={highlightedDestId}
            />

            <FeaturedDestinations onBooking={handleOpenBooking} />
            
            {/* Features/Bento Section inspired by Tripset */}
            <section id="features" className="py-12 md:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
                    <h2 className="text-trip-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Momentos que unen</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-semibold text-trip-black mb-4 leading-tight">Aventuras compartidas y experiencias grupales</h3>
                    <p className="text-gray-600 px-4">Viajar es mucho más que visitar un lugar; es compartir el camino. Se diseñan itinerarios donde la convivencia y la diversión en grupo crean recuerdos imborrables y lazos que perduran.</p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-gray-50 p-6 md:p-8 rounded-3xl md:rounded-[2rem] hover:bg-trip-primary hover:text-white group transition-all duration-300">
                       <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:bg-white/20 transition-colors">
                         <span className="text-xl md:text-2xl">🛡️</span>
                       </div>
                       <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Seguridad Integral</h4>
                       <p className="text-sm md:text-base text-gray-500 group-hover:text-white/90">Asistencia completa en todo momento para garantizar el bienestar y la tranquilidad de todo el grupo.</p>
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-3xl md:rounded-[2rem] hover:bg-trip-primary hover:text-white group transition-all duration-300 transform md:-translate-y-4 shadow-lg border border-gray-100">
                       <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:bg-white/20 transition-colors">
                         <span className="text-xl md:text-2xl">🤝</span>
                       </div>
                       <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Convivencia Única</h4>
                       <p className="text-sm md:text-base text-gray-500 group-hover:text-white/90">Espacios y actividades pensados para fomentar la interacción, la amistad y el disfrute colectivo.</p>
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-3xl md:rounded-[2rem] hover:bg-trip-primary hover:text-white group transition-all duration-300">
                       <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:bg-white/20 transition-colors">
                         <span className="text-xl md:text-2xl">🌍</span>
                       </div>
                       <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Inmersión Cultural</h4>
                       <p className="text-sm md:text-base text-gray-500 group-hover:text-white/90">Experiencias auténticas guiadas por expertos locales que enriquecen la visión del viajero.</p>
                    </div>
                 </div>
              </div>
            </section>

            <ImageGallery />
          </div>
        );
    }
  };

  return (
    <main className="font-sans antialiased text-gray-900 bg-white selection:bg-trip-primary selection:text-white">
      <Navbar onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking("")} />
      
      {renderContent()}

      {/* Trust Badge Section */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-4">
           <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-[0.2em]">
             Agencia registrada en la Comunidad De Madrid
           </p>
           <img 
             src="https://i.postimg.cc/XvxfPRBf/logo.png" 
             alt="Logotipo Comunidad de Madrid - Agencia Registrada" 
             className="h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
           />
        </div>
      </section>

      <Footer onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking("Contacto General")} />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Booking Modal (WhatsApp) */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        interest={bookingInterest}
      />

      {/* Destination Detail Modal */}
      <DestinationDetailModal 
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        destination={selectedDetailDest}
        onBooking={handleOpenBooking}
      />

      {/* Calendar Modal */}
      <CalendarModal 
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
        onBooking={handleOpenBooking}
      />

      {/* WhatsApp Floating Button */}
      <button 
        onClick={() => handleOpenBooking("Botón WhatsApp")}
        className="fixed bottom-24 right-4 md:bottom-32 md:right-8 z-50 hover:scale-110 transition-transform duration-300 group rounded-full bg-white shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
        <img 
          src='https://i.postimg.cc/25gnFcF1/Whats-App-svg.webp' 
          alt='Contactar por WhatsApp' 
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white relative z-10 object-cover"
        />
      </button>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-trip-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 hover:bg-trip-secondary hover:scale-110 active:scale-95 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
};

export default App;