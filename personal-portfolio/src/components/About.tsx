// "use client";

// export default function About() {
//   const skills = {
//     Frontend: ["React", "Redux", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
//     Backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"],
//     Tools: ["AWS", "Git", "GitHub", "REST APIs"],
//   };

//   const pillColors: Record<
//     string,
//     { bg: string; border: string; text: string }
//   > = {
//     Frontend: {
//       bg: "rgba(111, 106, 248, 0.08)",
//       border: "rgba(111, 106, 248, 0.25)",
//       text: "#9d9af8",
//     },
//     Backend: {
//       bg: "rgba(78, 205, 196, 0.08)",
//       border: "rgba(78, 205, 196, 0.25)",
//       text: "#4ecdc4",
//     },
//     Tools: {
//       bg: "rgba(247, 201, 72, 0.08)",
//       border: "rgba(247, 201, 72, 0.25)",
//       text: "#f7c948",
//     },
//   };

//   return (
//     <section className="section" id="about">
//       <div className="w-full max-w-4xl grid grid-cols-2 gap-16 items-center">
//         {/* LEFT — bio */}
//         <div className="flex flex-col gap-6">
//           {/* section label */}
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-px bg-(--color-indigo)`" />
//             <span
//               className="text-[11px] tracking-widest uppercase font-mono"
//               style={{ color: "var(--color-indigo)" }}
//             >
//               About me
//             </span>
//           </div>

//           {/* heading */}
//           <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
//             Passionate about
//             <br />
//             <span
//               style={{
//                 background: "linear-gradient(135deg, #6f6af8, #4ecdc4)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               building things
//             </span>
//           </h2>

//           {/* bio */}
//           <p
//             className="text-sm leading-loose"
//             style={{ color: "var(--color-text-muted)" }}
//           >
//             I&apos;m a MERN stack developer with over a year of hands-on project
//             experience. Even without corporate experience yet, I&apos;ve built
//             real-world applications end to end — from designing clean React
//             interfaces to setting up reliable Node backends.
//           </p>

//           <p
//             className="text-sm leading-loose"
//             style={{ color: "var(--color-text-muted)" }}
//           >
//             I enjoy every part of the development process and I&apos;m always
//             looking to improve, collaborate, and ship quality work.
//           </p>
//         </div>

//         {/* RIGHT — skills */}
//         <div className="flex flex-col gap-6">
//           {Object.entries(skills).map(([group, items]) => (
//             <div key={group}>
//               {/* group label */}
//               <p
//                 className="text-[10px] tracking-widest uppercase mb-3 font-mono"
//                 style={{ color: "rgba(255,255,255,0.25)" }}
//               >
//                 {group}
//               </p>

//               {/* pills */}
//               <div className="flex flex-wrap gap-2">
//                 {items.map((skill) => (
//                   <span
//                     key={skill}
//                     className="text-[11px] px-3 py-1 rounded-full font-mono border"
//                     style={{
//                       background: pillColors[group].bg,
//                       borderColor: pillColors[group].border,
//                       color: pillColors[group].text,
//                     }}
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
      <div className="w-full max-w-4xl grid grid-cols-2 gap-16 items-center">
        {/* LEFT — bio */}
        <div className="flex flex-col gap-6">
          {/* section label */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-(--color-indigo)" />
            <span
              className="text-[11px] tracking-widest uppercase font-mono"
              style={{ color: "var(--color-indigo)" }}
            >
              About me
            </span>
          </div>

          {/* heading */}
          <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
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

          {/* bio */}
          <p
            className="text-sm leading-loose"
            style={{ color: "var(--color-text-muted)" }}
          >
            I&apos;m a MERN stack developer with over a year of hands-on project
            experience. Even without corporate experience yet, I&apos;ve built
            real-world applications end to end — from designing clean React
            interfaces to setting up reliable Node backends.
          </p>

          <p
            className="text-sm leading-loose"
            style={{ color: "var(--color-text-muted)" }}
          >
            I enjoy every part of the development process and I&apos;m always
            looking to improve, collaborate, and ship quality work.
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

        {/* RIGHT — orbit canvas */}
        <div className="flex items-center justify-center">
          <canvas ref={canvasRef} style={{ width: "560px", height: "560px" }} />
        </div>
      </div>
    </section>
  );
}
