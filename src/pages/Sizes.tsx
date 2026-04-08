import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '@/src/constants/assets';
import { Button } from '@/src/components/Button';
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
      <section className="py-32 md:py-48 px-6 bg-brand-mint/10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-brand-navy leading-tight tracking-tighter">
              A size for <br />
              <span className="text-brand-text/30 italic">every spirit.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/60 max-w-2xl mx-auto leading-relaxed">
              From the smallest pups to the strongest giants, FUURRSBEE™ is designed to fit your dog's unique energy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Size Comparison Grid */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          {[
            { 
              size: "Small", 
              weight: "Up to 20lbs", 
              img: ASSETS.sizes.small, 
              scale: 0.8,
              desc: "Perfect for Jack Russells, Pugs, and smaller terriers. Lightweight and easy to carry.",
              features: ["Easy Grip", "Lightweight", "High-Visibility"]
            },
            { 
              size: "Medium", 
              weight: "20 - 50lbs", 
              img: ASSETS.sizes.medium, 
              scale: 1.0,
              desc: "The versatile choice for Border Collies, Beagles, and Spaniels. Balanced for distance.",
              features: ["All-Rounder", "Distance Flight", "Bite Resistant"]
            },
            { 
              size: "Large", 
              weight: "50lbs +", 
              img: ASSETS.sizes.large, 
              scale: 1.2,
              desc: "Built for the heavy hitters like Labs, Shepherds, and Goldens. Maximum durability.",
              features: ["Heavy Duty", "Reinforced Core", "Max Tension"]
            }
          ].map((item, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div className="text-center group space-y-8">
                  <div className="relative flex justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      style={{ scale: item.scale }}
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-brand-mint/20"
                    >
                      <img src={item.img} alt={item.size} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl text-brand-navy">{item.size}</h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-text/40">{item.weight}</p>
                    <p className="text-brand-text/60 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                    <div className="flex flex-wrap justify-center gap-2 pt-4">
                      {item.features.map((feature, j) => (
                        <span key={j} className="px-3 py-1 bg-brand-mint/20 text-brand-navy text-[10px] font-bold uppercase tracking-widest rounded-full">
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
      <section className="py-32 md:py-48 px-6 bg-brand-sky/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.sizes.comparison} 
                alt="Size Comparison" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <Info size={14} /> Size Guide
              </div>
              <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
                Not sure which <br />
                <span className="text-brand-text/30">to choose?</span>
              </h2>
              <p className="text-xl text-brand-text/60 leading-relaxed">
                If your dog is between sizes, we generally recommend sizing up for more durability, or sizing down if they prefer a lighter toy for long-distance fetch.
              </p>
              <div className="pt-4">
                <Button variant="outline">Download Size Guide (PDF)</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl mb-8">Ready to back the project?</h2>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-brand-navy">Back on Kickstarter</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
