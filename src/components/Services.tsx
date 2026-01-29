
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tipo' | 'tecnico' | 'automatizacion'>('tipo');

  const filteredServices = SERVICES.filter(s => s.category === activeTab);

  const tabs = [
    { id: 'tipo', label: 'Tipos de Puertas' },
    { id: 'tecnico', label: 'Servicios Técnicos' },
    { id: 'automatizacion', label: 'Automatización' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 text-sm font-black tracking-[0.3em] uppercase mb-4">Especialistas en Accesos</h2>
        <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Nuestras Soluciones Integrales</h3>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Ofrecemos ingeniería aplicada a la seguridad de sus ingresos, con la más alta tecnología en motores y estructuras.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-blue-900 text-white shadow-2xl shadow-blue-900/40 translate-y-[-2px]'
                : 'bg-white border border-slate-200 text-slate-500 hover:border-blue-900 hover:text-blue-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all group relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-blue-50 transition-colors"></div>
      
      <div className="relative z-10 flex-grow">
        <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shadow-inner">
          <i className={`${service.icon} text-3xl`}></i>
        </div>
        <h4 className="text-2xl font-black text-blue-900 mb-4 tracking-tight">{service.title}</h4>
        <p className="text-slate-500 leading-relaxed text-base font-light">
          {service.description}
        </p>
      </div>
      <div className="mt-8 pt-6 border-t border-slate-50 relative z-10">
        <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest">
           <i className="fa-solid fa-circle-check"></i>
           <span>Calidad Garantizada</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
