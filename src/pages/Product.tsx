import { motion } from 'motion/react';
import { Button } from '@/src/components/Button';
import { Link } from 'react-router-dom';

export const Product = () => {
  return (
    <div className="pt-20 bg-brand-dark">
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-48">
            <div className="lg:col-span-7">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[14vw] mb-12 leading-[0.8]"
              >
                FUURRSBEE™
              </motion.h1>
              <div className="space-y-6 text-3xl md:text-5xl text-brand-white/40 font-serif italic max-w-2xl">
                <p>Not a frisbee.</p>
                <p className="text-brand-white/60">Not a rope toy.</p>
                <p className="text-brand-white">Not something your dog forgets about.</p>
              </div>
            </div>
            <div className="lg:col-span-5 relative group">
              <div className="aspect-square bg-brand-white/5 overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000" 
                  alt="FUURRSBEE" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-full h-full border border-brand-white/10 -z-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-white/10 mb-48">
            {[
              { title: 'Throws clean', desc: 'Aerodynamic enough for a park, soft enough for a hallway.' },
              { title: 'Holds during tug', desc: 'Structural tension that resists tearing from multi-dog play.' },
              { title: 'Gives a solid grip', desc: 'Natural fiber texture that dogs prefer over cold rubber.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 bg-brand-dark group hover:bg-brand-white/5 transition-colors duration-500"
              >
                <span className="text-brand-straw text-sm mb-8 block opacity-40">0{i+1}</span>
                <h3 className="text-4xl mb-6 group-hover:translate-x-2 transition-transform duration-500">{feature.title}</h3>
                <p className="text-brand-white/60 leading-relaxed text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-48">
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <h2 className="text-6xl md:text-8xl mb-12">Material</h2>
                <p className="text-2xl md:text-3xl text-brand-white/80 leading-relaxed font-sans">
                  Built from compressed natural fibers, wrapped and tensioned to create structure.
                </p>
                <div className="mt-12 flex flex-wrap gap-12">
                  {['No plastic', 'No glue', 'No filler'].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-brand-straw rounded-full" />
                      <span className="text-brand-straw uppercase tracking-widest text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 aspect-square bg-brand-white/5 rounded-full p-12">
                <div className="w-full h-full border-2 border-dashed border-brand-white/20 rounded-full flex items-center justify-center text-center p-8">
                  <p className="text-brand-white/40 uppercase tracking-widest text-xs">Structural Core Visualization</p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-6xl md:text-8xl mb-12">Expectation</h2>
              <div className="space-y-12 text-3xl md:text-4xl text-brand-white/80 leading-relaxed font-serif italic">
                <p>“We’re not promising forever.”</p>
                <p className="text-brand-white text-5xl md:text-7xl not-italic font-serif">
                  We’re saying: it lasts longer than it should — for what it’s made of.
                </p>
              </div>
            </section>

            <section className="p-20 bg-brand-beige text-brand-dark relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-6xl md:text-8xl mb-12">This is just the start.</h2>
                <p className="text-2xl mb-16 opacity-80 max-w-2xl">
                  More designs are already in development. Same thinking. Same foundation.
                </p>
                <Link to="/back-us">
                  <Button size="lg" className="bg-brand-dark text-brand-white rounded-none px-12">Back the first production run</Button>
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-dark/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
