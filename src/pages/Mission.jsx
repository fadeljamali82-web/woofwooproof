import React from 'react';
import FadeIn from '../components/FadeIn';
import ImageBlock from '../components/ImageBlock';

const Mission = () => {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeIn>
            <h1 style={{ maxWidth: '800px' }}>We’re not trying to change everything.</h1>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <div className="grid-12">
            <div style={{ gridColumn: '1 / 6' }}>
              <FadeIn>
                <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem' }}>Just one category.</p>
                <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Better materials.</p>
                <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Less waste.</p>
                <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Products that don’t feel disposable.</p>
              </FadeIn>
            </div>
            <div style={{ gridColumn: '7 / 13' }}>
              <FadeIn delay={1}>
                <ImageBlock src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1600&auto=format&fit=crop" alt="Nature texture" aspectRatio="16/9" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>
              If enough people choose better —<br/>
              that’s where change starts.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Mission;
