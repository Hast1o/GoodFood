import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Informacion from './pages/Informacion';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
        
        {/* NAVBAR PRINCIPAL */}
        {/* Añadimos border-t-4 con el morado de la marca para darle un toque de color arriba */}
        <nav className="sticky top-0 z-50 bg-white shadow-md py-3 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center overflow-hidden border-t-4 border-[#5A189A]">
          
          <Link to="/" className="mb-4 md:mb-0 hover:scale-105 transition-transform flex items-center justify-center">
            <img 
              src="/GOODFOOD.png" 
              alt="Goodfood Logo" 
              className="h-16 md:h-20 w-auto object-contain scale-[2.2]" 
            />
          </Link>
          
          {/* Cambiamos el color base del texto a un gris más oscuro y centramos verticalmente */}
          <ul className="flex gap-6 md:gap-8 font-semibold text-gray-700 items-center">
            
            {/* Enlaces normales con un efecto hover morado más fuerte */}
            <li>
              <Link to="/" className="hover:text-[#5A189A] transition-colors duration-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/informacion" className="hover:text-[#5A189A] transition-colors duration-300">
                Información
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-[#5A189A] transition-colors duration-300">
                Servicios
              </Link>
            </li>
            
            {/* EL BOTÓN DE CONTACTO: Le damos fondo sólido morado, texto blanco y sombras */}
            <li>
              <Link to="/contacto" className="bg-[#5A189A] text-white px-6 py-2.5 rounded-full hover:bg-purple-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block">
                Contacto
              </Link>
            </li>
            
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