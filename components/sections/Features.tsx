import React from 'react';
import { Container, Section } from '../ui/Section';
import { Rocket, FileBarChart2, ScanSearch, UserCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: string }) => (
  <div className={`group p-5 md:p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:bg-slate-900/60 hover:-translate-y-1 relative overflow-hidden reveal ${delay}`}>
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
      <Icon className="w-24 h-24 text-white rotate-12 transform translate-x-4 -translate-y-4" />
    </div>
    
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-4 md:mb-6 group-hover:bg-blue-500/20 transition-colors shadow-lg shadow-blue-500/5">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
      </div>
      
      <h3 className="text-base md:text-lg font-bold text-white leading-tight">{title}</h3>
    </div>

    {/* Bottom Gradient Line */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-700 group-hover:w-full"></div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <Section className="bg-dark-950 relative z-20 mt-4 lg:-mt-20 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <FeatureCard 
            icon={Rocket} 
            title="Primeiro passo para sua liberdade financeira" 
            delay="delay-0"
          />
          <FeatureCard 
            icon={FileBarChart2} 
            title="Relatório Claro e Objetivo" 
            delay="delay-100"
          />
          <FeatureCard 
            icon={ScanSearch} 
            title="Diagnóstico Profundo" 
            delay="delay-200"
          />
          <FeatureCard 
            icon={UserCheck} 
            title="Acompanhamento com especialista" 
            delay="delay-300"
          />
        </div>
      </Container>
    </Section>
  );
};