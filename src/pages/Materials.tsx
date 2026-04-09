import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants/assets';
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-brand-mint/10">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.95] tracking-tighter text-brand-navy">
              Built from <br />
              <span className="text-brand-text/30 italic">Plants.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text/60 max-w-xl mx-auto leading-relaxed">
              Why we chose natural fibers over synthetic rubber and plastic.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Plants? */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-mint/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                <Leaf size={14} /> The Science
              </div>
              <h2 className="text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight">
                The high-tension <br />
                <span className="text-brand-text/30">Advantage.</span>
              </h2>
              <p className="text-lg text-brand-text/60 leading-relaxed">
                Natural fibers aren't just "eco-friendly"—they're structurally superior for certain types of play. When compressed under high tension, they provide a unique bite-feel that dogs love and durability that synthetics struggle to match.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-brand-mint/10 flex items-center justify-center text-brand-navy">
                    <Shield size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy">Bite Resistance</h4>
                  <p className="text-brand-text/50 text-sm">Fibers interlock to resist tearing, unlike rubber which can split under pressure.</p>
                </div>
                <div className="space-y-3">
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
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
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
      <section className="section-padding px-6 bg-brand-sky/10">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
              Better for the dog. <br />
              <span className="text-brand-text/30 italic">Better for the earth.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
              <div className="glass-card p-8 rounded-[2rem] bg-white/60">
                <Globe className="text-brand-sky mb-4" size={28} />
                <h3 className="text-xl text-brand-navy mb-2">Renewable</h3>
                <p className="text-sm text-brand-text/50 leading-relaxed">Sourced from fast-growing plant species that require minimal water and zero pesticides.</p>
              </div>
              <div className="glass-card p-8 rounded-[2rem] bg-white/60">
                <Recycle className="text-brand-mint mb-4" size={28} />
                <h3 className="text-xl text-brand-navy mb-2">Compostable</h3>
                <p className="text-sm text-brand-text/50 leading-relaxed">Designed to return to the earth at the end of its life, not sit in a landfill for centuries.</p>
              </div>
              <div className="glass-card p-8 rounded-[2rem] bg-white/60">
                <CheckCircle2 className="text-brand-peach mb-4" size={28} />
                <h3 className="text-xl text-brand-navy mb-2">Non-Toxic</h3>
                <p className="text-sm text-brand-text/50 leading-relaxed">Zero glues, zero synthetic dyes, zero phthalates. Just pure, safe materials.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* End of Life */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.materials.compost} 
                alt="Compost" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight">
                End-of-life <br />
                <span className="text-brand-text/30">Thinking.</span>
              </h2>
              <p className="text-lg text-brand-text/60 leading-relaxed">
                Most dog toys are destined for the trash. We're building a circular system where your old FUURRSBEE™ can be composted at home or returned to us for industrial processing.
              </p>
              <div className="pt-2">
                <p className="text-brand-navy font-bold italic text-base">"We don't just care about the play; we care about the legacy."</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl mb-6">See how we build it.</h2>
            <div className="flex justify-center">
              <motion.a 
                href="/how-its-made"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-navy px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs"
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
