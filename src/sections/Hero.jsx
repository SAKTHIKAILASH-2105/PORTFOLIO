import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  FileText, 
  ChevronRight, 
  Terminal, 
  Box, 
  Cog, 
  Cpu, 
  Wrench, 
  Zap, 
  Activity, 
  Radio, 
  ShieldCheck, 
  Compass, 
  Layers,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/**
 * ELECTRO-MECHANICAL UNIQUE HERO SECTION
 * High-impact Mechatronics Landing Experience:
 * - Interactive 3D Perspective Tilt on the Mechatronics Core HUD
 * - Live Subsystem Telemetry Switcher (Mech-CAD / Silicon-VLSI / Embedded-DSP)
 * - Real-time Simulated DSP / Oscilloscope Waveform
 * - Tactile "Engage System Pulse" Micro-interaction
 * - Quick-Metric Engineering Counters
 * - Continuous Mechatronics Telemetry Ticker Bar
 */
export const Hero = ({ onOpenResume }) => {
  // Terminal typing animation effect for the role
  const roles = [
    "Mechatronics Engineering Student",
    "Aspiring Electronics & VLSI Engineer",
    "Embedded Systems Enthusiast",
    "Hardware Experimenter & RTL Explorer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Active Subsystem Telemetry Mode: 'mech' | 'vlsi' | 'embedded'
  const [activeSubsystem, setActiveSubsystem] = useState('mech');

  // Interactive Pulse Trigger State
  const [isPulsing, setIsPulsing] = useState(false);
  const [pulseCount, setPulseCount] = useState(1);

  // 3D Tilt State for the Right-Side Mechatronics HUD
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glintPos, setGlintPos] = useState({ x: 50, y: 50 });

  // Handle 3D Tilt calculation
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10; // Max tilt 10 deg
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlintPos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlintPos({ x: 50, y: 50 });
  };

  // Trigger System Pulse animation
  const triggerSystemPulse = () => {
    setIsPulsing(true);
    setPulseCount((prev) => prev + 1);
    setTimeout(() => setIsPulsing(false), 1400);
  };

  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 38 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1900);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Subsystem Telemetry Data
  const telemetryData = {
    mech: {
      title: "MECHANICAL & CAD ARCHITECTURE",
      badge: "CAD // KINEMATICS",
      color: "copper",
      icon: <Box className="w-4 h-4 text-copper-400" />,
      specs: [
        { label: "PARAMETRIC CAD", val: "Autodesk Fusion 360 & SolidWorks" },
        { label: "PRECISION ASSEMBLED", val: "7 Verified 3D CAD Enclosures" },
        { label: "KINEMATICS & TOLERANCE", val: "±0.05mm Fit & Flange Clearances" },
      ],
      waveformColor: "#ea7e3b",
    },
    vlsi: {
      title: "DIGITAL SILICON & RTL DESIGN",
      badge: "VLSI // HARDWARE HDL",
      color: "cyan",
      icon: <Cpu className="w-4 h-4 text-cyber-neon" />,
      specs: [
        { label: "HDL LANGUAGE", val: "Verilog HDL (Synthesizable RTL)" },
        { label: "DIGITAL LOGIC", val: "FSM State Machines & ALU Pipelines" },
        { label: "TARGET FREQUENCY", val: "Synchronous 240MHz Clock Domains" },
      ],
      waveformColor: "#00f5ff",
    },
    embedded: {
      title: "EMBEDDED FIRMWARE & DSP SYSTEMS",
      badge: "FIRMWARE // I2S DSP",
      color: "emerald",
      icon: <Zap className="w-4 h-4 text-emerald-400" />,
      specs: [
        { label: "MICROCONTROLLER", val: "ESP32 / ESP32-S3 Dual Tensilica Core" },
        { label: "DIGITAL SIGNAL DSP", val: "I2S Microphones & Noise Filtering" },
        { label: "SENSOR INTEGRATION", val: "MPU6050 6-DOF IMU & Ultrasonic Bus" },
      ],
      waveformColor: "#34d399",
    },
  };

  const currentTel = telemetryData[activeSubsystem];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Top Grid & Crosshair Alignment Watermarks */}
      <div className="absolute top-20 left-6 text-[9px] font-mono text-titanium-500/60 pointer-events-none hidden md:block select-none">
        <div>[SYS_LATITUDE: 13.0827° N // CHENNAI_NODE]</div>
        <div>CALIBRATION: MECH + ELEC DUAL_BUS</div>
      </div>
      <div className="absolute top-20 right-6 text-[9px] font-mono text-titanium-500/60 pointer-events-none hidden md:block text-right select-none">
        <div>ENG_IDENTITY: SAKTHI_KAILASH</div>
        <div>STATUS: ALL SUBSYSTEMS NOMINAL</div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 my-auto">
        {/* ======================================================== */}
        {/* LEFT COLUMN: Strategic Identity, Bio & CTAs (7 cols)    */}
        {/* ======================================================== */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Engineering Status Pill with Live Core Telemetry */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-graphite-900/90 border border-titanium-700/80 text-xs font-mono text-copper-400 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-copper-400" />
            </span>
            <span className="tracking-wide text-metallic-silver font-medium">
              SYS_ONLINE // MECHATRONICS & VLSI ARCHITECTURE
            </span>
            <span className="text-titanium-600 hidden sm:inline">|</span>
            <span className="text-[10px] text-copper-400/90 hidden sm:inline uppercase">
              REVISION 2.4
            </span>
          </motion.div>

          {/* Main Greeting and Architect Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <span className="text-xs md:text-sm font-mono tracking-widest text-copper-400 block uppercase flex items-center gap-2 font-medium">
              <span className="w-2.5 h-[1.5px] bg-copper-500" />
              {personalInfo.heroHeading}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08]">
              Engineering Ideas Into{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-copper-400 via-amber-300 to-cyber-neon bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(234,126,59,0.35)]">
                  Intelligent
                </span>
                {/* Underline circuit trace accent */}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-copper-500 via-amber-400 to-transparent" />
              </span>{' '}
              Solutions.
            </h1>
          </motion.div>

          {/* Dynamic Typing Subrole with Interactive Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2.5 text-base sm:text-xl font-mono text-cyber-cyan min-h-[34px]"
          >
            <div className="w-6 h-6 rounded-md bg-graphite-900 border border-titanium-700 flex items-center justify-center shrink-0">
              <Terminal className="w-3.5 h-3.5 text-copper-400" />
            </div>
            <span className="font-medium text-slate-200">
              {displayText}
              <span className="inline-block w-2 h-5 bg-copper-400 ml-1 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Subtitle / Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-slate-300">
              <span className="px-3 py-1 rounded-md bg-graphite-900 border border-titanium-700 text-metallic-silver shadow-xs flex items-center gap-1.5">
                <Box className="w-3 h-3 text-copper-400" />
                Mechatronics Engineering Student
              </span>
              <span className="text-copper-400">•</span>
              <span className="px-3 py-1 rounded-md bg-graphite-900 border border-titanium-700 text-metallic-silver shadow-xs flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-cyber-neon" />
                Aspiring VLSI & Electronics Engineer
              </span>
            </div>

            <p className="text-metallic-steel text-sm sm:text-base max-w-xl leading-relaxed">
              Passionate about bridging digital logic design, embedded firmware, and intelligent hardware
              systems to solve complex engineering challenges.
            </p>
          </motion.div>

          {/* Call to Actions & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            {/* View Projects Button (Electro-Mechanical High-Impact Glow) */}
            <a
              href="#projects"
              className="relative group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-copper-500 via-amber-500 to-copper-600 text-white font-bold font-mono text-sm shadow-[0_0_25px_rgba(234,126,59,0.35)] hover:shadow-[0_0_35px_rgba(234,126,59,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
            >
              {/* Shiny reflection beam */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10">View My Projects</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Download Resume Button (Metallic Bevel) */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-graphite-900/90 hover:bg-titanium-850 text-metallic-silver hover:text-white font-mono text-sm font-semibold border border-titanium-700 hover:border-copper-500/60 shadow-md transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-copper-400" />
              <span>Download Resume</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 sm:ml-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-graphite-900 border border-titanium-700 text-slate-400 hover:text-copper-400 hover:border-copper-500/60 hover:shadow-[0_0_15px_rgba(234,126,59,0.25)] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-graphite-900 border border-titanium-700 text-slate-400 hover:text-copper-400 hover:border-copper-500/60 hover:shadow-[0_0_15px_rgba(234,126,59,0.25)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick-Metric Engineering Badges Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
          >
            <div className="p-3 rounded-xl bg-graphite-900/80 border border-titanium-800 shadow-inner">
              <span className="text-xl font-bold font-display text-white block">04+</span>
              <span className="text-[10px] font-mono text-metallic-steel uppercase tracking-wider">
                Prototypes
              </span>
            </div>
            <div className="p-3 rounded-xl bg-graphite-900/80 border border-titanium-800 shadow-inner">
              <span className="text-xl font-bold font-display text-copper-400 block">07</span>
              <span className="text-[10px] font-mono text-metallic-steel uppercase tracking-wider">
                3D CAD Models
              </span>
            </div>
            <div className="p-3 rounded-xl bg-graphite-900/80 border border-titanium-800 shadow-inner">
              <span className="text-xl font-bold font-display text-cyber-neon block">02</span>
              <span className="text-[10px] font-mono text-metallic-steel uppercase tracking-wider">
                NPTEL IIT Certs
              </span>
            </div>
            <div className="p-3 rounded-xl bg-graphite-900/80 border border-titanium-800 shadow-inner">
              <span className="text-xl font-bold font-display text-emerald-400 block">3-in-1</span>
              <span className="text-[10px] font-mono text-metallic-steel uppercase tracking-wider">
                Mechatronics
              </span>
            </div>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: Interactive 3D Mechatronics Core HUD (5 cols)*/}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center items-center relative perspective-[1200px]"
        >
          {/* Outer Multi-Layered Rotating Involute Gear Aperture */}
          <div className="relative w-[340px] h-[480px] sm:w-[420px] sm:h-[530px] flex items-center justify-center">
            {/* Spinning Mechanical Gear Ring (Laser-Cut Involute Teeth) */}
            <svg
              className="absolute inset-0 w-full h-full animate-gear-slow pointer-events-none opacity-25"
              viewBox="0 0 400 400"
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                stroke="#ea7e3b"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                fill="none"
              />
              <circle
                cx="200"
                cy="200"
                r="165"
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="2 6"
                fill="none"
              />
              {/* Pitch Diameter Notches every 30 deg */}
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="200"
                  y1="15"
                  x2="200"
                  y2="28"
                  stroke="#ea7e3b"
                  strokeWidth="2"
                  transform={`rotate(${i * 30} 200 200)`}
                />
              ))}
            </svg>

            {/* Counter-Spinning PCB Circuit Telemetry Ring */}
            <div className="absolute inset-6 rounded-full border border-dotted border-cyber-cyan/35 animate-gear-reverse pointer-events-none" />

            {/* Radial Energy Field */}
            <div
              className={`absolute inset-10 rounded-full blur-3xl transition-colors duration-500 pointer-events-none ${
                activeSubsystem === 'mech'
                  ? 'bg-copper-500/15'
                  : activeSubsystem === 'vlsi'
                  ? 'bg-cyber-cyan/15'
                  : 'bg-emerald-500/15'
              }`}
            />

            {/* ---------------------------------------------------- */}
            {/* 3D Interactive Tilting Mechatronics Chassis Card     */}
            {/* ---------------------------------------------------- */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[360px] sm:max-w-[390px] rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-graphite-900/98 via-graphite-900/95 to-graphite-950/98 border border-titanium-700 shadow-[0_16px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col justify-between overflow-hidden cursor-crosshair group"
            >
              {/* Dynamic Glint Sheen overlay following cursor */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, rgba(234, 126, 59, 0.18) 0%, transparent 60%)`,
                }}
              />

              {/* Brass Corner Fastener Rivets */}
              <span className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-gradient-to-br from-copper-300 to-copper-600 shadow-xs border border-copper-700/60" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-gradient-to-br from-copper-300 to-copper-600 shadow-xs border border-copper-700/60" />
              <span className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-gradient-to-br from-copper-300 to-copper-600 shadow-xs border border-copper-700/60" />
              <span className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-gradient-to-br from-copper-300 to-copper-600 shadow-xs border border-copper-700/60" />

              {/* CARD HEADER: Telemetry Status & System Mode Indicator */}
              <div className="flex items-center justify-between pb-3 border-b border-titanium-800 text-[10px] font-mono">
                <div className="flex items-center gap-1.5 text-copper-400 font-semibold">
                  <Cog className="w-3.5 h-3.5 animate-spin [animation-duration:10s]" />
                  <span>CORE_REACTOR // ID_2105</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYNC_ACTIVE</span>
                </div>
              </div>

              {/* REAL PORTRAIT INTEGRATED WITH HIGH-PRECISION IC CASING */}
              <div className="relative my-3 text-center">
                <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-graphite-950 border-2 border-copper-500/60 p-1.5 shadow-[0_0_28px_rgba(234,126,59,0.25)] flex items-center justify-center group overflow-hidden">
                  {/* Real Portrait Image */}
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt="Sakthi Kailash"
                    className="w-full h-full object-cover object-top rounded-xl filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* High-tech HUD Reticle Overlay */}
                  <div className="absolute inset-0 border border-copper-400/20 rounded-xl pointer-events-none" />

                  {/* Corner Badge Tag */}
                  <div className="absolute bottom-1 right-1 z-20 px-1.5 py-0.5 rounded bg-graphite-950/90 border border-copper-500/50 text-[8px] font-mono text-copper-400 font-semibold">
                    MECHATRONICS
                  </div>

                  {/* Gold-Plated IC Lead Pins (Top & Bottom) */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className="w-1 h-1 bg-copper-400 rounded-xs shadow-[0_0_4px_#ea7e3b]"
                      />
                    ))}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className="w-1 h-1 bg-copper-400 rounded-xs shadow-[0_0_4px_#ea7e3b]"
                      />
                    ))}
                  </div>
                </div>

                {/* Name & Dual Focus Tag */}
                <div className="mt-2.5">
                  <h3 className="font-display font-bold text-lg text-white">
                    Sakthi Kailash
                  </h3>
                  <p className="text-[11px] font-mono text-copper-400 flex items-center justify-center gap-1.5 mt-0.5">
                    <span>MECHATRONICS</span>
                    <span className="text-cyber-cyan">•</span>
                    <span>VLSI & EMBEDDED</span>
                  </p>
                </div>
              </div>

              {/* LIVE SIMULATED SIGNAL OSCILLOSCOPE (DSP / NOISE CANCELLATION SENSOR SWEEP) */}
              <div className="p-2.5 rounded-xl bg-graphite-950/80 border border-titanium-800 my-1">
                <div className="flex items-center justify-between text-[9px] font-mono text-metallic-steel mb-1">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-copper-400" />
                    SIGNAL PIPELINE // 48kHz I2S
                  </span>
                  <span className="text-copper-400 font-semibold">
                    {isPulsing ? "SURGE: 100%" : "PEAK: 0.94dB"}
                  </span>
                </div>
                {/* SVG Oscilloscope Line Waveform */}
                <div className="h-6 w-full relative overflow-hidden flex items-center justify-center">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 24">
                    <path
                      d="M0 12 Q 10 3, 20 12 T 40 12 T 60 5 T 80 19 T 100 12"
                      fill="none"
                      stroke={currentTel.waveformColor}
                      strokeWidth="1.8"
                      className="animate-scanline"
                    />
                    <path
                      d="M0 12 Q 15 18, 30 12 T 50 8 T 75 16 T 100 12"
                      fill="none"
                      stroke={currentTel.waveformColor}
                      strokeWidth="1"
                      strokeDasharray="2 3"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              </div>

              {/* INTERACTIVE SUBSYSTEM MODE SWITCHER (Click to Switch Telemetry!) */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-metallic-steel mb-1.5 uppercase">
                  <span>SELECT ACTIVE SUBSYSTEM:</span>
                  <span className="text-copper-400">CLICK_TO_PROBE</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => setActiveSubsystem('mech')}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono font-semibold transition-all border flex items-center justify-center gap-1 ${
                      activeSubsystem === 'mech'
                        ? 'bg-copper-500/20 border-copper-500 text-copper-300 shadow-[0_0_12px_rgba(234,126,59,0.35)]'
                        : 'bg-graphite-950 border-titanium-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3 h-3" />
                    <span>MECH</span>
                  </button>

                  <button
                    onClick={() => setActiveSubsystem('vlsi')}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono font-semibold transition-all border flex items-center justify-center gap-1 ${
                      activeSubsystem === 'vlsi'
                        ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-neon shadow-[0_0_12px_rgba(0,245,255,0.35)]'
                        : 'bg-graphite-950 border-titanium-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>VLSI</span>
                  </button>

                  <button
                    onClick={() => setActiveSubsystem('embedded')}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono font-semibold transition-all border flex items-center justify-center gap-1 ${
                      activeSubsystem === 'embedded'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
                        : 'bg-graphite-950 border-titanium-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    <span>EMBED</span>
                  </button>
                </div>
              </div>

              {/* DYNAMIC SUBSYSTEM TELEMETRY SPECS READOUT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSubsystem}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1.5 pt-2.5 text-[10px] font-mono"
                >
                  {currentTel.specs.map((item, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex justify-between items-center bg-graphite-950/60 px-2 py-1 rounded border border-titanium-800/80"
                    >
                      <span className="text-metallic-steel">{item.label}:</span>
                      <span className="text-white font-medium truncate max-w-[170px] text-right">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* TACTILE MICRO-INTERACTION BUTTON: TRIGGER HARDWARE PULSE */}
              <div className="pt-3">
                <button
                  onClick={triggerSystemPulse}
                  className={`w-full py-2 px-3 rounded-xl border text-[11px] font-mono font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isPulsing
                      ? 'bg-copper-500 text-white border-copper-400 shadow-[0_0_20px_#ea7e3b]'
                      : 'bg-titanium-850 hover:bg-copper-600 text-copper-400 hover:text-white border-copper-500/40 hover:border-copper-400'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isPulsing ? 'animate-spin' : ''}`} />
                  <span>
                    {isPulsing
                      ? `SIGNAL_DISPATCHED // PULSE #${pulseCount}`
                      : "TRANSMIT CORE SIGNAL"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM TELEMETRY TICKER MARQUEE (Continuous Industrial Ribbon) */}
      {/* ======================================================== */}
      <div className="relative mt-10 pt-4 border-t border-titanium-800/80 overflow-hidden">
        <div className="flex items-center gap-6 whitespace-nowrap text-[11px] font-mono text-metallic-steel animate-scanline">
          <span className="flex items-center gap-2 text-copper-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-copper-400 animate-ping" />
            LIVE TELEMETRY
          </span>
          <span>•</span>
          <span className="text-slate-200">
            DISCIPLINE: <strong className="text-white">B.E. MECHATRONICS</strong>
          </span>
          <span>•</span>
          <span>
            SILICON: <strong className="text-cyber-neon">VERILOG HDL & RTL DESIGN</strong>
          </span>
          <span>•</span>
          <span>
            FIRMWARE: <strong className="text-copper-400">ESP32-S3 / I2S AUDIO DSP</strong>
          </span>
          <span>•</span>
          <span>
            CAD: <strong className="text-amber-400">AUTODESK FUSION 360 & SOLIDWORKS</strong>
          </span>
          <span>•</span>
          <span>
            STATUS: <strong className="text-emerald-400">OPEN FOR INTERNSHIPS & CORE ROLES</strong>
          </span>
          <span>•</span>
          <span>
            LOCATION: <strong className="text-slate-300">INDIA</strong>
          </span>
        </div>
      </div>

      {/* Small Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mx-auto mt-4 flex flex-col items-center gap-1.5 cursor-pointer text-metallic-steel hover:text-copper-400 transition-colors z-20"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] font-mono tracking-widest uppercase">
          EXPLORE_SUBSYSTEMS
        </span>
        <div className="w-4 h-6 rounded-full border border-titanium-700 flex items-start justify-center p-0.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-copper-400"
          />
        </div>
      </motion.div>
    </section>
  );
};
