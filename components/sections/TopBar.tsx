import React, { useState, useEffect } from 'react';

export const TopBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-[#d92121] py-2.5 text-center fixed top-0 z-50 transition-all duration-300 shadow-[0_4px_20px_rgba(217,33,33,0.3)]">
      <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-white font-semibold tracking-wide">
        <span className="flex items-center gap-1.5">
          Essa oferta acaba em 
          <span className="font-mono bg-white/20 px-1.5 py-0.5 rounded tabular-nums">
            {formatTime(timeLeft)}
          </span>
        </span>
        <span className="opacity-40 mx-1">•</span>
        <span className="flex items-center gap-2">
          <span className="line-through opacity-60 text-[10px] md:text-xs">R$ 169,00</span>
          <span className="font-bold text-white">por R$ 99,00</span>
        </span>
      </div>
    </div>
  );
};
