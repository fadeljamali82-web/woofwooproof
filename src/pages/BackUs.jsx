import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import ImageBlock from '../components/ImageBlock';

const BackUs = () => {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeIn>
            <h1 style={{ maxWidth: '900px' }}>Launching mid-May.<br/>Delivered within 90 days.</h1>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <FadeIn>
            <div className="grid-12">
              <div style={{ gridColumn: '1 / 6' }}>
                <p style={{ opacity: 0.8, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Timeline</p>
              </div>
              <div style={{ gridColumn: '6 / 13' }}>
                <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Campaign: 60 days</p>
                <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Production + delivery: within 90 days</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-12">
            <div style={{ gridColumn: '1 / 7' }}>
              <FadeIn>
                <ImageBlock src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1600&auto=format&fit=crop" alt="Workshop production" aspectRatio="4/3" />
              </FadeIn>
            </div>
            <div style={{ gridColumn: '8 / 13', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <FadeIn delay={1}>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>This isn’t a concept.</p>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>The product is built.<br/>Tested.<br/>Refined.</p>
                <div className="section-divider" style={{ width: '80px', margin: '2rem 0' }}></div>
                <p style={{ marginBottom: '4rem', fontWeight: '500', fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Kickstarter is how we scale it — carefully.</p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <Button onClick={() => alert('Kickstarter integration coming soon.')}>Back the project</Button>
                  <Button variant="outline" onClick={() => alert('Signup coming soon.')}>Get early access</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BackUs;
