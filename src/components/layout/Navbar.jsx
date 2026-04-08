import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-navbar">
      <div className="container navbar-inner">
        <button className="navbar-logo" onClick={() => scrollToSection("home")}>
          WoofWoofProof
        </button>

        <nav className="navbar-links" aria-label="Primary navigation">
          <button onClick={() => scrollToSection("home")}>home</button>
          <button onClick={() => scrollToSection("story")}>story</button>
          <button onClick={() => scrollToSection("product")}>product</button>
          <button onClick={() => scrollToSection("process")}>how it&apos;s made</button>
          <button onClick={() => scrollToSection("materials")}>materials</button>
          <button onClick={() => scrollToSection("future")}>future</button>
          <button onClick={() => scrollToSection("back")}>back us</button>
        </nav>
      </div>
    </header>
  );
}