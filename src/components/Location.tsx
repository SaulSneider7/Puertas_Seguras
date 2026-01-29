
import React from 'react';
import { ADDRESS, PHONE_NUMBER, EMAIL, BUSINESS_HOURS } from '../constants';

const Location: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 text-sm font-black tracking-[0.3em] uppercase mb-4">Ubicación Estratégica</h2>
        <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">¿Dónde nos encuentras?</h3>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          Estamos ubicados en el Callao para brindar una cobertura rápida a toda la zona de Lima y alrededores.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 p-6 md:p-10">
        {/* Info Column - Increased span for better text accommodation */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
          
          {/* Address Block - Optimized for long text */}
          <div className="flex items-start gap-6 group">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
              <i className="fa-solid fa-location-dot text-2xl"></i>
            </div>
            <div className="flex-grow">
              <p className="text-xs text-blue-900/50 uppercase font-black tracking-widest mb-2">Dirección Principal</p>
              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                <p className="text-lg font-black text-blue-900 leading-tight">
                  {ADDRESS}
                </p>
                <div className="mt-2 flex items-center gap-2 text-blue-600 font-bold text-xs uppercase">
                  <i className="fa-solid fa-map-pin"></i>
                  <span>Callao, Perú</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Hours Block */}
          <div className="flex items-start gap-6 group">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm shrink-0">
              <i className="fa-solid fa-clock-rotate-left text-2xl"></i>
            </div>
            <div className="w-full">
              <p className="text-xs text-blue-900/50 uppercase font-black tracking-widest mb-3">Horario de Atención</p>
              <div className="bg-slate-50 rounded-2xl p-5 space-y-2 border border-slate-100">
                {BUSINESS_HOURS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm border-b border-slate-200/50 pb-2 last:border-0 last:pb-0">
                    <span className="font-black text-blue-900 uppercase text-[10px] tracking-wider">{item.day}</span>
                    <span className={`font-bold ${item.isClosed ? 'text-orange-600 italic' : 'text-slate-600'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all shrink-0">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div>
                <p className="text-[10px] text-blue-900/50 uppercase font-black tracking-widest mb-1">Central</p>
                <p className="text-base font-black text-blue-900 whitespace-nowrap">{PHONE_NUMBER}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all shrink-0">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-[10px] text-blue-900/50 uppercase font-black tracking-widest mb-1">Email</p>
                <p className="text-sm font-bold text-blue-900 break-all">{EMAIL}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Column - Adjusted span */}
        <div className="lg:col-span-7 h-[500px] lg:h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-inner relative group border border-slate-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1648937001476!2d-77.1085189!3d-11.9161245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1a5c68f6d61%3A0x6b677a8368940801!2sSanta%20Rosa%2C%20Callao%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1715890000000!5m2!1ses!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-1000"
          ></iframe>
          <div className="absolute top-6 left-6">
             <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/20 text-blue-900 font-black text-xs uppercase tracking-widest">
                <i className="fa-solid fa-satellite mr-2 text-orange-500"></i> Cobertura en Callao y Lima
             </div>
          </div>
          <div className="absolute bottom-6 right-6 bg-blue-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-3">
            <i className="fa-solid fa-map-location-dot text-lg"></i> 
            <span>Cómo llegar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
