import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', ...props }, ref) => {
    const variants = {
      solid: 'bg-brand-white text-brand-dark hover:bg-brand-straw hover:text-brand-dark',
      outline: 'border border-brand-white/30 text-brand-white hover:border-brand-straw hover:text-brand-straw',
      ghost: 'text-brand-white hover:bg-brand-white/5',
    };

    const sizes = {
      sm: 'px-4 sm:px-6 py-2 text-[10px] sm:text-xs uppercase tracking-widest',
      md: 'px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em]',
      lg: 'px-8 sm:px-14 py-4 sm:py-6 text-sm sm:text-base uppercase tracking-[0.3em]',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          'inline-flex items-center justify-center font-sans font-medium transition-all duration-500 focus:outline-none relative overflow-hidden group',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        {variant === 'solid' && (
          <motion.div 
            className="absolute inset-0 bg-brand-straw translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"
            aria-hidden="true"
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
