
import React from 'react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-slate-400 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
  <div className="bg-white p-4 rounded-3xl shadow-2xl mb-6">
    <img
      src="./logo_puertasseguras.png"
      alt="Puertas Seguras JLC"
      className="h-16 w-auto object-contain"
    />
  </div>
  <h2 className="text-white text-3xl font-black tracking-tight">
    Puertas Seguras JLC
  </h2>
  <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">
    Seguridad · Automatización · Confianza
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <p className="mb-8 text-lg leading-relaxed font-light">
              Líderes en ingeniería de accesos y soluciones de automatización inteligente. 
              Calidad premium y seguridad certificada en cada proyecto ejecutado.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'whatsapp', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-lg">
                  <i className={`fa-brands fa-${social} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Especialidades</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors flex items-center gap-3 group"><i className="fa-solid fa-angle-right text-[10px] text-orange-500 group-hover:translate-x-1 transition-transform"></i> Puertas Seccionales</a></li>
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors flex items-center gap-3 group"><i className="fa-solid fa-angle-right text-[10px] text-orange-500 group-hover:translate-x-1 transition-transform"></i> Automatización Pro</a></li>
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors flex items-center gap-3 group"><i className="fa-solid fa-angle-right text-[10px] text-orange-500 group-hover:translate-x-1 transition-transform"></i> Mantenimiento Correctivo</a></li>
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors flex items-center gap-3 group"><i className="fa-solid fa-angle-right text-[10px] text-orange-500 group-hover:translate-x-1 transition-transform"></i> Motores de Alta Gama</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Empresa</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#inicio" className="hover:text-orange-400 transition-colors flex items-center gap-3 group"><i className="fa-solid fa-angle-right text-[10px] text-orange-500 group-hover:translate-x-1 transition-transform"></i> Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-orange-400 transition-colors flex items-center gap-3 group"><i className="fa-solid fa-angle-right text-[10px] text-orange-500 group-hover:translate-x-1 transition-transform"></i> Nuestra Historia</a></li>
              <li><a href="#mision-vision" className="hover:text-orange-400 transition-colors flex items-center gap-3 group"><i className="fa-solid fa-angle-right text-[10px] text-orange-500 group-hover:translate-x-1 transition-transform"></i> Misión y Visión</a></li>
              <li><a href="#proyectos" className="hover:text-orange-400 transition-colors flex items-center gap-3 group"><i className="fa-solid fa-angle-right text-[10px] text-orange-500 group-hover:translate-x-1 transition-transform"></i> Galería de Éxito</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Centro de Atención</h4>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative group">
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-2xl shadow-xl animate-bounce">
                <i className="fa-solid fa-headset"></i>
              </div>
              <p className="text-xs uppercase font-black tracking-widest text-slate-400 mb-4">Línea Directa</p>
              <p className="text-white text-2xl font-black mb-6 group-hover:text-orange-400 transition-colors">{PHONE_NUMBER}</p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all w-full justify-center shadow-lg"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Chatea con nosotros
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium">
          <div className="flex flex-col gap-1">
            <p className="text-slate-500 italic">&copy; 2026 Puertas Seguras JLC. Todos los derechos reservados.</p>
            <p className="text-slate-600 text-xs">
              Desarrollado por <a href="https://tu-sitioweb.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-bold tracking-tight">tu-sitioweb.com</a>
            </p>
          </div>
          <div className="flex gap-10">
             <div className="flex items-center gap-3"><i className="fa-solid fa-location-dot text-orange-500"></i> Lima, Perú</div>
             <div className="flex items-center gap-3"><i className="fa-solid fa-lock text-orange-500"></i> Pagos Seguros</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
