"use client";

import { useState } from "react";

const contact = {
  email: "ashwinv586@gmail.com",
  github: "https://github.com/ashwin586", // replace
  linkedin: "https://www.linkedin.com/in/ashwin-v-/", // replace
  resume:
    "https://drive.google.com/file/d/1wWZz6UQmrg2s0-HP28u-msrFntd0mWaM/view?usp=sharing",
};

const YEAR = new Date().getFullYear();

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" id="contact">
      <div className="w-full max-w-2xl flex flex-col gap-5 md:gap-8">
        {/* section label */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-px bg-(--color-indigo)" />
          <span
            className="text-[11px] tracking-widest uppercase font-mono"
            style={{ color: "var(--color-indigo)" }}
          >
            Contact
          </span>
        </div>

        {/* heading */}
        <div className="flex flex-col gap-2 md:gap-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Let&apos;s build
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6f6af8, #4ecdc4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              something great
            </span>
          </h2>
          <p
            className="text-sm leading-loose max-w-md"
            style={{ color: "var(--color-text-muted)" }}
          >
            Open to full-time roles and freelance projects. Drop me a message
            and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* main contact card */}
        <div
          className="rounded-2xl flex flex-col gap-4 md:gap-5 p-4 md:p-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* availability status */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
            <div className="flex items-center gap-3">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{
                  background: "var(--color-teal)",
                  boxShadow: "0 0 0 3px rgba(78,205,196,0.15)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-teal)" }}
              >
                Available for work
              </span>
            </div>

            {/* timezone */}
            <div
              className="flex items-center gap-2 text-[11px] font-mono px-3 py-1 rounded-full w-fit"
              style={{
                color: "rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span>📍</span>
              <span className="md:hidden">Kannur, Kerala, India</span>
              <span className="hidden md:inline">Kannur, Kerala, India</span>
              <span
                style={{
                  width: "1px",
                  height: "10px",
                  background: "rgba(255,255,255,0.15)",
                  display: "inline-block",
                }}
              />
              <span>UTC +5:30</span>
            </div>
          </div>

          {/* divider */}
          <div
            style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
          />

          {/* email row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1 min-w-0">
              <span
                className="text-[10px] font-mono tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Email
              </span>
              <span
                className="text-xs md:text-sm font-mono"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {contact.email}
              </span>
            </div>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-[12px] font-mono px-3 md:px-4 py-2 rounded-lg border transition-all duration-200 cursor-pointer shrink-0"
              style={{
                background: copied
                  ? "rgba(78,205,196,0.1)"
                  : "rgba(255,255,255,0.03)",
                borderColor: copied
                  ? "rgba(78,205,196,0.3)"
                  : "rgba(255,255,255,0.1)",
                color: copied ? "var(--color-teal)" : "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => {
                if (!copied) {
                  (e.currentTarget as HTMLElement).style.background =
                    "linear-gradient(135deg, #6f6af8, #4ecdc4)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#6f6af8";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 12px rgba(111,106,248,0.5), 0 0 24px rgba(111,106,248,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!copied) {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.4)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }
              }}
            >
              {copied ? "✓ copied" : "copy"}
            </button>
          </div>

          {/* divider */}
          <div
            style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
          />

          {/* links row — github, linkedin, resume */}
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 md:gap-2 py-3 md:py-4 rounded-xl border transition-all duration-200 group"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(111,106,248,0.4)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(111,106,248,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.02)";
              }}
            >
              {/* github svg icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  fill="currentColor"
                />
              </svg>
              <span
                className="text-[11px] font-mono"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                GitHub
              </span>
              <span
                className="text-[9px] font-mono"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                ↗ open
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 md:gap-2 py-3 md:py-4 rounded-xl border transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(78,205,196,0.4)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(78,205,196,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.02)";
              }}
            >
              {/* linkedin svg icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  fill="currentColor"
                />
                <circle cx="4" cy="4" r="2" fill="currentColor" />
              </svg>
              <span
                className="text-[11px] font-mono"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                LinkedIn
              </span>
              <span
                className="text-[9px] font-mono"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                ↗ open
              </span>
            </a>

            {/* Resume */}
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 md:gap-2 py-3 md:py-4 rounded-xl border transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(247,201,72,0.4)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(247,201,72,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.02)";
              }}
            >
              {/* resume icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <path
                  d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span
                className="text-[11px] font-mono"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Resume
              </span>
              <span
                className="text-[9px] font-mono"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                ↗ download
              </span>
            </a>
          </div>
        </div>

        {/* footer line */}
        <div
          className="flex items-center justify-between"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          <span className="text-[11px] font-mono">~ Ashwin V · {YEAR}</span>
        </div>
      </div>
    </section>
  );
}
