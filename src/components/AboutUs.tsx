
import React from 'react';

const AboutUs: React.FC = () => {
  const benefits = [
    { icon: 'fa-solid fa-shield-halved', title: 'Máxima Seguridad', text: 'Equipos certificados y protocolos de seguridad rigurosos.' },
    { icon: 'fa-solid fa-clock-rotate-left', title: 'Respuesta Rápida', text: 'Atención técnica inmediata ante cualquier emergencia.' },
    { icon: 'fa-solid fa-user-tie', title: 'Expertos Senior', text: 'Técnicos calificados con años de experiencia en campo.' },
    { icon: 'fa-solid fa-handshake-simple', title: 'Confianza JLC', text: 'Garantía por escrito en todos nuestros servicios.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="Sobre nosotros"
              className="w-full h-auto object-cover min-h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
          </div>
          <div className="absolute -bottom-10 -right-6 bg-orange-500 p-10 rounded-3xl shadow-2xl shadow-orange-500/30 z-20 hidden md:block transform rotate-3 hover:rotate-0 transition-transform">
            <p className="text-white text-6xl font-black mb-1">10+</p>
            <p className="text-white font-black uppercase tracking-widest text-xs opacity-90">Años de Liderazgo</p>
          </div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-orange-500 text-sm font-black tracking-[0.3em] uppercase mb-4">Trayectoria Impecable</h2>
          <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-8 leading-tight">
            Ingeniería de Accesos para una Vida sin Preocupaciones
          </h3>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
            En <strong>Puertas Seguras JLC</strong>, no solo instalamos puertas; construimos tranquilidad. 
            Cada proyecto es abordado con precisión técnica, utilizando materiales de primera 
            y motores de marcas líderes a nivel mundial para asegurar durabilidad extrema.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <i className={`${benefit.icon} text-2xl`}></i>
                </div>
                <div>
                  <h4 className="font-black text-blue-900 uppercase tracking-tight mb-1">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 leading-snug">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-lg shadow-slate-200/50">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm" 
                  src={`https://i.pravatar.cc/150?u=jlc${i}`} 
                  alt="Cliente JLC" 
                />
              ))}
            </div>
            <div>
              <p className="text-blue-900 font-black text-lg">+500 Clientes Satisfechos</p>
              <div className="flex text-orange-500 gap-1 mt-1">
                {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star text-xs"></i>)}
                <span className="text-slate-400 text-xs font-bold ml-2">5.0 / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
