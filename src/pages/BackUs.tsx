import { motion } from 'motion/react';
import { Button } from '@/src/components/Button';
import { Link } from 'react-router-dom';

export const BackUs = () => {
  return (
    <div className="pt-20 bg-brand-dark">
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48 items-start">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[10vw] mb-16 leading-[0.85] text-balance"
              >
                Launching mid-May. <br />
                <span className="text-brand-straw italic text-6xl sm:text-7xl md:text-8xl lg:text-[12vw]">Delivered within 90 days.</span>
              </motion.h1>
              
              <div className="space-y-16">
                <div className="flex items-center gap-12 group">
                  <div className="w-32 h-px bg-brand-straw group-hover:w-48 transition-all duration-1000" />
                  <p className="text-2xl md:text-3xl uppercase tracking-widest font-serif italic">Campaign: 60 days</p>
                </div>
                <div className="flex items-center gap-12 group">
                  <div className="w-32 h-px bg-brand-straw group-hover:w-48 transition-all duration-1000" />
                  <p className="text-2xl md:text-3xl uppercase tracking-widest font-serif italic">Production + delivery: within 90 days</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-16 text-2xl text-brand-white/80 leading-relaxed pt-12">
              <div className="p-12 border border-brand-white/10 bg-brand-white/5">
                <p className="text-brand-white font-medium text-3xl mb-8 font-serif">This isn’t a concept.</p>
                <p className="mb-8">The product is built. Tested. Refined.</p>
                <p>Kickstarter is how we scale it — carefully.</p>
              </div>
              
              <div className="flex flex-col gap-6">
                <Link to="/contact">
                  <Button size="lg" className="rounded-none py-6 text-xl w-full">Back the project</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="rounded-none py-6 text-xl w-full">Get early access</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
