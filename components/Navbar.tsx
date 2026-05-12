import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'terms' | 'privacy' | 'cookies' | 'about') => void;
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate('home');
    
    // Small timeout to allow the home component to mount before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
    
    setIsOpen(false);
  };

  const handlePageNavigation = (e: React.MouseEvent<HTMLAnchorElement>, view: 'about') => {
      e.preventDefault();
      onNavigate(view);
      setIsOpen(false);
  };

  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-100 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleLogoClick}>
             <img 
               src="https://i.postimg.cc/FR6Q9jZJ/Logo.png" 
               alt="Tereviajes" 
               className="h-10 md:h-14 w-auto object-contain"
             />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#destinos" 
              onClick={(e) => handleNavigation(e, 'destinos')}
              className="text-gray-600 hover:text-trip-primary font-medium transition-colors cursor-pointer"
            >
              Destinos
            </a>
            <a 
              href="#" 
              onClick={(e) => handlePageNavigation(e, 'about')}
              className="text-gray-600 hover:text-trip-primary font-medium transition-colors cursor-pointer"
            >
              Nosotros
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onOpenBooking}
              className="bg-trip-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-trip-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reservar Ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-trip-primary focus:outline-none p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col">
          <a 
            href="#destinos" 
            onClick={(e) => handleNavigation(e, 'destinos')} 
            className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 hover:text-trip-primary hover:bg-trip-ice transition-colors cursor-pointer"
          >
            🌍 Destinos
          </a>
          <a 
            href="#" 
            onClick={(e) => handlePageNavigation(e, 'about')} 
            className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 hover:text-trip-primary hover:bg-trip-ice transition-colors cursor-pointer"
          >
            👥 Nosotros
          </a>
           <button 
             onClick={() => {
               setIsOpen(false);
               onOpenBooking();
             }}
             className="w-full text-center mt-4 bg-trip-primary text-white px-4 py-4 rounded-xl font-bold shadow-md active:scale-95 transition-transform"
           >
            Reservar Ahora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;