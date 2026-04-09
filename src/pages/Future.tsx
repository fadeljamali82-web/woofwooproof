import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../constants/assets';
import { SafeImage } from '../components/SafeImage';
import { Package, ArrowRight } from 'lucide-react';

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

const FUTURE_PRODUCTS = [
  {
    name: "TugTwine™",
    desc: "The ultimate high-tension pull toy. Designed for collaborative play and maximum grip strength.",
    img: ASSETS.future.tugtwine,
    status: "In Development"
  },
  {
    name: "KnotCore™",
    desc: "A multi-textured chew toy designed to promote dental health while satisfying the strongest chewing instincts.",
    img: ASSETS.future.knotcore,
    status: "Prototyping"
  },
  {
    name: "Infinity Tug Loop™",
    desc: "A continuous loop designed for multi-dog play or high-intensity human-dog interaction.",
    img: ASSETS.future.infinity,
    status: "Concept"
  },
  {
    name: "SnuggleSheep™",
    desc: "A soft-touch, durable companion for rest time, built with the same plant-based integrity.",
    img: ASSETS.future.snuggle,
    status: "Concept"
  }
];

export const Future = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-sky rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-lavender rounded-full blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter">
              The ecosystem <br />
              <span className="text-white/40 italic">is growing.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
              We're applying our plant-based innovation to every aspect of your dog's life.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Modular Grid */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {FUTURE_PRODUCTS.map((product, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div className="group relative rounded-[2.5rem] overflow-hidden bg-brand-cloud aspect-[16/10] shadow-sm hover:shadow-xl transition-all duration-700">
                  <SafeImage 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    fallbackVariant="navy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent flex flex-col justify-end p-8 text-white">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-display font-bold">{product.name}</h3>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/20">
                          {product.status}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm max-w-md leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap / Vision */}
      <section className="section-padding px-6 bg-brand-sky/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn>
            <Package className="text-brand-sky mx-auto mb-6" size={40} />
            <h2 className="text-4xl md:text-6xl text-brand-navy leading-tight tracking-tight">
              A future without <br />
              <span className="text-brand-text/30 italic">plastic play.</span>
            </h2>
            <p className="text-xl text-brand-text/60 leading-relaxed italic font-display">
              Our vision is to replace every synthetic dog toy in the world with a plant-based alternative that performs better and respects the planet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl mb-6">Ready to make it happen?</h2>
            <div className="flex justify-center">
              <motion.a 
                href="/back-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-navy px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs"
              >
                Back the Project <ArrowRight className="inline-block ml-2" size={16} />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
};
