import React, { useEffect, useRef } from 'react';

/**
 * ELECTRIC TITANIUM MECHATRONICS FUSION BACKGROUND
 * Seamlessly integrates:
 * 1. Precision Meshed Mechanical Gears in Titanium Steel & Electric Cobalt Cyan
 * 2. High-Tech PCB Circuit Pathways in High-Voltage Cyan & Gold Micro-Terminals
 * 3. Microchip / IC Stator Footprints & Solder Terminals
 * 4. Flowing Electronic Signal Pulses traveling through circuits and gear hubs
 * 5. Subtle Technical Blueprint Coordinates & Alignment Marks
 */
export const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Detect user accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Setup High-DPI canvas
    const setupCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    // -------------------------------------------------------------
    // 1. GEAR SYSTEM (Synchronously Meshed Mechanical Drive Train)
    // -------------------------------------------------------------
    class Gear {
      constructor({ x, y, radius, teeth, speed, color = '#00f0ff', cyanRim = true, spokes = 5, hasCoreChip = false }) {
        this.baseX = x; // fraction of screen width
        this.baseY = y; // fraction of screen height
        this.radius = radius;
        this.teeth = teeth;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
        this.color = color;
        this.cyanRim = cyanRim;
        this.spokes = spokes;
        this.hasCoreChip = hasCoreChip;
        this.pulse = 0;
      }

      update() {
        if (!prefersReducedMotion) {
          this.angle += this.speed;
          this.pulse += 0.02;
        }
      }

      draw() {
        const cx = this.baseX * width;
        const cy = this.baseY * height;
        const r = this.radius;
        const toothDepth = r * 0.16;
        const pitchRadius = r;
        const rootRadius = r - toothDepth;
        const tipRadius = r + toothDepth;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(this.angle);

        // --- A. Draw Outer Gear Teeth Profile ---
        ctx.beginPath();
        const numTeeth = this.teeth;
        const step = (Math.PI * 2) / numTeeth;
        const toothHalfAngle = step * 0.28;

        for (let i = 0; i < numTeeth; i++) {
          const a = i * step;
          const a0 = a - step * 0.25;
          const a1 = a - toothHalfAngle;
          const a2 = a - toothHalfAngle * 0.6;
          const a3 = a + toothHalfAngle * 0.6;
          const a4 = a + toothHalfAngle;

          if (i === 0) {
            ctx.moveTo(Math.cos(a0) * rootRadius, Math.sin(a0) * rootRadius);
          } else {
            ctx.lineTo(Math.cos(a0) * rootRadius, Math.sin(a0) * rootRadius);
          }
          ctx.lineTo(Math.cos(a1) * rootRadius, Math.sin(a1) * rootRadius);
          ctx.lineTo(Math.cos(a2) * tipRadius, Math.sin(a2) * tipRadius);
          ctx.lineTo(Math.cos(a3) * tipRadius, Math.sin(a3) * tipRadius);
          ctx.lineTo(Math.cos(a4) * rootRadius, Math.sin(a4) * rootRadius);
        }
        ctx.closePath();

        // Metallic Gear Body Fill (Deep Machine Carbon wash)
        ctx.fillStyle = 'rgba(16, 20, 30, 0.55)';
        ctx.fill();

        // Gear Outline in Electric Cyan & Titanium Cobalt
        ctx.strokeStyle = this.cyanRim ? 'rgba(0, 240, 255, 0.7)' : 'rgba(2, 132, 199, 0.5)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // --- B. Pitch Circle (Dashed Technical Line in Machine Steel) ---
        ctx.beginPath();
        ctx.arc(0, 0, pitchRadius, 0, Math.PI * 2);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = 'rgba(226, 232, 240, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        // --- C. Mechanical Weight-Reduction Windows / Spokes ---
        const innerRimRadius = rootRadius * 0.78;
        const hubRadius = rootRadius * 0.32;

        ctx.beginPath();
        ctx.arc(0, 0, innerRimRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (this.spokes > 0) {
          const spokeStep = (Math.PI * 2) / this.spokes;
          for (let s = 0; s < this.spokes; s++) {
            const sa = s * spokeStep;
            ctx.beginPath();
            ctx.moveTo(Math.cos(sa) * hubRadius, Math.sin(sa) * hubRadius);
            ctx.lineTo(Math.cos(sa) * innerRimRadius, Math.sin(sa) * innerRimRadius);
            ctx.strokeStyle = this.cyanRim ? 'rgba(0, 240, 255, 0.45)' : 'rgba(2, 132, 199, 0.35)';
            ctx.lineWidth = 1.6;
            ctx.stroke();

            // Spoke Rivet / Fastener in Pure Platinum
            const midR = (hubRadius + innerRimRadius) * 0.55;
            ctx.beginPath();
            ctx.arc(Math.cos(sa) * midR, Math.sin(sa) * midR, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = '#f8fafc';
            ctx.fill();
          }
        }

        // --- D. Central Hub / Bearing Shaft ---
        ctx.beginPath();
        ctx.arc(0, 0, hubRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(9, 11, 16, 0.95)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Center Bore Aperture
        ctx.beginPath();
        ctx.arc(0, 0, hubRadius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = '#06070a';
        ctx.fill();
        ctx.strokeStyle = 'rgba(2, 132, 199, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Integrated Microcontroller Stator Chip at Gear Center
        if (this.hasCoreChip) {
          const chipSize = hubRadius * 0.6;
          ctx.save();
          ctx.rotate(-this.angle); // Keep chip upright while gear rotates
          ctx.fillStyle = '#0a0d14';
          ctx.fillRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize);
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 1;
          ctx.strokeRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize);

          // Glowing Core LED Pulse
          const pulseAlpha = 0.5 + Math.sin(this.pulse * 3) * 0.4;
          ctx.fillStyle = `rgba(0, 240, 255, ${pulseAlpha})`;
          ctx.beginPath();
          ctx.arc(0, 0, chipSize * 0.22, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.restore();
      }
    }

    // Initialize Gear Trains across screen corners
    const initGears = () => {
      const isMobile = width < 768;
      const baseR = Math.min(width, height) * (isMobile ? 0.18 : 0.13);

      return [
        // Top Right Primary Gear (Meshed with Subsystem 2)
        new Gear({
          x: isMobile ? 0.88 : 0.85,
          y: isMobile ? 0.12 : 0.18,
          radius: baseR * 1.15,
          teeth: 24,
          speed: 0.0025,
          cyanRim: true,
          spokes: 6,
          hasCoreChip: true
        }),
        // Top Right Secondary Gear (Meshed Planetary Pinion)
        new Gear({
          x: isMobile ? 0.98 : 0.94,
          y: isMobile ? 0.25 : 0.32,
          radius: baseR * 0.65,
          teeth: 14,
          speed: -0.0043,
          cyanRim: false,
          spokes: 4,
          hasCoreChip: false
        }),
        // Bottom Left Compound Gear
        new Gear({
          x: isMobile ? 0.1 : 0.12,
          y: isMobile ? 0.85 : 0.82,
          radius: baseR * 1.35,
          teeth: 28,
          speed: -0.002,
          cyanRim: true,
          spokes: 8,
          hasCoreChip: true
        }),
        // Bottom Left Meshed Idler Gear
        new Gear({
          x: isMobile ? 0.24 : 0.23,
          y: isMobile ? 0.72 : 0.69,
          radius: baseR * 0.55,
          teeth: 12,
          speed: 0.0046,
          cyanRim: false,
          spokes: 4,
          hasCoreChip: false
        }),
      ];
    };

    let gears = initGears();

    // -------------------------------------------------------------
    // 2. CIRCUIT TRACE & IC CHIP SYSTEM
    // -------------------------------------------------------------
    class CircuitTrace {
      constructor() {
        this.reset();
      }

      reset() {
        this.points = [];
        const isHorizontal = Math.random() > 0.5;

        let x = Math.random() * width;
        let y = Math.random() * height;
        this.points.push({ x, y });

        const segments = Math.floor(Math.random() * 4) + 3;
        for (let i = 0; i < segments; i++) {
          const len = (Math.random() * 80 + 40);
          if (isHorizontal) {
            x += (Math.random() > 0.5 ? 1 : -1) * len;
            // 45-degree chamfered PCB bend
            const chamfer = 16;
            this.points.push({ x: x - chamfer, y });
            y += (Math.random() > 0.5 ? 1 : -1) * len;
            this.points.push({ x, y });
          } else {
            y += (Math.random() > 0.5 ? 1 : -1) * len;
            const chamfer = 16;
            this.points.push({ x, y: y - chamfer });
            x += (Math.random() > 0.5 ? 1 : -1) * len;
            this.points.push({ x, y });
          }
        }

        // Color in Electric Cyan, Cobalt, or Machine Titanium
        const rand = Math.random();
        if (rand < 0.6) {
          this.color = 'rgba(0, 240, 255, 0.4)';
          this.padColor = '#00f0ff';
        } else if (rand < 0.85) {
          this.color = 'rgba(2, 132, 199, 0.35)';
          this.padColor = '#38bdf8';
        } else {
          this.color = 'rgba(245, 158, 11, 0.35)'; // Brass / Gold contact
          this.padColor = '#fbbf24';
        }

        this.width = Math.random() > 0.7 ? 1.5 : 1;
        this.hasTerminal = Math.random() > 0.3;
      }

      draw() {
        if (this.points.length < 2) return;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.stroke();

        // Draw PCB Circular Solder Pads at terminals
        if (this.hasTerminal) {
          const first = this.points[0];
          const last = this.points[this.points.length - 1];

          // Start Solder Pad
          ctx.beginPath();
          ctx.arc(first.x, first.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#06070a';
          ctx.fill();
          ctx.strokeStyle = this.padColor;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // End Solder Pad (Filled with terminal gold or cyan)
          ctx.beginPath();
          ctx.arc(last.x, last.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = this.padColor;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // -------------------------------------------------------------
    // 3. ELECTRONIC SIGNAL PULSE SYSTEM (Flowing Packets)
    // -------------------------------------------------------------
    class Pulse {
      constructor(trace) {
        this.trace = trace;
        this.segmentIndex = 0;
        this.t = 0;
        this.speed = (Math.random() * 0.012 + 0.008);
        this.size = Math.random() * 2.5 + 2;
        this.color = trace.padColor || '#00f0ff';
        this.dead = false;
      }

      update() {
        this.t += this.speed;
        if (this.t >= 1) {
          this.t = 0;
          this.segmentIndex++;
          if (this.segmentIndex >= this.trace.points.length - 1) {
            this.dead = true;
          }
        }
      }

      draw() {
        if (this.dead || this.segmentIndex >= this.trace.points.length - 1) return;

        const p0 = this.trace.points[this.segmentIndex];
        const p1 = this.trace.points[this.segmentIndex + 1];

        const px = p0.x + (p1.x - p0.x) * this.t;
        const py = p0.y + (p1.y - p0.y) * this.t;

        ctx.save();

        // Electric Glow halo
        const grad = ctx.createRadialGradient(px, py, 0, px, py, this.size * 3.5);
        grad.addColorStop(0, 'rgba(0, 240, 255, 0.9)');
        grad.addColorStop(0.5, 'rgba(2, 132, 199, 0.35)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, this.size * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // High-voltage core pulse
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, this.size * 0.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize Traces and Pulses
    const traceCount = Math.floor(width / 75);
    const traces = [];
    const pulses = [];

    for (let i = 0; i < traceCount; i++) {
      const trace = new CircuitTrace();
      traces.push(trace);
      if (Math.random() > 0.35 && !prefersReducedMotion) {
        pulses.push(new Pulse(trace));
      }
    }

    // -------------------------------------------------------------
    // 4. MAIN ANIMATION LOOP
    // -------------------------------------------------------------
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // A. Draw Circuit Traces
      for (const trace of traces) {
        trace.draw();
      }

      // B. Draw Flowing Signal Pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.update();
        pulse.draw();
        if (pulse.dead) {
          pulses.splice(i, 1);
          if (!prefersReducedMotion && traces.length > 0) {
            const randomTrace = traces[Math.floor(Math.random() * traces.length)];
            pulses.push(new Pulse(randomTrace));
          }
        }
      }

      // C. Draw Intermeshed Gears
      for (const gear of gears) {
        gear.update();
        gear.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Responsive Canvas Resize
    const handleResize = () => {
      setupCanvas();
      gears = initGears();
      traces.length = 0;
      pulses.length = 0;
      const count = Math.floor(width / 75);
      for (let i = 0; i < count; i++) {
        const trace = new CircuitTrace();
        traces.push(trace);
        if (Math.random() > 0.35 && !prefersReducedMotion) {
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
      {/* Base Deep Carbon Mechatronics Background */}
      <div className="absolute inset-0 bg-[#06070a]" />

      {/* Electric Cobalt Cyan & Carbon Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_-20%,rgba(0,180,216,0.18),rgba(6,7,10,0.98))]" />

      {/* Electric Cobalt Glow (Top-Right Mechanical Core) */}
      <div className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] bg-gradient-to-br from-cyan-500/18 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Deep Titanium Carbon Glow (Bottom-Left Electronics Core) */}
      <div className="absolute -bottom-[15%] -left-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-blue-900/25 via-cyan-900/15 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* Center Subtle Electric Cyan Light */}
      <div className="absolute top-[35%] left-[25%] w-[500px] h-[500px] bg-cyan-400/8 rounded-full blur-[160px] pointer-events-none" />

      {/* HTML5 Canvas (Electro-Mechanical Fusion Layer) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-85" />

      {/* Subtle Linear Industrial Scanline Texture */}
      <div className="absolute inset-0 bg-scanlines opacity-[0.035] pointer-events-none" />
    </div>
  );
};
