import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';

const STORAGE_KEY = 'tereviajes_cookie_consent';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem(STORAGE_KEY);
    if (!storedConsent) {
      // Small delay for animation
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // If needed, you can load preferences here to let user edit them later
      try {
         const parsed = JSON.parse(storedConsent);
         setPreferences(parsed);
      } catch (e) {
         console.error("Error parsing cookies", e);
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setIsVisible(false);
    setShowSettings(false);
    
    // Here you would trigger actual GTM/Analytics scripts based on 'prefs'
    console.log("Cookies saved:", prefs);
  };

  const handleAcceptAll = () => {
    const allEnabled = { necessary: true, analytics: true, marketing: true };
    setPreferences(allEnabled);
    saveConsent(allEnabled);
  };

  const handleRejectAll = () => {
    const allDisabled = { necessary: true, analytics: false, marketing: false };
    setPreferences(allDisabled);
    saveConsent(allDisabled);
  };

  const handleSaveSettings = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible && !showSettings) return null;

  return (
    <>
      {/* Banner */}
      {isVisible && !showSettings && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-[60] p-4 md:p-6 animate-fade-in-up">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-trip-ice p-3 rounded-full text-trip-primary hidden sm:block">
                <Cookie size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-trip-black mb-1">Valoramos tu privacidad</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                  Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrarte contenido personalizado. Puedes aceptar todas, rechazarlas o configurar tus preferencias.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button 
                onClick={() => setShowSettings(true)}
                className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Configurar
              </button>
              <button 
                onClick={handleRejectAll}
                className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors text-sm"
              >
                Rechazar
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-6 py-2.5 rounded-xl bg-trip-primary text-white font-medium hover:bg-trip-secondary transition-colors text-sm shadow-lg shadow-trip-primary/20"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                 <Shield className="text-trip-primary" size={24} />
                 <h3 className="text-xl font-bold text-trip-black">Configuración de Cookies</h3>
              </div>
              <button 
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <p className="text-gray-600 text-sm">
                Aquí puedes personalizar tus preferencias de cookies. Las cookies técnicas son necesarias para el funcionamiento del sitio y no se pueden desactivar.
              </p>

              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                   <h4 className="font-bold text-trip-black text-sm mb-1">Estrictamente Necesarias</h4>
                   <p className="text-xs text-gray-500">Esenciales para la seguridad y navegación del sitio.</p>
                </div>
                <div className="relative inline-flex items-center cursor-not-allowed opacity-50">
                   <div className="w-11 h-6 bg-trip-primary rounded-full peer"></div>
                   <div className="absolute left-[2px] top-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all translate-x-full"></div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100 hover:border-trip-tertiary transition-colors">
                <div>
                   <h4 className="font-bold text-trip-black text-sm mb-1">Analíticas y Rendimiento</h4>
                   <p className="text-xs text-gray-500">Nos ayudan a entender cómo usas nuestra web para mejorarla.</p>
                </div>
                <button 
                  onClick={() => togglePreference('analytics')}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${preferences.analytics ? 'bg-trip-primary' : 'bg-gray-200'}`}
                >
                   <span 
                    className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${preferences.analytics ? 'translate-x-6' : 'translate-x-1'}`}
                   />
                </button>
              </div>

               {/* Marketing */}
               <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100 hover:border-trip-tertiary transition-colors">
                <div>
                   <h4 className="font-bold text-trip-black text-sm mb-1">Publicidad y Marketing</h4>
                   <p className="text-xs text-gray-500">Permiten mostrarte anuncios relevantes según tus intereses.</p>
                </div>
                <button 
                  onClick={() => togglePreference('marketing')}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${preferences.marketing ? 'bg-trip-primary' : 'bg-gray-200'}`}
                >
                   <span 
                    className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${preferences.marketing ? 'translate-x-6' : 'translate-x-1'}`}
                   />
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0 rounded-b-3xl">
               <button 
                onClick={handleRejectAll}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-white transition-colors text-sm"
              >
                Rechazar todo
              </button>
              <button 
                onClick={handleSaveSettings}
                className="px-5 py-2.5 rounded-xl bg-trip-primary text-white font-medium hover:bg-trip-secondary transition-colors text-sm flex items-center justify-center gap-2"
              >
                <Check size={16} />
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;