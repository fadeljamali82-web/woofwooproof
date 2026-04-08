import { useEffect, useState } from "react";

export function useActiveSection(ids = []) {
  const [activeSection, setActiveSection] = useState(ids[0] || "");

  useEffect(() => {
    if (!ids.length) return undefined;

    const observers = ids
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(id);
          },
          { threshold: 0.45, rootMargin: "-10% 0px -20% 0px" }
        );

        observer.observe(element);
        return observer;
      })
      .filter(Boolean);

    return () => observers.forEach((observer) => observer.disconnect());
  }, [ids]);

  return activeSection;
}
