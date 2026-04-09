"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label: "Frontend",
    color: "#9d9af8",
    ring: 90,
    items: ["React", "Next.JS", "Tailwind", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend",
    color: "#4ecdc4",
    ring: 150,
    items: ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    color: "#f7c948",
    ring: 210,
    items: ["AWS", "Git", "Firebase", "GitHub", "Postman", "Swagger"],
  },
];

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 560;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;
    let angle = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#6f6af8";
      ctx.fill();

      // center label
      ctx.font = "600 13px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.textAlign = "center";
      ctx.fillText("AV", cx, cy + 5);

      skillGroups.forEach((group, gi) => {
        const radius = group.ring;
        const count = group.items.length;

        // draw orbit ring
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        group.items.forEach((item, i) => {
          // each item spaced evenly + slowly rotates
          const itemAngle =
            (i / count) * Math.PI * 2 + angle * (gi % 2 === 0 ? 1 : -1) * 0.4;

          const x = cx + radius * Math.cos(itemAngle);
          const y = cy + radius * Math.sin(itemAngle);

          // dot
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = group.color;
          ctx.globalAlpha = 0.85;
          ctx.fill();
          ctx.globalAlpha = 1;

          // label
          ctx.font = "500 11px JetBrains Mono, monospace";
          ctx.fillStyle = group.color;
          ctx.globalAlpha = 0.85;
          ctx.textAlign = x > cx ? "left" : "right";
          const offset = x > cx ? 10 : -10;
          ctx.fillText(item, x + offset, y + 4);
        });
      });

      angle = (angle + 0.003) % (Math.PI * 2);
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="section" id="about">
      <div className="w-full max-w-4xl flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center py-2">
        {/* LEFT — bio */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* section label */}
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <div className="w-6 h-px bg-(--color-indigo)" />
            <span
              className="text-[11px] tracking-widest uppercase font-mono"
              style={{ color: "var(--color-indigo)" }}
            >
              About me
            </span>
          </div>

          {/* heading */}
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Passionate about
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6f6af8, #4ecdc4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              building things
            </span>
          </h2>

          {/* bio - only one paragraph on mobile */}
          <p
            className="text-sm leading-loose"
            style={{ color: "var(--color-text-muted)" }}
          >
            Full stack developer with a year of experience building real world
            applications from crafting clean, responsive interfaces to designing
            scalable backends and shipping to production. I&apos;ve worked
            across the entire stack, frontend, backend, and deployment, turning
            ideas into working products end to end.
          </p>

          <p
            className="hidden md:block text-sm leading-loose"
            style={{ color: "var(--color-text-muted)" }}
          >
            I don&apos;t just write code. I think about why it&apos;s being
            built, who&apos;s going to use it, and how to make sure it actually
            works in the real world. That&apos;s the part that keeps me hooked.
          </p>

          {/* skill group legend */}
          <div className="flex gap-4">
            {[
              { label: "Frontend", color: "#9d9af8" },
              { label: "Backend", color: "#4ecdc4" },
              { label: "Tools", color: "#f7c948" },
            ].map((g) => (
              <div key={g.label} className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: g.color }}
                />
                <span
                  className="text-[11px] font-mono"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {g.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — orbit canvas - Desktop Only */}
        <div className="hidden md:flex items-center justify-center">
          <canvas ref={canvasRef} style={{ width: "560px", height: "560px" }} />
        </div>

        {/* Skill pills - mobile only */}
        <div className="flex flex-wrap md:hidden gap-2">
          {[
            {
              skill: "React",
              color: "#9d9af8",
              bg: "rgba(111,106,248,0.08)",
              border: "rgba(111,106,248,0.25)",
            },
            {
              skill: "Redux",
              color: "#9d9af8",
              bg: "rgba(111,106,248,0.08)",
              border: "rgba(111,106,248,0.25)",
            },
            {
              skill: "Tailwind",
              color: "#9d9af8",
              bg: "rgba(111,106,248,0.08)",
              border: "rgba(111,106,248,0.25)",
            },
            {
              skill: "HTML5",
              color: "#9d9af8",
              bg: "rgba(111,106,248,0.08)",
              border: "rgba(111,106,248,0.25)",
            },
            {
              skill: "CSS3",
              color: "#9d9af8",
              bg: "rgba(111,106,248,0.08)",
              border: "rgba(111,106,248,0.25)",
            },
            {
              skill: "JavaScript",
              color: "#9d9af8",
              bg: "rgba(111,106,248,0.08)",
              border: "rgba(111,106,248,0.25)",
            },
            {
              skill: "Node.js",
              color: "#4ecdc4",
              bg: "rgba(78,205,196,0.08)",
              border: "rgba(78,205,196,0.25)",
            },
            {
              skill: "Express.js",
              color: "#4ecdc4",
              bg: "rgba(78,205,196,0.08)",
              border: "rgba(78,205,196,0.25)",
            },
            {
              skill: "MongoDB",
              color: "#4ecdc4",
              bg: "rgba(78,205,196,0.08)",
              border: "rgba(78,205,196,0.25)",
            },
            {
              skill: "PostgreSQL",
              color: "#4ecdc4",
              bg: "rgba(78,205,196,0.08)",
              border: "rgba(78,205,196,0.25)",
            },
            {
              skill: "Firebase",
              color: "#4ecdc4",
              bg: "rgba(78,205,196,0.08)",
              border: "rgba(78,205,196,0.25)",
            },
            {
              skill: "AWS",
              color: "#f7c948",
              bg: "rgba(247,201,72,0.08)",
              border: "rgba(247,201,72,0.25)",
            },
            {
              skill: "Git",
              color: "#f7c948",
              bg: "rgba(247,201,72,0.08)",
              border: "rgba(247,201,72,0.25)",
            },
            {
              skill: "GitHub",
              color: "#f7c948",
              bg: "rgba(247,201,72,0.08)",
              border: "rgba(247,201,72,0.25)",
            },
            {
              skill: "REST APIs",
              color: "#f7c948",
              bg: "rgba(247,201,72,0.08)",
              border: "rgba(247,201,72,0.25)",
            },
          ].map(({ skill, color, bg, border }) => (
            <span
              key={skill}
              className="text-[11px] px-3 py-1 rounded-full font-mono border"
              style={{ color, background: bg, borderColor: border }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
