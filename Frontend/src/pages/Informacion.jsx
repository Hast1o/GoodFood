import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, History, ListChecks, Info } from 'lucide-react';

function Informacion() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* ENCABEZADO E INTRODUCCIÓN */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-[#5A189A] tracking-tight">
            Buenas Prácticas de Manufactura (BPM)
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            ¿Suenan intimidantes? Pero son más fáciles de lo que parecen. Se trata de un conjunto de reglas y acciones para garantizar que la comida llegue a la mesa preparada bajo estándares de calidad y seguridad alimentaria.
          </p>
          <p className="text-lg text-gray-600 font-medium">
            Es el tipo de cosas que hacen que confíes en lo que comes sin pensarlo dos veces...
          </p>
        </section>

        {/* SECCIÓN: ¿QUÉ SON LAS BPM? */}
        <section className="bg-white rounded-3xl shadow-md p-8 md:p-12 border-t-4 border-[#5A189A]">
          <div className="flex items-center gap-4 mb-6">
            <Info className="text-purple-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">¿Qué son exactamente?</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Cuando hablamos de Buenas Prácticas de Manufactura o BPM, nos referimos a principios básicos de higiene que se deben seguir para garantizar que cualquier producto cumpla con los requisitos sanitarios para cuidar la salud de los consumidores.
            </p>
            <p>
              En el sector Horeca y Food Service, son acciones esenciales aplicadas en cada etapa: desde la manipulación y preparación, hasta el envasado, transporte y distribución. 
            </p>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mt-6">
              <p className="font-semibold text-[#5A189A] flex items-start gap-3">
                <ShieldCheck className="shrink-0" />
                En Chile, las BPM están reguladas por el Decreto 977, que establece el Reglamento Sanitario de los Alimentos. Este marco legal define las normas obligatorias para garantizar la inocuidad y calidad a nivel nacional.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: OBJETIVOS Y RIESGOS (CONTAMINACIÓN CRUZADA) */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-[#5A189A] mb-4">Objetivos Principales</h3>
            <p className="text-gray-700 mb-4">
              ¿Sabías que <strong>1 de cada 10 personas enferma</strong> por ingerir alimentos contaminados? 
            </p>
            <p className="text-gray-700">
              Las BPM buscan prevenir la contaminación física, química o biológica. Promueven la confianza del consumidor y aseguran el cumplimiento de las normativas vigentes.
            </p>
          </div>

          <div className="bg-red-50 rounded-3xl shadow-md p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-red-500" size={28} />
              <h3 className="text-2xl font-bold text-red-700">El Riesgo: Contaminación Cruzada</h3>
            </div>
            <ul className="space-y-3 text-red-900 text-sm md:text-base">
              <li>• <strong>Manipulación constante:</strong> Transferencia de contaminantes por manos o herramientas.</li>
              <li>• <strong>Equipos compartidos:</strong> Uso de maquinaria sin limpieza adecuada entre procesos.</li>
              <li>• <strong>Superficies contaminadas:</strong> Mesas y tablas no desinfectadas.</li>
              <li>• <strong>Crudos y cocidos:</strong> Contacto peligroso entre carnes/huevos y alimentos listos para consumo.</li>
              <li>• <strong>Falta de capacitación:</strong> Errores humanos por desconocimiento de las normas.</li>
            </ul>
          </div>
        </section>

        {/* SECCIÓN: LAS 5 REGLAS (TARJETAS) */}
        <section>
          <h2 className="text-3xl font-bold text-center text-[#5A189A] mb-10">Las 5 Reglas Básicas (Las 5 BPM)</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "Personas", desc: "Altos estándares de higiene personal y operativa." },
              { title: "Instalaciones", desc: "Rutina estricta de limpieza y desinfección." },
              { title: "Productos", desc: "Inspección rigurosa de materias primas." },
              { title: "Procedimientos", desc: "Separación de alimentos crudos y cocidos." },
              { title: "Procesos", desc: "Asegurar un almacenamiento adecuado." }
            ].map((regla, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100 hover:border-purple-300 transition-colors">
                <div className="w-10 h-10 bg-purple-100 text-[#5A189A] font-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {index + 1}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{regla.title}</h4>
                <p className="text-sm text-gray-600">{regla.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN: VENTAJAS */}
        <section className="bg-gray-900 text-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-purple-300 mb-4">Ventajas de Implementar BPM</h2>
              <p className="text-gray-400">
                Además de garantizar la seguridad alimentaria, son el punto de partida para cumplir normas como HACCP e ISO.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Garantizan higiene y seguridad.", "Mejoran la calidad del producto.",
                "Aumentan la eficiencia operativa.", "Identifican riesgos rápidamente.",
                "Disminuyen costos operativos.", "Estandarizan procesos internos.",
                "Abren mercados internacionales.", "Promueven la capacitación del personal.",
                "Disminuyen quejas de clientes.", "Generan confianza en el consumidor."
              ].map((ventaja, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-200">{ventaja}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN: FACTORES PARA IMPLEMENTAR */}
        <section className="bg-white rounded-3xl shadow-md p-8 md:p-12 border-t-4 border-[#5A189A]">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <ListChecks className="text-purple-600" size={32} />
            Factores Clave de Implementación
          </h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-[#5A189A] mb-2">1. Instalaciones y Ubicación</h4>
              <p className="text-gray-700">Entorno seguro, materiales resistentes, fáciles de limpiar y desinfectar. El diseño debe responder al flujo de trabajo.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5A189A] mb-2">2. Equipos y Utensilios</h4>
              <p className="text-gray-700">Fabricados en materiales que favorezcan la higiene, resistentes a químicos y altas temperaturas. Deben incluirse en el programa de limpieza.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5A189A] mb-2">3. Higiene del Personal</h4>
              <p className="text-gray-700">Certificación médica vigente, higiene personal impecable y capacitación constante en Buenas Prácticas de Higiene.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#5A189A] mb-2">4. Control de Materias Primas</h4>
              <p className="text-gray-700">Trazabilidad eficiente para garantizar que no existan microorganismos ni sustancias tóxicas. Inspección en toda la cadena productiva.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: HISTORIA (Acordeón visual o bloque discreto) */}
        <section className="bg-purple-50 p-8 rounded-2xl text-gray-700">
          <h3 className="text-xl font-bold text-[#5A189A] mb-4 flex items-center gap-2">
            <History size={24} /> Un poco de historia
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            La primera aproximación a las BPM ocurrió en EE.UU. en 1906 con la FDA. En 1938 se introdujo el concepto de inocuidad. Posteriormente, la FAO y la OMS desarrollaron el <strong>Codex Alimentarius</strong>, una referencia internacional de prácticas higiénicas que sirve como base para las legislaciones locales de cada nación.
          </p>
        </section>

        {/* SECCIÓN: CIERRE ADAPTADO (Goodfood) */}
        <section className="text-center bg-[#5A189A] text-white rounded-3xl p-10 md:p-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Cómo Goodfood te ayuda a garantizar las BPM</h2>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Las buenas prácticas pueden parecer un conjunto de reglas que complican los procesos, pero son la clave para el éxito. En <strong>Goodfood</strong> nos encargamos de auditar, asesorar y estandarizar tus procesos para que cumplas con la normativa sin dolores de cabeza. 
            <br/><br/>
            Implementarlas no es un gasto, es una inversión que asegura la excelencia, la confianza de tus comensales y la reputación de tu negocio.
          </p>
          <a href="/contacto" className="inline-block bg-white text-[#5A189A] font-bold text-lg py-4 px-10 rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl">
            Asesórate con Nosotros
          </a>
        </section>

      </div>
    </div>
  );
}

export default Informacion;