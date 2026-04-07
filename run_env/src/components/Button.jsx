import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '' }) => {
  const baseClass = `btn ${variant === 'outline' ? 'btn-outline' : ''} ${className}`;
  
  if (to) {
    return <Link to={to} className={baseClass}>{children}</Link>;
  }
  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
};

export default Button;
