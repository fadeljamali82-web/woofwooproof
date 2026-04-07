import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="btn-icon"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Button = ({ children, to, onClick, variant = 'primary', className = '' }) => {
  const baseClass = `btn ${variant === 'outline' ? 'btn-outline' : ''} ${className}`;
  
  if (to) {
    return <Link to={to} className={baseClass}><span>{children}</span><ArrowIcon /></Link>;
  }
  return (
    <button onClick={onClick} className={baseClass}>
      <span>{children}</span><ArrowIcon />
    </button>
  );
};

export default Button;
