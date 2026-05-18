import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { SiInstagram } from '@icons-pack/react-simple-icons';

const IconoWhatsApp = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" fill="currentColor" strokeWidth="0" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function Contacto() {
  const numeroWhatsApp = "56977976539";
  const mensajeWhatsApp = "Hola Paulina, vengo desde la página web de Goodfood y me gustaría cotizar una asesoría.";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5A189A] mb-4">
            Ponte en contacto con nosotros y te ayudaremos en todo lo que necesites
          </h2>
          <p className="text-gray-600 mb-2 text-lg">
            Cotiza una asesoría para ver cómo podemos ayudarte a cumplir el reglamento sanitario, o agenda una visita y responderemos cualquier pregunta que tengas.
          </p>
          <p className="text-gray-600 text-lg">
            Por favor, rellena el siguiente formulario y te responderemos con la mayor brevedad posible.
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL: Formulario + Datos directos */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* FORMULARIO */}
          <div className="p-8 md:p-12">
            {/* INICIO DEL FORMULARIO FUNCIONAL */}
            <form 
              action="https://formsubmit.co/bpmpaulinaalbornoz@gmail.com" 
              method="POST" 
              className="space-y-6"
            >
              {/* Opciones ocultas de FormSubmit para mejorar la experiencia */}
              <input type="hidden" name="_subject" value="¡Nueva consulta desde la página web de Goodfood!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://hast1o.github.io/GoodFood/#/" />
              
              {/* Fila 1: Nombre y Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Nombre y apellido: <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="Nombre" 
                    required
                    placeholder="Nombre y apellido" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5A189A] focus:ring-1 focus:ring-[#5A189A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Empresa:</label>
                  <input 
                    type="text" 
                    name="Empresa"
                    placeholder="Nombre de la empresa" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5A189A] focus:ring-1 focus:ring-[#5A189A] transition-colors"
                  />
                </div>
              </div>

              {/* Fila 2: Servicio, Email, Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    ¿En qué servicio(s) estás interesado? <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="Servicio_de_interes" 
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5A189A] focus:ring-1 focus:ring-[#5A189A] bg-white transition-colors"
                  >
                    <option value="Aún no lo ha decidido">Aún no lo he decidido</option>
                    <option value="Auditoría de autoevaluación BPM">Auditoría de autoevaluación BPM</option>
                    <option value="Auditoría de verificaciones BPM">Auditoría de verificaciones BPM</option>
                    <option value="Revisión de estructura e higiene">Revisión de estructura e higiene</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email: <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="Email_Contacto"
                    required
                    placeholder="Correo electrónico" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5A189A] focus:ring-1 focus:ring-[#5A189A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Teléfono: <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="Telefono"
                    required
                    placeholder="Teléfono" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5A189A] focus:ring-1 focus:ring-[#5A189A] transition-colors"
                  />
                </div>
              </div>

              {/* Fila 3: Mensaje */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  ¿Cómo podemos ayudarte? <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="Mensaje"
                  required
                  rows="4" 
                  placeholder="Mensaje" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#5A189A] focus:ring-1 focus:ring-[#5A189A] resize-none transition-colors"
                ></textarea>
              </div>

              {/* Botón Enviar (ahora es tipo submit) */}
              <button 
                type="submit" 
                className="w-full bg-[#5A189A] hover:bg-purple-800 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg mt-4 shadow-md"
              >
                Enviar Consulta
              </button>
            </form>
            {/* FIN DEL FORMULARIO FUNCIONAL */}
          </div>

          {/* SECCIÓN INFERIOR: Contacto Directo */}
          <div className="bg-purple-50 p-8 md:p-10 border-t border-purple-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#5A189A] mb-1">¿Prefieres trato directo?</h3>
              <p className="text-gray-600 text-sm md:text-base">Paulina Albornoz Lara | Asesora Inocuidad Alimentaria</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-gray-700">
                <MapPin size={18} className="text-[#5A189A]" />
                <span className="text-sm font-medium">Curicó y alrededores</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href="https://instagram.com/Goodfood_bpm" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm"
              >
                <SiInstagram color="#E1306C" size={20} /> Instagram
              </a>
              <a 
                href={linkWhatsApp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-4 bg-[#5A189A] text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-[#48127a] hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2"
              >
                <IconoWhatsApp className="w-5 h-5" />
                Contactar
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacto;