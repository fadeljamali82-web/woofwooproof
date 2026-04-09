import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface VisualFallbackProps {
  variant?: 'lavender' | 'sky' | 'mint' | 'peach' | 'navy' | 'product';
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
  children?: React.ReactNode;
}

export const VisualFallback = ({
  variant = 'lavender',
  className,
  aspectRatio = 'square',
  children
}: VisualFallbackProps) => {
  const variants = {
    lavender: 'from-brand-lavender/40 via-white to-brand-sky/40',
    sky: 'from-brand-sky/40 via-white to-brand-mint/40',
    mint: 'from-brand-mint/40 via-white to-brand-peach/40',
    peach: 'from-brand-peach/40 via-white to-brand-lavender/40',
    navy: 'from-brand-navy/10 via-brand-navy/5 to-brand-navy/10',
    product: 'from-brand-lavender/40 via-white to-brand-sky/40',
  };

  const aspects = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[4/5]',
    wide: 'aspect-[21/9]',
  };

  return (
    <div className={cn(
      'relative flex items-center justify-center bg-gradient-to-br overflow-hidden border border-white/20 shadow-inner',
      variants[variant],
      aspects[aspectRatio],
      className
    )}>
      {/* Abstract background depth */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)]" />
      
      {/* Decorative floating blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-brand-navy/10">
        {variant === 'product' ? (
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="relative rounded-full bg-white/40 shadow-xl flex items-center justify-center border-[12px] border-brand-mint/20 w-32 h-32 md:w-48 md:h-48"
          >
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-brand-navy/5 m-4" />
            <span className="text-brand-navy/20 font-display font-black text-2xl md:text-4xl tracking-tighter">W.W.P</span>
          </motion.div>
        ) : (
          children || (
            <span className="font-display font-black text-4xl tracking-tighter opacity-20">W.W.P</span>
          )
        )}
      </div>

      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
    </div>
  );
};
