import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="pt-20 bg-brand-dark">
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
            <div className="lg:col-span-10">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[12vw] mb-24 leading-[0.85]"
              >
                His name is DC. <br />
                <span className="text-brand-straw italic">And he ruined everything.</span>
              </motion.h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5 lg:col-start-2">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="aspect-[3/4] overflow-hidden grayscale relative group"
              >
                <motion.img 
                  style={{ y: imgY }}
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=2000" 
                  alt="DC the dog" 
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-1000" />
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
              <div className="max-w-xl space-y-24 text-2xl md:text-3xl text-brand-white/80 leading-relaxed font-sans">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <p>We tried what everyone tries: rubber, rope, “tough” toys.</p>
                  <p className="text-brand-white/40">Same result.</p>
                  <p>They broke — or didn’t feel right giving to him.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <p>At some point, you stop looking for better products.</p>
                  <p className="text-brand-white text-4xl font-serif italic border-l-2 border-brand-straw pl-8">
                    You start asking: what actually makes sense?
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <p>We tested materials most toys don’t use.</p>
                  <p>Most failed.</p>
                  <p className="text-brand-straw text-5xl font-serif">One didn’t.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <p>That version turned into something real.</p>
                  <p className="text-brand-white/40">Not perfect. Not indestructible.</p>
                  <p className="text-brand-white text-5xl md:text-7xl font-serif italic leading-tight">
                    But finally right.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
