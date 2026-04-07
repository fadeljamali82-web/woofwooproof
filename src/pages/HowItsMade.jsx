import React from 'react';
import FadeIn from '../components/FadeIn';
import ImageBlock from '../components/ImageBlock';

const HowItsMade = () => {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeIn>
            <h1>No mold. No injection. No shortcuts.</h1>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <div className="grid-12">
            <div style={{ gridColumn: '1 / 7' }}>
              <FadeIn>
                <ImageBlock src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1600&auto=format&fit=crop" alt="Fiber abstract" aspectRatio="3/4" />
              </FadeIn>
            </div>
            <div style={{ gridColumn: '8 / 13', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <FadeIn delay={1}>
                <p style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Natural fibers are compressed</p>
                <div className="section-divider" style={{ margin: '1rem 0', width: '40px' }}></div>
                <p style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Structure is formed through pressure</p>
                <div className="section-divider" style={{ margin: '1rem 0', width: '40px' }}></div>
                <p style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Outer layers are wrapped tightly</p>
                <div className="section-divider" style={{ margin: '1rem 0', width: '40px' }}></div>
                <p style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)' }}>Everything is locked through tension</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <p style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-serif)' }}>
              The strength comes from how it’s built —<br/>
              not what’s hidden inside.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default HowItsMade;
