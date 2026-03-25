"use client";

import { useRef, useEffect } from "react";

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -999;
      mouseRef.current.y = -999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 30;
      const mouse = mouseRef.current;
      const maxRadius = 120;

      for (let y = 0; y < canvas.height; y += spacing) {
        for (let x = 0; x < canvas.width; x += spacing) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let opacity = 0.1;
          let radius = 1.5;

          if (distance < maxRadius) {
            const intensity = 1 - distance / maxRadius;
            opacity = 0.1 + intensity * 0.7;
            radius = 1.5 + intensity * 2;
          }
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(111, 106, 248, ${opacity})`;
          ctx.fill();
        }
      }
      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    ></canvas>
  );
}
