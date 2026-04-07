import React from 'react';
import FadeIn from '../components/FadeIn';
import ImageBlock from '../components/ImageBlock';

const Story = () => {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeIn>
            <h1>His name is DC.<br/>And he ruined everything.</h1>
          </FadeIn>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn>
            <ImageBlock src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1600&auto=format&fit=crop" alt="DC" aspectRatio="16/9" />
            
            <div style={{ padding: '5rem 0' }}>
              <p>We tried what everyone tries:<br/>rubber, rope, “tough” toys.</p>
              <br/>
              <p>Same result.</p>
              <br/>
              <p>They broke —<br/>or didn’t feel right giving to him.</p>
              
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', margin: '4rem 0' }} />
              
              <p>At some point, you stop looking for better products.</p>
              <br/>
              <p style={{ fontWeight: '500', fontSize: '1.25rem' }}>
                You start asking:<br/>
                what actually makes sense?
              </p>
              <br/>
              <p>We tested materials most toys don’t use.</p>
              <br/>
              <p>Most failed.</p>
              <br/>
              <p>One didn’t.</p>
              
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', margin: '4rem 0' }} />
              
              <p>That version turned into something real.</p>
              <br/>
              <p>Not perfect.<br/>Not indestructible.</p>
              <br/>
              <p style={{ fontWeight: '500' }}>But finally right.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Story;
