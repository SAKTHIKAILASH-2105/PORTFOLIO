import React, { useEffect, useRef } from 'react';

/**
 * Animated Interactive Circuit Board Canvas
 * Draws futuristic PCB traces, glowing nodes, and pulsing signals
 */
export const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate circuit paths
    const traceCount = Math.floor(width / 90);
    const traces = [];
    const pulses = [];

    class Trace {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.length = 60 + Math.random() * 140;
        this.segments = [];
        this.alpha = 0.08 + Math.random() * 0.15;
        this.width = Math.random() > 0.8 ? 1.5 : 1;
        this.hasNode = Math.random() > 0.5;

        let currX = this.x;
        let currY = this.y;
        this.segments.push({ x: currX, y: currY });

        // Generate orthogonal trace points (PCB 45 or 90 degree bends)
        const steps = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < steps; i++) {
          const dir = Math.floor(Math.random() * 4);
          const stepDist = 30 + Math.random() * 50;

          if (dir === 0) currX += stepDist;
          else if (dir === 1) currY += stepDist;
          else if (dir === 2) currX -= stepDist;
          else currY -= stepDist;

          this.segments.push({ x: currX, y: currY });
        }
      }

      draw() {
        ctx.strokeStyle = `rgba(0, 210, 255, ${this.alpha})`;
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.segments[0].x, this.segments[0].y);

        for (let i = 1; i < this.segments.length; i++) {
          ctx.lineTo(this.segments[i].x, this.segments[i].y);
        }
        ctx.stroke();

        // Optional terminal or junction node
        if (this.hasNode) {
          const first = this.segments[0];
          const last = this.segments[this.segments.length - 1];

          ctx.fillStyle = `rgba(0, 245, 255, ${this.alpha * 1.5})`;
          ctx.beginPath();
          ctx.arc(first.x, first.y, 2, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(last.x, last.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    class Pulse {
      constructor(trace) {
        this.trace = trace;
        this.progress = 0;
        this.speed = 0.005 + Math.random() * 0.008;
        this.size = 2 + Math.random() * 2;
        this.color = Math.random() > 0.3 ? '#00f5ff' : '#38bdf8';
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.progress = 0;
        }
      }

      draw() {
        const segs = this.trace.segments;
        if (segs.length < 2) return;

        // Calculate position along multi-segment line
        const totalSegments = segs.length - 1;
        const scaledProgress = this.progress * totalSegments;
        const currentSegIndex = Math.floor(scaledProgress);
        const segFraction = scaledProgress - currentSegIndex;

        const p1 = segs[currentSegIndex] || segs[0];
        const p2 = segs[currentSegIndex + 1] || segs[currentSegIndex] || segs[0];

        const x = p1.x + (p2.x - p1.x) * segFraction;
        const y = p1.y + (p2.y - p1.y) * segFraction;

        // Draw glowing particle
        ctx.save();
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize traces
    for (let i = 0; i < traceCount; i++) {
      const trace = new Trace();
      traces.push(trace);
      if (Math.random() > 0.4 && !prefersReducedMotion) {
        pulses.push(new Pulse(trace));
      }
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background grid
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw traces
      traces.forEach(t => t.draw());

      // Update & draw pulses
      if (!prefersReducedMotion) {
        pulses.forEach(p => {
          p.update();
          p.draw();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      traces.length = 0;
      pulses.length = 0;
      const count = Math.floor(width / 90);
      for (let i = 0; i < count; i++) {
        const trace = new Trace();
        traces.push(trace);
        if (Math.random() > 0.4 && !prefersReducedMotion) {
          pulses.push(new Pulse(trace));
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Navy/Black Background with subtle cyber radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#060a17] to-[#040814]" />
      
      {/* Cyber gradient spot lights */}
      <div className="absolute -top-[20%] left-1/4 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-[10%] left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* HTML5 Canvas Circuit Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Hex/Scanline overlay texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
