import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { Product } from './pages/Product';
import { Sizes } from './pages/Sizes';
import { Materials } from './pages/Materials';
import { HowItsMade } from './pages/HowItsMade';
import { Ethical } from './pages/Ethical';
import { Future } from './pages/Future';
import { BackUs } from './pages/BackUs';
import { Navbar } from './components/Navbar';
import { AnimatePresence } from 'motion/react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-brand-cloud flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story />} />
              <Route path="/product" element={<Product />} />
              <Route path="/sizes" element={<Sizes />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/how-its-made" element={<HowItsMade />} />
              <Route path="/ethical" element={<Ethical />} />
              <Route path="/future" element={<Future />} />
              <Route path="/back-us" element={<BackUs />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer className="py-24 px-6 bg-white border-t border-brand-lavender text-center">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-display font-extrabold text-brand-navy mb-4 tracking-tighter">WoofWoofProof™</h3>
            <p className="text-brand-text/60 max-w-md mx-auto mb-12 text-lg">
              Better play. Built from plants. Patent-backed innovation for the modern dog.
            </p>
            <div className="flex justify-center gap-8 text-brand-navy/40 mb-12">
              <a 
                href="https://www.facebook.com/people/woofwoofproofcom/100093546567228/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-navy transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/wwpdogtoys?igsh=eXhvdXEweXQyZGJo&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-navy transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/wwpdogtoys" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-navy transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.kickstarter.com/projects/woofwoofproof/eco-friendly-pet-toys-safer-play-sustainable-future" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-navy transition-colors text-[10px] font-bold uppercase tracking-[0.2em] flex items-center"
              >
                Kickstarter
              </a>
            </div>
            <div className="mt-20 pt-12 border-t border-brand-lavender/30 flex flex-col items-center gap-4">
              <div className="text-xs font-medium uppercase tracking-widest opacity-30">
                © 2026 WoofWoofProof. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
