
import React from 'react';
import { BRANDS } from '../constants';

const Brands: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 text-sm font-black tracking-[0.3em] uppercase mb-4">Tecnología de Vanguardia</h2>
        <h3 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">
          Sistemas y Accesorios Electrónicos
        </h3>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed font-light">
          Trabajamos exclusivamente con marcas certificadas internacionalmente para garantizar la 
          máxima seguridad y automatización de sus accesos.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        {BRANDS.map((brand, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 aspect-square md:aspect-auto md:h-48"
          >
            <div className={`relative flex items-center justify-center w-full h-full overflow-hidden p-2`}>
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className={`max-w-full max-h-full ${brand.type === 'horizontal' ? 'w-full' : 'w-2/3 h-auto'} object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}
              />
            </div>
            <p className="mt-4 text-xs font-black text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {brand.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-900 p-8 rounded-[2rem] text-white flex items-start gap-5 shadow-xl">
          <div className="bg-white/10 p-3 rounded-xl shrink-0">
            <i className="fa-solid fa-microchip text-2xl text-orange-400"></i>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-tight mb-2">Centrales de Mando</h4>
            <p className="text-sm text-blue-100/70 font-light">Tarjetas inteligentes con auto-programación y conectividad MyQ.</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] text-blue-900 flex items-start gap-5 shadow-xl border border-slate-100">
          <div className="bg-blue-50 p-3 rounded-xl shrink-0">
            <i className="fa-solid fa-wifi text-2xl text-blue-900"></i>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-tight mb-2">Control Remoto</h4>
            <p className="text-sm text-slate-500 font-light">Sistemas de Rolling Code de alta seguridad e imposible clonación.</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] text-blue-900 flex items-start gap-5 shadow-xl border border-slate-100">
          <div className="bg-blue-50 p-3 rounded-xl shrink-0">
            <i className="fa-solid fa-eye text-2xl text-blue-900"></i>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-tight mb-2">Sensores de Seguridad</h4>
            <p className="text-sm text-slate-500 font-light">Celdas infrarrojas anti-atrapamiento y radares de detección.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
