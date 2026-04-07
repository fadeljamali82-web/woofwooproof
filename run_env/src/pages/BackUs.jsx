import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const BackUs = () => {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeIn>
            <h1>Launching mid-May.<br/>Delivered within 90 days.</h1>
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
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <p style={{ marginBottom: '1.5rem' }}>This isn’t a concept.</p>
            <p style={{ marginBottom: '1.5rem' }}>The product is built.<br/>Tested.<br/>Refined.</p>
            <p style={{ marginBottom: '4rem', fontWeight: '500' }}>Kickstarter is how we scale it — carefully.</p>
            
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button onClick={() => alert('Kickstarter integration coming soon.')}>Back the project</Button>
              <Button variant="outline" onClick={() => alert('Signup coming soon.')}>Get early access</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default BackUs;
