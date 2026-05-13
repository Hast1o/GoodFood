import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Briefcase, 
  GraduationCap,
  Award,
  ChevronRight
} from 'lucide-react'; 

// 1. IMPORTACIÓN DE ASSETS
// Asegúrate de que los nombres coincidan exactamente con tu carpeta y que existan del 1 al 8
import imagenperfil from '../assets/Imagen-perfil-profesional.jpg'; 
import trabajo1 from '../assets/trabajo1.jpg';
import trabajo2 from '../assets/trabajo2.jpg';
import trabajo3 from '../assets/trabajo3.jpg';
import trabajo4 from '../assets/trabajo4.jpg';
import trabajo5 from '../assets/trabajo5.jpg'; 
import trabajo6 from '../assets/trabajo6.jpg'; 
import trabajo7 from '../assets/trabajo7.jpg'; 
import trabajo8 from '../assets/trabajo8.jpg'; 
import reel1 from '../assets/reels1.mp4';
import reel2 from '../assets/reels2.mp4';
import reel3 from '../assets/reels3.mp4';

// Componente SVG personalizado para evitar el error de la librería lucide
const IconoInstagram = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

function Inicio() {
  // Clase común para las tarjetas de trabajo terreno
  const estiloTarjetaTrabajo = "relative group overflow-hidden rounded-[2rem] shadow-xl border-8 border-[#5A189A] bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(90,24,154,0.3)] hover:-translate-y-2 hover:z-10 odd:hover:-rotate-2 even:hover:rotate-2";

  return (
    <div className="bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-5 py-2 mb-8 text-xs md:text-sm font-extrabold tracking-[0.2em] text-[#5A189A] uppercase bg-white border border-purple-100 rounded-full shadow-sm animate-fade-in-up">
            Inocuidad Alimentaria & Excelencia Operacional
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Estándares de Excelencia en la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-[#9d4edd]">Industria Alimentaria</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Asesoría estratégica respaldada por más de 20 años de experiencia en fiscalización sanitaria y gestión de calidad corporativa.
          </p>
          <div className="flex justify-center">
            <Link to="/contacto" className="group relative inline-flex items-center justify-center bg-[#5A189A] text-white px-12 py-5 rounded-full font-black text-lg md:text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_15px_40px_-10px_rgba(90,24,154,0.5)]">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center gap-2">Solicitar Auditoría <ChevronRight className="group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PERFIL PROFESIONAL */}
      <section id="experiencia" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Columna Izquierda: Imagen */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-24">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-700"></div>
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:-translate-y-2">
                  <img 
                    src={imagenperfil} 
                    alt="Paulina Albornoz Lara" 
                    className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-10 pt-24">
                    <p className="text-purple-300 font-bold uppercase tracking-widest text-xs mb-2">Ingeniero Agroindustrial</p>
                    <h3 className="text-white text-4xl font-black">Paulina Albornoz</h3>
                  </div>
                </div>
              </div>

              {/* Stats Interactivas */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 hover:bg-purple-50 p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-4xl font-black text-[#5A189A] mb-1">20+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase">Años de Experiencia</p>
                </div>
                <div className="bg-gray-50 hover:bg-purple-50 p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-4xl font-black text-[#5A189A] mb-1">100%</p>
                  <p className="text-xs font-bold text-gray-500 uppercase">Éxito en Auditorías</p>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Contenido */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Liderazgo Técnico en <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-[#9d4edd]">Seguridad Alimentaria</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Con una carrera forjada desde el año 2000 en instituciones de fiscalización pública y corporaciones de consumo masivo, aporto una visión integral sobre el cumplimiento del Reglamento Sanitario de los Alimentos (RSA).
              </p>

              {/* EDUCACIÓN */}
              <div className="mb-16">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg text-[#5A189A]"><GraduationCap size={24} /></div>
                  Formación Académica
                </h3>
                <div className="grid gap-4">
                  {[
                    { titulo: "Ingeniero Agroindustrial", inst: "Instituto Profesional La Araucana", año: "2007" },
                    { titulo: "Técnico en Procesamiento y Conservación de Alimentos", inst: "Liceo María Auxiliadora", año: "1999" }
                  ].map((item, i) => (
                    <div key={i} className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-purple-200 group-hover:bg-[#5A189A] transition-colors"></div>
                      <div className="flex justify-between items-center md:items-start flex-col md:flex-row gap-4 ml-2">
                        <div>
                          <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#5A189A] transition-colors">{item.titulo}</h4>
                          <p className="text-gray-500 mt-1">{item.inst}</p>
                        </div>
                        <span className="text-sm font-bold text-[#5A189A] bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">{item.año}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCIA */}
              <div className="mb-16">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg text-[#5A189A]"><Briefcase size={24} /></div>
                  Trayectoria Profesional
                </h3>
                <div className="space-y-6">
                  
                  <div className="group relative bg-gray-50 hover:bg-white p-8 rounded-3xl border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute top-8 left-0 w-1.5 h-12 bg-[#5A189A] rounded-r-md group-hover:h-3/4 transition-all duration-500 ease-out"></div>
                    <div className="pl-4">
                      <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 mb-4 group-hover:border-[#5A189A] group-hover:text-[#5A189A] transition-colors">2014 - Actualidad</span>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">Relatora y Asesora en Inocuidad</h4>
                      <p className="text-[#5A189A] font-bold mb-4">GOOD FOOD & Múltiples OTECs</p>
                      <p className="text-gray-600 leading-relaxed">Auditorías de calidad, verificaciones, capacitaciones e implementación de normativas BPM, HACCP, manejo de Alérgenos y Food Defense a distintos locales del rubro alimentación.</p>
                    </div>
                  </div>

                  <div className="group relative bg-gray-50 hover:bg-white p-8 rounded-3xl border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute top-8 left-0 w-1.5 h-12 bg-purple-400 rounded-r-md group-hover:h-3/4 group-hover:bg-[#5A189A] transition-all duration-500 ease-out"></div>
                    <div className="pl-4">
                      <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 mb-4">2010 - 2014</span>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">Tecnóloga Aseguramiento de Calidad</h4>
                      <p className="text-gray-800 font-bold mb-4">UNIMARC (Séptima Región)</p>
                      <p className="text-gray-600 leading-relaxed">Aseguramiento, control e inspección de gestión de calidad en supermercados y restaurantes. Elaboración de descargos jurídicos y ejecución de retiros de mercado.</p>
                    </div>
                  </div>

                  <div className="group relative bg-gray-50 hover:bg-white p-8 rounded-3xl border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute top-8 left-0 w-1.5 h-12 bg-purple-300 rounded-r-md group-hover:h-3/4 group-hover:bg-[#5A189A] transition-all duration-500 ease-out"></div>
                    <div className="pl-4">
                      <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 mb-4">2005 - 2010</span>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">Gestión de Calidad y Laboratorio</h4>
                      <p className="text-gray-800 font-bold mb-4">Agrícola Mataquito | Aconcagua Foods | Nestlé Chile</p>
                      <p className="text-gray-600 leading-relaxed">Liderazgo en laboratorios de microbiología, certificación orgánica y prevención de incidentes de calidad en líneas de producción masiva.</p>
                    </div>
                  </div>

                  <div className="group relative bg-gray-50 hover:bg-white p-8 rounded-3xl border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute top-8 left-0 w-1.5 h-12 bg-gray-300 rounded-r-md group-hover:h-3/4 group-hover:bg-[#5A189A] transition-all duration-500 ease-out"></div>
                    <div className="pl-4">
                      <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 mb-4">2000 - 2005</span>
                      <h4 className="text-2xl font-black text-gray-900 mb-2">Inspector Saneamiento Básico</h4>
                      <p className="text-gray-800 font-bold mb-4">SEREMI de Salud</p>
                      <p className="text-gray-600 leading-relaxed">Fiscalización sanitaria, toma de muestras microbiológicas, control de plantas de agua potable y ejecución de procesos de Sumarios Sanitarios.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* ESPECIALIZACIONES */}
              <div className="bg-gradient-to-br from-purple-900 to-[#5A189A] p-8 md:p-10 rounded-3xl text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <Award size={28} className="text-purple-300" /> Especialización Continua
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Microbiología aplicada a inocuidad",
                    "Curso HACCP (100 horas)",
                    "Cultura de Inocuidad (ACHIPIA)",
                    "Métodos del Codex Alimentarius",
                    "Comunicación de riesgos",
                    "Estrategias frente al COVID-19"
                  ].map((curso, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-3 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                      <CheckCircle size={20} className="text-purple-300 mt-0.5 flex-shrink-0" /> 
                      <span className="font-medium text-purple-50">{curso}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE LOGOS (RENOVADA: Dinámica "Glassmorphism" Sin Nombres) */}
      <section className="relative py-24 bg-[#3b0b6b] overflow-hidden">
        {/* Efectos de luz de fondo */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#9d4edd] rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-300 font-bold tracking-widest uppercase text-sm mb-2 block">Confían en nuestra experiencia</span>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-6">Alianzas Corporativas</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-transparent mx-auto rounded-full"></div>
          </div>
          
          {/* Grid Interactivo - Generamos 10 espacios sin nombres */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Array(10).fill(0).map((_, index) => (
              <div 
                key={index} 
                className="group relative h-36 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex items-center justify-center p-6 hover:bg-white hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500 cursor-pointer z-10 hover:z-20"
              >
                {/* Placeholder visual tenue para esperar los iconos reales */}
                <Briefcase size={40} className="text-purple-300 opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALERÍA DE TRABAJOS (REINVENTADA: Mosaico Asimétrico, Más Grande y Dinámico) */}
      <section className="py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Calidad en <span className="text-[#5A189A]">Terreno</span>
            </h2>
            <p className="text-xl text-gray-600">Evidencias visuales de nuestras auditorías, implementaciones de sistemas y jornadas de capacitación.</p>
          </div>

          {/* Grilla Asimétrica Dinámica (Bento Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
            
            {/* Imagen 1 - Grande (Doble columna, Doble fila) */}
            <div className={`md:col-span-2 md:row-span-2 h-[400px] md:h-[600px] ${estiloTarjetaTrabajo}`}>
              <img 
                src={trabajo1} 
                alt="Evidencia terreno 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            
            {/* Imagen 2 */}
            <div className={`h-[200px] md:h-[288px] ${estiloTarjetaTrabajo}`}>
              <img 
                src={trabajo2} 
                alt="Evidencia terreno 2" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            
            {/* Imagen 3 */}
            <div className={`h-[200px] md:h-[288px] ${estiloTarjetaTrabajo}`}>
              <img 
                src={trabajo3} 
                alt="Evidencia terreno 3" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            
            {/* Imagen 4 - Ancha (Doble columna) */}
            <div className={`md:col-span-2 h-[200px] md:h-[288px] ${estiloTarjetaTrabajo}`}>
              <img 
                src={trabajo4} 
                alt="Evidencia terreno 4" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>

            {/* Imagen 5 */}
            <div className={`h-[200px] md:h-[288px] ${estiloTarjetaTrabajo}`}>
              <img 
                src={trabajo5} 
                alt="Evidencia terreno 5" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>

            {/* Imagen 6 */}
            <div className={`h-[200px] md:h-[288px] ${estiloTarjetaTrabajo}`}>
              <img 
                src={trabajo6} 
                alt="Evidencia terreno 6" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>

            {/* Imagen 7 */}
            <div className={`h-[200px] md:h-[288px] ${estiloTarjetaTrabajo}`}>
              <img 
                src={trabajo7} 
                alt="Evidencia terreno 7" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>

            {/* Imagen 8 */}
            <div className={`h-[200px] md:h-[288px] ${estiloTarjetaTrabajo}`}>
              <img 
                src={trabajo8} 
                alt="Evidencia terreno 8" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM REELS */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
              <IconoInstagram size={48} className="text-pink-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Tips & Actualidad</h2>
            <p className="text-xl text-gray-500">Síguenos en <a href="https://www.instagram.com/goodfood_bpm/" className="font-bold text-pink-600 hover:underline">@goodfood_bpm</a></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[reel1, reel2, reel3].map((videoSrc, index) => (
              <div key={index} className="aspect-[9/16] bg-black rounded-[2.5rem] shadow-xl overflow-hidden border-[8px] border-gray-900 relative group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                <video 
                  src={videoSrc}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <IconoInstagram className="text-white w-12 h-12 drop-shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center shadow-[0_20px_50px_rgba(90,24,154,0.2)] bg-gradient-to-br from-[#5A189A] to-[#3b0b6b]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
          
          <h2 className="relative z-10 text-white text-4xl md:text-6xl font-black mb-8 leading-tight">¿Listo para certificar<br/>tu empresa?</h2>
          <Link to="/contacto" className="relative z-10 inline-block bg-white text-[#5A189A] px-12 py-5 rounded-full font-black text-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl">
            Comenzar Ahora
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Inicio;