import { motion } from 'motion/react';

export const HowItsMade = () => {
  return (
    <div className="pt-20 bg-brand-dark">
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[12vw] mb-32 leading-[0.85]">
              No mold. No injection. <br />
              <span className="text-brand-straw italic">No shortcuts.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
            <div className="lg:col-span-8 lg:col-start-3 space-y-32">
              {[
                "Natural fibers are compressed",
                "Structure is formed through pressure",
                "Outer layers are wrapped tightly",
                "Everything is locked through tension"
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="flex items-start gap-12 group"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-brand-straw font-serif text-5xl mb-4">0{i + 1}</span>
                    <div className="w-px h-24 bg-gradient-to-b from-brand-straw to-transparent" />
                  </div>
                  <div className="pt-2">
                    <p className="text-5xl md:text-7xl group-hover:text-brand-straw transition-colors duration-500">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center py-48 border-t border-brand-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-straw/5 blur-3xl rounded-full scale-150" />
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl text-brand-white/80 leading-relaxed relative z-10 font-serif italic"
            >
              The strength comes from how it’s built — <br />
              <span className="text-brand-white font-medium not-italic text-5xl md:text-7xl block mt-8">not what’s hidden inside.</span>
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};
