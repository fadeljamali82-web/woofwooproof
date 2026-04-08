import React from "react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-sky hero-sky-one" aria-hidden="true"></div>
      <div className="hero-sky hero-sky-two" aria-hidden="true"></div>

      <div className="hero-cloud hero-cloud-one" aria-hidden="true"></div>
      <div className="hero-cloud hero-cloud-two" aria-hidden="true"></div>
      <div className="hero-cloud hero-cloud-three" aria-hidden="true"></div>
      <div className="hero-cloud hero-cloud-four" aria-hidden="true"></div>

      <div className="hero-shell container">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            Plant-based dog toys, thoughtfully built for real dogs
          </p>

          <h1 className="hero-title">
            Better play.
            <br />
            Built from plants.
          </h1>

          <p className="hero-subtitle">
            FUURRSBEE™ is our patent-backed answer to the dog toy aisle:
            plant-based, durable, and designed for the dogs that never go easy.
          </p>
        </div>

        <div className="hero-stage">
          <div className="hero-product hero-product-left">
            <div className="hero-disc hero-disc-small">
              <div className="hero-disc-rings"></div>
              <div className="hero-disc-handle"></div>
            </div>
            <span className="hero-product-label">small</span>
          </div>

          <div className="hero-product hero-product-center">
            <div className="hero-disc hero-disc-medium">
              <div className="hero-disc-rings"></div>
              <div className="hero-disc-handle"></div>
            </div>
            <span className="hero-product-label">medium</span>
          </div>

          <div className="hero-product hero-product-right">
            <div className="hero-disc hero-disc-large">
              <div className="hero-disc-rings"></div>
              <div className="hero-disc-handle"></div>
            </div>
            <span className="hero-product-label">large</span>
          </div>
        </div>

        <div className="hero-bottom">
          <p className="hero-supporting-copy">
            One toy. Three sizes. Better materials. Real bite.
          </p>

          <div className="hero-actions">
            <button
              className="hero-button hero-button-primary"
              onClick={() => {
                const el = document.getElementById("back");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Back the Kickstarter
            </button>

            <button
              className="hero-button hero-button-secondary"
              onClick={() => {
                const el = document.getElementById("story");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}