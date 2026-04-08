import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Story', href: '/story' },
  { name: 'Product', href: '/product' },
  { name: 'Sizes', href: '/sizes' },
  { name: 'Materials', href: '/materials' },
  { name: 'Future', href: '/future' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-card rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-white/80' : 'bg-white/40'}`}>
          <Link to="/" className="text-xl font-display font-bold text-brand-navy tracking-tighter">
            WoofWoofProof
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[10px] font-bold transition-colors uppercase tracking-[0.2em] ${
                  location.pathname === link.href ? 'text-brand-navy' : 'text-brand-navy/40 hover:text-brand-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/back-us"
              className="bg-brand-navy text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-navy/90 transition-colors"
            >
              Back Us
            </Link>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-brand-navy/10">
              <a 
                href="https://www.facebook.com/people/woofwoofproofcom/100093546567228/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-navy/40 hover:text-brand-navy transition-colors"
              >
                <Facebook size={14} />
              </a>
              <a 
                href="https://www.instagram.com/wwpdogtoys?igsh=eXhvdXEweXQyZGJo&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-navy/40 hover:text-brand-navy transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="https://x.com/wwpdogtoys" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-navy/40 hover:text-brand-navy transition-colors"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-brand-navy p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full px-6 pt-4 lg:hidden"
          >
            <div className="glass-card rounded-[2rem] p-8 flex flex-col gap-6 bg-white/95">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-display font-bold tracking-tight ${
                    location.pathname === link.href ? 'text-brand-navy' : 'text-brand-navy/40'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/back-us"
                onClick={() => setIsOpen(false)}
                className="bg-brand-navy text-white text-center py-4 rounded-2xl text-lg font-bold"
              >
                Back Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
