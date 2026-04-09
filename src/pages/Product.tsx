import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants/assets';
import { Shield, Zap, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

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

export const Product = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-sky/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <Shield size={14} /> The Product
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-brand-navy tracking-tighter">
                FUURRSBEE™ <br />
                <span className="text-brand-text/30 italic">The Powerhouse.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-text/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The world's first patent-backed, plant-based answer to the dog toy aisle. Durable, ethical, and designed for real energy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button size="lg">Back the Project</Button>
                <Button variant="outline" size="lg">See the Science</Button>
              </div>
            </FadeIn>
          </div>

          <div className="relative flex justify-center items-center">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]"
            >
              <img 
                src={ASSETS.product.main} 
                alt="FUURRSBEE Product" 
                className="w-full h-full object-cover rounded-[4rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Breakdown */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.product.detail1} 
                alt="Product Detail" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <div className="space-y-12">
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
                Built to be <br />
                <span className="text-brand-text/30">Destroyed.</span>
              </h2>
              <p className="text-xl text-brand-text/60 leading-relaxed">
                We didn't just sketch a toy. We spent years in material research to ensure FUURRSBEE™ lives up to the hype.
              </p>
              <div className="space-y-8 pt-4">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-mint/20 rounded-xl flex items-center justify-center text-brand-navy shrink-0">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-navy">Plant-Based Core</h4>
                    <p className="text-brand-text/50 leading-relaxed">No plastic cores. No toxic glues. Just natural fibers structured for strength.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-lavender/20 rounded-xl flex items-center justify-center text-brand-navy shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-navy">Tension Layers</h4>
                    <p className="text-brand-text/50 leading-relaxed">Engineered tension layers that resist tearing from real bite force.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-peach/20 rounded-xl flex items-center justify-center text-brand-navy shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-navy">Real Durability</h4>
                    <p className="text-brand-text/50 leading-relaxed">Built for real dogs with real energy. It holds up longer than anything you've tried.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 md:py-48 px-6 bg-brand-lavender/10">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl text-brand-navy mb-8 tracking-tight">Real-world tested.</h2>
            <p className="text-xl text-brand-text/60 max-w-2xl mx-auto">
              From the dog park to the living room, FUURRSBEE™ is designed for every play style.
            </p>
          </FadeIn>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl group">
              <img src={ASSETS.product.action} alt="Action" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-navy/20" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold mb-2">High-Energy Fetch</h3>
                <p className="text-white/80">Aerodynamic design for long-distance flight.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl group">
              <img src={ASSETS.product.detail2} alt="Detail" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-navy/20" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold mb-2">Aggressive Chewing</h3>
                <p className="text-white/80">Reinforced edges to withstand the strongest jaws.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl mb-8">Ready to choose your size?</h2>
            <div className="flex justify-center">
              <motion.a 
                href="/sizes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-navy px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
              >
                View Sizes <ArrowRight className="inline-block ml-2" size={18} />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
