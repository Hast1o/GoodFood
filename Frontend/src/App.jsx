import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos tus páginas
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Informacion from './pages/Informacion';
import Servicios from './pages/Servicios';

// Importamos los componentes globales
import Header from './components/Header'; // <-- AQUÍ IMPORTAMOS TU HEADER (Ajusta la ruta si está en otra carpeta)
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      
      {/* El Header vuelve a estar aquí arriba para mostrarse en todas las páginas */}
      <Header />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;