import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants/assets';
import { CheckCircle2, Globe, Shield, Heart, ArrowRight } from 'lucide-react';
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

export const BackUs = () => {
  const KICKSTARTER_URL = "https://www.kickstarter.com/projects/woofwoofproof/eco-friendly-pet-toys-safer-play-sustainable-future?ref=2w535a&token=de355760";

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 bg-gradient-soft overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/40 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy mb-4">
              <Globe size={14} /> Shipping Worldwide
            </div>
            <h1 className="text-7xl md:text-9xl text-brand-navy leading-[0.85] tracking-tighter">
              Be part of the <br />
              <span className="text-brand-text/30">first wave.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-text/60 max-w-2xl mx-auto leading-relaxed">
              Join us on Kickstarter to bring the plant-based revolution to dog parks everywhere. Early backers get exclusive pricing and first-run editions.
            </p>
            <div className="pt-8">
              <a 
                href={KICKSTARTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="px-20 py-8 text-xl">Back on Kickstarter</Button>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-lavender rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-sky rounded-full blur-[150px]" />
        </div>
      </section>

      {/* Benefits Recap */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl text-brand-navy tracking-tight">Why back us now?</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Shield className="text-brand-sky" />, 
                title: "Exclusive Pricing", 
                desc: "Get FUURRSBEE™ at the lowest price it will ever be offered." 
              },
              { 
                icon: <Heart className="text-brand-peach" />, 
                title: "Founder Access", 
                desc: "Join our inner circle and help shape the future of our product line." 
              },
              { 
                icon: <CheckCircle2 className="text-brand-mint" />, 
                title: "First-Run Edition", 
                desc: "Receive a limited-edition backer version of the product." 
              }
            ].map((item, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="glass-card p-12 rounded-[3rem] h-full flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 bg-brand-cloud rounded-2xl flex items-center justify-center">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <h3 className="text-2xl text-brand-navy">{item.title}</h3>
                    <p className="text-brand-text/50 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Reinforcement */}
      <section className="py-32 md:py-48 px-6 bg-brand-sky/10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl text-brand-navy leading-tight tracking-tight">
              A commitment to <br />
              <span className="text-brand-text/30 italic">transparency.</span>
            </h2>
            <p className="text-xl text-brand-text/60 leading-relaxed">
              We've already completed our R&D and established our production partnerships. Your backing goes directly toward our first full-scale manufacturing run.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-brand-navy font-bold uppercase tracking-widest text-xs">
                <CheckCircle2 size={16} className="text-brand-mint" /> Prototype Ready
              </div>
              <div className="flex items-center gap-2 text-brand-navy font-bold uppercase tracking-widest text-xs">
                <CheckCircle2 size={16} className="text-brand-mint" /> Partners Secured
              </div>
              <div className="flex items-center gap-2 text-brand-navy font-bold uppercase tracking-widest text-xs">
                <CheckCircle2 size={16} className="text-brand-mint" /> Patent Pending
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeIn>
            <h2 className="text-6xl md:text-8xl mb-8 tracking-tighter">Let's build the future <br /> of play together.</h2>
            <a 
              href={KICKSTARTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-white text-brand-navy px-20 py-8 text-xl">
                Pledge on Kickstarter <ArrowRight className="inline-block ml-2" size={24} />
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
