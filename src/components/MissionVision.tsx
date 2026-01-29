
import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Abstract Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-800 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Mission Card */}
        <div className="group bg-blue-800/40 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[3rem] hover:bg-blue-800/60 transition-all duration-500 shadow-2xl">
          <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
            <i className="fa-solid fa-bullseye text-4xl text-white"></i>
          </div>
          <h3 className="text-4xl font-black text-white mb-8 tracking-tight">Nuestra Misión</h3>
          <p className="text-blue-100/80 text-xl leading-relaxed font-light">
            Brindar soluciones integrales en <span className="text-white font-bold">seguridad y automatización de accesos</span>, superando las expectativas de nuestros clientes a través de innovación tecnológica constante, un servicio técnico de excelencia y el compromiso inquebrantable con la tranquilidad de sus hogares y empresas.
          </p>
          <div className="mt-10 flex items-center gap-4 text-orange-400 font-bold uppercase tracking-[0.2em] text-sm">
            <div className="h-px w-12 bg-orange-400"></div>
            <span>Compromiso JLC</span>
          </div>
        </div>

        {/* Vision Card */}
        <div className="group bg-white/5 backdrop-blur-xl border border-white/5 p-12 md:p-16 rounded-[3rem] hover:bg-white/10 transition-all duration-500 shadow-2xl">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500">
            <i className="fa-solid fa-eye text-4xl text-white"></i>
          </div>
          <h3 className="text-4xl font-black text-white mb-8 tracking-tight">Nuestra Visión</h3>
          <p className="text-blue-100/80 text-xl leading-relaxed font-light">
            Consolidarnos para el 2030 como la <span className="text-white font-bold">empresa líder a nivel nacional</span> en el rubro de puertas automáticas, siendo reconocidos por nuestra integridad, calidad técnica superior y por ser el referente principal en modernización de accesos inteligentes en todo el Perú.
          </p>
          <div className="mt-10 flex items-center gap-4 text-blue-400 font-bold uppercase tracking-[0.2em] text-sm">
            <div className="h-px w-12 bg-blue-400"></div>
            <span>Futuro Tecnológico</span>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <div className="inline-block p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-8 px-8 py-4">
             <div className="flex items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-xs">
               <i className="fa-solid fa-check text-orange-500"></i> Integridad
             </div>
             <div className="w-1 h-1 bg-white/20 rounded-full"></div>
             <div className="flex items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-xs">
               <i className="fa-solid fa-check text-orange-500"></i> Innovación
             </div>
             <div className="w-1 h-1 bg-white/20 rounded-full"></div>
             <div className="flex items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-xs">
               <i className="fa-solid fa-check text-orange-500"></i> Puntualidad
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
