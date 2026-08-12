import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react';

import imagenperfil from '../assets/Imagen-perfil-profesional.jpg';
import trabajo1 from '../assets/trabajo1.jpg';
import trabajo2 from '../assets/trabajo2.jpg';
import trabajo3 from '../assets/trabajo3.jpg';
import trabajo4 from '../assets/trabajo4.jpg';
import trabajo5 from '../assets/trabajo5.jpg';
import trabajo6 from '../assets/trabajo6.jpg';
import trabajo7 from '../assets/trabajo7.jpg';
import trabajo8 from '../assets/trabajo8.jpg';
import trabajo9 from '../assets/trabajo9.jpeg';
import reel1 from '../assets/reels1.mp4';
import reel2 from '../assets/reels2.mp4';
import reel3 from '../assets/reels3.mp4';

const IconoInstagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function LogoTile({ src, color, dark = false }) {
  const [hovered, setHovered] = useState(false);
  const { r = 180, g = 180, b = 180 } = color || {};
  const isMostlyWhite = r > 225 && g > 225 && b > 225;
  const d = (c) => Math.max(c - 70, 0);

  const containerStyle = hovered
    ? {
        background: isMostlyWhite
          ? `radial-gradient(circle at 40% 35%, #2a0660 0%, #120230 100%)`
          : `radial-gradient(circle at 40% 35%, rgb(${r},${g},${b}) 0%, rgb(${d(r)},${d(g)},${d(b)}) 100%)`,
        boxShadow: isMostlyWhite
          ? `0 0 55px rgba(255,255,255,0.5), 0 0 120px rgba(255,255,255,0.2), 0 24px 64px rgba(0,0,0,0.55)`
          : `0 0 55px rgba(${r},${g},${b},0.9), 0 0 120px rgba(${r},${g},${b},0.45), 0 24px 64px rgba(${r},${g},${b},0.35)`,
        borderColor: isMostlyWhite ? `rgba(255,255,255,0.55)` : `rgba(${r},${g},${b},0.9)`,
        transform: 'scale(1.10)', zIndex: 20,
        transition: 'all 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    : {
        background: dark
          ? `linear-gradient(160deg, rgba(${r},${g},${b},0.11) 0%, rgba(${r},${g},${b},0.04) 100%)`
          : `rgba(255,255,255,0.7)`,
        boxShadow: dark
          ? `0 8px 32px rgba(${r},${g},${b},0.10)`
          : `0 4px 20px rgba(90,24,154,0.08)`,
        borderColor: dark ? `rgba(${r},${g},${b},0.13)` : `rgba(90,24,154,0.15)`,
        transform: 'scale(1)', zIndex: 1,
        transition: 'all 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)',
      };

  const imgStyle = {
    width: hovered ? '88%' : '68%', height: hovered ? '88%' : '68%',
    objectFit: 'contain', display: 'block', margin: '0 auto',
    position: 'relative', zIndex: 2,
    transition: 'all 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)',
    filter: hovered
      ? isMostlyWhite
        ? 'brightness(1.25) drop-shadow(0 0 14px rgba(255,255,255,0.9))'
        : 'brightness(1.18) saturate(1.25) drop-shadow(0 0 14px rgba(255,255,255,0.55))'
      : 'brightness(0.95) saturate(0.9)',
  };

  return (
    <div className="relative h-40 md:h-48 backdrop-blur-md border rounded-3xl flex items-center justify-center overflow-hidden cursor-pointer"
      style={containerStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: hovered
          ? 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.18) 0%, transparent 55%)'
          : 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.06) 0%, transparent 55%)',
        transition: 'all 0.42s ease', zIndex: 1,
      }} />
      {src
        ? <img src={src} alt="" style={imgStyle} />
        : <Briefcase size={52} style={{ color: hovered ? 'rgba(255,255,255,0.7)' : 'rgba(167,139,250,0.3)', transition: 'color 0.42s ease' }} />
      }
    </div>
  );
}

function Inicio() {
  const logoModules = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg}', { eager: true });
  const logos = Object.values(logoModules).map(m => (m && m.default) ? m.default : m);
  const fallbackSlots = Array.from({ length: 10 }, () => null);
  const [logoColors, setLogoColors] = useState([]);

  function getAverageColor(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = src;
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = 40; canvas.height = 40;
          ctx.drawImage(img, 0, 0, 40, 40);
          const data = ctx.getImageData(0, 0, 40, 40).data;
          let r = 0, g = 0, b = 0, count = 0;
          for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] === 0) continue;
            r += data[i]; g += data[i + 1]; b += data[i + 2]; count++;
          }
          if (count === 0) return resolve({ r: 200, g: 200, b: 200 });
          resolve({ r: Math.round(r / count), g: Math.round(g / count), b: Math.round(b / count) });
        } catch { resolve({ r: 200, g: 200, b: 200 }); }
      };
      img.onerror = () => resolve({ r: 200, g: 200, b: 200 });
    });
  }

  useEffect(() => {
    let cancelled = false;
    async function computeAll() {
      const srcs = logos.length ? logos : fallbackSlots;
      const arr = await Promise.all(srcs.map(src => src ? getAverageColor(src) : Promise.resolve(null)));
      if (!cancelled) setLogoColors(arr);
    }
    computeAll();
    return () => { cancelled = true; };
  }, [logos]);

  const galleryImages = [trabajo1, trabajo2, trabajo3, trabajo4, trabajo5, trabajo7, trabajo8, trabajo9];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setLightboxIndex(i => (i + 1) % galleryImages.length);
  const prevImage = () => setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const orig = document.body.style.overflow;
    const origPR = document.body.style.paddingRight;
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    if (sbw > 0) document.body.style.paddingRight = `${sbw}px`;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = orig; document.body.style.paddingRight = origPR; };
  }, [lightboxOpen]);

  const experiencia = [
    {
      periodo: "2014 — Actualidad", titulo: "Relatora y Asesora en Inocuidad",
      empresa: "GOOD FOOD & Múltiples OTECs",
      desc: "Auditorías de calidad, capacitaciones e implementación de BPM, HACCP, Alérgenos y Food Defense en el rubro alimentario.",
      span: false,
    },
    {
      periodo: "2010 — 2014", titulo: "Tecnóloga Aseguramiento de Calidad",
      empresa: "UNIMARC — Séptima Región",
      desc: "Control e inspección de calidad en supermercados y restaurantes. Descargos jurídicos y ejecución de retiros de mercado.",
      span: false,
    },
    {
      periodo: "2005 — 2010", titulo: "Gestión de Calidad y Laboratorio",
      empresa: "Mataquito · Aconcagua Foods · Nestlé Chile",
      desc: "Liderazgo en laboratorios de microbiología, certificación orgánica y prevención de incidentes en líneas de producción masiva.",
      span: false,
    },
    {
      periodo: "2000 — 2005", titulo: "Inspector Saneamiento Básico",
      empresa: "SEREMI de Salud",
      desc: "Fiscalización sanitaria, toma de muestras microbiológicas, control de plantas de agua potable y Sumarios Sanitarios.",
      span: false,
    },
    {
      periodo: "1999", titulo: "Analista de Laboratorio — Práctica Profesional",
      empresa: "Laboratorio Regional de Microbiología",
      desc: "Microbiología de aguas y alimentos, y análisis fisicoquímicos en laboratorio regional.",
      span: true,
    },
  ];

  const gradients = [
    "from-[#5A189A] to-[#7c3aed]",
    "from-[#6d28d9] to-[#9333ea]",
    "from-[#7c3aed] to-[#a855f7]",
    "from-[#9333ea] to-[#c084fc]",
    "from-[#a855f7] to-[#d8b4fe]",
  ];

  const cursos = [
    "Microbiología aplicada a inocuidad", "Curso HACCP (100 horas)",
    "Cultura de Inocuidad (ACHIPIA)", "Métodos del Codex Alimentarius",
    "Comunicación de riesgos", "Estrategias frente al COVID-19",
  ];

  return (
    <div className="bg-white flex flex-col w-full overflow-x-hidden">

      {/* ─── 1. HERO — OSCURO ─── */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[#1a0533] via-[#2d0a52] to-[#3b0b6b] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] -z-10" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-5 py-2 mb-8 text-xs md:text-sm font-extrabold tracking-[0.2em] text-purple-300 uppercase bg-purple-900/60 border border-purple-700/50 rounded-full">
            Inocuidad Alimentaria & Excelencia Operacional
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Estándares de Excelencia en la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Industria Alimentaria
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Asesoría estratégica respaldada por más de 20 años de experiencia en fiscalización sanitaria y gestión de calidad corporativa.
          </p>
          <div className="flex justify-center">
            <Link to="/contacto" className="group relative inline-flex items-center justify-center bg-white text-[#5A189A] px-12 py-5 rounded-full font-black text-lg md:text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_15px_40px_-10px_rgba(255,255,255,0.25)]">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-100 rounded-full group-hover:w-full group-hover:h-56 opacity-60" />
              <span className="relative flex items-center gap-2">Solicitar Auditoría <ChevronRight className="group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. PERFIL PROFESIONAL — CLARO ─── */}
      <section id="experiencia" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-extrabold tracking-widest text-[#5A189A] uppercase bg-white border border-purple-200 rounded-full shadow-sm">
              Trayectoria & Formación
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Perfil{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-[#9d4edd]">Profesional</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5A189A] to-[#9d4edd] mx-auto rounded-full" />
          </div>

          {/* Foto + Bio + Stats */}
          <div className="grid lg:grid-cols-12 gap-6 mb-6">

            {/* Foto */}
            <div className="lg:col-span-4">
              <div className="relative group h-full min-h-[380px] rounded-3xl overflow-hidden border-4 border-purple-100 shadow-2xl shadow-purple-100">
                <img src={imagenperfil} alt="Paulina Albornoz Lara"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A189A]/90 via-[#5A189A]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-purple-200 font-bold uppercase tracking-widest text-xs mb-1">Ingeniero Agroindustrial</p>
                  <h3 className="text-white text-3xl font-black">Paulina Albornoz</h3>
                </div>
              </div>
            </div>

            {/* Bio + Educación */}
            <div className="lg:col-span-5 bg-white border border-purple-100 rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-purple-50">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 leading-snug">
                  Liderazgo Técnico en{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-[#9d4edd]">Seguridad Alimentaria</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-6">
                  Con una carrera forjada desde el año 2000 en instituciones de fiscalización pública y corporaciones de consumo masivo, aporto una visión integral sobre el cumplimiento del Reglamento Sanitario de los Alimentos (RSA).
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#5A189A] flex items-center gap-2">
                  <GraduationCap size={14} /> Formación Académica
                </p>
                {[
                  { titulo: "Ingeniero Agroindustrial", inst: "IP La Araucana", año: "2007" },
                  { titulo: "Técnico en Procesamiento de Alimentos", inst: "Liceo María Auxiliadora", año: "1999" },
                ].map((ed, i) => (
                  <div key={i} className="flex items-center justify-between bg-purple-50 border border-purple-100 rounded-2xl px-5 py-3">
                    <div>
                      <p className="text-gray-900 font-bold text-sm">{ed.titulo}</p>
                      <p className="text-purple-500 text-xs">{ed.inst}</p>
                    </div>
                    <span className="text-[#5A189A] font-bold text-xs bg-white px-3 py-1 rounded-full border border-purple-200 flex-shrink-0 ml-3">
                      {ed.año}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { valor: "20+", label: "Años de experiencia", icon: <Briefcase size={22} /> },
                { valor: "100%", label: "Éxito en auditorías", icon: <CheckCircle size={22} /> },
                { valor: "6+", label: "Empresas líderes", icon: <Award size={22} /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-purple-100 rounded-3xl p-6 flex flex-col items-start justify-between shadow-lg shadow-purple-50 hover:shadow-purple-100 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#5A189A] mb-3">{stat.icon}</div>
                  <p className="text-4xl font-black text-[#5A189A] mb-1">{stat.valor}</p>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trayectoria */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5A189A] flex items-center gap-2 mb-5">
              <Briefcase size={14} /> Trayectoria Profesional
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {experiencia.map((item, i) => (
                <div key={i} className={`group relative bg-gradient-to-br ${gradients[i]} rounded-3xl p-7 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(90,24,154,0.35)] transition-all duration-300 ${item.span ? 'md:col-span-2' : ''}`}>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-black/10 rounded-full pointer-events-none" />
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4 bg-white/20 text-white border-white/30">
                      {item.periodo}
                    </span>
                    <h4 className="text-xl font-black text-white mb-1 leading-snug">{item.titulo}</h4>
                    <p className="text-purple-100 font-semibold text-sm mb-3">{item.empresa}</p>
                    <p className="text-purple-100/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Especializaciones */}
          <div className="bg-white border border-purple-100 rounded-3xl p-8 shadow-lg shadow-purple-50">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5A189A] flex items-center gap-2 mb-6">
              <Award size={14} /> Especialización Continua
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {cursos.map((curso, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-purple-50 border border-purple-100 rounded-2xl px-4 py-3 hover:bg-purple-100 hover:border-purple-200 transition-colors">
                  <CheckCircle size={16} className="text-[#5A189A] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium leading-snug">{curso}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. LOGOS — OSCURO ─── */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a0533] via-[#2d0a52] to-[#3b0b6b] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#9d4edd] rounded-full blur-[120px] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-extrabold tracking-widest text-purple-300 uppercase bg-purple-900/60 border border-purple-700/50 rounded-full">
              Confían en nuestra experiencia
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Alianzas Corporativas</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {(logos.length ? logos : fallbackSlots).map((src, index) => (
              <LogoTile key={index} src={src} color={logoColors[index]} dark={true} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. GALERÍA — CLARO ─── */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100/40 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-0 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-extrabold tracking-widest text-[#5A189A] uppercase bg-white border border-purple-200 rounded-full shadow-sm">
              Evidencia en terreno
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
              Calidad en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-[#9d4edd]">Acción</span>
            </h2>
            <p className="text-xl text-gray-600">Evidencias visuales de nuestras auditorías, implementaciones y jornadas de capacitación.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
            {galleryImages.map((src, idx) => {
              const layoutClass = idx === 0
                ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]'
                : idx === 3 ? 'md:col-span-2 h-[200px] md:h-[288px]'
                : 'h-[200px] md:h-[288px]';
              return (
                <div key={idx}
                  className={`${layoutClass} relative group overflow-hidden rounded-[2rem] shadow-xl border-4 border-[#5A189A] bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(90,24,154,0.3)] hover:-translate-y-2 hover:z-10 odd:hover:-rotate-2 even:hover:rotate-2 cursor-pointer`}
                  onClick={() => openLightbox(idx)}>
                  <img src={src} alt={`Evidencia terreno ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. REELS — OSCURO ─── */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1a0533] via-[#2d0a52] to-[#3b0b6b] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <IconoInstagram size={48} className="text-purple-300" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Tips &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Actualidad</span>
            </h2>
            <p className="text-xl text-purple-200">
              Síguenos en{' '}
              <a href="https://www.instagram.com/goodfood_bpm/" className="font-bold text-purple-300 hover:text-white transition-colors">
                @goodfood_bpm
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[reel1, reel2, reel3].map((videoSrc, index) => (
              <div key={index} className="aspect-[9/16] bg-black rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] border-purple-500/60 relative group cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] hover:border-purple-400">
                <video src={videoSrc} autoPlay loop muted playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <IconoInstagram className="text-white w-12 h-12 drop-shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA FINAL — CLARO ─── */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/60 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-100/40 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-extrabold tracking-widest text-[#5A189A] uppercase bg-white border border-purple-200 rounded-full shadow-sm">
            Da el siguiente paso
          </span>
          <h2 className="text-gray-900 text-3xl md:text-5xl font-black mb-6 leading-tight">
            ¿Listo para implementar buenas prácticas de manufactura en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-[#9d4edd]">tu empresa?</span>
          </h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Agenda una consulta gratuita y descubre cómo elevar tus estándares de inocuidad alimentaria.
          </p>
          <Link to="/contacto" className="inline-flex items-center gap-2 bg-[#5A189A] text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-[0_15px_40px_-10px_rgba(90,24,154,0.5)]">
            Comenzar Ahora <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-8" onClick={closeLightbox}>
          <button aria-label="Cerrar" className="absolute top-4 right-4 z-50 text-white text-3xl p-3 rounded-full bg-[#5A189A]/80 hover:bg-[#5A189A]"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>×</button>
          <button aria-label="Anterior" className="absolute left-4 z-50 text-white text-4xl p-3 rounded-full bg-black/30 hover:bg-[#5A189A]/30"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <div className="relative flex flex-col items-center justify-center w-auto mx-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-2 rounded-2xl inline-block" style={{ background: 'linear-gradient(135deg,#5A189A,#9d4edd)', boxShadow: '0 30px 80px rgba(90,24,154,0.45)' }}>
              <img src={galleryImages[lightboxIndex]} alt={`Full ${lightboxIndex + 1}`}
                className="w-auto h-auto max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-2xl block" />
            </div>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white font-medium">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
          <button aria-label="Siguiente" className="absolute right-4 z-50 text-white text-4xl p-3 rounded-full bg-black/30 hover:bg-[#5A189A]/30"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
        </div>
      )}

    </div>
  );
}

export default Inicio;