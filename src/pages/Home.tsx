import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Button } from '@/src/components/Button';
import { Link } from 'react-router-dom';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
  >
    {children}
  </motion.div>
);

export const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="flex flex-col bg-brand-dark">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[600px] h-[110vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=2000" 
            alt="Dog and owner" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark" />
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] mb-12 text-balance leading-[0.85]">
              Built because one dog wouldn’t stop breaking everything.
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end text-left max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-brand-white/80 font-sans leading-relaxed">
                DC didn’t care what the label said. If it wasn’t right, it didn’t last.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-brand-white/80 font-sans leading-relaxed">
                So we stopped buying. And built something that does.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/back-us">
                  <Button size="lg" className="rounded-none">Back the first run</Button>
                </Link>
                <Link to="/how-its-made">
                  <Button variant="outline" size="lg" className="rounded-none">See how it’s made</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-48 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-7">
              <FadeInWhenVisible>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8vw] mb-16 text-balance">
                  Most dog toys fall into two categories.
                </h2>
              </FadeInWhenVisible>
            </div>
            <div className="lg:col-span-5 lg:pt-24">
              <FadeInWhenVisible delay={0.2}>
                <div className="space-y-12 text-2xl md:text-3xl text-brand-white/60">
                  <p className="hover:text-brand-white transition-colors duration-500">They either break fast.</p>
                  <p className="hover:text-brand-white transition-colors duration-500">Or they’re made from things you don’t want your dog chewing.</p>
                  <p className="text-brand-straw font-serif italic text-4xl">We didn’t like either.</p>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* Shift Section */}
      <section className="py-48 px-6 bg-brand-beige text-brand-dark overflow-hidden relative">
        <motion.div 
          initial={{ x: "100%" }}
          whileInView={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-0 whitespace-nowrap text-[20vw] font-serif opacity-[0.03] pointer-events-none select-none"
        >
          NATURAL FIBERS NATURAL FIBERS NATURAL FIBERS
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-start-2 lg:col-span-10">
              <FadeInWhenVisible>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] mb-20 leading-[0.85]">
                  So we went back to materials that make sense.
                </h2>
              </FadeInWhenVisible>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <FadeInWhenVisible delay={0.2}>
                  <div className="space-y-6 text-2xl opacity-70">
                    <p>No plastic cores.</p>
                    <p>No glue holding layers together.</p>
                    <p>No filler pretending to be strength.</p>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.4}>
                  <div className="h-full flex items-end">
                    <p className="text-4xl md:text-5xl font-serif italic border-l-4 border-brand-dark pl-8 py-4">
                      Just natural fibers, structured the right way.
                    </p>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-48 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6 relative group">
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541591490109-6a4e881d462c?auto=format&fit=crop&q=80&w=1000" 
                  alt="FUURRSBEE Product" 
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-straw/10 rounded-full blur-3xl" />
            </div>
            
            <div className="lg:col-span-5 lg:col-start-8">
              <FadeInWhenVisible>
                <span className="text-brand-straw uppercase tracking-[0.3em] text-sm mb-8 block">The Product</span>
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9vw] mb-12">FUURRSBEE™</h2>
              </FadeInWhenVisible>
              
              <div className="space-y-12 text-2xl text-brand-white/70">
                <FadeInWhenVisible delay={0.2}>
                  <p className="text-3xl text-brand-white font-serif italic">Flat. Dense. Wrapped tight.</p>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible delay={0.3}>
                  <div className="grid grid-cols-3 gap-4 border-y border-brand-white/10 py-8">
                    {['Throw it.', 'Grab it.', 'Let them go.'].map((text, i) => (
                      <div key={i} className="text-center">
                        <p className="text-lg uppercase tracking-widest opacity-60 mb-2">0{i+1}</p>
                        <p className="text-brand-white">{text}</p>
                      </div>
                    ))}
                  </div>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible delay={0.4}>
                  <p className="leading-relaxed">Built for real play — not just the first five minutes.</p>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-64 px-6 relative bg-brand-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-olive rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInWhenVisible>
            <div className="space-y-16">
              <p className="text-4xl md:text-7xl font-serif italic leading-tight text-balance">
                “We’re not calling it indestructible.”
              </p>
              <div className="h-px w-24 bg-brand-straw mx-auto" />
              <div className="space-y-8 text-2xl md:text-3xl text-brand-white/70 max-w-2xl mx-auto">
                <p>We’re saying this:</p>
                <p className="text-brand-white text-4xl md:text-5xl leading-tight">
                  it holds up longer than most things you’ve tried — without the usual trade-offs.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Close Section */}
      <section className="py-64 px-6 bg-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FadeInWhenVisible>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[12vw] mb-20 leading-[0.8] text-balance">
              We built it for one dog. <br />
              <span className="text-brand-straw">Now we’re making it for yours.</span>
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.3}>
            <Link to="/back-us">
              <Button size="lg" className="rounded-none px-16 py-6 text-xl">Back the first run</Button>
            </Link>
          </FadeInWhenVisible>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-straw/5 to-transparent pointer-events-none" />
      </section>
    </div>
  );
};
