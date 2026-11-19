import React, { useEffect, useRef } from 'react';

/**
 * ROYAL BURGUNDY ELECTRO-MECHANICAL FUSION BACKGROUND
 * Seamlessly integrates:
 * 1. Precision Meshed Mechanical Gears in Champagne Gold & Deep Royal Burgundy
 * 2. High-Tech PCB Circuit Pathways in Champagne Gold & Ruby Red Signal Traces
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
      constructor({ x, y, radius, teeth, speed, color = '#ea7e3b', copperRim = true, spokes = 5, hasCoreChip = false }) {
        this.baseX = x; // fraction of screen width
        this.baseY = y; // fraction of screen height
        this.radius = radius;
        this.teeth = teeth;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
        this.color = color;
        this.copperRim = copperRim;
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

        // Metallic Gear Body Fill (Deep Industrial Black wash)
        ctx.fillStyle = 'rgba(26, 26, 34, 0.45)';
        ctx.fill();

        // Gear Outline in Rich Copper & Warm Amber
        ctx.strokeStyle = this.copperRim ? 'rgba(234, 126, 59, 0.65)' : 'rgba(217, 119, 54, 0.45)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // --- B. Pitch Circle (Dashed Technical Line in Warm Cream) ---
        ctx.beginPath();
        ctx.arc(0, 0, pitchRadius, 0, Math.PI * 2);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = 'rgba(254, 215, 170, 0.28)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        // --- C. Mechanical Weight-Reduction Windows / Spokes ---
        const innerRimRadius = rootRadius * 0.78;
        const hubRadius = rootRadius * 0.32;

        ctx.beginPath();
        ctx.arc(0, 0, innerRimRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(234, 126, 59, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (this.spokes > 0) {
          const spokeStep = (Math.PI * 2) / this.spokes;
          for (let s = 0; s < this.spokes; s++) {
            const sa = s * spokeStep;
            ctx.beginPath();
            ctx.moveTo(Math.cos(sa) * hubRadius, Math.sin(sa) * hubRadius);
            ctx.lineTo(Math.cos(sa) * innerRimRadius, Math.sin(sa) * innerRimRadius);
            ctx.strokeStyle = this.copperRim ? 'rgba(234, 126, 59, 0.45)' : 'rgba(180, 83, 9, 0.35)';
            ctx.lineWidth = 1.6;
            ctx.stroke();

            // Spoke Rivet / Fastener in Warm Cream
            const midR = (hubRadius + innerRimRadius) * 0.55;
            ctx.beginPath();
            ctx.arc(Math.cos(sa) * midR, Math.sin(sa) * midR, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = '#ffedd5';
            ctx.fill();
          }
        }

        // --- D. Central Hub / Bearing Shaft ---
        ctx.beginPath();
        ctx.arc(0, 0, hubRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(13, 13, 17, 0.95)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(234, 126, 59, 0.8)';
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Keyway / Central Bore
        ctx.beginPath();
        ctx.arc(0, 0, hubRadius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(8, 8, 10, 0.98)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(217, 119, 54, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Keyway notch
        const kw = hubRadius * 0.2;
        ctx.fillStyle = 'rgba(234, 126, 59, 0.8)';
        ctx.fillRect(-kw / 2, -hubRadius * 0.48, kw, hubRadius * 0.25);

        // --- E. Core IC Footprint on Hub if specified ---
        if (this.hasCoreChip) {
          const chipSize = hubRadius * 0.7;
          ctx.strokeStyle = 'rgba(254, 215, 170, 0.85)';
          ctx.strokeRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize);

          // IC Pins in Molten Copper
          const pinLen = chipSize * 0.25;
          ctx.strokeStyle = 'rgba(234, 126, 59, 0.9)';
          ctx.lineWidth = 1;
          for (let p = -1; p <= 1; p += 1) {
            const offset = (p * chipSize) / 3.5;
            ctx.beginPath();
            ctx.moveTo(offset, -chipSize / 2);
            ctx.lineTo(offset, -chipSize / 2 - pinLen);
            ctx.moveTo(offset, chipSize / 2);
            ctx.lineTo(offset, chipSize / 2 + pinLen);
            ctx.moveTo(-chipSize / 2, offset);
            ctx.lineTo(-chipSize / 2 - pinLen, offset);
            ctx.moveTo(chipSize / 2, offset);
            ctx.lineTo(chipSize / 2 + pinLen, offset);
            ctx.stroke();
          }
        }

        ctx.restore();
      }
    }

    // Initialize Integrated Gear Meshes (Scaled for responsive viewports)
    const initGears = () => {
      const isMobile = width < 768;
      const baseR = isMobile ? 55 : 85;

      const gear1R = baseR * 1.25;
      const gear2R = gear1R * 0.62;
      const gear1Teeth = 24;
      const gear2Teeth = Math.round(gear1Teeth * (gear2R / gear1R));
      const speed1 = 0.0025;
      const speed2 = -speed1 * (gear1Teeth / gear2Teeth);

      return [
        // Top-Right Gear 1 (Main Drive - Champagne Accented)
        new Gear({
          x: isMobile ? 0.88 : 0.82,
          y: isMobile ? 0.15 : 0.18,
          radius: gear1R,
          teeth: gear1Teeth,
          speed: speed1,
          copperRim: true,
          spokes: 6,
          hasCoreChip: true,
        }),
        // Top-Right Gear 2 (Intermeshed Idler Gear)
        new Gear({
          x: isMobile ? 0.72 : 0.94,
          y: isMobile ? 0.26 : 0.32,
          radius: gear2R,
          teeth: gear2Teeth,
          speed: speed2,
          copperRim: false,
          spokes: 4,
          hasCoreChip: false,
        }),
        // Bottom-Left Drive Gear (Mechanical Power Bus)
        new Gear({
          x: isMobile ? 0.12 : 0.14,
          y: isMobile ? 0.82 : 0.78,
          radius: baseR * 1.35,
          teeth: 28,
          speed: -0.0018,
          copperRim: true,
          spokes: 7,
          hasCoreChip: true,
        }),
        // Mid-Center Ambient Rotary Encoder
        new Gear({
          x: isMobile ? 0.92 : 0.06,
          y: 0.42,
          radius: baseR * 0.75,
          teeth: 16,
          speed: 0.0035,
          copperRim: false,
          spokes: 5,
          hasCoreChip: false,
        }),
      ];
    };

    let gears = initGears();

    // -------------------------------------------------------------
    // 2. PCB CIRCUIT TRACES & BUS SYSTEM
    // -------------------------------------------------------------
    class CircuitTrace {
      constructor() {
        this.reset();
      }

      reset() {
        this.isCopper = Math.random() > 0.4;
        this.segments = [];
        this.alpha = 0.14 + Math.random() * 0.24;
        this.width = Math.random() > 0.7 ? 1.8 : 1.1;

        let currX = Math.random() * width;
        let currY = Math.random() * height;
        this.segments.push({ x: currX, y: currY });

        // Generate 45-degree or 90-degree orthogonal PCB traces
        const steps = 3 + Math.floor(Math.random() * 4);
        for (let i = 0; i < steps; i++) {
          const mode = Math.floor(Math.random() * 6);
          const len = 35 + Math.random() * 75;

          if (mode === 0) currX += len;
          else if (mode === 1) currY += len;
          else if (mode === 2) currX -= len;
          else if (mode === 3) currY -= len;
          else if (mode === 4) { currX += len * 0.7; currY += len * 0.7; }
          else { currX -= len * 0.7; currY -= len * 0.7; }

          this.segments.push({ x: currX, y: currY });
        }

        this.hasJunction = Math.random() > 0.4;
        this.hasIC = Math.random() > 0.6;
      }

      draw() {
        if (this.segments.length < 2) return;

        // Trace line
        ctx.beginPath();
        ctx.moveTo(this.segments[0].x, this.segments[0].y);
        for (let i = 1; i < this.segments.length; i++) {
          ctx.lineTo(this.segments[i].x, this.segments[i].y);
        }

        ctx.strokeStyle = this.isCopper
          ? `rgba(234, 126, 59, ${this.alpha * 0.95})`
          : `rgba(254, 215, 170, ${this.alpha * 0.85})`;
        ctx.lineWidth = this.width;
        ctx.stroke();

        // Solder Pad Junctions in Molten Copper & Warm Cream
        if (this.hasJunction) {
          const startPt = this.segments[0];
          const endPt = this.segments[this.segments.length - 1];

          ctx.beginPath();
          ctx.arc(startPt.x, startPt.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = this.isCopper ? 'rgba(234, 126, 59, 0.8)' : 'rgba(254, 215, 170, 0.75)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(startPt.x, startPt.y, 1, 0, Math.PI * 2);
          ctx.fillStyle = '#08080a';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(endPt.x, endPt.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = this.isCopper ? 'rgba(234, 126, 59, 0.8)' : 'rgba(254, 215, 170, 0.75)';
          ctx.fill();
        }

        // Small SMT IC Resistor/Capacitor footprint
        if (this.hasIC && this.segments.length > 2) {
          const midPt = this.segments[1];
          ctx.fillStyle = 'rgba(26, 26, 34, 0.9)';
          ctx.fillRect(midPt.x - 5, midPt.y - 3, 10, 6);
          ctx.strokeStyle = 'rgba(234, 126, 59, 0.65)';
          ctx.lineWidth = 1;
          ctx.strokeRect(midPt.x - 5, midPt.y - 3, 10, 6);

          // Solder ends in warm cream
          ctx.fillStyle = '#ffedd5';
          ctx.fillRect(midPt.x - 5, midPt.y - 3, 2, 6);
          ctx.fillRect(midPt.x + 3, midPt.y - 3, 2, 6);
        }
      }
    }

    // -------------------------------------------------------------
    // 3. FLOWING ELECTRON SIGNAL PACKETS (PULSES)
    // -------------------------------------------------------------
    class Pulse {
      constructor(trace) {
        this.trace = trace;
        this.progress = Math.random();
        this.speed = 0.004 + Math.random() * 0.006;
        this.size = this.trace.isCopper ? 2.5 : 2.2;
        this.glowColor = this.trace.isCopper ? '#ea7e3b' : '#f59e0b';
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

        const totalSegs = segs.length - 1;
        const scaled = this.progress * totalSegs;
        const index = Math.floor(scaled);
        const frac = scaled - index;

        const p1 = segs[index] || segs[0];
        const p2 = segs[index + 1] || segs[index] || segs[0];

        const px = p1.x + (p2.x - p1.x) * frac;
        const py = p1.y + (p2.y - p1.y) * frac;

        ctx.save();
        ctx.shadowColor = this.glowColor;
        ctx.shadowBlur = 9;
        ctx.fillStyle = this.glowColor;
        ctx.beginPath();
        ctx.arc(px, py, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright cream spark
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, this.size * 0.45, 0, Math.PI * 2);
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
      for (const pulse of pulses) {
        pulse.update();
        pulse.draw();
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
      {/* Base Pitch Black Background */}
      <div className="absolute inset-0 bg-[#08080a]" />

      {/* Industrial Copper & Black Gradient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_-20%,rgba(67,29,5,0.85),rgba(8,8,10,0.98))]" />

      {/* Molten Copper Hardware Glow (Top-Right Mechanical Core) */}
      <div className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] bg-gradient-to-br from-copper-500/22 via-amber-600/12 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Deep Charcoal Industrial Glow (Bottom-Left Electronics Core) */}
      <div className="absolute -bottom-[15%] -left-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-charcoal-800/35 via-copper-800/15 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* Center Subtle Warm Amber Light */}
      <div className="absolute top-[35%] left-[25%] w-[500px] h-[500px] bg-copper-400/10 rounded-full blur-[160px] pointer-events-none" />

      {/* HTML5 Canvas (Electro-Mechanical Fusion Layer) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-85" />

      {/* Subtle Linear Industrial Scanline Texture */}
      <div className="absolute inset-0 bg-scanlines opacity-[0.035] pointer-events-none" />
    </div>
  );
};
