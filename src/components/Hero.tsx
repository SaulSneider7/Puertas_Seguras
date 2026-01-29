
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
          alt="Instalación Industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/85 to-blue-950/40"></div>
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-28 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md animate-fade-in">
            <i className="fa-solid fa-bolt-lightning animate-pulse"></i>
            <span>Líderes en Automatización de Accesos</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 drop-shadow-xl tracking-tighter">
            SEGURIDAD <br />
            <span className="text-orange-500 italic">SIN LÍMITES</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl font-light">
            Soluciones de ingeniería en <span className="font-semibold text-white">puertas automáticas</span> para el sector residencial, comercial e industrial.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto"
            >
              <i className="fa-brands fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
              <span>CONSULTA GRATUITA</span>
            </a>
            <a
              href="#servicios"
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto uppercase tracking-widest"
            >
              <span>Catálogo</span>
              <i className="fa-solid fa-arrow-down-long"></i>
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-black text-orange-500 tracking-tighter">10+</p>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Años de éxito</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white tracking-tighter">500+</p>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Instalaciones</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-3xl font-black text-white tracking-tighter">24/7</p>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Soporte Técnico</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-3xl font-black text-white tracking-tighter">100%</p>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Garantía Real</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative side element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none hidden lg:block"></div>
    </div>
  );
};

export default Hero;
