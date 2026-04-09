import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children,
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-navy text-white shadow-xl shadow-brand-navy/20 hover:scale-105 hover:shadow-2xl',
    outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
    ghost: 'text-brand-navy hover:bg-brand-lavender/50',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-[10px]',
    md: 'px-10 py-4 text-xs',
    lg: 'px-14 py-6 text-sm',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-extrabold uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
