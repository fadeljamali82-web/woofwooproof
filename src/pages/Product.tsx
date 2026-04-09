import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-sky/10 py-20 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                <Shield size={14} /> The Product
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-brand-navy tracking-tighter text-balance">
                FUURRSBEE™ <br />
                <span className="text-brand-text/30 italic">The Powerhouse.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-text/60 max-w-lg mx-auto lg:mx-0 leading-relaxed text-balance">
                The world's first patent-backed, plant-based answer to the dog toy aisle. Durable, ethical, and designed for real energy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button size="lg" className="w-full sm:w-auto">Back the Project</Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">See the Science</Button>
              </div>
            </FadeIn>
          </div>

          <div className="relative flex justify-center items-center">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] shrink-0"
            >
              <img 
                src={ASSETS.product.main} 
                alt="FUURRSBEE Product" 
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Breakdown */}
      <section className="section-padding px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.product.detail1} 
                alt="Product Detail" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight text-balance">
                Built to be <br />
                <span className="text-brand-text/30">Destroyed.</span>
              </h2>
              <p className="text-lg text-brand-text/60 leading-relaxed text-balance">
                We didn't just sketch a toy. We spent years in material research to ensure FUURRSBEE™ lives up to the hype.
              </p>
              <div className="space-y-8 pt-4">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-brand-mint/20 rounded-xl flex items-center justify-center text-brand-navy shrink-0">
                    <Leaf size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-brand-navy">Plant-Based Core</h4>
                    <p className="text-sm text-brand-text/50 leading-relaxed">No plastic cores. No toxic glues. Just natural fibers structured for strength.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-brand-lavender/20 rounded-xl flex items-center justify-center text-brand-navy shrink-0">
                    <Shield size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-brand-navy">Tension Layers</h4>
                    <p className="text-sm text-brand-text/50 leading-relaxed">Engineered tension layers that resist tearing from real bite force.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-brand-peach/20 rounded-xl flex items-center justify-center text-brand-navy shrink-0">
                    <Zap size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-brand-navy">Real Durability</h4>
                    <p className="text-sm text-brand-text/50 leading-relaxed">Built for real dogs with real energy. It holds up longer than anything you've tried.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding px-6 bg-brand-lavender/10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-brand-navy mb-6 tracking-tight text-balance">Real-world tested.</h2>
            <p className="text-lg text-brand-text/60 max-w-xl mx-auto text-balance">
              From the dog park to the living room, FUURRSBEE™ is designed for every play style.
            </p>
          </FadeIn>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl group">
              <img src={ASSETS.product.action} alt="Action" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-navy/20" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-1">High-Energy Fetch</h3>
                <p className="text-sm text-white/80">Aerodynamic design for long-distance flight.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl group">
              <img src={ASSETS.product.detail2} alt="Detail" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-navy/20" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-1">Aggressive Chewing</h3>
                <p className="text-sm text-white/80">Reinforced edges to withstand the strongest jaws.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl mb-6 text-balance">Ready to choose your size?</h2>
            <div className="flex justify-center">
              <Link to="/sizes">
                <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90">
                  View Sizes <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
