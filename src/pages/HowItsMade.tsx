import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants/assets';
import { Zap, Shield, Award, Microscope, Settings } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
  >
    {children}
  </motion.div>
);

export const HowItsMade = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="section-padding px-6 bg-brand-sky/10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-brand-navy leading-tight tracking-tighter">
              Real R&D. <br />
              <span className="text-brand-text/30 italic">Real Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text/60 max-w-xl mx-auto leading-relaxed">
              We didn't just sketch a toy. We engineered a solution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Process Grid */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Material Discovery", 
                desc: "Testing over 50 natural fiber blends for bite resistance and tensile strength.",
                icon: <Microscope size={20} />
              },
              { 
                step: "02", 
                title: "Tension Engineering", 
                desc: "Developing the exact wrap pressure required to create a core that resists tearing.",
                icon: <Settings size={20} />
              },
              { 
                step: "03", 
                title: "Real-Dog Trials", 
                desc: "Months of testing with the world's most aggressive chewers (including DC).",
                icon: <Zap size={20} />
              },
              { 
                step: "04", 
                title: "Patent Filing", 
                desc: "Protecting our unique structural innovation to ensure quality standards.",
                icon: <Shield size={20} />
              }
            ].map((item, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="space-y-4 group">
                    <div className="w-12 h-12 bg-brand-sky/20 rounded-xl flex items-center justify-center text-brand-navy group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky">{item.step}</span>
                      <h3 className="text-xl text-brand-navy">{item.title}</h3>
                      <p className="text-brand-text/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Detail */}
      <section className="section-padding px-6 bg-brand-lavender/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.story.workshop} 
                alt="Workshop" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lavender/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                <Award size={14} /> Patent-Backed
              </div>
              <h2 className="text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight">
                Structural <br />
                <span className="text-brand-text/30">Innovation.</span>
              </h2>
              <p className="text-lg text-brand-text/60 leading-relaxed">
                Our patent-pending structural design uses a multi-layered tension system. This allows the toy to maintain its shape and integrity even after thousands of bites.
              </p>
              <div className="pt-2">
                <p className="text-brand-navy font-bold italic text-base">"We simplified the engineering so the play could be complex."</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl mb-6">Meet our artisan partners.</h2>
            <div className="flex justify-center">
              <motion.a 
                href="/ethical"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-navy px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs"
              >
                Ethical Production
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
