import React, { useEffect, useState } from 'react';
import { X, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  interest?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, interest }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "34649866985";
    const baseMessage = interest 
      ? `Hola Tereviajes, estoy interesado en reservar plaza para *${interest}* y me gustaría recibir más información.`
      : "Hola Tereviajes, estoy interesado en recibir asesoramiento para mi próximo viaje.";
    
    const encodedMessage = encodeURIComponent(baseMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`bg-white rounded-[2rem] shadow-2xl w-full max-w-md relative overflow-hidden transform transition-all duration-500 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}
      >
        {/* Decorative Header */}
        <div className="bg-trip-primary h-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-trip-secondary/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
             <div className="bg-[#25D366] text-white p-3 rounded-xl">
               <MessageCircle size={32} fill="currentColor" />
             </div>
          </div>
        </div>

        {/* Body */}
        <div className="pt-14 pb-8 px-8 text-center">
          <h3 className="text-2xl font-display font-bold text-trip-black mb-3">
            ¡Estás a un paso de viajar!
          </h3>
          
          <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-100">
             <p className="text-green-800 text-sm font-medium flex items-center justify-center gap-2">
               <CheckCircle size={16} /> En breve recibirás una respuesta
             </p>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Para garantizarte la mejor tarifa y confirmar disponibilidad en tiempo real, <strong>gestionamos tu reserva personalmente por WhatsApp</strong>. Sin esperas ni robots.
          </p>

          <div className="space-y-3">
            <button 
              onClick={handleWhatsAppRedirect}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200 hover:shadow-green-300 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Continuar en WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-gray-400">
              Al hacer clic, se abrirá tu chat con Tereviajes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;