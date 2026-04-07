import React from 'react';
import FadeIn from '../components/FadeIn';

const Materials = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <FadeIn>
            <h1>Nothing inside this is there to fake strength.</h1>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <FadeIn>
            <p style={{ marginBottom: '1.5rem' }}>Most toys rely on plastic cores, glue, and fillers.</p>
            <p style={{ fontWeight: '500', marginBottom: '4rem' }}>We removed all of it.</p>
            
            <p style={{ opacity: 0.8, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>What you’re holding:</p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Dense natural structure</p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Tight outer wrap</p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Breathable build</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="grid-12">
              <div style={{ gridColumn: '1 / 6' }}>
                <p style={{ opacity: 0.8, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>What we don’t say</p>
              </div>
              <div style={{ gridColumn: '6 / 13' }}>
                <p style={{ fontSize: '1.25rem' }}>
                  The exact process — how it’s formed and held —<br/>
                  that’s what we’ve spent time developing.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <p style={{ marginBottom: '1.5rem' }}>You don’t need to see everything.</p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>You’ll feel the difference.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Materials;
