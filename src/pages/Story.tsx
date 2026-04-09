import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants/assets';
import { Shield, Heart, AlertCircle, CheckCircle2 } from 'lucide-react';

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

export const Story = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={ASSETS.story.dog} 
            alt="DC the dog" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.95] tracking-tighter">
              It started with <br />
              <span className="text-white/40 italic">one dog.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
              Meet DC. The professional toy destroyer who inspired a plant-based revolution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                <AlertCircle size={14} /> The Problem
              </div>
              <h2 className="text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight">
                The "Indestructible" <br />
                <span className="text-brand-text/30">Myth.</span>
              </h2>
              <p className="text-lg text-brand-text/60 leading-relaxed">
                We spent hundreds on toys labeled "indestructible." DC proved them wrong in minutes. But the durability wasn't the only issue.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-navy shrink-0">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy">Harsh Synthetics</h4>
                    <p className="text-sm text-brand-text/50">Most durable toys are made of petroleum-based plastics and synthetic rubbers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-navy shrink-0">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy">Toxic Fillers</h4>
                    <p className="text-sm text-brand-text/50">Hidden glues and chemical dyes that dogs ingest during heavy play.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.story.workshop} 
                alt="Workshop" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Decision */}
      <section className="section-padding px-6 bg-brand-sky/10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
              "If it doesn't exist, <br />
              <span className="text-brand-text/30 italic">we build it."</span>
            </h2>
            <div className="w-16 h-1 bg-brand-sky mx-auto rounded-full my-8" />
            <p className="text-xl text-brand-text/60 leading-relaxed italic font-display">
              We stopped looking for the perfect toy and started researching the perfect material. We wanted something as strong as synthetic rubber but as honest as a plant.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.story.founder} 
                alt="Founder" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-mint/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                <CheckCircle2 size={14} /> The Result
              </div>
              <h2 className="text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight">
                FUURRSBEE™ is the <br />
                <span className="text-brand-text/30">Proof.</span>
              </h2>
              <p className="text-lg text-brand-text/60 leading-relaxed">
                After years of R&D, we found the answer in high-tension natural fibers. FUURRSBEE™ isn't just a product; it's our commitment to safer, better play for dogs like DC.
              </p>
              <div className="pt-6 border-t border-brand-lavender">
                <p className="text-xl font-display font-bold text-brand-navy">Fadel A. Jamali</p>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-text/30">Founder & CEO, WoofWoofProof™</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl mb-6">Ready to see the product?</h2>
            <div className="flex justify-center">
              <motion.a 
                href="/product"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-navy px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs"
              >
                Explore FUURRSBEE™
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
