import React, { useEffect, useState } from 'react';
import { Container } from '../ui/Section';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCtaClick = () => {
    window.open("https://pay.kiwify.com.br/tTl9ga0", "_blank");
  };

  return (
    <div className="relative min-h-[100dvh] lg:min-h-screen flex items-center pt-28 pb-0 lg:py-0 overflow-hidden bg-dark-950">
      
      {/* Background Elements - Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Global Background Texture */}
         <div className="absolute inset-0 w-full h-full z-0">
            <img 
              src="https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/Black-and-Yellow-Vintage-and-Grungy-Are-we-safe-from-danger-awareness-Video-YouTube-Thumbnail-1.jpg"
              alt="Background Texture"
              className="w-full h-full object-cover opacity-10 mix-blend-screen"
              loading="eager"
              decoding="sync"
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/95 to-dark-950/50 lg:to-dark-950/40"></div>
            
            {/* Mobile Specific Gradient to help text pop against the image */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950/20 via-transparent to-dark-950 lg:hidden"></div>
         </div>

         {/* Glows */}
        <div className="absolute bottom-0 right-0 lg:right-[-5%] w-[100%] lg:w-[60%] h-[80%] bg-gradient-to-t from-blue-900/20 to-transparent blur-[80px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-0 left-[-10%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-cyan-900/10 blur-[100px] rounded-full"></div>
        
        {/* Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <Container className="grid lg:grid-cols-12 gap-4 lg:gap-12 items-center relative z-10 h-full">
        
        {/* Brand Logo - Centralized and Tripled in Size */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 lg:-mt-32 z-20 w-full flex justify-center pointer-events-none">
          <img 
            src="https://static.wixstatic.com/media/1f17f3_c74aacad78ab41cbbf68badd4a6186cc~mv2.png" 
            alt="Allure Logo" 
            className="h-24 md:h-32 lg:h-40 w-auto opacity-100 drop-shadow-2xl"
            loading="eager"
            width="600"
            height="150"
          />
        </div>

        {/* Text Content - Left Side */}
        <div className={`lg:col-span-7 flex flex-col justify-center space-y-5 md:space-y-8 text-center lg:text-left transition-all duration-1000 relative z-20 mt-12 lg:mt-0 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-sm mx-auto lg:mx-0 w-fit mt-8 lg:mt-0">
             <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
             <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-cyan-100 uppercase">Diagnóstico Financeiro</span>
          </div>
          
          <h1 className="text-[2.5rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Dê um passo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 font-extrabold italic">INTELIGENTE</span> na sua <br/>
            vida financeira
          </h1>
          
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-transparent hidden lg:block rounded-full opacity-50"></div>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light lg:pl-6 drop-shadow-md">
              A <strong className="text-white font-medium">Allure</strong> analisa sua situação financeira de forma estratégica, revelando como o <strong className="text-white font-medium">mercado financeiro enxerga seu CPF ou CNPJ</strong>.
            </p>
          </div>
          
          <div className="pt-2 flex flex-col items-center lg:items-start w-full">
            <Button size="lg" onClick={handleCtaClick} className="w-full sm:w-auto min-w-[280px] lg:min-w-[300px] shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all duration-500 transform hover:-translate-y-1 text-sm md:text-lg py-4">
              GARANTIR MEU DIAGNÓSTICO
            </Button>
            
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-2 mt-6 text-[10px] md:text-xs text-slate-400 lg:text-slate-500 uppercase tracking-wider font-medium">
               <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-blue-400 rounded-full"></div> 100% Online</span>
               <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-blue-400 rounded-full"></div> Seguro</span>
               <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-blue-400 rounded-full"></div> Sigiloso</span>
            </div>
          </div>
        </div>

        {/* Image Content - Right Side (Desktop) / Bottom Background (Mobile) */}
        <div className={`
            lg:col-span-5 
            absolute lg:relative 
            bottom-0 right-[-15%] sm:right-0
            w-[100%] sm:w-[60%] lg:w-[130%] lg:-mr-[20%]
            h-[45vh] lg:h-full 
            flex items-end justify-end 
            pointer-events-none lg:pointer-events-auto
            z-10 lg:z-10
            transition-all duration-1000 delay-300 
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
        `}>
          <div className="relative w-full h-full lg:h-auto flex items-end">
             
             {/* Main Person Image */}
             <img 
               src="https://static.wixstatic.com/media/1f17f3_263dada16fd9463b8e8528e4974bdf75~mv2.png" 
               alt="Douglas Maia" 
               className="
                 w-full h-full object-contain object-bottom 
                 opacity-30 lg:opacity-100 
                 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                 mask-image-gradient
               "
               style={{ 
                 maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' 
               }}
               loading="eager"
               // @ts-ignore
               fetchPriority="high"
               decoding="sync"
             />
             
             {/* Floating Elements decoration */}
             <div className="absolute top-[30%] left-[-20px] p-4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl animate-float hidden lg:block z-20">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Score</div>
                      <div className="text-lg font-bold text-white leading-none">Aumentando</div>
                   </div>
                </div>
             </div>

          </div>
        </div>

      </Container>
      
      {/* Scroll Indicator - Hidden on small mobile screens to save space */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce hidden sm:block z-20">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};