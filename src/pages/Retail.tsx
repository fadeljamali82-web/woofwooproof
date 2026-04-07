import { motion } from 'motion/react';
import { Button } from '@/src/components/Button';
import { Link } from 'react-router-dom';

export const Retail = () => {
  return (
    <div className="pt-20 bg-brand-dark">
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[10vw] mb-48 leading-[0.85] text-balance"
          >
            This doesn’t sit <span className="text-brand-straw italic">quietly on a shelf.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brand-white/10 mb-48 border border-brand-white/10">
            <div className="bg-brand-dark p-16 md:p-24 group hover:bg-brand-white/5 transition-colors duration-700">
              <p className="text-brand-straw text-sm uppercase tracking-[0.4em] font-medium mb-12">Small Business</p>
              <div className="space-y-12 text-2xl md:text-3xl text-brand-white/80 leading-relaxed">
                <p>You don’t need more inventory. You need something people stop for.</p>
                <p className="text-brand-white text-4xl md:text-5xl font-serif italic">This gets picked up. Talked about. Remembered.</p>
              </div>
            </div>
            <div className="bg-brand-dark p-16 md:p-24 group hover:bg-brand-white/5 transition-colors duration-700">
              <p className="text-brand-straw text-sm uppercase tracking-[0.4em] font-medium mb-12">Corporate</p>
              <div className="space-y-12 text-2xl md:text-3xl text-brand-white/80 leading-relaxed">
                <p>This introduces a new material category.</p>
                <p className="text-brand-white text-4xl md:text-5xl font-serif italic">Clear differentiation. Strong shelf presence. Premium positioning without confusion.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-48">
            {['Looks different', 'Feels different', 'Easy to explain', 'Strong customer reaction'].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 border border-brand-white/5"
              >
                <p className="text-3xl font-serif italic">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-none px-12 py-6 text-xl w-full sm:w-auto">Request a sample</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="rounded-none px-12 py-6 text-xl w-full sm:w-auto">Start a conversation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
