import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../constants/assets';
import { Button } from '../components/Button';
import { ArrowRight, Info } from 'lucide-react';

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

export const Sizes = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="section-padding px-6 bg-brand-mint/10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-brand-navy leading-tight tracking-tighter">
              A size for <br />
              <span className="text-brand-text/30 italic">every spirit.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text/60 max-w-xl mx-auto leading-relaxed">
              From the smallest pups to the strongest giants, FUURRSBEE™ is designed to fit your dog's unique energy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Size Comparison Grid */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
          {[
            { 
              size: "Small", 
              dimensions: "7” diameter × 0.5” thick", 
              img: ASSETS.sizes.small, 
              scale: 0.8,
              desc: "Terriers, Toy breeds",
              features: ["Easy Grip", "Lightweight", "High-Visibility"]
            },
            { 
              size: "Medium", 
              dimensions: "9” diameter × 1” thick", 
              img: ASSETS.sizes.medium, 
              scale: 1.0,
              desc: "Amstaffs, Retrievers",
              features: ["All-Rounder", "Distance Flight", "Bite Resistant"]
            },
            { 
              size: "Large", 
              dimensions: "9” diameter × 1.5” thick", 
              img: ASSETS.sizes.large, 
              scale: 1.2,
              desc: "Labs, Cane Corsos",
              features: ["Heavy Duty", "Reinforced Core", "Max Tension"]
            }
          ].map((item, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div className="text-center group space-y-6">
                  <div className="relative flex justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      style={{ scale: item.scale }}
                      className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-brand-mint/20"
                    >
                      <img src={item.img} alt={item.size} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl text-brand-navy">{item.size}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-text/40">{item.dimensions}</p>
                    <p className="text-sm text-brand-text/60 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {item.features.map((feature, j) => (
                        <span key={j} className="px-2.5 py-0.5 bg-brand-mint/20 text-brand-navy text-[9px] font-bold uppercase tracking-widest rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="section-padding px-6 bg-brand-sky/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.sizes.comparison} 
                alt="Size Comparison" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                <Info size={14} /> Size Guide
              </div>
              <h2 className="text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight">
                Not sure which <br />
                <span className="text-brand-text/30">to choose?</span>
              </h2>
              <p className="text-lg text-brand-text/60 leading-relaxed">
                If your dog is between sizes, we generally recommend sizing up for more durability, or sizing down if they prefer a lighter toy for long-distance fetch.
              </p>
              <div className="pt-2">
                <Link to="/back-us">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl mb-6">Ready to back the project?</h2>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-brand-navy">Back on Kickstarter</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
