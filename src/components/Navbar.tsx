import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Story', path: '/story' },
  { name: 'Product', path: '/product' },
  { name: 'How It’s Made', path: '/how-its-made' },
  { name: 'Materials', path: '/materials' },
  { name: 'Mission', path: '/mission' },
  { name: 'Back Us', path: '/back-us' },
  { name: 'Retail', path: '/retail' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(14, 14, 14, 0)', 'rgba(14, 14, 14, 0.8)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(242, 242, 242, 0)', '1px solid rgba(242, 242, 242, 0.05)']
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-4">
          <div className="w-8 h-8 bg-brand-straw rounded-full group-hover:scale-110 transition-transform duration-500" />
          <span className="text-xl font-serif tracking-tighter text-brand-white">
            WOOF WOOF PROOF
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] font-sans transition-all duration-300 relative group",
                location.pathname === link.path ? "text-brand-straw" : "text-brand-white/50 hover:text-brand-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-px bg-brand-straw transition-all duration-300 group-hover:w-full",
                location.pathname === link.path && "w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-24 left-0 right-0 bg-brand-dark border-b border-brand-white/10 overflow-hidden"
          >
            <div className="px-8 py-12 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "text-4xl font-serif transition-colors",
                      location.pathname === link.path ? "text-brand-straw" : "text-brand-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
