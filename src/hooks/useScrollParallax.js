import { useEffect } from "react";

export function useScrollParallax() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-parallax]");
    const onScroll = () => {
      const y = window.scrollY;
      elements.forEach((el) => {
        const speed = Number(el.getAttribute("data-parallax")) || 0.08;
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
