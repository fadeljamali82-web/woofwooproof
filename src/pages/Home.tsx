import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/Button';
import { ASSETS } from '@/src/constants/assets';
import { ArrowRight, Shield, Leaf, Zap, Globe, Award } from 'lucide-react';

/**
 * REUSABLE ANIMATION WRAPPERS
 */
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

const Float = ({ children, delay = 0, duration = 6 }: { children: React.ReactNode, delay?: number, duration?: number }) => (
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
);

/**
 * SECTION COMPONENTS
 */

const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 md:mb-24 ${centered ? 'text-center' : 'text-left'}`}>
    <FadeIn>
      <h2 className="text-4xl md:text-6xl lg:text-7xl text-brand-navy mb-6 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-brand-text/50 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeIn>
  </div>
);

export const Home = () => {
  const KICKSTARTER_URL = "https://www.kickstarter.com/projects/woofwoofproof/eco-friendly-pet-toys-safer-play-sustainable-future?ref=2w535a&token=de355760";

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/40 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy mb-4">
                <Award size={14} /> Patent-Backed Innovation
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-brand-navy tracking-tighter">
                Better play. <br />
                <span className="text-brand-text/30">Built from plants.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-text/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                FUURRSBEE™ is the durable, plant-based answer to the dog toy aisle. Engineered for energy, built for the planet.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link to="/back-us">
                  <Button size="lg">Back the Project</Button>
                </Link>
                <Link to="/product">
                  <Button variant="outline" size="lg">The Science</Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="relative flex justify-center items-center">
            <Float duration={5}>
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
                <img 
                  src={ASSETS.hero.product} 
                  alt="FUURRSBEE Product" 
                  className="w-full h-full object-cover rounded-[4rem] shadow-2xl border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-lavender/30 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-sky/30 rounded-full blur-3xl -z-10" />
              </div>
            </Float>
          </div>
        </div>
      </section>

      {/* 2. QUICK STORY PREVIEW */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl">
              <img 
                src={ASSETS.story.dog} 
                alt="DC the dog" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-navy/5" />
            </div>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
                One dog kept breaking everything.
              </h2>
              <p className="text-xl text-brand-text/60 leading-relaxed">
                Our founder's dog, DC, was a professional toy destroyer. Nothing lasted. Most "durable" toys were made of harsh synthetics we didn't want him chewing.
              </p>
              <div className="pt-4">
                <Link to="/story">
                  <Button variant="ghost" className="group">
                    Read the full story <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT HIGHLIGHT */}
      <section className="py-32 md:py-48 px-6 bg-brand-sky/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="This is FUURRSBEE™" 
            subtitle="The plant-based powerhouse your dog has been waiting for."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Leaf />, title: "100% Plant-Based", desc: "No plastic cores. No toxic glues. Just natural fibers structured for strength." },
              { icon: <Shield />, title: "Patent-Backed", desc: "Engineered tension layers that resist tearing from real bite force." },
              { icon: <Zap />, title: "Real Durability", desc: "Built for real dogs with real energy. It holds up longer than anything you've tried." }
            ].map((item, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-sky/20 h-full hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-brand-sky/20 rounded-xl flex items-center justify-center mb-6 text-brand-navy">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <h3 className="text-2xl text-brand-navy mb-4">{item.title}</h3>
                    <p className="text-brand-text/50 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/product">
              <Button size="lg">Explore the Product</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SIZES PREVIEW */}
      <section className="py-32 md:py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="A size for every spirit." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end mb-16">
            {[
              { label: "Small", weight: "Up to 20lbs", img: ASSETS.sizes.small, scale: 0.85 },
              { label: "Medium", weight: "20 - 50lbs", img: ASSETS.sizes.medium, scale: 1.0 },
              { label: "Large", weight: "50lbs +", img: ASSETS.sizes.large, scale: 1.15 }
            ].map((item, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="text-center group">
                    <div className="relative mb-10 flex justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        style={{ scale: item.scale }}
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-brand-mint/20"
                      >
                        <img src={item.img} alt={item.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </motion.div>
                    </div>
                    <h3 className="text-3xl text-brand-navy mb-1">{item.label}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-text/30">{item.weight}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/sizes">
              <Button variant="outline" size="lg">View Size Guide</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY IT'S DIFFERENT */}
      <section className="py-32 md:py-48 px-6 bg-brand-lavender/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
                The "Eco" vs "Durable" contradiction. Solved.
              </h2>
              <p className="text-xl text-brand-text/60 leading-relaxed">
                Most "eco" toys are weak. Most "durable" toys rely on harsh synthetics that linger in landfills. We refused to accept the trade-off.
              </p>
              <div className="pt-4">
                <Link to="/materials">
                  <Button size="lg">Our Materials</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl">
              <img src={ASSETS.materials.texture} alt="Material Texture" className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. FUTURE PRODUCTS PREVIEW */}
      <section className="py-32 md:py-48 px-6 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl mb-6 tracking-tight">The ecosystem is growing.</h2>
              <p className="text-lg text-white/40">Expanding our plant-based product line for every play style.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "TugTwine™", desc: "High-tension pull toy." },
              { name: "KnotCore™", desc: "Multi-textured dental chew." },
              { name: "Infinity Tug™", desc: "Collaborative play loop." },
              { name: "SnuggleSheep™", desc: "Soft-touch rest toy." }
            ].map((item, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                    <h3 className="text-xl mb-2">{item.name}</h3>
                    <p className="text-sm text-white/40">{item.desc}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/future">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">View Future Concepts</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. KICKSTARTER CTA SECTION */}
      <section className="py-48 px-6 bg-gradient-soft text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <FadeIn>
            <h2 className="text-6xl md:text-9xl text-brand-navy leading-[0.85] tracking-tighter">
              Be part of the <br />
              <span className="text-brand-text/30">first wave.</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-text/60 max-w-2xl mx-auto leading-relaxed">
              Join us on Kickstarter to bring the plant-based revolution to dog parks everywhere. Early backers get exclusive pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link to="/back-us">
                <Button size="lg" className="px-16">Back on Kickstarter</Button>
              </Link>
              <div className="flex items-center gap-2 text-brand-navy/40 font-bold uppercase tracking-widest text-[10px]">
                <Globe size={16} /> Shipping Worldwide
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white rounded-full blur-[100px]" />
        </div>
      </section>

    </motion.div>
  );
};
