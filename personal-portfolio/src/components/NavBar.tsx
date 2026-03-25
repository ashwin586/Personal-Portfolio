"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", index: 0 },
  { label: "About", index: 1 },
  { label: "Work", index: 2 },
  { label: "Contact", index: 3 },
];

interface Props {
  current: number;
  scrollTo: (i: number) => void;
}

export default function NavBar({ current, scrollTo }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (i: number) => {
    scrollTo(i);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-5 border-b z-50"
        style={{
          background: "var(--color-bg-nav)",
          borderColor: "var(--color-border-nav)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* logo */}
        <button
          onClick={() => scrollTo(0)}
          className="font-bold font-mono text-white text-base tracking-widest cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          AV
        </button>

        {/* desktop links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.index}>
              <button
                onClick={() => handleNav(item.index)}
                className="relative text-[13px] font-mono cursor-pointer pb-1.5 transition-all duration-200"
                style={{
                  background: "none",
                  border: "none",
                  color:
                    current === item.index ? "#fff" : "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  if (current !== item.index) {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.8)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (current !== item.index) {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.4)";
                  }
                }}
              >
                {item.label}

                {/* animated indigo underline */}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    height: "1.5px",
                    width: current === item.index ? "100%" : "0%",
                    background: "#6f6af8",
                    borderRadius: "99px",
                    transition: "width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    boxShadow: "0 0 6px rgba(111,106,248,0.7)",
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* hamburger button — visible only on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          {/* 3 lines that animate into X */}
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "#fff",
              borderRadius: "99px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "#fff",
              borderRadius: "99px",
              transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "#fff",
              borderRadius: "99px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* mobile menu overlay — full screen */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
        style={{
          background: "rgba(10,10,15,0.97)",
          backdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <ul className="flex flex-col gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.index}>
              <button
                onClick={() => handleNav(item.index)}
                className="text-2xl font-mono cursor-pointer transition-all duration-200"
                style={{
                  background: "none",
                  border: "none",
                  color:
                    current === item.index ? "#fff" : "rgba(255,255,255,0.35)",
                }}
              >
                {/* index number */}
                <span
                  className="text-xs mr-3 font-mono"
                  style={{ color: "var(--color-indigo)" }}
                >
                  0{item.index + 1}
                </span>

                {item.label}

                {/* active dot */}
                {current === item.index && (
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full ml-3 mb-1"
                    style={{ background: "var(--color-indigo)" }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* bottom of overlay — email */}
        <div
          className="absolute bottom-10 text-[11px] font-mono"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          ashwinv586@gmail.com
        </div>
      </div>
    </>
  );
}
