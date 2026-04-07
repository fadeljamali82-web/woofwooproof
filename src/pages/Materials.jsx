import React from 'react';
import FadeIn from '../components/FadeIn';
import ImageBlock from '../components/ImageBlock';

const Materials = () => {
  return (
    <>
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeIn>
            <h1 style={{ maxWidth: '800px' }}>Nothing inside this is there to fake strength.</h1>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <div className="grid-12">
             <div style={{ gridColumn: '1 / 6' }}>
               <FadeIn delay={1}>
                 <ImageBlock src="/woof_product.png" alt="Dense fibers" aspectRatio="3/4" />
               </FadeIn>
             </div>
             <div style={{ gridColumn: '7 / 13', padding: '5rem 0' }}>
                <FadeIn delay={2}>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Most toys rely on plastic cores, glue, and fillers.</p>
                  <p style={{ fontWeight: '500', marginBottom: '4rem', fontSize: '1.25rem' }}>We removed all of it.</p>
                  
                  <div className="section-divider" style={{ width: '100px', margin: '2rem 0' }}></div>
                  
                  <p style={{ opacity: 0.6, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>What you’re holding</p>
                  <p style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Dense natural structure</p>
                  <p style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Tight outer wrap</p>
                  <p style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Breathable build</p>
                </FadeIn>
             </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <p style={{ opacity: 0.6, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>What we don’t say</p>
            <h2 style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              The exact process — how it’s formed and held — that’s what we’ve spent time developing.
            </h2>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', opacity: 0.8 }}>You don’t need to see everything.</p>
            <p style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontFamily: 'var(--font-serif)' }}>You’ll feel the difference.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Materials;
