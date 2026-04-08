import React from "react";

export default function StorySection() {
  return (
    <section id="story" className="story-section">
      <div className="story-glow story-glow-one" aria-hidden="true"></div>
      <div className="story-glow story-glow-two" aria-hidden="true"></div>

      <div className="container story-shell">
        <div className="story-card">
          <div className="story-copy">
            <p className="story-eyebrow">Where it started</p>

            <h2 className="story-title">
              It started with one dog
              <br />
              that broke everything.
            </h2>

            <p className="story-lead">
              We kept buying what the market called durable. Rubber. Plastic.
              Rope. “Eco” toys that looked good in theory and failed in real
              life.
            </p>

            <p className="story-body">
              Nothing lasted. Nothing felt right. And none of it reflected the
              kind of future we wanted to build for dogs, owners, and the
              materials we leave behind.
            </p>

            <p className="story-body">
              So we stopped searching for a better option and started creating
              one. That became FUURRSBEE™ — our first step toward a plant-based,
              patent-backed dog toy system built for real bite, real play, and
              real responsibility.
            </p>

            <div className="story-pills">
              <span>Inspired by DC</span>
              <span>Built through R&amp;D</span>
              <span>Designed for everyday play</span>
            </div>
          </div>

          <div className="story-visual">
            <div className="story-orbit story-orbit-one"></div>
            <div className="story-orbit story-orbit-two"></div>

            <div className="story-medallion">
              <div className="story-medallion-inner">
                <span className="story-medallion-label">DC</span>
              </div>
            </div>

            <div className="story-note story-note-top">
              <strong>the problem</strong>
              <span>nothing lasted</span>
            </div>

            <div className="story-note story-note-middle">
              <strong>the shift</strong>
              <span>from buying to building</span>
            </div>

            <div className="story-note story-note-bottom">
              <strong>the result</strong>
              <span>FUURRSBEE™</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}