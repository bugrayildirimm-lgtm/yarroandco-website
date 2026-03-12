'use client';

import { useEffect, useRef } from 'react';

export function DottedSurface() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      // Dark background like the demo
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const spacing = 11;          // controls density
      const dotSize = 1.3;         // small dots like in demo
      const rows = Math.ceil(canvas.height / spacing) + 4;
      const cols = Math.ceil(canvas.width / spacing) + 4;

      for (let row = -2; row < rows; row++) {
        for (let col = -2; col < cols; col++) {
          const baseX = col * spacing;
          const baseY = row * spacing;

          // Multiple sine waves for smooth, organic ripple
          const wave1 = Math.sin(time * 0.7 + baseX * 0.008 + baseY * 0.006) * 28;
          const wave2 = Math.cos(time * 1.1 + baseX * 0.007 + baseY * 0.009) * 22;
          const wave3 = Math.sin(time * 0.4 + (baseX + baseY) * 0.005) * 18;

          const offsetY = wave1 + wave2 + wave3;

          // Fade based on wave height → creates depth illusion
          const alpha = Math.max(0.08, Math.min(0.75, (offsetY + 70) / 140));

          ctx.fillStyle = `rgba(220, 240, 255, ${alpha})`; // light cyan-white dots
          ctx.beginPath();
          ctx.arc(baseX, baseY + offsetY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 0.035; // calm animation speed
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}