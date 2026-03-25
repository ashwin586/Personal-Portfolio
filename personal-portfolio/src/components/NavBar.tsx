"use client";

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
  return (
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

      {/* links */}
      <ul className="flex items-center gap-8 list-none">
        {navItems.map((item) => (
          <li key={item.index}>
            <button
              onClick={() => scrollTo(item.index)}
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
    </nav>
  );
}
