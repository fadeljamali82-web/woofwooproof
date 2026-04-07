import React from 'react';
import FadeIn from '../components/FadeIn';

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
          <FadeIn>
            <div className="grid-12">
              <div style={{ gridColumn: '1 / 10' }}>
                <p style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Natural fibers are compressed</p>
                <p style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Structure is formed through pressure</p>
                <p style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Outer layers are wrapped tightly</p>
                <p style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>Everything is locked through tension</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>
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
