import React, { useState, useRef, useEffect } from 'react';
import { Container, Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Play, Pause, Maximize, Gauge } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [shouldLoad, setShouldLoad] = useState(false); // State for lazy loading
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smart Lazy Load: Only load the video source when the user is close to the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Start loading 200px before the section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rates = [1.0, 1.5, 2.0];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    
    if (videoRef.current) {
      videoRef.current.playbackRate = nextRate;
      setPlaybackRate(nextRate);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;

    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitEnterFullscreen) {
        (video as any).webkitEnterFullscreen(); // iOS Fix
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      }
    }
  };

  const handleCtaClick = () => {
    window.open("https://payfast.greenn.com.br/159276", "_blank");
  };

  const videoUrl = "https://video.wixstatic.com/video/1f17f3_0e38f34bb3d04b37be8d8fa80115fa0c/720p/mp4/file.mp4";

  return (
    <Section className="bg-dark-950 relative pt-32 pb-12 md:pt-40 md:pb-24" id="video-section">
      <div ref={containerRef} className="absolute top-0 w-full h-1"></div>
      
      {/* Background Glow - Optimized for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-900/20 blur-[60px] md:blur-[120px] rounded-full pointer-events-none"></div>

      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
          
          <div className="text-center space-y-6 reveal">
            <img 
              src="https://static.wixstatic.com/media/1f17f3_c74aacad78ab41cbbf68badd4a6186cc~mv2.png" 
              alt="Allure Logo" 
              className="h-16 md:h-20 w-auto mx-auto opacity-100 drop-shadow-lg"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold tracking-tight text-white max-w-2xl">
              Dê um passo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 font-extrabold italic">INTELIGENTE</span> na sua <br/>
              vida financeira
            </h1>
          </div>

          <div className="w-full max-w-sm mx-auto relative reveal delay-100">
             <div className="relative z-10 group">
                {/* Border Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500"></div>
                
                {/* Video Container */}
                <div 
                  className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[9/16] shadow-2xl border border-white/10 cursor-pointer"
                  onClick={(e) => togglePlay(e)}
                >
                   <video 
                     ref={videoRef}
                     className="w-full h-full object-cover"
                     onEnded={() => setIsPlaying(false)}
                     onPause={() => setIsPlaying(false)}
                     onPlay={() => setIsPlaying(true)}
                     playsInline
                     preload="metadata"
                     src={`${videoUrl}#t=0.001`}
                   >
                     Seu navegador não suporta a tag de vídeo.
                   </video>

                   {/* Main Play Button Overlay */}
                   {!isPlaying && (
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 pointer-events-none z-20">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                           <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                        </div>
                     </div>
                   )}

                   {/* Custom Control Bar - Improved for Mobile Touch */}
                   <div 
                     className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between z-30 opacity-100 transition-opacity duration-300"
                     onClick={(e) => e.stopPropagation()}
                   >
                     <div className="flex items-center gap-3 md:gap-4">
                       <button 
                         onClick={togglePlay} 
                         className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-all active:scale-95"
                         title={isPlaying ? "Pausar" : "Reproduzir"}
                       >
                         {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                       </button>
                       
                       <button 
                         onClick={changeSpeed}
                         className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 text-xs font-bold text-white transition-all min-w-[60px] justify-center active:scale-95"
                         title="Velocidade"
                       >
                         <Gauge size={14} />
                         {playbackRate}x
                       </button>
                     </div>

                     <button 
                       onClick={toggleFullscreen}
                       className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-all active:scale-95"
                       title="Tela Cheia"
                     >
                       <Maximize size={20} />
                     </button>
                   </div>
                </div>
             </div>
          </div>

          <div className="text-center space-y-6 reveal delay-200">
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto font-light drop-shadow-md">
              A <strong className="text-white font-medium">Allure</strong> analisa sua situação financeira de forma estratégica, revelando como o <strong className="text-white font-medium">mercado financeiro enxerga seu CPF ou CNPJ</strong>.
            </p>
            <Button size="lg" onClick={handleCtaClick} className="w-full sm:w-auto min-w-[300px] shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
              GARANTIR MEU DIAGNÓSTICO FINANCEIRO
            </Button>
            <p className="text-center mt-4 text-[10px] md:text-xs text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Compra Segura
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
};
