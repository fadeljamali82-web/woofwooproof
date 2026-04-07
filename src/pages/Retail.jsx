import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import ImageBlock from '../components/ImageBlock';

const Retail = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <FadeIn>
            <h1>This doesn’t sit quietly on a shelf.</h1>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <FadeIn>
            <div className="grid-12">
              <div style={{ gridColumn: '1 / 6' }}>
                <p style={{ opacity: 0.6, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>Independent / Small Business</p>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>You don’t need more inventory.<br/>You need something people stop for.</p>
                <p style={{ fontSize: '1.25rem' }}>This gets picked up.<br/>Talked about.<br/>Remembered.</p>
              </div>
              
              <div style={{ gridColumn: '7 / 13' }}>
                <p style={{ opacity: 0.6, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>Corporate / Bulk</p>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>This introduces a new material category.</p>
                <p style={{ fontSize: '1.25rem' }}>Clear differentiation.<br/>Strong shelf presence.<br/>Premium positioning without confusion.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: '1 / 6' }}>
              <FadeIn>
                <ImageBlock src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop" alt="Retail minimal" aspectRatio="3/4" />
              </FadeIn>
            </div>
            <div style={{ gridColumn: '7 / 13' }}>
              <FadeIn delay={1}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Why It Works</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-serif)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1.5rem' }}>—</span> Looks different
                  </li>
                  <li style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-serif)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1.5rem' }}>—</span> Feels different
                  </li>
                  <li style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-serif)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1.5rem' }}>—</span> Easy to explain
                  </li>
                  <li style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-serif)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '1.5rem' }}>—</span> Strong customer reaction
                  </li>
                </ul>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem', flexWrap: 'wrap' }}>
                  <Button onClick={() => alert('Sample request form opening soon.')}>Request a sample</Button>
                  <Button variant="outline" onClick={() => alert('Contact form opening soon.')}>Start a conversation</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Retail;
