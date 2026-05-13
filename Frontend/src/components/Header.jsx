import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logo from '../assets/GOODFOOD.png';

// Icono de WhatsApp personalizado
const IconoWhatsApp = ({ size = 20, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Información', path: '/informacion' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-purple-100 shadow-md transition-all duration-300 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-28 md:h-36 flex w-full items-center justify-between">
        
        {/* Logo - Tamaño maximizado */}
        <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <img 
            src={logo} 
            alt="Good Food Logo" 
            className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto object-contain transition-all duration-300 transform hover:scale-105" 
          />
        </Link>

        {/* Navegación Escritorio */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-black text-xs xl:text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:text-[#5A189A] ${
                  isActive 
                    ? 'text-[#5A189A] border-b-4 border-[#5A189A] pb-2' 
                    : 'text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <a
            href="https://wa.me/56977976539"
            target="_blank"
            rel="noreferrer"
            className="ml-4 bg-[#5A189A] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#48127a] hover:scale-110 hover:shadow-[0_15px_30px_rgba(90,24,154,0.4)] transition-all flex items-center gap-3"
          >
            <IconoWhatsApp className="w-6 h-6" />
            Contactar
          </a>
        </nav>

        {/* Botón Menú Móvil */}
        <button
          className="lg:hidden p-3 text-[#5A189A] border-2 border-purple-100 rounded-2xl transition-colors flex items-center justify-center shadow-sm"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b-4 border-purple-600 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[700px] opacity-100 py-10 px-8' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-black uppercase tracking-widest text-2xl py-5 border-b-2 border-gray-50 transition-colors ${
                  isActive ? 'text-[#5A189A]' : 'text-gray-800 hover:text-[#5A189A]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="https://wa.me/56977976539"
            target="_blank"
            rel="noreferrer"
            className="bg-[#5A189A] text-white text-center px-8 py-6 mt-10 rounded-[2rem] font-black uppercase tracking-widest text-xl hover:bg-[#48127a] transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            <IconoWhatsApp size={28} />
            Contactar ahora
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;