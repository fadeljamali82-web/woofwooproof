import { motion } from 'motion/react';

export const Materials = () => {
  return (
    <div className="pt-20 bg-brand-dark">
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[12vw] mb-32 max-w-5xl leading-[0.85]"
          >
            Nothing inside this is there to <span className="text-brand-straw italic">fake strength.</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-48 items-start">
            <div className="space-y-16 text-2xl md:text-3xl text-brand-white/80">
              <div className="space-y-8">
                <p>Most toys rely on plastic cores, glue, and fillers.</p>
                <p className="text-brand-white text-5xl md:text-7xl font-serif leading-tight">We removed all of it.</p>
              </div>
              
              <div className="pt-12 space-y-12">
                <p className="text-sm uppercase tracking-[0.4em] text-brand-straw font-medium">What you’re holding:</p>
                <ul className="space-y-8 text-4xl md:text-6xl font-serif italic">
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-8"
                  >
                    <div className="w-12 h-px bg-brand-straw" />
                    Dense natural structure
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-8"
                  >
                    <div className="w-12 h-px bg-brand-straw" />
                    Tight outer wrap
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-8"
                  >
                    <div className="w-12 h-px bg-brand-straw" />
                    Breathable build
                  </motion.li>
                </ul>
              </div>
            </div>
            
            <div className="bg-brand-beige p-16 md:p-24 text-brand-dark relative group">
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl mb-12">What we don’t say</h2>
                <p className="text-2xl leading-relaxed opacity-80 font-sans">
                  The exact process — how it’s formed and held — that’s what we’ve spent time developing.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
            </div>
          </div>

          <div className="text-center py-64 border-y border-brand-white/5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[8vw] font-serif italic leading-[0.85] text-balance"
            >
              You don’t need to see everything. <br />
              <span className="text-brand-white not-italic">You’ll feel the difference.</span>
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};
