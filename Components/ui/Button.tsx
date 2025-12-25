
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-md';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200 active:scale-[0.98] shadow-lg shadow-white/5',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.98] border border-white/10',
    outline: 'border border-white/10 text-white hover:bg-white hover:text-black active:scale-[0.98]',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/[0.03] active:scale-[0.98]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px] tracking-widest font-bold uppercase',
    md: 'px-6 py-3 text-xs tracking-widest font-bold uppercase',
    lg: 'px-10 py-5 text-sm tracking-widest font-bold uppercase'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
