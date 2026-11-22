import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * PRISMATIC MECHATRONICS HYPER-FUSION BACKGROUND
 * Cohesively combines all 3 themes:
 * 1. Industrial Copper & Gold (Theme 1): Molten copper meshed gears & brass circuit paths
 * 2. Royal Burgundy & Crimson (Theme 4): Deep royal burgundy drive wheel, red power nodes, champagne rim
 * 3. Cyber Lavender & Violet (Theme 5): High-voltage violet planetary gears & cyber signal pulses
 * 4. Electric Cyan & Matrix Emerald: Real-time telemetry signals & live diagnostics
 */
export const CircuitBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

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
      constructor({
        x,
        y,
        radius,
        teeth,
        speed,
        primaryColor = '#ea7e3b',
        rimColor = '#fef08a',
        accentGlow = 'rgba(234, 126, 59, 0.5)',
        spokes = 6,
        hasCoreChip = false,
        themeType = 'copper'
      }) {
        this.baseX = x;
        this.baseY = y;
        this.radius = radius;
        this.teeth = teeth;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
        this.primaryColor = primaryColor;
        this.rimColor = rimColor;
        this.accentGlow = accentGlow;
        this.spokes = spokes;
        this.hasCoreChip = hasCoreChip;
        this.themeType = themeType;
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

        // Metallic Gear Body Fill (Deep Carbon wash with subtle tint)
        ctx.fillStyle = 'rgba(12, 11, 20, 0.65)';
        ctx.fill();

        // Gear Outline in Signature Theme Color
        ctx.strokeStyle = this.primaryColor;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // --- B. Pitch Circle (Dashed Technical Line in Champagne / Gold) ---
        ctx.beginPath();
        ctx.arc(0, 0, pitchRadius, 0, Math.PI * 2);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = 'rgba(254, 240, 138, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        // --- C. Mechanical Weight-Reduction Windows / Spokes ---
        const innerRimRadius = rootRadius * 0.78;
        const hubRadius = rootRadius * 0.32;

        ctx.beginPath();
        ctx.arc(0, 0, innerRimRadius, 0, Math.PI * 2);
        ctx.strokeStyle = this.rimColor;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (this.spokes > 0) {
          const spokeStep = (Math.PI * 2) / this.spokes;
          for (let s = 0; s < this.spokes; s++) {
            const sa = s * spokeStep;
            ctx.beginPath();
            ctx.moveTo(Math.cos(sa) * hubRadius, Math.sin(sa) * hubRadius);
            ctx.lineTo(Math.cos(sa) * innerRimRadius, Math.sin(sa) * innerRimRadius);
            ctx.strokeStyle = this.primaryColor;
            ctx.lineWidth = 1.6;
            ctx.stroke();

            // Spoke Rivet / Fastener in Warm Champagne / Platinum
            const midR = (hubRadius + innerRimRadius) * 0.55;
            ctx.beginPath();
            ctx.arc(Math.cos(sa) * midR, Math.sin(sa) * midR, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = '#fef08a';
            ctx.fill();
          }
        }

        // --- D. Central Hub / Bearing Shaft ---
        ctx.beginPath();
        ctx.arc(0, 0, hubRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(10, 8, 16, 0.95)';
        ctx.fill();
        ctx.strokeStyle = this.primaryColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Center Bore Aperture
        ctx.beginPath();
        ctx.arc(0, 0, hubRadius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = '#06070b';
        ctx.fill();
        ctx.strokeStyle = this.rimColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Integrated Microcontroller Stator Chip at Gear Center
        if (this.hasCoreChip) {
          const chipSize = hubRadius * 0.6;
          ctx.save();
          ctx.rotate(-this.angle);
          ctx.fillStyle = '#100c1a';
          ctx.fillRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize);
          ctx.strokeStyle = this.primaryColor;
          ctx.lineWidth = 1.2;
          ctx.strokeRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize);

          // Glowing Core LED Pulse in Accent Glow
          const pulseAlpha = 0.5 + Math.sin(this.pulse * 3) * 0.4;
          ctx.fillStyle = this.accentGlow.replace('0.5', pulseAlpha.toFixed(2));
          ctx.beginPath();
          ctx.arc(0, 0, chipSize * 0.22, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.restore();
      }
    }

    // Initialize 4 Meshed Gears (Combining Copper, Lavender, Burgundy, Champagne)
    const initGears = () => {
      const isMobile = width < 768;
      const baseR = Math.min(width, height) * (isMobile ? 0.18 : 0.13);

      return [
        // 1. TOP RIGHT PRIMARY GEAR: Industrial Copper & Molten Amber (Theme 1)
        new Gear({
          x: isMobile ? 0.88 : 0.85,
          y: isMobile ? 0.12 : 0.18,
          radius: baseR * 1.15,
          teeth: 24,
          speed: 0.0025,
          primaryColor: '#ea7e3b',
          rimColor: '#fef08a',
          accentGlow: 'rgba(234, 126, 59, 0.5)',
          spokes: 6,
          hasCoreChip: true,
          themeType: 'copper'
        }),

        // 2. TOP RIGHT PLANETARY PINION: Cyber Lavender & Neon Violet (Theme 5)
        new Gear({
          x: isMobile ? 0.98 : 0.94,
          y: isMobile ? 0.25 : 0.32,
          radius: baseR * 0.65,
          teeth: 14,
          speed: -0.0043,
          primaryColor: '#c084fc',
          rimColor: '#cbd5e1',
          accentGlow: 'rgba(168, 85, 247, 0.5)',
          spokes: 4,
          hasCoreChip: false,
          themeType: 'lavender'
        }),

        // 3. BOTTOM LEFT DRIVE WHEEL: Royal Burgundy & Crimson (Theme 4)
        new Gear({
          x: isMobile ? 0.1 : 0.12,
          y: isMobile ? 0.85 : 0.82,
          radius: baseR * 1.35,
          teeth: 28,
          speed: -0.002,
          primaryColor: '#be123c',
          rimColor: '#fef08a',
          accentGlow: 'rgba(190, 18, 60, 0.5)',
          spokes: 8,
          hasCoreChip: true,
          themeType: 'burgundy'
        }),

        // 4. BOTTOM LEFT IDLER PINION: Champagne Gold & Brass (Theme 1 & 4)
        new Gear({
          x: isMobile ? 0.24 : 0.23,
          y: isMobile ? 0.72 : 0.69,
          radius: baseR * 0.55,
          teeth: 12,
          speed: 0.0046,
          primaryColor: '#fbbf24',
          rimColor: '#ea7e3b',
          accentGlow: 'rgba(251, 191, 36, 0.5)',
          spokes: 4,
          hasCoreChip: false,
          themeType: 'champagne'
        }),
      ];
    };

    let gears = initGears();

    // -------------------------------------------------------------
    // 2. CIRCUIT TRACE & IC CHIP SYSTEM (Multi-Theme Palette)
    // -------------------------------------------------------------
    const traceColors = [
      { stroke: 'rgba(234, 126, 59, 0.45)', pad: '#ea7e3b' }, // Copper
      { stroke: 'rgba(192, 132, 252, 0.45)', pad: '#c084fc' }, // Lavender
      { stroke: 'rgba(190, 18, 60, 0.45)', pad: '#be123c' },   // Burgundy
      { stroke: 'rgba(254, 240, 138, 0.45)', pad: '#fef08a' }, // Champagne Gold
      { stroke: 'rgba(0, 240, 255, 0.4)', pad: '#00f0ff' },    // Electric Cyan
    ];

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

        // Assign a color from our multi-theme palette
        const palette = traceColors[Math.floor(Math.random() * traceColors.length)];
        this.color = palette.stroke;
        this.padColor = palette.pad;

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
          ctx.fillStyle = '#06070b';
          ctx.fill();
          ctx.strokeStyle = this.padColor;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // End Solder Pad
          ctx.beginPath();
          ctx.arc(last.x, last.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = this.padColor;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // -------------------------------------------------------------
    // 3. ELECTRONIC SIGNAL PULSE SYSTEM (Flowing Multi-Color Packets)
    // -------------------------------------------------------------
    class Pulse {
      constructor(trace) {
        this.trace = trace;
        this.segmentIndex = 0;
        this.t = 0;
        this.speed = (Math.random() * 0.012 + 0.008);
        this.size = Math.random() * 2.5 + 2;
        this.color = trace.padColor || '#ea7e3b';
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

        // Multi-tone Glow halo
        const grad = ctx.createRadialGradient(px, py, 0, px, py, this.size * 3.5);
        grad.addColorStop(0, this.color);
        grad.addColorStop(0.6, 'rgba(0, 0, 0, 0.4)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, this.size * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Core pulse spark
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
      <div className="absolute inset-0 bg-[#06070b]" />

      {/* Multi-Theme Atmospheric Vignettes */}
      {/* 1. Royal Burgundy Glow (Top-Left Institutional Heritage) */}
      <div className="absolute -top-[12%] -left-[8%] w-[680px] h-[680px] bg-gradient-to-br from-rose-900/22 via-red-950/14 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Industrial Copper Glow (Top-Right Mechanical Core) */}
      <div className="absolute -top-[10%] -right-[6%] w-[650px] h-[650px] bg-gradient-to-bl from-amber-600/20 via-orange-600/12 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Cyber Lavender & Violet Glow (Center & Bottom-Left Neural Core) */}
      <div className="absolute top-[35%] left-[25%] w-[550px] h-[550px] bg-purple-600/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-[15%] -left-[5%] w-[700px] h-[700px] bg-gradient-to-tr from-violet-900/24 via-purple-950/14 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* HTML5 Canvas (Electro-Mechanical Fusion Layer) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-85" />

      {/* Subtle Linear Industrial Scanline Texture */}
      <div className="absolute inset-0 bg-scanlines opacity-[0.035] pointer-events-none" />
    </div>
  );
};
