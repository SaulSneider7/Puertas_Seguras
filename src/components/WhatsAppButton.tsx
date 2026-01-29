
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group overflow-visible"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute right-full mr-6 bg-white text-slate-900 px-5 py-3 rounded-2xl text-sm font-black shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap -translate-y-2 group-hover:translate-y-0 border border-slate-100 flex items-center gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
        ¿En qué podemos ayudarte?
      </div>
      <i className="fa-brands fa-whatsapp text-4xl"></i>
    </a>
  );
};

export default WhatsAppButton;
