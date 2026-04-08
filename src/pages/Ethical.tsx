import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '@/src/constants/assets';
import { Heart, Globe, Users, CheckCircle2 } from 'lucide-react';

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

export const Ethical = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-peach/10">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={ASSETS.ethical.community} 
            alt="Community" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] tracking-tighter text-brand-navy">
              Crafted with <br />
              <span className="text-brand-text/30 italic">Purpose.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/60 max-w-2xl mx-auto leading-relaxed">
              Empowering communities through ethical production and artisan craftsmanship.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Partnership */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <Globe size={14} /> Our Partners
              </div>
              <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
                North African <br />
                <span className="text-brand-text/30">Artisans.</span>
              </h2>
              <p className="text-xl text-brand-text/60 leading-relaxed">
                Every FUURRSBEE™ is hand-finished by our artisan partners in North Africa. This isn't just about production; it's about preserving traditional craftsmanship and providing sustainable livelihoods.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-navy">
                    <Heart size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy">Social Impact</h4>
                  <p className="text-brand-text/50 text-sm">Approximately 80% of our artisan partners are single mothers, providing essential support for their families.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-navy">
                    <Users size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy">Fair Wages</h4>
                  <p className="text-brand-text/50 text-sm">We ensure fair living wages and safe working conditions for every person in our supply chain.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.ethical.artisan} 
                alt="Artisan" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 md:py-48 px-6 bg-brand-sky/10">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl text-brand-navy leading-tight tracking-tight">
              Values in every <br />
              <span className="text-brand-text/30 italic">stitch.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left">
              <div className="glass-card p-10 rounded-[2.5rem] bg-white/60">
                <h3 className="text-2xl text-brand-navy mb-4">Respect</h3>
                <p className="text-brand-text/50 leading-relaxed">We treat our partners as equals, valuing their expertise and cultural heritage.</p>
              </div>
              <div className="glass-card p-10 rounded-[2.5rem] bg-white/60">
                <h3 className="text-2xl text-brand-navy mb-4">Transparency</h3>
                <p className="text-brand-text/50 leading-relaxed">We maintain open communication and full visibility into our production processes.</p>
              </div>
              <div className="glass-card p-10 rounded-[2.5rem] bg-white/60">
                <h3 className="text-2xl text-brand-navy mb-4">Quality</h3>
                <p className="text-brand-text/50 leading-relaxed">Hand-finishing ensures a level of detail and quality that mass production can't match.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl mb-8">See the future of play.</h2>
            <div className="flex justify-center">
              <motion.a 
                href="/future"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-navy px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
              >
                Future Products
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
