import React from 'react';
import { PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-900 text-sm font-bold tracking-widest uppercase mb-2">
          Nuestro Trabajo
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
          Proyectos Realizados
        </h3>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Instalaciones reales de puertas residenciales, comerciales e industriales.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl shadow-xl bg-slate-100 aspect-[3/4]"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">
                {project.category}
              </span>
              <h4 className="text-white text-lg font-bold">
                {project.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
