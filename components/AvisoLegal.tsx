import React from 'react';
import { ArrowLeft, FileText, Shield, Scale, Copyright } from 'lucide-react';

interface AvisoLegalProps {
  onNavigate: (view: 'home' | 'terms' | 'privacy' | 'cookies' | 'about' | 'legal-notice' | 'contract-conditions') => void;
}

const AvisoLegal: React.FC<AvisoLegalProps> = ({ onNavigate }) => {
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
            Aviso Legal
          </h1>
          <p className="text-gray-500 text-sm">
            En cumplimiento de la Ley 34/2002 LSSI
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
                <h3 className="text-xl font-bold text-trip-black mb-3">1. Datos Identificativos</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se informa:
                </p>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2">
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Titular:</span> Teresa Soto</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Nombre comercial:</span> Tere Viajes</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">NIF:</span> 53816627P</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Dirección:</span> Calle Manuel De Falla, 4, Collado Villalba, Madrid</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Correo electrónico:</span> viajandoconteresa@gmail.com</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Licencia CICMA:</span> 4373</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 2 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Scale size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">2. Objeto</h3>
                <p className="text-gray-600 leading-relaxed">
                  El presente aviso legal regula el uso y acceso al sitio web https://tereviajes.com, cuyos servicios se prestan como agencia de viajes, organizando y comercializando viajes combinados y servicios de viaje vinculados conforme a la normativa vigente.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Copyright size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">3. Propiedad Intelectual</h3>
                <p className="text-gray-600 leading-relaxed">
                  Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño) son propiedad de Tere Viajes o se dispone de la correspondiente licencia de uso. Queda prohibida la reproducción total o parcial sin autorización expresa.
                </p>
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
                <h3 className="text-xl font-bold text-trip-black mb-3">4. Legislación Aplicable</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Las relaciones entre Tere Viajes y los usuarios se rigen por la legislación española, en particular por:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                  <li>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI)</li>
                  <li>Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios</li>
                  <li>Real Decreto-ley 23/2018, de 21 de diciembre, de transposición de directivas en materia de viajes combinados y servicios de viaje vinculados</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
                  <p className="text-sm text-blue-800 font-medium">
                    Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del consumidor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisoLegal;