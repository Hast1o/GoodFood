import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { SiInstagram } from '@icons-pack/react-simple-icons';

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
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-sm"
              >
                <MessageCircle size={24} /> WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacto;