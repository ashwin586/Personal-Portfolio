"use client";

import { useEffect, useRef, useState } from "react";

import DotGrid from "@/components/DotGrid";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

const sections = [
  { id: "hero", label: "home" },
  { id: "about", label: "about" },
  { id: "projects", label: "work" },
  { id: "contact", label: "contact" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionEls = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sectionEls).indexOf(entry.target);
            if (index !== -1) setCurrentIndex(index);
          }
        });
      },
      { root: wrapperRef.current, threshold: 0.5 },
    );
    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = String(currentIndex + 1).padStart(2, "0");
  const total = String(sections.length).padStart(2, "0");
  const label = sections[currentIndex].label;

  return (
    <main>
      <DotGrid />
      <NavBar />
      <div className="sections-wrapper">
        <Hero />
      </div>

      <div
        className="fixed bottom-5 left-10 z-50 flex items-center gap-3"
        style={{
          color: "rgba(255,255,255,0.25)",
          fontSize: "11px",
          letterSpacing: "0.1em",
        }}
      >
        <span className="font-mono">{current}</span>
        <div className="w-8 h-px bg-white/20" />
        <span className="font-mono">{total}</span>
        <span className="ml-1 uppercase tracking-widest">{label}</span>
      </div>
    </main>
  );
}
