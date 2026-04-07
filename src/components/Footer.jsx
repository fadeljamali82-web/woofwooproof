import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ padding: '80px 0 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', opacity: 0.6 }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Woof Woof Proof.</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>Built because nothing else worked.</p>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/story">Story</Link>
          <Link to="/product">Product</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/back-us">Back Us</Link>
        </div>
        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>&copy; {new Date().getFullYear()} Woof Woof Proof. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
