import React from 'react';
import { Container, Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const About: React.FC = () => {
  const handleCtaClick = () => {
    window.open("https://pay.kiwify.com.br/tTl9ga0", "_blank");
  };

  return (
    <Section className="relative overflow-hidden py-32">
      {/* Background subtleties */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/20 skew-x-12"></div>
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative group reveal">
             <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
             <div className="absolute inset-0 bg-slate-800 rounded-2xl -rotate-3 opacity-40 group-hover:-rotate-6 transition-transform duration-500"></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out aspect-[4/5]">
                <img 
                  src="https://static.wixstatic.com/media/1f17f3_df4e69a02c8d45978ea4e465125576eb~mv2.jpg" 
                  alt="Douglas Maia" 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cyan-400 font-bold tracking-[0.2em] text-xs mb-2">CEO & FOUNDER</p>
                  <h3 className="text-3xl font-serif italic text-white">Douglas Maia</h3>
                </div>
             </div>
          </div>

          {/* Editorial Content */}
          <div className="w-full lg:w-1/2 space-y-10 reveal delay-200">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                QUEM SOU <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">EU</span>
              </h2>
              <div className="h-0.5 w-24 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>

            <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                Muito prazer, eu sou o <strong className="text-white font-semibold">Douglas Maia</strong>, CEO da Allure Representações.
              </p>
              <p>
                Sou comprometido em transformar a realidade financeira de milhares de brasileiros por meio de diagnósticos estratégicos, consultoria personalizada e soluções que devolvem poder e tranquilidade ao seu nome.
              </p>
            </div>

            <div className="pt-4">
              <Button size="lg" className="w-full sm:w-auto" onClick={handleCtaClick}>
                GARANTIR MEU DIAGNÓSTICO
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};