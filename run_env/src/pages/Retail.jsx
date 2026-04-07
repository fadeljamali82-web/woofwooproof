import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

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
              {/* Left (small business) */}
              <div style={{ gridColumn: '1 / 6' }}>
                <p style={{ opacity: 0.6, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>Independent / Small Business</p>
                <p style={{ marginBottom: '1.5rem' }}>You don’t need more inventory.<br/>You need something people stop for.</p>
                <p>This gets picked up.<br/>Talked about.<br/>Remembered.</p>
              </div>
              
              {/* Right (corporate) */}
              <div style={{ gridColumn: '7 / 13' }}>
                <p style={{ opacity: 0.6, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>Corporate / Bulk</p>
                <p style={{ marginBottom: '1.5rem' }}>This introduces a new material category.</p>
                <p>Clear differentiation.<br/>Strong shelf presence.<br/>Premium positioning without confusion.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="grid-12" style={{ alignItems: 'center' }}>
              <div style={{ gridColumn: '1 / 6' }}>
                <h2>Why It Works</h2>
              </div>
              <div style={{ gridColumn: '7 / 13' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-olive)', marginRight: '1rem' }}>—</span> Looks different
                  </li>
                  <li style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-olive)', marginRight: '1rem' }}>—</span> Feels different
                  </li>
                  <li style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-olive)', marginRight: '1rem' }}>—</span> Easy to explain
                  </li>
                  <li style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-olive)', marginRight: '1rem' }}>—</span> Strong customer reaction
                  </li>
                </ul>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem', flexWrap: 'wrap' }}>
                  <Button onClick={() => alert('Sample request form opening soon.')}>Request a sample</Button>
                  <Button variant="outline" onClick={() => alert('Contact form opening soon.')}>Start a conversation</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Retail;
