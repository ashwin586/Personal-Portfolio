"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Vault - Password Manager",
    description:
      "A full stack password manager built with security first. Generate strong passwords, store them encrypted, and manage your credentials, nothing stored in plain text.",
    tags: ["Next.js", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg, #0d1a2e, #1a3a5c)",
    emoji: "🔐",
    link: "#",
    github: "https://github.com/ashwin586/vault-client",
  },
  {
    id: 2,
    title: "Finance Data Backend",
    description:
      "A role-based finance records and dashboard API built with Node.js, PostgreSQL and Prisma. Features JWT auth, RBAC middleware, transaction management, and aggregated monthly trends.",
    tags: ["Node.js", "PostgreSQL", "Prisma", "Express"],
    category: "Backend",
    gradient: "linear-gradient(135deg, #1a2e0d, #2d5c1a)",
    emoji: "📊",
    link: "https://finance-data-backend-production.up.railway.app/api/docs/",
    github: "https://github.com/ashwin586/finance-data-backend",
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
      <div className="w-full max-w-4xl h-full flex flex-col gap-4 md:gap-6 py-4">
        {/* header */}
        <div className="flex flex-col gap-3 md:gap-4 shrink-0">
          {/* section label */}
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-px"
              style={{ background: "var(--color-indigo)" }}
            />
            <span
              className="text-[11px] tracking-widest uppercase font-mono"
              style={{ color: "var(--color-indigo)" }}
            >
              Selected work
            </span>
          </div>

          {/* heading + filter — stacks on mobile */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Things I&apos;ve{" "}
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

            {/* filter pills — scrollable on mobile */}
            <div
              className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-end md:overflow-x-visible"
              style={{ scrollbarWidth: "none" }}
            >
              <style>{`.filter-scroll::-webkit-scrollbar { display: none; }`}</style>
              <div className="filter-scroll flex gap-2 shrink-0 md:flex-wrap">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveFilter(tag)}
                    className="text-[11px] px-3 py-1 rounded-full font-mono border transition-all duration-200 cursor-pointer shrink-0"
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

          {/* project count */}
          <p
            className="text-[11px] font-mono"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" ? ` tagged ${activeFilter}` : " total"}
          </p>
        </div>

        {/* scrollable grid */}
        <div
          className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`.works-grid-scroll::-webkit-scrollbar { display: none; }`}</style>

          {/* 1 col on mobile, 2 col on tablet+ */}
          <div className="works-grid-scroll grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pb-4">
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
                {/* thumbnail — shorter on mobile */}
                <div
                  className="h-24 md:h-36 flex items-center justify-center text-3xl md:text-4xl relative overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  <span>{project.emoji}</span>

                  {/* hover overlay — on mobile show links always visible */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300"
                    style={{
                      background: "rgba(10,10,15,0.85)",
                      opacity: hovered === project.id ? 1 : 0,
                    }}
                  >
                    <a
                      href={project.link}
                      className="text-[12px] font-mono px-4 py-1.5 rounded-lg border transition-all duration-200"
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
                      className="text-[12px] font-mono px-4 py-1.5 rounded-lg border transition-all duration-200"
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
                <div className="p-3 md:p-4 flex flex-col gap-2 md:gap-3 flex-1">
                  {/* category + links row on mobile */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-mono tracking-widest uppercase w-fit px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(111,106,248,0.1)",
                        color: "var(--color-indigo)",
                      }}
                    >
                      {project.category}
                    </span>

                    {/* mobile only — inline links since hover doesn't work on touch */}
                    <div className="flex gap-2 md:hidden">
                      <a
                        href={project.link}
                        className="text-[10px] font-mono"
                        style={{ color: "var(--color-indigo)" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live ↗
                      </a>
                      <a
                        href={project.github}
                        className="text-[10px] font-mono"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>

                  {/* title */}
                  <h3 className="text-sm font-semibold text-white">
                    {project.title}
                  </h3>

                  {/* description — fewer lines on mobile */}
                  <p
                    className="text-xs leading-relaxed flex-1 line-clamp-2 md:line-clamp-none"
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

          {/* empty state */}
          {filtered.length === 0 && (
            <div
              className="text-center py-16 font-mono text-sm"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              no projects with that tag yet
            </div>
          )}
        </div>

        {/* scroll hint */}
        {filtered.length > 2 && (
          <div
            className="shrink-0 flex items-center justify-center gap-2 pb-1"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            <span className="text-[10px] font-mono tracking-widest">
              scroll for more
            </span>
            <span className="text-[10px]">↓</span>
          </div>
        )}
      </div>
    </section>
  );
}
