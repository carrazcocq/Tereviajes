import React from 'react';
import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle, DollarSign, Calendar, Users, Scale, RefreshCw, HeadphonesIcon } from 'lucide-react';

interface CondicionesGeneralesProps {
  onNavigate: (view: 'home' | 'terms' | 'privacy' | 'cookies' | 'about' | 'legal-notice' | 'contract-conditions') => void;
}

const CondicionesGenerales: React.FC<CondicionesGeneralesProps> = ({ onNavigate }) => {
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
            Condiciones Generales de Contratación
          </h1>
          <p className="text-gray-500 text-sm">
            Última actualización: Junio 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          <div className="space-y-12">

            {/* 1 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <FileText size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">1. Regulación Jurídica Aplicable</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Las presentes Condiciones Generales están sujetas a lo dispuesto en el Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI), y el Real Decreto-ley 23/2018, de 21 de diciembre, de transposición de directivas en materia de viajes combinados y servicios de viaje vinculados.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  La información contenida en el programa/oferta es vinculante para el organizador, salvo que los cambios se hayan comunicado claramente por escrito al consumidor antes de la celebración del contrato, o que se produzcan modificaciones posteriores previo acuerdo entre las partes.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 2 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Users size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">2. Organización</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La organización de los viajes combinados ofrecidos a través de https://tereviajes.com es realizada por:
                </p>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2">
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Titular:</span> Teresa Soto</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Nombre comercial:</span> Tere Viajes</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">NIF:</span> 53816627P</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Dirección:</span> Calle Manuel De Falla, 4, Collado Villalba, Madrid</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Email:</span> viajandoconteresa@gmail.com</p>
                  <p className="text-gray-700"><span className="font-semibold text-trip-black">Licencia CICMA:</span> 4373</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 3 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <DollarSign size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">3. Precio</h3>
                
                <h4 className="font-semibold text-trip-black mb-2">3.1 Incluye</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El precio del viaje combinado incluye: transporte de ida y regreso según el programa contratado, alojamiento con el régimen alimenticio especificado, tasas e impuestos aplicables, asistencia técnica durante el viaje cuando esté específicamente incluido, y todos los servicios detallados en el programa/oferta contratado.
                </p>

                <h4 className="font-semibold text-trip-black mb-2">3.2 Revisión de precios</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El precio se calcula según tipos de cambio, tarifas de transporte, coste del carburante y tasas vigentes. Cualquier variación podrá dar lugar a revisión, notificándose al cliente por escrito. El cliente podrá desistir sin penalización si la modificación es significativa. No se revisará al alza en los 20 días anteriores a la fecha de salida.
                </p>

                <h4 className="font-semibold text-trip-black mb-2">3.3 No incluye</h4>
                <p className="text-gray-600 leading-relaxed">
                  No están incluidos: certificados de vacunación, propinas (especialmente en cruceros), bebidas, gastos extras, excursiones facultativas no contratadas en origen, forfaits en viajes de nieve, ni servicios no especificados en el programa.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 4 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Calendar size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">4. Forma de Pago</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En el acto de la inscripción se podrá requerir un anticipo de hasta el 40% del importe total. El resto se abonará contra entrega de los bonos o documentación del viaje, al menos 7 días antes de la salida. El impago en plazo se entenderá como desistimiento.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Todos los reembolsos se realizarán utilizando el mismo método de pago empleado en la compra o mediante transferencia bancaria. El proceso de compra se realiza con protocolos SSL y sistema 3DSecure.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 5 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <AlertCircle size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">5. Desistimiento y Cancelación</h3>
                
                <h4 className="font-semibold text-trip-black mb-2">5.1 Desistimiento del cliente</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El cliente puede desistir del viaje en cualquier momento, con derecho a devolución de las cantidades abonadas, aplicándose las siguientes penalizaciones:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-trip-black font-bold mb-1">Más de 15 días</span>
                    <span className="text-green-600 font-medium">Gastos de gestión</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-trip-black font-bold mb-1">10-15 días</span>
                    <span className="text-yellow-500 font-medium">5% del total</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-trip-black font-bold mb-1">3-10 días</span>
                    <span className="text-orange-500 font-medium">15% del total</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <span className="block text-trip-black font-bold mb-1">Menos de 48h</span>
                    <span className="text-red-500 font-medium">25% del total</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Para cruceros, circuitos internacionales (EE.UU., Canadá, Caribe, etc.) y programas de confirmación inmediata, se aplicarán las condiciones especiales de anulación del proveedor correspondiente.
                </p>

                <h4 className="font-semibold text-trip-black mb-2">5.2 Cancelación por el organizador</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si Tere Viajes cancela el viaje por no alcanzar el número mínimo de participantes, se comunicará por escrito con al menos 10 días de antelación, reembolsándose el importe íntegro sin indemnización adicional.
                </p>

                <h4 className="font-semibold text-trip-black mb-2">5.3 Cesión de la reserva</h4>
                <p className="text-gray-600 leading-relaxed">
                  El cliente puede ceder su reserva a otra persona que cumpla los requisitos, comunicándolo por escrito con al menos 15 días de antelación. Cedente y cesionario responden solidariamente del pago del saldo pendiente.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 6 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <RefreshCw size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">6. Modificaciones del Contrato</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si antes de la salida Tere Viajes se viera obligada a modificar significativamente algún elemento esencial del contrato, se notificará inmediatamente al cliente, que podrá optar entre:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2 mb-4">
                  <li>Resolver el contrato sin penalización, con reembolso íntegro de las cantidades pagadas</li>
                  <li>Aceptar la modificación propuesta</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  El cliente deberá comunicar su decisión en un plazo de 3 días. Transcurrido dicho plazo sin respuesta, se entenderá que opta por la resolución del contrato. En caso de incumplimiento del organizador, procederá indemnización del 5%, 10% o 25% según la antelación con que se produzca.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 7 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <HeadphonesIcon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">7. Obligaciones del Consumidor</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El consumidor está obligado a comunicar todo incumplimiento en la ejecución del contrato al personal en destino (acompañante, guía, hotel) en el más breve plazo posible, para que el organizador pueda subsanarlo.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Asimismo, el consumidor deberá formular su reclamación por escrito en un plazo máximo de 15 días desde la finalización del viaje, enviándola al correo electrónico viajandoconteresa@gmail.com.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 8 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Shield size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">8. Seguro de Protección</h3>
                <p className="text-gray-600 leading-relaxed">
                  Se recomienda a todos los viajeros la contratación de un seguro de viaje que cubra gastos de cancelación, asistencia médica en destino, pérdida de equipaje y responsabilidad civil. Tere Viajes ofrece esta posibilidad en el momento de la contratación.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 9 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <Scale size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">9. Reclamaciones y Jurisdicción</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del consumidor. En caso de que el consumidor tenga su domicilio fuera de España, las partes se someten a los juzgados y tribunales de Madrid.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  El consumidor podrá presentar reclamaciones a través de viajandoconteresa@gmail.com, incluyendo nombre completo, datos del viaje contratado y descripción detallada de los hechos.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 10 */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trip-ice rounded-full flex items-center justify-center text-trip-primary">
                  <CheckCircle size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-trip-black mb-3">10. Protección de Datos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Los datos personales facilitados serán tratados conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), con la finalidad de gestionar la reserva y prestar los servicios contratados. El cliente podrá ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición dirigiéndose a viajandoconteresa@gmail.com. Para más información, consulte nuestra Política de Privacidad.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CondicionesGenerales;