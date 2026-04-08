import React from "react";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">
            PLANT-BASED DOG TOYS, THOUGHTFULLY BUILT FOR REAL DOGS
          </p>

          <h1 className="hero-title">
            Better play.
            <br />
            Built from plants.
          </h1>

          <p className="hero-sub">
            FUURRSBEE™ is our patent-backed answer to the dog toy aisle:
            plant-based, durable, and designed for the dogs that never go easy.
          </p>

          <button
            className="hero-button"
            onClick={() => scrollTo("story")}
          >
            Learn more ↓
          </button>
        </div>

        <div className="hero-visual">
          <div className="toy small"></div>
          <div className="toy medium"></div>
          <div className="toy large"></div>
        </div>
      </section>

      {/* STORY (INLINE — NO NEW FILES) */}
      <section id="story" className="story-section">
        <div className="story-container">
          <h2 className="story-title">
            Built because one dog wouldn’t stop breaking everything.
          </h2>

          <p className="story-text">
            We tried rubber. We tried plastic. We tried everything that claimed
            to be durable. None of it felt right — and none of it lasted.
          </p>

          <p className="story-text">
            So we stopped buying and started building. FUURRSBEE™ is our first
            step toward a better kind of dog toy — plant-based, thoughtfully
            engineered, and made for real dogs with real bite.
          </p>
        </div>
      </section>
    </>
  );
}