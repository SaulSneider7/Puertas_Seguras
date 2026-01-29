
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="servicios" className="py-24 bg-white">
          <Services />
        </section>
        
        <section id="nosotros" className="py-24 bg-slate-50">
          <AboutUs />
        </section>

        <section id="mision-vision" className="py-24 bg-blue-900 overflow-hidden">
          <MissionVision />
        </section>
        
        <section id="proyectos" className="py-24 bg-white">
          <Gallery />
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
