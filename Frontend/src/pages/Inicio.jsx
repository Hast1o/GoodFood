import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="bg-gray-50 flex flex-col w-full">
      
      {/* 1. SECCIÓN HERO (Basada en tu diseño original) */}
      <section className="py-20 text-center px-6 bg-purple-50">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5A189A] mb-4 tracking-tight">
          Auditorías Sanitarias y BPM
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
          Asesoría experta en inocuidad alimentaria para asegurar la calidad de tus productos y el cumplimiento normativo.
        </p>
        <Link to="/contacto">
          <button className="bg-[#5A189A] text-white px-8 py-3 rounded-full font-bold hover:bg-purple-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Cotizar Asesoría
          </button>
        </Link>
      </section>

      {/* 2. SECCIÓN TRABAJOS REALIZADOS */}
      <section className="py-16 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#5A189A] mb-12">
            Nuestros Trabajos Realizados
          </h2>
          
          {/* Cuadrícula de proyectos (3 columnas en escritorio, 1 en móvil) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Trabajo 1 */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Cambia '/trabajo1.jpg' por la ruta de tu foto real */}
              <img src="/trabajo1.jpg" alt="Implementación BPM" className="w-full h-52 object-cover bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Implementación BPM</h3>
                <p className="text-gray-600 text-sm">Planta procesadora de lácteos. Capacitación de personal y diseño de manuales sanitarios desde cero.</p>
              </div>
            </div>

            {/* Trabajo 2 */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
               {/* Cambia '/trabajo2.jpg' por la ruta de tu foto real */}
              <img src="/trabajo2.jpg" alt="Auditoría Resoluciones" className="w-full h-52 object-cover bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Resolución Sanitaria</h3>
                <p className="text-gray-600 text-sm">Restaurante zona centro. Regularización de permisos, planos y obtención rápida de resolución.</p>
              </div>
            </div>

            {/* Trabajo 3 */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
               {/* Cambia '/trabajo3.jpg' por la ruta de tu foto real */}
              <img src="/trabajo3.jpg" alt="Control de calidad" className="w-full h-52 object-cover bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Control HACCP</h3>
                <p className="text-gray-600 text-sm">Panadería artesanal. Estandarización de procesos y control estricto de puntos críticos.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECCIÓN TRAYECTORIA LABORAL (La Dueña) */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Foto de la dueña */}
          <div className="w-full md:w-1/3 flex justify-center">
            {/* El div circular actúa como marco para la foto */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-100 shadow-lg">
              {/* Cambia '/foto-duena.jpg' por la foto real */}
              <img src="/foto-duena.jpg" alt="Foto de la fundadora" className="w-full h-full object-cover bg-gray-200" />
            </div>
          </div>
          
          {/* Información y Línea de tiempo */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-[#5A189A] mb-2">Conoce a nuestra experta</h2>
            <h3 className="text-lg text-purple-600 font-medium mb-6">Ingeniera en Alimentos / Auditora Líder</h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Con más de 10 años de experiencia asegurando la calidad e inocuidad en la industria alimentaria. Mi pasión es guiar a emprendedores y empresas para que cumplan la normativa vigente, optimicen sus procesos y ofrezcan productos 100% seguros a sus clientes.
            </p>
            
            {/* Lista de trayectoria */}
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#5A189A] mt-1.5 mr-4 flex-shrink-0 shadow-sm"></div>
                <p className="text-gray-700"><strong>Fundadora y Directora:</strong> Asesorías integrales en Goodfood.</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-purple-400 mt-1.5 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Jefa de Calidad (HACCP):</strong> Gestión de inocuidad en la industria de procesamiento de alimentos.</p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-purple-300 mt-1.5 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Especialización:</strong> Tramitación de resoluciones sanitarias, manuales BPM y POES.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Inicio;