import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants/assets';
import { SafeImage } from '../components/SafeImage';
import { Heart, Globe, Users } from 'lucide-react';

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-brand-peach/10">
        <div className="absolute inset-0 z-0 opacity-20">
          <SafeImage
            src={ASSETS.ethical.community}
            alt="Community"
            className="w-full h-full object-cover"
            fallbackVariant="peach"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.95] tracking-tighter text-brand-navy">
              Crafted with <br />
              <span className="text-brand-text/30 italic">Purpose.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text/60 max-w-xl mx-auto leading-relaxed">
              Empowering communities through ethical production and artisan
              craftsmanship.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Partnership */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach/20 text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                <Globe size={14} /> Our Partners
              </div>

              <h2 className="text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight">
                North African <br />
                <span className="text-brand-text/30">Artisans.</span>
              </h2>

              <p className="text-lg text-brand-text/60 leading-relaxed">
                Every FUURRSBEE™ is hand-finished by our artisan partners in
                North Africa. This isn&apos;t just about production; it&apos;s
                about preserving traditional craftsmanship and providing
                sustainable livelihoods.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-navy">
                    <Heart size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy">
                    Social Impact
                  </h4>
                  <p className="text-brand-text/50 text-sm">
                    Approximately 80% of our artisan partners are single
                    mothers, providing essential support for their families.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-navy">
                    <Users size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy">
                    Fair Wages
                  </h4>
                  <p className="text-brand-text/50 text-sm">
                    We ensure fair living wages and safe working conditions for
                    every person in our supply chain.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <SafeImage
                src={ASSETS.ethical.artisan}
                alt="Artisan"
                className="w-full aspect-square object-cover"
                fallbackVariant="lavender"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding px-6 bg-brand-sky/10">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
              Values in every <br />
              <span className="text-brand-text/30 italic">stitch.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
              <div className="glass-card p-8 rounded-[2rem] bg-white/60">
                <h3 className="text-xl text-brand-navy mb-2">Respect</h3>
                <p className="text-sm text-brand-text/50 leading-relaxed">
                  We treat our partners as equals, valuing their expertise and
                  cultural heritage.
                </p>
              </div>

              <div className="glass-card p-8 rounded-[2rem] bg-white/60">
                <h3 className="text-xl text-brand-navy mb-2">Transparency</h3>
                <p className="text-sm text-brand-text/50 leading-relaxed">
                  We maintain open communication and full visibility into our
                  production processes.
                </p>
              </div>

              <div className="glass-card p-8 rounded-[2rem] bg-white/60">
                <h3 className="text-xl text-brand-navy mb-2">Quality</h3>
                <p className="text-sm text-brand-text/50 leading-relaxed">
                  Hand-finishing ensures a level of detail and quality that mass
                  production can&apos;t match.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl mb-6">
              See the future of play.
            </h2>

            <div className="flex justify-center">
              <motion.a
                href="/future"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-navy px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs"
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
