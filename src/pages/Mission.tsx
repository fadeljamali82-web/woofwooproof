import { motion } from 'motion/react';

export const Mission = () => {
  return (
    <div className="pt-20 bg-brand-dark">
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[12vw] mb-48 leading-[0.85]"
          >
            We’re not trying to <br />
            <span className="text-brand-straw italic text-6xl sm:text-7xl md:text-8xl lg:text-[14vw]">change everything.</span>
          </motion.h1>

          <div className="max-w-2xl mx-auto space-y-24 text-2xl md:text-3xl text-brand-white/80 leading-relaxed">
            <p className="text-brand-straw text-sm uppercase tracking-[0.4em] font-medium">Just one category.</p>
            
            <div className="space-y-12">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl"
              >
                Better materials.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl"
              >
                Less waste.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl"
              >
                Products that don’t feel disposable.
              </motion.p>
            </div>

            <div className="pt-48 border-t border-brand-white/10">
              <motion.p 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif italic leading-tight text-balance"
              >
                If enough people choose better — that’s where change starts.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
