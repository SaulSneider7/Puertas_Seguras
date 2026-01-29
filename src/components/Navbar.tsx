
import React, { useState } from 'react';
import { WHATSAPP_LINK } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Misión', href: '#mision-vision' },
    { name: 'Proyectos', href: '#proyectos' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-white p-2 rounded-xl shadow-lg flex items-center justify-center">
  <img
    src="./logo_puertasseguras.png"
    alt="Puertas Seguras JLC"
    className="h-10 w-auto object-contain"
  />
</div>

            <div className="flex flex-col -space-y-1">
              <span className={`text-xl font-black tracking-tight ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}>
                Puertas Seguras JLC
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                scrolled ? 'text-blue-600' : 'text-blue-200'
              }`}>
                Soluciones Técnicas
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-sm font-bold uppercase tracking-wider transition-colors group ${
                    scrolled 
                      ? 'text-slate-600 hover:text-blue-900' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30 flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Contacto</span>
              </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-xl transition-colors ${
                scrolled ? 'text-blue-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 transform ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'
      }`}>
        <div className="px-4 pt-4 pb-8 space-y-2 border-t border-slate-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-4 px-4 py-4 text-base font-bold text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-2xl transition-all"
            >
              <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
              <span>{link.name}</span>
            </a>
          ))}
          <div className="pt-6 px-4">
             <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 w-full text-center bg-orange-500 text-white px-4 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-orange-500/20"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span>Contactar WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
