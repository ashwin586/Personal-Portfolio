"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project Title One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #1a1a3e, #2d2d6b)",
    emoji: "🚀",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Project Title Two",
    description:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
    tags: ["EJS", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #0d2e1e, #1a5c3a)",
    emoji: "🛍️",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Project Title Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
    tags: ["React", "Firebase", "Tailwind"],
    category: "Frontend",
    gradient: "linear-gradient(135deg, #2e1a0d, #5c3a1a)",
    emoji: "⚡",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Project Title Four",
    description:
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste.",
    tags: ["Node.js", "PostgreSQL", "Express", "AWS"],
    category: "Backend",
    gradient: "linear-gradient(135deg, #1a2e0d, #3a5c1a)",
    emoji: "🔧",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Project Title One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #1a1a3e, #2d2d6b)",
    emoji: "🚀",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Project Title One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #1a1a3e, #2d2d6b)",
    emoji: "🚀",
    link: "#",
    github: "#",
  },
  {
    id: 7,
    title: "Project Title One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #1a1a3e, #2d2d6b)",
    emoji: "🚀",
    link: "#",
    github: "#",
  },
  {
    id: 8,
    title: "Project Title One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #1a1a3e, #2d2d6b)",
    emoji: "🚀",
    link: "#",
    github: "#",
  },
  {
    id: 9,
    title: "Project Title One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #1a1a3e, #2d2d6b)",
    emoji: "🚀",
    link: "#",
    github: "#",
  },
];

// all unique tags across all projects for filter
const allTags = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="section" id="works">
      <div className="w-full max-w-4xl h-full flex flex-col gap-6 py-4">
        {/* header */}
        <div className="flex flex-col gap-4 shrink-0">
          {/* section label */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-(--color-indigo)" />
            <span
              className="text-[11px] tracking-widest uppercase font-mono"
              style={{ color: "var(--color-indigo)" }}
            >
              Selected work
            </span>
          </div>

          {/* heading + filter row */}
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Things I&apos;ve
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #6f6af8, #4ecdc4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                built
              </span>
            </h2>

            {/* filter pills */}
            <div className="flex gap-2 flex-wrap justify-end">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className="text-[11px] px-3 py-1 rounded-full font-mono border transition-all duration-200 cursor-pointer"
                  style={{
                    background:
                      activeFilter === tag
                        ? "var(--color-indigo)"
                        : "rgba(255,255,255,0.03)",
                    borderColor:
                      activeFilter === tag
                        ? "var(--color-indigo)"
                        : "rgba(255,255,255,0.1)",
                    color:
                      activeFilter === tag ? "#fff" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* project grid */}
        <div
          className="flex-1 overflow-y-auto pr-1"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`
            .works-grid-scroll::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="works-grid-scroll grid grid-cols-2 gap-4 pb-4">
            {filtered.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${
                    hovered === project.id
                      ? "rgba(111,106,248,0.4)"
                      : "rgba(255,255,255,0.07)"
                  }`,
                  transform:
                    hovered === project.id
                      ? "translateY(-4px)"
                      : "translateY(0)",
                }}
              >
                {/* thumbnail */}
                <div
                  className="h-36 flex items-center justify-center text-4xl relative overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  <span>{project.emoji}</span>

                  {/* overlay on hover — shows links */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300"
                    style={{
                      background: "rgba(10,10,15,0.85)",
                      opacity: hovered === project.id ? 1 : 0,
                    }}
                  >
                    <a
                      href={project.link}
                      className="text-[12px] font-mono px-4 py-1.5 rounded-lg border transition-all duration-200 hover:bg-(--color-indigo)"
                      style={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.2)",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live ↗
                    </a>
                    <a
                      href={project.github}
                      className="text-[12px] font-mono px-4 py-1.5 rounded-lg border transition-all duration-200 hover:bg-white/10"
                      style={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.2)",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>

                {/* card content */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  {/* category badge */}
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase w-fit px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(111,106,248,0.1)",
                      color: "var(--color-indigo)",
                    }}
                  >
                    {project.category}
                  </span>

                  {/* title */}
                  <h3 className="text-sm font-semibold text-white">
                    {project.title}
                  </h3>

                  {/* description */}
                  <p
                    className="text-xs leading-relaxed flex-1"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {project.description}
                  </p>

                  {/* tags */}
                  <div
                    className="flex flex-wrap gap-1.5 mt-auto pt-2"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(78,205,196,0.08)",
                          color: "#4ecdc4",
                          border: "1px solid rgba(78,205,196,0.15)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* empty state — when filter has no results */}
        {filtered.length === 0 && (
          <div
            className="text-center py-16 font-mono text-sm"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            no projects with that tag yet
          </div>
        )}
      </div>
    </section>
  );
}
