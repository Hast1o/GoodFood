import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';


import Inicio from './pages/Inicio';
import Informacion from './pages/Informacion';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
        
        {/* TOP BAR */}
        <div className="bg-purple-600 text-white text-sm py-2 px-4 md:px-12 flex justify-center md:justify-end items-center">
          <span className="flex items-center gap-2 font-medium">
            <Phone size={16} /> +56 9 7797 6539 (L-V de 8:30h a 17:00h)
          </span>
        </div>

        {/* NAVBAR PRINCIPAL */}
        <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-4xl font-extrabold text-[#5A189A] tracking-tighter mb-4 md:mb-0 hover:scale-105 transition-transform">
            GOODFOOD<span className="text-purple-600 text-2xl">◡</span>
          </Link>
          
          <ul className="flex gap-6 md:gap-8 font-semibold text-gray-600">
            <li><Link to="/informacion" className="hover:text-purple-700 transition-colors">Información</Link></li>
            <li><Link to="/servicios" className="hover:text-purple-700 transition-colors">Servicios</Link></li>
            <li><Link to="/contacto" className="hover:text-purple-700 transition-colors">Contacto</Link></li>
          </ul>
        </nav>

        {/* ZONA DINÁMICA (El contenido de las páginas) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm mt-auto">
          <p>© {new Date().getFullYear()} Goodfood. Todos los derechos reservados.</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;