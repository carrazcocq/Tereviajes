import React from 'react';
import { ArrowLeft, Lock, Eye, Database, UserCheck, Mail, ShieldCheck } from 'lucide-react';

interface PrivacyProps {
  onNavigate: (view: 'home' | 'terms' | 'privacy' | 'cookies' | 'about') => void;
}

const PrivacyPolicy: React.FC<PrivacyProps> = ({ onNavigate }) => {
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
            Política de Privacidad
          </h1>
          <p className="text-gray-500 text-sm">
            En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          <div className="space-y-12">
            
            {/* 1. Responsable del Tratamiento */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <UserCheck size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">1. Responsable del Tratamiento</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Los datos personales recogidos a través de este sitio web son responsabilidad de:
                </p>
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Representante</p>
                      <p className="text-trip-black font-semibold">Teresa Soto</p>
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">NIF</p>
                      <p className="text-trip-black font-semibold">53816627P</p>
                   </div>
                   <div className="md:col-span-2">
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Dirección</p>
                      <p className="text-trip-black font-semibold">Calle Manuel De Falla, 4, Collado Villalba</p>
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Licencia / CICMA</p>
                      <p className="text-trip-black font-semibold">4373</p>
                   </div>
                   <div className="md:col-span-2">
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Contacto DPD</p>
                      <a href="mailto:viajandoconteresa@gmail.com" className="text-trip-primary font-medium hover:underline flex items-center gap-2">
                        <Mail size={16} /> viajandoconteresa@gmail.com
                      </a>
                   </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 2. Finalidad del Tratamiento */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Database size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">2. Finalidad de los Datos</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  En Tereviajes tratamos la información que nos facilita con las siguientes finalidades:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                  <li>Gestionar las reservas de viajes y servicios turísticos solicitados.</li>
                  <li>Envío de comunicaciones comerciales y ofertas personalizadas (previa autorización).</li>
                  <li>Generación de itinerarios mediante Inteligencia Artificial (datos anonimizados).</li>
                  <li>Cumplimiento de obligaciones legales y fiscales.</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 3. Legitimación y Conservación */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">3. Legitimación y Conservación</h3>
                <p className="text-gray-600 leading-relaxed">
                  La base legal para el tratamiento de sus datos es la <strong>ejecución del contrato</strong> de servicios turísticos y el <strong>consentimiento expreso</strong> para comunicaciones.
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  Los datos se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 4. Destinatarios */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Eye size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">4. Destinatarios de los Datos</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sus datos podrán ser cedidos a:
                </p>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <p className="text-sm text-orange-800 font-medium">
                    Proveedores de servicios necesarios para la ejecución del viaje (aerolíneas, hoteles, guías turísticos, compañías de seguros), los cuales pueden estar ubicados fuera del Espacio Económico Europeo (Transferencia Internacional de Datos).
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

             {/* 5. Derechos del Usuario */}
             <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Lock size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">5. Derechos del Usuario</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Usted tiene derecho a obtener confirmación sobre si en Tereviajes estamos tratando sus datos personales. Tiene derecho a acceder, rectificar, limitar el tratamiento, portabilidad y suprimir los datos.
                </p>
                <p className="text-gray-600 text-sm">
                  Para ejercer estos derechos, envíe un correo a <strong>viajandoconteresa@gmail.com</strong> adjuntando una copia de su DNI.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;