import React from 'react';
import { Star, Package } from 'lucide-react';

function Servicios() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center text-[#5A189A] mb-16 tracking-tight">
          Nuestros Servicios
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-purple-50 p-10 rounded-2xl shadow-sm border-t-4 border-[#5A189A] hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Star className="text-purple-600" size={32} />
              Evaluación y Prevención
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span> Auditoría de autoevaluación BPM.
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span> Asegura el cumplimiento del reglamento sanitario de los alimentos.
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span> Adopción de medidas preventivas, anticipando su local a futuras fiscalizaciones de la Seremi de Salud.
              </li>
            </ul>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-purple-50 p-10 rounded-2xl shadow-sm border-t-4 border-[#5A189A] hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Package className="text-purple-600" size={32} />
              Verificación y Control
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span> Auditoría de verificaciones BPM.
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span> Revisión exhaustiva de registros y procedimientos.
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">✓</span> Revisión de estructura y condiciones sanitarias en terreno.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;