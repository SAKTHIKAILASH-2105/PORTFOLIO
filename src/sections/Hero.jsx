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
import { TiltCard } from '../components/TiltCard';

/**
 * ELECTRO-MECHANICAL 3D ANIMATED HERO SECTION
 * High-impact Mechatronics Landing Experience:
 * - Prismatic Hyper-Fusion Color Combination (Burgundy + Lavender + Copper + Champagne)
 * - Full 3D Interactive Perspective Depth on all cards and metric boxes
 * - Spatial Z-axis multi-layer parallax on the Core HUD
 * - Live Subsystem Telemetry Switcher (Mech-CAD / Silicon-VLSI / Embedded-DSP)
 * - Real-time Simulated DSP / Oscilloscope Waveform
 * - Tactile "Transmit Core Signal" Micro-interaction
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

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

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

  // Subsystem Telemetry Data with distinctive theme signatures
  const telemetryData = {
    mech: {
      title: "MECHANICAL & CAD ARCHITECTURE",
      badge: "CAD // KINEMATICS",
      color: "copper",
      icon: <Box className="w-4 h-4 text-amber-400" />,
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
      color: "lavender",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      specs: [
        { label: "HDL LANGUAGE", val: "Verilog HDL (Synthesizable RTL)" },
        { label: "DIGITAL LOGIC", val: "FSM State Machines & ALU Pipelines" },
        { label: "TARGET FREQUENCY", val: "Synchronous 240MHz Clock Domains" },
      ],
      waveformColor: "#c084fc",
    },
    embedded: {
      title: "EMBEDDED FIRMWARE & DSP SYSTEMS",
      badge: "FIRMWARE // I2S DSP",
      color: "burgundy",
      icon: <Zap className="w-4 h-4 text-rose-400" />,
      specs: [
        { label: "MICROCONTROLLER", val: "ESP32 / ESP32-S3 Dual Tensilica Core" },
        { label: "DIGITAL SIGNAL DSP", val: "I2S Microphones & Noise Filtering" },
        { label: "SENSOR INTEGRATION", val: "MPU6050 6-DOF IMU & Ultrasonic Bus" },
      ],
      waveformColor: "#be123c",
    },
  };

  const currentTel = telemetryData[activeSubsystem];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* High-Resolution Mechatronics Robotic Arm Background Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/mechatronics-bg.jpg"
          alt="Mechatronics Robotic Architecture"
          className="w-full h-full object-cover object-right lg:object-center opacity-30 filter contrast-125 brightness-95"
        />
        {/* Multilayer gradient vignettes so text and cards pop with crystal clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06070b] via-[#06070b]/92 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06070b] via-transparent to-[#06070b]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(234,126,59,0.15),rgba(192,132,252,0.08),transparent_70%)]" />
      </div>

      {/* Top Grid & Crosshair Alignment Watermarks */}
      <div className="absolute top-20 left-6 text-[9px] font-mono text-titanium-500/60 pointer-events-none hidden md:block select-none z-10">
        <div>[SYS_LATITUDE: 13.0827° N // CHENNAI_NODE]</div>
        <div>CALIBRATION: PRISMATIC FUSION // DUAL_BUS</div>
      </div>
      <div className="absolute top-20 right-6 text-[9px] font-mono text-titanium-500/60 pointer-events-none hidden md:block text-right select-none z-10">
        <div>ENG_IDENTITY: SAKTHI_KAILASH</div>
        <div>DEGREE_CYCLE: 2025 – 2029</div>
      </div>

      {/* Main Grid Content (Hero Split Layout) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto relative z-10">
        {/* ======================================================== */}
        {/* LEFT COLUMN: Narrative & Engineering Credentials (7 cols)*/}
        {/* ======================================================== */}
        <div className="lg:col-span-7 space-y-6 pt-4">
          {/* Top Prismatic Theme Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/80 via-purple-950/60 to-rose-950/80 border border-amber-500/40 text-xs font-mono shadow-[0_0_20px_rgba(234,126,59,0.3)]"
          >
            {/* Multi-swatch color dots */}
            <div className="flex items-center -space-x-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 ring-1 ring-black" />
              <span className="w-2 h-2 rounded-full bg-rose-500 ring-1 ring-black" />
              <span className="w-2 h-2 rounded-full bg-purple-400 ring-1 ring-black" />
              <span className="w-2 h-2 rounded-full bg-yellow-200 ring-1 ring-black" />
            </div>
            <span className="text-white font-bold tracking-wide">
              Prismatic Mechatronics Fusion
            </span>
            <span className="text-amber-200 font-mono text-[11px] hidden sm:inline">
              (Burgundy • Lavender • Copper)
            </span>
          </motion.div>

          {/* Institutional Campus Header: Rathinam Technical Campus */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-titanium-800/80"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-xs">
                <Cog className="w-5 h-5 animate-spin [animation-duration:12s]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold font-display text-white tracking-wider uppercase">
                  RATHINAM TECHNICAL CAMPUS
                </span>
                <span className="text-[10px] font-mono text-amber-300 tracking-wider">
                  DEPARTMENT OF MECHATRONICS ENGINEERING
                </span>
              </div>
            </div>
            <div className="text-[11px] font-mono text-amber-200 tracking-widest uppercase px-3 py-1 rounded-lg bg-graphite-900/90 border border-titanium-700/60 shadow-xs">
              Innovate • Design • Build
            </div>
          </motion.div>

          {/* Main Mechatronics Portfolio Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.08]">
              <span className="block text-white font-display">
                MECHATRONICS
              </span>
              <span className="relative inline-block mt-1">
                <span className="bg-gradient-to-r from-amber-400 via-rose-500 via-purple-400 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(234,126,59,0.55)]">
                  PORTFOLIO
                </span>
                {/* Underline circuit trace accent */}
                <span className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-gradient-to-r from-amber-500 via-rose-600 via-purple-500 to-transparent shadow-[0_0_12px_#ea7e3b]" />
              </span>
            </h1>

            <p className="text-base sm:text-xl font-display text-amber-100 font-medium tracking-wide">
              Engineering Intelligence for a Smarter Tomorrow
            </p>

            <div className="pt-1 flex items-center gap-2 text-amber-300 font-serif italic text-base sm:text-lg">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>"Dream Big... Build Bigger..."</span>
            </div>
          </motion.div>

          {/* Dynamic Typing Subrole with Interactive Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2.5 text-base sm:text-xl font-mono text-amber-300 min-h-[34px]"
          >
            <div className="w-6 h-6 rounded-md bg-graphite-900 border border-titanium-700 flex items-center justify-center shrink-0">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <span className="font-medium text-slate-200">
              {displayText}
              <span className="inline-block w-2 h-5 bg-amber-400 ml-1 animate-pulse align-middle" />
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
                <Box className="w-3 h-3 text-amber-400" />
                Mechatronics Engineering Student
              </span>
              <span className="text-amber-400">•</span>
              <span className="px-3 py-1 rounded-md bg-graphite-900 border border-titanium-700 text-metallic-silver shadow-xs flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-purple-400" />
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
            {/* View Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="relative group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-600 to-purple-600 text-white font-bold font-mono text-sm shadow-[0_0_25px_rgba(234,126,59,0.45)] hover:shadow-[0_0_35px_rgba(192,132,252,0.65)] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Shiny reflection beam */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10">View My Projects</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            {/* Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-graphite-900/90 hover:bg-titanium-850 text-metallic-silver hover:text-white font-mono text-sm font-semibold border border-titanium-700 hover:border-amber-500/60 shadow-md transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Download Resume</span>
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 sm:ml-2">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-graphite-900 border border-titanium-700 text-slate-400 hover:text-amber-400 hover:border-amber-500/60 hover:shadow-[0_0_15px_rgba(234,126,59,0.35)] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-graphite-900 border border-titanium-700 text-slate-400 hover:text-amber-400 hover:border-amber-500/60 hover:shadow-[0_0_15px_rgba(234,126,59,0.35)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick-Metric Engineering 3D Animated Badges Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
          >
            <TiltCard maxTilt={14} scale={1.05}>
              <div className="p-3 rounded-xl bg-graphite-900/90 border border-titanium-800 shadow-inner group-hover:border-amber-500/50 transition-colors">
                <span className="text-xl font-bold font-display text-amber-400 block">04+</span>
                <span className="text-[10px] font-mono text-metallic-steel uppercase tracking-wider">
                  Prototypes
                </span>
              </div>
            </TiltCard>

            <TiltCard maxTilt={14} scale={1.05}>
              <div className="p-3 rounded-xl bg-graphite-900/90 border border-titanium-800 shadow-inner group-hover:border-purple-500/50 transition-colors">
                <span className="text-xl font-bold font-display text-purple-400 block">07</span>
                <span className="text-[10px] font-mono text-metallic-steel uppercase tracking-wider">
                  3D CAD Models
                </span>
              </div>
            </TiltCard>

            <TiltCard maxTilt={14} scale={1.05}>
              <div className="p-3 rounded-xl bg-graphite-900/90 border border-titanium-800 shadow-inner group-hover:border-rose-500/50 transition-colors">
                <span className="text-xl font-bold font-display text-rose-400 block">02</span>
                <span className="text-[10px] font-mono text-metallic-steel uppercase tracking-wider">
                  NPTEL IIT Certs
                </span>
              </div>
            </TiltCard>

            <TiltCard maxTilt={14} scale={1.05}>
              <div className="p-3 rounded-xl bg-graphite-900/90 border border-titanium-800 shadow-inner group-hover:border-emerald-500/50 transition-colors">
                <span className="text-xl font-bold font-display text-emerald-400 block">3-in-1</span>
                <span className="text-[10px] font-mono text-metallic-steel uppercase tracking-wider">
                  Mechatronics
                </span>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: Interactive 3D Mechatronics Core HUD (5 cols)*/}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center items-center relative perspective-1200"
        >
          {/* Outer Multi-Layered Rotating Involute Gear Aperture */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[480px] sm:h-[530px] flex items-center justify-center">
            {/* Spinning Mechanical Gear Ring */}
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
                stroke="#c084fc"
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
                  stroke={i % 2 === 0 ? "#ea7e3b" : "#c084fc"}
                  strokeWidth="2"
                  transform={`rotate(${i * 30} 200 200)`}
                />
              ))}
            </svg>

            {/* Inner Counter-Rotating Gear Ring */}
            <svg
              className="absolute inset-0 w-full h-full animate-gear-reverse pointer-events-none opacity-20"
              viewBox="0 0 400 400"
            >
              <circle
                cx="200"
                cy="200"
                r="140"
                stroke="#be123c"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                fill="none"
              />
            </svg>

            {/* 3D TILT CORE CHASSIS HUD BOX */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[320px] sm:max-w-[380px] p-5 sm:p-6 rounded-3xl bg-[#090b14]/90 backdrop-blur-2xl border border-amber-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.85)] preserve-3d"
            >
              {/* Dynamic Specular Glint */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 transition-opacity"
                style={{
                  background: `radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, rgba(254,240,138,0.25), transparent 60%)`,
                }}
              />

              {/* Four Industrial Precision Corner Fasteners */}
              <div className="absolute top-2.5 left-2.5 mech-rivet" />
              <div className="absolute top-2.5 right-2.5 mech-rivet" />
              <div className="absolute bottom-2.5 left-2.5 mech-rivet" />
              <div className="absolute bottom-2.5 right-2.5 mech-rivet" />

              {/* HUD Header Bar */}
              <div 
                style={{ transform: 'translateZ(15px)' }}
                className="flex items-center justify-between pb-2.5 border-b border-titanium-800 text-[10px] font-mono preserve-3d"
              >
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Cog className="w-3.5 h-3.5 animate-spin [animation-duration:10s]" />
                  <span>CORE_REACTOR // ID_2105</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYNC_ACTIVE</span>
                </div>
              </div>

              {/* REAL PORTRAIT INTEGRATED WITH HIGH-PRECISION IC CASING (3D Popout) */}
              <div 
                style={{ transform: 'translateZ(25px)' }}
                className="relative my-3 text-center preserve-3d"
              >
                <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-graphite-950 border-2 border-amber-500/60 p-1.5 shadow-[0_0_28px_rgba(234,126,59,0.35)] flex items-center justify-center group overflow-hidden">
                  {/* Real Portrait Image */}
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt="Sakthi Kailash"
                    className="w-full h-full object-cover object-top rounded-xl filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* High-tech HUD Reticle Overlay */}
                  <div className="absolute inset-0 border border-amber-400/20 rounded-xl pointer-events-none" />

                  {/* Corner Badge Tag */}
                  <div className="absolute bottom-1 right-1 z-20 px-1.5 py-0.5 rounded bg-graphite-950/90 border border-amber-500/50 text-[8px] font-mono text-amber-400 font-semibold">
                    MECHATRONICS
                  </div>

                  {/* Copper Lead Pins (Top & Bottom) */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className="w-1 h-1 bg-amber-400 rounded-xs shadow-[0_0_4px_#ea7e3b]"
                      />
                    ))}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className="w-1 h-1 bg-amber-400 rounded-xs shadow-[0_0_4px_#ea7e3b]"
                      />
                    ))}
                  </div>
                </div>

                {/* Name & Dual Focus Tag */}
                <div className="mt-2.5">
                  <h3 className="font-display font-bold text-lg text-white">
                    Sakthi Kailash
                  </h3>
                  <p className="text-[11px] font-mono text-amber-400 flex items-center justify-center gap-1.5 mt-0.5">
                    <span>MECHATRONICS</span>
                    <span className="text-purple-400">•</span>
                    <span>VLSI & EMBEDDED</span>
                  </p>
                </div>
              </div>

              {/* LIVE SIMULATED SIGNAL OSCILLOSCOPE (3D Popout) */}
              <div 
                style={{ transform: 'translateZ(18px)' }}
                className="p-2.5 rounded-xl bg-graphite-950/80 border border-titanium-800 my-1 preserve-3d"
              >
                <div className="flex items-center justify-between text-[9px] font-mono text-metallic-steel mb-1">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-amber-400" />
                    SIGNAL PIPELINE // 48kHz I2S
                  </span>
                  <span className="text-amber-400 font-semibold">
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

              {/* INTERACTIVE SUBSYSTEM MODE SWITCHER (3D Popout) */}
              <div 
                style={{ transform: 'translateZ(20px)' }}
                className="pt-2 preserve-3d"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-metallic-steel mb-1.5 uppercase">
                  <span>SELECT ACTIVE SUBSYSTEM:</span>
                  <span className="text-amber-400">CLICK_TO_PROBE</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSubsystem('mech')}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono font-semibold transition-all border flex items-center justify-center gap-1 cursor-pointer ${
                      activeSubsystem === 'mech'
                        ? 'bg-amber-500/25 border-amber-500 text-amber-300 shadow-[0_0_12px_rgba(234,126,59,0.45)] font-bold'
                        : 'bg-graphite-950 border-titanium-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3 h-3" />
                    <span>MECH</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSubsystem('vlsi')}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono font-semibold transition-all border flex items-center justify-center gap-1 cursor-pointer ${
                      activeSubsystem === 'vlsi'
                        ? 'bg-purple-500/25 border-purple-400 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.45)] font-bold'
                        : 'bg-graphite-950 border-titanium-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>VLSI</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSubsystem('embedded')}
                    className={`py-1.5 px-2 rounded-lg text-[10px] font-mono font-semibold transition-all border flex items-center justify-center gap-1 cursor-pointer ${
                      activeSubsystem === 'embedded'
                        ? 'bg-rose-500/25 border-rose-500 text-rose-300 shadow-[0_0_12px_rgba(190,18,60,0.45)] font-bold'
                        : 'bg-graphite-950 border-titanium-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    <span>EMBED</span>
                  </motion.button>
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
                  style={{ transform: 'translateZ(16px)' }}
                  className="space-y-1.5 pt-2.5 text-[10px] font-mono preserve-3d"
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

              {/* TACTILE MICRO-INTERACTION BUTTON: TRANSMIT CORE SIGNAL (3D Popout) */}
              <div 
                style={{ transform: 'translateZ(24px)' }}
                className="pt-3 preserve-3d"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={triggerSystemPulse}
                  className={`w-full py-2 px-3 rounded-xl border text-[11px] font-mono font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                    isPulsing
                      ? 'bg-amber-500 text-white border-amber-400 shadow-[0_0_20px_#ea7e3b]'
                      : 'bg-titanium-850 hover:bg-amber-600 text-amber-400 hover:text-white border-amber-500/40 hover:border-amber-400'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isPulsing ? 'animate-spin' : ''}`} />
                  <span>
                    {isPulsing
                      ? `SIGNAL_DISPATCHED // PULSE #${pulseCount}`
                      : "TRANSMIT CORE SIGNAL"}
                  </span>
                </motion.button>
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
          <span className="flex items-center gap-2 text-amber-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            LIVE TELEMETRY
          </span>
          <span>•</span>
          <span className="text-slate-200">
            DISCIPLINE: <strong className="text-white">B.E. MECHATRONICS</strong>
          </span>
          <span>•</span>
          <span>
            SILICON: <strong className="text-purple-400">VERILOG HDL & RTL DESIGN</strong>
          </span>
          <span>•</span>
          <span>
            FIRMWARE: <strong className="text-rose-400">ESP32-S3 / I2S AUDIO DSP</strong>
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
            DEGREE: <strong className="text-slate-300">2025 – 2029</strong>
          </span>
        </div>
      </div>

      {/* Small Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mx-auto mt-4 flex flex-col items-center gap-1.5 cursor-pointer text-metallic-steel hover:text-amber-400 transition-colors z-20"
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
            className="w-1 h-1.5 rounded-full bg-amber-400"
          />
        </div>
      </motion.div>
    </section>
  );
};
