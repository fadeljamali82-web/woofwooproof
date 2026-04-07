import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeIn>
            <h1 style={{ maxWidth: '800px' }}>Built because one dog wouldn’t stop breaking everything.</h1>
            <div style={{ marginTop: '3rem', maxWidth: '600px' }}>
              <p>
                DC didn’t care what the label said.<br/>
                If it wasn’t right, it didn’t last.
              </p>
              <p>
                So we stopped buying.<br/>
                And built something that does.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              <Button to="/back-us">Back the first run</Button>
              <Button to="/how-its-made" variant="outline">See how it’s made</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <FadeIn>
            <h2>Most dog toys fall into two categories.</h2>
            <div style={{ marginTop: '3rem' }}>
              <p>They either break fast.</p>
              <p>Or they’re made from things you don’t want your dog chewing.</p>
              <p style={{ marginTop: '2rem', fontWeight: '500' }}>We didn’t like either.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="grid-12">
              <div style={{ gridColumn: '1 / 6' }}>
                <h2>So we went back to materials that make sense.</h2>
              </div>
              <div style={{ gridColumn: '7 / 13' }}>
                <p>No plastic cores.</p>
                <p>No glue holding layers together.</p>
                <p>No filler pretending to be strength.</p>
                <br/>
                <p>Just natural fibers, structured the right way.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <FadeIn>
            <div className="grid-12">
              <div style={{ gridColumn: '1 / 7' }}>
                <h2>This is FUURRSBEE™</h2>
              </div>
              <div style={{ gridColumn: '8 / 13' }}>
                <p style={{ fontWeight: '500' }}>Flat. Dense. Wrapped tight.</p>
                <br/>
                <p>Throw it.<br/>Grab it.<br/>Let them go at it.</p>
                <br/>
                <p>Built for real play — not just the first five minutes.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>We’re not calling it indestructible.</p>
            <p style={{ fontSize: '1.25rem' }}>
              We’re saying this:<br/>
              it holds up longer than most things you’ve tried —<br/>
              without the usual trade-offs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2>We built it for one dog.<br/>Now we’re making it for yours.</h2>
            <div style={{ marginTop: '3rem' }}>
              <Button to="/back-us">Back the first run</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;
