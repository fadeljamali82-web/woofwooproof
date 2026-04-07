import React, { useEffect, useRef } from 'react';

// This component makes it incredibly easy to swap out imagery later.
// Replace the 'src' string wherever this is imported, or simply overwrite the file in the public/ folder.
const ImageBlock = ({ src, alt, aspectRatio = '16/9', className = '' }) => {
  const parts = aspectRatio.split('/');
  const ratio = parts.length === 2 ? (parts[1] / parts[0]) * 100 : 56.25;
  const imgRef = useRef(null);

  // Premium Parallax Effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!imgRef.current) return;
          const rect = imgRef.current.parentElement.getBoundingClientRect();
          const scrollPos = window.innerHeight - rect.top;
          
          if (scrollPos > 0 && rect.bottom > 0) {
            // Slow parallax translateY
            const offset = (scrollPos * 0.04) - 20;
            // The image scales down elegantly as you scroll
            const scale = Math.max(1, 1.15 - (scrollPos * 0.0001));
            imgRef.current.style.transform = `translateY(${offset}px) scale(${scale})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`image-block-wrapper ${className}`} 
      style={{ 
        position: 'relative', 
        width: '100%', 
        paddingBottom: `${ratio}%`,
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderRadius: '2px' // Subtle curve for premium feel
      }}
    >
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-5%',
          width: '110%',
          height: '130%',
          objectFit: 'cover',
          objectPosition: 'center',
          willChange: 'transform'
        }}
      />
    </div>
  );
};

export default ImageBlock;
