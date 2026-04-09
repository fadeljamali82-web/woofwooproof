import React from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string | null;
  alt?: string;
  className?: string;
  fallbackVariant?: 'lavender' | 'sky' | 'mint' | 'peach' | 'navy' | 'product';
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
}

/**
 * SIMPLIFIED SAFE IMAGE
 * Renders a plain image element.
 */
export const SafeImage = ({
  src,
  alt,
  className,
  fallbackVariant,
  aspectRatio,
  ...props
}: SafeImageProps) => {
  return (
    <img 
      src={src || ''} 
      alt={alt} 
      className={className} 
      referrerPolicy="no-referrer"
      {...props} 
    />
  );
};
