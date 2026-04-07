import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { Product } from './pages/Product';
import { HowItsMade } from './pages/HowItsMade';
import { Materials } from './pages/Materials';
import { Mission } from './pages/Mission';
import { BackUs } from './pages/BackUs';
import { Retail } from './pages/Retail';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/story" element={<PageWrapper><Story /></PageWrapper>} />
        <Route path="/product" element={<PageWrapper><Product /></PageWrapper>} />
        <Route path="/how-its-made" element={<PageWrapper><HowItsMade /></PageWrapper>} />
        <Route path="/materials" element={<PageWrapper><Materials /></PageWrapper>} />
        <Route path="/mission" element={<PageWrapper><Mission /></PageWrapper>} />
        <Route path="/back-us" element={<PageWrapper><BackUs /></PageWrapper>} />
        <Route path="/retail" element={<PageWrapper><Retail /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <footer className="py-20 px-6 border-t border-brand-white/5 bg-brand-dark text-brand-white/40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h2 className="text-2xl font-serif text-brand-white mb-4">WOOF WOOF PROOF</h2>
              <p className="max-w-xs">Built for real play. Not just the first five minutes.</p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm uppercase tracking-widest">
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-brand-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-brand-white transition-colors">Twitter</a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-brand-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-brand-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-white/5 text-xs">
            © {new Date().getFullYear()} Woof Woof Proof. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}
