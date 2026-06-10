import React from 'react';
import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

interface TermsProps {
  onNavigate: (view: 'home' | 'terms' | 'privacy' | 'cookies' | 'about' | 'legal-notice' | 'contract-conditions') => void;
}

const TermsAndConditions: React.FC<TermsProps> = ({ onNavigate }) => {
  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-500 hover:text-trip-primary transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </button>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-trip-black mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-500 text-sm">
            Última actualización: 10 de Octubre, 2024
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <FileText size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">1. Introducción y Acuerdo</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bienvenido a Tereviajes. Al acceder a nuestro sitio web y utilizar nuestros servicios de reserva, usted acepta estar legalmente vinculado por estos términos. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                  <li>El usuario debe ser mayor de 18 años para realizar reservas.</li>
                  <li>La información proporcionada debe ser veraz y actual.</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 2 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <CheckCircle size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">2. Reservas y Pagos</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Todas las reservas están sujetas a disponibilidad. Los precios mostrados en el sitio web son finales para la fecha de consulta, pero pueden variar hasta que se confirme el pago.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-blue-800 font-medium">
                    Nota: Se requiere un depósito del 30% para confirmar cualquier excursión. El resto debe abonarse 15 días antes de la salida.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <AlertCircle size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">3. Políticas de Cancelación</h3>
                <p className="text-gray-600 leading-relaxed">
                  Entendemos que los planes pueden cambiar. Nuestra política de reembolso es la siguiente:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-trip-black font-bold mb-1">> 30 días antes</span>
                    <span className="text-green-600 font-medium">Reembolso del 100%</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-trip-black font-bold mb-1">15 - 29 días antes</span>
                    <span className="text-orange-500 font-medium">Reembolso del 50%</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-trip-black font-bold mb-1">0 - 14 días antes</span>
                    <span className="text-red-500 font-medium">Sin reembolso</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 4 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Shield size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">4. Responsabilidad y Seguros</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tereviajes actúa como intermediario. No nos hacemos responsables por pérdidas, daños o retrasos causados por terceros (aerolíneas, hoteles, transporte). Recomendamos encarecidamente contratar un seguro de viaje integral antes de su partida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;