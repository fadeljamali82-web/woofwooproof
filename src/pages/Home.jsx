import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import ImageBlock from '../components/ImageBlock';

const Home = () => {
  return (
    <>
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeIn>
            <h1 style={{ maxWidth: '900px' }}>Built because one dog wouldn’t stop breaking everything.</h1>
          </FadeIn>
          
          <div className="grid-12" style={{ marginTop: '5rem', alignItems: 'center' }}>
            <div style={{ gridColumn: '1 / 6' }}>
              <FadeIn delay={1}>
                <ImageBlock src="/woof_hero.png" alt="Loyal dog looking faithfully" aspectRatio="4/5" />
              </FadeIn>
            </div>
            <div style={{ gridColumn: '7 / 13' }}>
              <FadeIn delay={2}>
                <p>
                  DC didn’t care what the label said.<br/>
                  If it wasn’t right, it didn’t last.
                </p>
                <p>
                  So we stopped buying.<br/>
                  And built something that does.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                  <Button to="/back-us">Back the first run</Button>
                  <Button to="/how-its-made" variant="outline">See how it’s made</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <FadeIn>
            <h2 style={{ maxWidth: '800px' }}>Most dog toys fall into two categories.</h2>
          </FadeIn>
          
          <div className="grid-12" style={{ marginTop: '5rem' }}>
            <div style={{ gridColumn: '2 / 6' }}>
              <FadeIn delay={1}>
                <div className="feature-number">1</div>
                <p style={{ marginTop: '2rem' }}>They either break fast.</p>
              </FadeIn>
            </div>
            <div style={{ gridColumn: '7 / 12' }}>
              <FadeIn delay={2}>
                <div className="feature-number">2</div>
                <p style={{ marginTop: '2rem' }}>Or they’re made from things you don’t want your dog chewing.</p>
              </FadeIn>
            </div>
          </div>
          
          <div className="grid-12" style={{ marginTop: '8rem' }}>
            <div style={{ gridColumn: '1 / 13' }}>
              <FadeIn delay={3}>
                <div className="section-divider" style={{ marginBottom: '3rem' }}></div>
                <p style={{ fontWeight: '500', fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>We didn’t like either.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-12">
            <div style={{ gridColumn: '1 / 6' }}>
              <FadeIn>
                <h2>So we went back to materials that make sense.</h2>
              </FadeIn>
            </div>
            <div style={{ gridColumn: '7 / 13' }}>
              <FadeIn delay={1}>
                <p>No plastic cores.</p>
              </FadeIn>
              <FadeIn delay={2}><p>No glue holding layers together.</p></FadeIn>
              <FadeIn delay={3}><p>No filler pretending to be strength.</p></FadeIn>
              <br/>
              <FadeIn delay={4}>
                <div className="section-divider" style={{ width: '100px', margin: '0 0 2rem 0' }}></div>
                <p>Just natural fibers, structured the right way.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <div className="grid-12">
            <div style={{ gridColumn: '1 / 6' }}>
              <FadeIn>
                <p style={{ opacity: 0.6, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>Core Product</p>
                <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>This is<br/>FUURRSBEE™</h2>
                <div style={{ marginTop: '4rem' }}>
                  <ImageBlock src="/woof_product.png" alt="Dense structural natural fiber toy" aspectRatio="1/1" />
                </div>
              </FadeIn>
            </div>
            <div style={{ gridColumn: '8 / 13', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <FadeIn delay={1}>
                <p style={{ fontWeight: '500', fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginTop: '6rem' }}>Flat. Dense. Wrapped tight.</p>
                <br/>
                <p>Throw it.<br/>Grab it.<br/>Let them go at it.</p>
                <br/>
                <div className="section-divider" style={{ width: '100px', margin: '2rem 0' }}></div>
                <p>Built for real play — not just the first five minutes.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              We’re not calling it indestructible.
            </p>
            <div className="section-divider" style={{ width: '100px', margin: '2rem 0' }}></div>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
              We’re saying this:<br/>
              it holds up longer than most things you’ve tried —<br/>
              without the usual trade-offs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>We built it for one dog.<br/>Now we’re making it for yours.</h2>
            <div style={{ marginTop: '5rem' }}>
              <Button to="/back-us">Back the first run</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;
