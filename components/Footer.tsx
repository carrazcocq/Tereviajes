import React from 'react';
import { Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'terms' | 'privacy' | 'cookies' | 'about' | 'legal-notice' | 'contract-conditions') => void;
  onOpenBooking: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-trip-black text-white pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="col-span-1 md:col-span-1">
             <h3 className="text-2xl font-display font-bold text-white mb-4">Tereviajes</h3>
             <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
               Hacemos que tus sueños de viaje se hagan realidad con planificación experta y destinos inolvidables.
             </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-lg">Compañía</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm">
              <li 
                className="hover:text-trip-primary cursor-pointer transition-colors" 
                onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Sobre Nosotros
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-lg">Soporte</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm">
              <li 
                className="hover:text-trip-primary cursor-pointer transition-colors"
                onClick={() => {
                  onNavigate('legal-notice');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Aviso Legal
              </li>
              <li 
                className="hover:text-trip-primary cursor-pointer transition-colors"
                onClick={() => {
                  onNavigate('contract-conditions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Condiciones de Contratación
              </li>
              <li 
                className="hover:text-trip-primary cursor-pointer transition-colors"
                onClick={() => {
                  onNavigate('terms');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Términos y Condiciones
              </li>
              <li 
                className="hover:text-trip-primary cursor-pointer transition-colors"
                onClick={() => {
                  onNavigate('privacy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Privacidad
              </li>
              <li 
                className="hover:text-trip-primary cursor-pointer transition-colors"
                onClick={() => {
                  onNavigate('cookies');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Política de Cookies
              </li>
              <li 
                className="hover:text-trip-primary cursor-pointer transition-colors"
                onClick={onOpenBooking}
              >
                Contáctanos
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">© 2026 Tereviajes. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com/tereviajes2019" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;