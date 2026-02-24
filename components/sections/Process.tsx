import React from 'react';
import { Container, Section } from '../ui/Section';

const Step = ({ number, title, desc, isLast }: { number: string, title: string, desc?: string, isLast?: boolean }) => (
  <div className="relative flex flex-col items-center text-center reveal">
    {/* Connecting Line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[1px] bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 -z-10"></div>
    )}
    
    {/* Number Bubble */}
    <div className="w-16 h-16 rounded-full bg-dark-900 border border-slate-800 flex items-center justify-center mb-6 relative group hover:border-blue-500 transition-colors duration-300">
      <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="text-2xl font-bold text-white font-mono">{number}</span>
    </div>

    <h3 className="text-lg font-bold text-white mb-2 max-w-[200px]">{title}</h3>
    {desc && <p className="text-sm text-slate-400 leading-relaxed max-w-[250px] mx-auto">{desc}</p>}
  </div>
);

export const Process: React.FC = () => {
  return (
    <Section className="bg-black/40 border-y border-white/5 relative">
      <Container>
        <div className="text-center mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">O QUE VOCÊ RECEBE</span> <br/>
            COM O DIAGNÓSTICO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 align-top">
          <Step 
            number="01" 
            title="Análise completa da sua vida financeira" 
          />
          <Step 
            number="02" 
            title="Relatório claro e objetivo" 
          />
          <Step 
            number="03" 
            title="Visão de como o mercado te enxerga" 
          />
          <Step 
            number="04" 
            title="Direcionamento para as melhores soluções" 
            isLast
          />
        </div>
      </Container>
    </Section>
  );
};