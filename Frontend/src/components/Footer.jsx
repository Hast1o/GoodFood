import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

import logo from '../assets/GOODFOOD.png';

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

function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-[#5A189A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="inline-block mb-6 bg-white p-3 rounded-2xl">
              <img 
                src={logo} 
                alt="Logo Good Food" 
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Elevando los estándares de calidad e inocuidad en la industria alimentaria mediante asesoría experta y cumplimiento normativo del RSA.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/goodfood_bpm/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#5A189A] hover:text-white transition-all shadow-lg"
              >
                <IconoInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="md:col-span-3 lg:col-span-4 lg:mx-auto">
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Navegación</h3>
            <ul className="space-y-4">
              {/* AQUÍ ESTÁ LA CORRECCIÓN: Agregamos "Información" */}
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Información', path: '/informacion' },
                { name: 'Contacto', path: '/contacto' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
                  >
                    <ChevronRight size={16} className="text-[#5A189A] group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Contacto Directo</h3>
            <ul className="space-y-5">
              <li>
                <a 
                  href="tel:+56977976539" 
                  className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#5A189A] transition-colors">
                    <Phone size={20} className="text-purple-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Llámanos</p>
                    <p className="font-medium text-lg">+56 9 7797 6539</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:bpmpaulinaalbornoz@gmail.com" 
                  className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#5A189A] transition-colors">
                    <Mail size={20} className="text-purple-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Escríbenos</p>
                    <p className="font-medium">bpmpaulinaalbornoz@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 text-gray-400">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Ubicación</p>
                  <p className="font-medium">Curicó, Región del Maule, Chile</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {anioActual} Good Food Asesorías. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacidad" className="hover:text-purple-400 transition-colors">Políticas de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;