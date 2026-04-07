import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); 
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div
      className={`fade-in-section ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeIn;
