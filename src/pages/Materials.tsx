import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '@/src/constants/assets';
import { Leaf, Shield, Globe, Recycle, CheckCircle2 } from 'lucide-react';

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

export const Materials = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-mint/10">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={ASSETS.materials.texture} 
            alt="Texture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] tracking-tighter text-brand-navy">
              Built from <br />
              <span className="text-brand-text/30 italic">Plants.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/60 max-w-2xl mx-auto leading-relaxed">
              Why we chose natural fibers over synthetic rubber and plastic.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Plants? */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-mint/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <Leaf size={14} /> The Science
              </div>
              <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
                The high-tension <br />
                <span className="text-brand-text/30">Advantage.</span>
              </h2>
              <p className="text-xl text-brand-text/60 leading-relaxed">
                Natural fibers aren't just "eco-friendly"—they're structurally superior for certain types of play. When compressed under high tension, they provide a unique bite-feel that dogs love and durability that synthetics struggle to match.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-brand-mint/10 flex items-center justify-center text-brand-navy">
                    <Shield size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy">Bite Resistance</h4>
                  <p className="text-brand-text/50 text-sm">Fibers interlock to resist tearing, unlike rubber which can split under pressure.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-brand-mint/10 flex items-center justify-center text-brand-navy">
                    <Recycle size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy">Zero Microplastics</h4>
                  <p className="text-brand-text/50 text-sm">No plastic particles left in the park or ingested by your dog.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.materials.raw} 
                alt="Raw Materials" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sustainability Angle */}
      <section className="py-32 md:py-48 px-6 bg-brand-sky/10">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl text-brand-navy leading-tight tracking-tight">
              Better for the dog. <br />
              <span className="text-brand-text/30 italic">Better for the earth.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left">
              <div className="glass-card p-10 rounded-[2.5rem] bg-white/60">
                <Globe className="text-brand-sky mb-6" size={32} />
                <h3 className="text-2xl text-brand-navy mb-4">Renewable</h3>
                <p className="text-brand-text/50 leading-relaxed">Sourced from fast-growing plant species that require minimal water and zero pesticides.</p>
              </div>
              <div className="glass-card p-10 rounded-[2.5rem] bg-white/60">
                <Recycle className="text-brand-mint mb-6" size={32} />
                <h3 className="text-2xl text-brand-navy mb-4">Compostable</h3>
                <p className="text-brand-text/50 leading-relaxed">Designed to return to the earth at the end of its life, not sit in a landfill for centuries.</p>
              </div>
              <div className="glass-card p-10 rounded-[2.5rem] bg-white/60">
                <CheckCircle2 className="text-brand-peach mb-6" size={32} />
                <h3 className="text-2xl text-brand-navy mb-4">Non-Toxic</h3>
                <p className="text-brand-text/50 leading-relaxed">Zero glues, zero synthetic dyes, zero phthalates. Just pure, safe materials.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* End of Life */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.materials.compost} 
                alt="Compost" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
                End-of-life <br />
                <span className="text-brand-text/30">Thinking.</span>
              </h2>
              <p className="text-xl text-brand-text/60 leading-relaxed">
                Most dog toys are destined for the trash. We're building a circular system where your old FUURRSBEE™ can be composted at home or returned to us for industrial processing.
              </p>
              <div className="pt-4">
                <p className="text-brand-navy font-bold italic text-lg">"We don't just care about the play; we care about the legacy."</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl mb-8">See how we build it.</h2>
            <div className="flex justify-center">
              <motion.a 
                href="/how-its-made"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-navy px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
              >
                The R&D Process
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
