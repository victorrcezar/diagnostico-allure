import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg tracking-wide overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-700 to-blue-600 text-white hover:from-blue-600 hover:to-blue-500 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] border border-blue-500/20",
    
    // Efeito especial de gradiente animado
    glow: "bg-slate-950 text-white border border-slate-800 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:border-cyan-500/50",
    
    secondary: "bg-white text-slate-950 hover:bg-slate-100 shadow-lg font-semibold",
    
    outline: "bg-transparent border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-5 text-lg font-bold uppercase tracking-wider",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {/* Shimmer effect overlay for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      )}
      
      <span className="relative z-20 flex items-center">
        {children}
        {withIcon && <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </button>
  );
};