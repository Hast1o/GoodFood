import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section className="bg-purple-50 py-24 px-6 text-center min-h-[70vh] flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-[#5A189A] mb-6 tracking-tight">
          Auditorías Sanitarias y BPM
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Asesoría experta en inocuidad alimentaria para asegurar la calidad de tus productos y el cumplimiento normativo.
        </p>
        <Link to="/contacto" className="bg-[#5A189A] hover:bg-purple-800 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105 text-lg">
          Cotizar Asesoría
        </Link>
      </div>
    </section>
  );
}

export default Inicio;