import { useEffect, useRef } from "react";

export default function Hero() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = [
      {
        cmd: "whoami",
        output: "Ashwin V · Full Stack Developer · Kannur, Kerala, India",
        color: "var(--color-text-muted)",
      },
      {
        cmd: "skills --top",
        output: `<span style="color:var(--color-indigo)">React</span> · <span style="color:var(--color-indigo)">Next.js</span> · <span style="color:var(--color-teal)">Express.js</span> · <span style="color:var(--color-teal)">Node</span> · <span style="color:var(--color-amber)">MongoDB</span> · <span style="color:var(--color-amber)">AWS</span>`,
        color: "var(--color-text-muted)",
      },
      {
        cmd: "status",
        output: "Open to work — let's talk! ",
        color: "var(--color-teal)",
      },
    ];

    const term = terminalRef.current;
    if (!term) return;

    let lineIndex = 0;
    let charIndex = 0;
    let isTypingCmd = true;

    // build first line structure immediately
    const buildLine = (index: number) => {
      const wrapper = document.createElement("div");
      wrapper.style.marginBottom = "4px";

      const promptSpan = document.createElement("span");
      promptSpan.style.color = "var(--color-term-prompt)";
      promptSpan.textContent = "~/ashwin  ❯ ";

      const cmdSpan = document.createElement("span");
      cmdSpan.style.color = "var(--color-term-command)";
      cmdSpan.id = `cmd-${index}`;

      wrapper.appendChild(promptSpan);
      wrapper.appendChild(cmdSpan);
      term.appendChild(wrapper);

      return cmdSpan;
    };

    const buildOutput = (index: number) => {
      const outDiv = document.createElement("div");
      outDiv.style.marginBottom = "10px";
      outDiv.style.color = lines[index].color;
      outDiv.style.paddingLeft = "4px";

      const arrow = document.createElement("span");
      arrow.style.color = "var(--color-text-muted)";
      arrow.textContent = "→ ";

      const outSpan = document.createElement("span");
      outSpan.innerHTML = lines[index].output;

      // add cursor blink on last line
      if (index === lines.length - 1) {
        const cursor = document.createElement("span");
        cursor.style.cssText = `
          display: inline-block;
          width: 8px;
          height: 14px;
          background: var(--color-indigo);
          vertical-align: middle;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        `;
        outSpan.appendChild(cursor);
      }

      outDiv.appendChild(arrow);
      outDiv.appendChild(outSpan);
      term.appendChild(outDiv);
    };

    // start typing first line
    let currentCmdSpan = buildLine(0);

    const type = () => {
      const currentLine = lines[lineIndex];

      if (isTypingCmd) {
        // typing the command
        if (charIndex < currentLine.cmd.length) {
          currentCmdSpan.textContent += currentLine.cmd[charIndex];
          charIndex++;
          setTimeout(type, 65);
        } else {
          // finished command — show output after short pause
          isTypingCmd = false;
          charIndex = 0;
          setTimeout(() => {
            buildOutput(lineIndex);
            lineIndex++;
            if (lineIndex < lines.length) {
              isTypingCmd = true;
              currentCmdSpan = buildLine(lineIndex);
              setTimeout(type, 200);
            }
          }, 300);
        }
      }
    };

    setTimeout(type, 600);
  }, []);

  return (
    <section className="section">
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div>
          {/* Job Tag Line */}
          <div className="flex items-center gap-4 mb-8">
            <div
              style={{
                width: "24px",
                height: "1px",
                background: "var(--color-indigo)",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-indigo)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Full Stack Developer
            </span>
          </div>

          {/* name */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white mb-2">
            Hi, I&apos;m
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6f6af8, #4ecdc4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ashwin V
            </span>
          </h1>

          {/* subtitle */}
          <p
            className="text-[15px] mb-7 leading-relaxed"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            Building products from database to deployment.
          </p>
        </div>

        {/* Terminal */}
        <div
          className="rounded-xl overflow-hidden mb-6"
          style={{
            background: "var(--color-term-bg)",
            border: "1px solid var(--color-term-border)",
          }}
        >
          {/* terminal bar */}
          <div
            className="flex items-center gap-1.5 px-3.5 py-2"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>

          {/* terminal body */}
          <div
            ref={terminalRef}
            className="p-4 font-mono text-xs leading-relaxed min-h-[140px]"
          />
        </div>
        {/* CTA buttons */}
        <div className="flex gap-3">
          <button
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-white cursor-pointer transition-opacity hover:opacity-85"
            style={{ background: "var(--color-indigo)" }}
          >
            View my work
          </button>
          <button
            className="px-6 py-2.5 rounded-lg text-sm cursor-pointer transition-all hover:border-white/30 hover:text-white"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
