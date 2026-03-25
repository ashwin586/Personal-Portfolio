"use client";

const sections = ["Home", "About", "Work", "Contact"];

interface Props {
  current: number;
  scrollTo: (i: number) => void;
}

export default function ProgressIndicator({ current, scrollTo }: Props) {
    return (
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="flex items-center justify-center cursor-pointer"
            style={{ background: "none", border: "none", padding: "2px 0" }}
          >
            <div
              style={{
                width: current === i ? "4px" : "6px",
                height: current === i ? "20px" : "6px",
                borderRadius: "99px",
                background:
                  current === i ? "#6f6af8" : "rgba(255,255,255,0.25)",
                border:
                  current === i ? "none" : "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  current === i ? "0 0 8px rgba(111,106,248,0.7)" : "none",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                if (i !== current) {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.3)";
                }
              }}
              onMouseLeave={(e) => {
                if (i !== current) {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }
              }}
            />
          </button>
        ))}
      </div>
    );
  }
