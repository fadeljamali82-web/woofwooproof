import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <Link to="/">Woof Woof Proof.</Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/story">Story</Link>
          <Link to="/product">Product</Link>
          <Link to="/how-its-made">How It’s Made</Link>
          <Link to="/materials">Materials</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/retail">Retail</Link>
          <Link to="/back-us" className="nav-cta">Back Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
