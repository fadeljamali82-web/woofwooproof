import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const Product = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <FadeIn>
            <h1>FUURRSBEE™</h1>
            <div style={{ marginTop: '2rem' }}>
              <p>Not a frisbee.</p>
              <p>Not a rope toy.</p>
              <p>Not something your dog forgets about.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <FadeIn>
            <div className="grid-12">
              <div style={{ gridColumn: '1 / 5' }}>
                <h2 style={{ fontSize: '2rem' }}>Throws clean</h2>
              </div>
              <div style={{ gridColumn: '5 / 9' }}>
                <h2 style={{ fontSize: '2rem' }}>Holds during tug</h2>
              </div>
              <div style={{ gridColumn: '9 / 13' }}>
                <h2 style={{ fontSize: '2rem' }}>Gives a solid grip</h2>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="grid-12">
              <div style={{ gridColumn: '1 / 8' }}>
                <p style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
                  Built from compressed natural fibers,<br/>
                  wrapped and tensioned to create structure.
                </p>
                <div>
                  <p>No plastic.</p>
                  <p>No glue.</p>
                  <p>No filler.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section secondary">
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>We’re not promising forever.</p>
            <p style={{ fontSize: '1.25rem' }}>
              We’re saying:<br/>
              it lasts longer than it should —<br/>
              for what it’s made of.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2>This is just the start.</h2>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p>More designs are already in development.</p>
              <p>Same thinking. Same foundation.</p>
              <div style={{ marginTop: '3rem' }}>
                <Button to="/back-us">Back the first production run</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Product;
