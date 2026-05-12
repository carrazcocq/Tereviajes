import React from 'react';
import { ArrowLeft, Cookie, Settings, Shield, Info } from 'lucide-react';

interface CookiesProps {
  onNavigate: (view: 'home' | 'terms' | 'privacy' | 'cookies' | 'about') => void;
}

const CookiesPolicy: React.FC<CookiesProps> = ({ onNavigate }) => {
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
            Política de Cookies
          </h1>
          <p className="text-gray-500 text-sm">
            Información clara sobre cómo y por qué utilizamos cookies en Tereviajes.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          <div className="space-y-12">
            
            {/* 1. ¿Qué son las cookies? */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Cookie size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">1. ¿Qué son las Cookies?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Las cookies son pequeños archivos de texto que los sitios web guardan en su ordenador o dispositivo móvil cuando los visita. Permiten que el sitio web recuerde sus acciones y preferencias (como el inicio de sesión, el idioma, el tamaño de la fuente y otras preferencias de visualización) durante un período de tiempo.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 2. Tipos de Cookies */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Info size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">2. Tipos de Cookies que utilizamos</h3>
                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-trip-black mb-1">Cookies Técnicas (Necesarias)</h4>
                        <p className="text-sm text-gray-600">Son esenciales para que la web funcione correctamente. Incluyen, por ejemplo, el acceso al área privada o la seguridad del formulario de contacto.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-trip-black mb-1">Cookies Analíticas</h4>
                        <p className="text-sm text-gray-600">Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio (ej. Google Analytics).</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-trip-black mb-1">Cookies de Publicidad</h4>
                        <p className="text-sm text-gray-600">Almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</p>
                    </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 3. Gestión */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Settings size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">3. Gestión de Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2 text-sm">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-trip-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-trip-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-trip-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-trip-primary hover:underline">Microsoft Edge</a></li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100" />
            
             <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Shield size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">4. Actualización</h3>
                <p className="text-gray-600 leading-relaxed">
                  Es posible que actualicemos la Política de Cookies de nuestro Sitio Web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro Sitio Web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy;