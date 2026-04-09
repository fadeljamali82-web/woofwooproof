import React, { useState } from 'react';
import { VisualFallback } from './VisualFallback';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string | null;
  alt?: string;
  className?: string;
  fallbackVariant?: 'lavender' | 'sky' | 'mint' | 'peach' | 'navy' | 'product';
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
}

/**
 * SIMPLIFIED SAFE IMAGE
 * Renders the image normally with a simple fallback if it fails.
 */
export const SafeImage = ({
  src,
  alt,
  className,
  fallbackVariant = 'lavender',
  aspectRatio = 'square',
  ...props
}: SafeImageProps) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <VisualFallback 
        variant={fallbackVariant} 
        className={className} 
        aspectRatio={aspectRatio}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 px-4 text-center">{alt}</span>
      </VisualFallback>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
      {...props} 
    />
  );
};
