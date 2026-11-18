import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ChevronRight, Terminal, Box, Cog, Cpu, Wrench } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/**
 * ELECTRO-MECHANICAL HERO SECTION
 * Futuristic Mechatronics Landing Page:
 * Blends rotating mechanical gear geometry with active electronic silicon circuitry.
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Headline, Bio & Action Buttons (7 cols) */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Engineering Status Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-900/90 border border-titanium-700/80 text-xs font-mono text-copper-400 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-neon animate-ping" />
            <span className="tracking-wide text-metallic-silver">
              SYS_ONLINE // MECHATRONICS & VLSI ARCHITECTURE
            </span>
          </motion.div>

          {/* Main Greeting and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <span className="text-xs md:text-sm font-mono tracking-widest text-copper-400/90 block uppercase flex items-center gap-2">
              <span className="w-2 h-[1px] bg-copper-500" />
              {personalInfo.heroHeading}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Engineering Ideas Into{' '}
              <span className="bg-gradient-to-r from-copper-400 via-amber-300 to-cyber-neon bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(234,126,59,0.3)]">
                Intelligent
              </span>{' '}
              Solutions.
            </h1>
          </motion.div>

          {/* Dynamic Typing Subrole */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-base sm:text-xl font-mono text-cyber-cyan min-h-[32px]"
          >
            <Terminal className="w-5 h-5 text-copper-400 shrink-0" />
            <span className="font-medium text-slate-200">
              {displayText}
              <span className="inline-block w-2 h-5 bg-cyber-neon ml-1 animate-pulse align-middle" />
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
              <span className="px-3 py-1 rounded-md bg-graphite-900 border border-titanium-700 text-metallic-silver shadow-xs">
                Mechatronics Engineering Student
              </span>
              <span className="text-copper-400">•</span>
              <span className="px-3 py-1 rounded-md bg-graphite-900 border border-titanium-700 text-metallic-silver shadow-xs">
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
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            {/* View Projects Button (Electro-Mechanical Gradient) */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-copper-500 via-amber-500 to-copper-600 text-white font-bold font-mono text-sm hover:from-copper-400 hover:to-amber-500 shadow-[0_0_25px_rgba(234,126,59,0.35)] hover:shadow-[0_0_35px_rgba(234,126,59,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>View My Projects</span>
              <ChevronRight className="w-4 h-4" />
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
        </div>

        {/* Right Column: High-tech Engineering Holographic Frame & Badge (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Electro-Mechanical Aura Rings & Meshed Gears */}
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
            {/* Spinning Mechanical Gear Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-copper-500/25 animate-gear-slow" />
            {/* Counter-Spinning PCB Circuit Ring */}
            <div className="absolute inset-3 rounded-full border border-dotted border-cyber-cyan/30 animate-gear-reverse" />
            {/* Ambient Fusion Radial Glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-copper-500/10 via-titanium-800/10 to-cyber-cyan/10 blur-2xl" />

            {/* Glassmorphic Central Card / Holographic Profile Showcase */}
            <div className="relative w-68 h-88 sm:w-76 sm:h-96 rounded-2xl p-6 bg-gradient-to-b from-graphite-900/95 to-graphite-950/98 border border-titanium-700/90 shadow-[0_12px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              {/* Corner Brass Fastener Rivets */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-copper-500" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-copper-500" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-copper-500" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-copper-500" />

              {/* Engineering Portrait / Silicon IC Frame */}
              <div className="text-center pt-1">
                <div className="relative mx-auto w-32 h-32 rounded-2xl bg-graphite-950 border-2 border-copper-500/60 p-1.5 shadow-[0_0_25px_rgba(234,126,59,0.25)] flex items-center justify-center group overflow-hidden">
                  {/* Real Portrait Image */}
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt="Sakthi Kailash"
                    className="w-full h-full object-cover object-top rounded-xl filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Corner cyber node tag */}
                  <div className="absolute bottom-1 right-1 z-20 px-1.5 py-0.5 rounded bg-graphite-950/90 border border-copper-500/50 text-[8px] font-mono text-copper-400">
                    MECH_VLSI
                  </div>

                  {/* Dual Pin connectors (North & South) */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {[1, 2, 3, 4].map(i => (
                      <span key={i} className="w-1.5 h-1 bg-copper-400 rounded-xs shadow-[0_0_4px_#ea7e3b]" />
                    ))}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {[1, 2, 3, 4].map(i => (
                      <span key={i} className="w-1.5 h-1 bg-copper-400 rounded-xs shadow-[0_0_4px_#ea7e3b]" />
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-display font-bold text-lg text-white">
                    Sakthi Kailash
                  </h3>
                  <p className="text-xs font-mono text-copper-400 flex items-center justify-center gap-1">
                    <span>MECHATRONICS</span>
                    <span className="text-cyber-cyan">•</span>
                    <span>VLSI</span>
                  </p>
                </div>
              </div>

              {/* Real-time Hardware Specs Badge List */}
              <div className="space-y-1.5 pt-3 border-t border-titanium-800 text-[11px] font-mono">
                <div className="flex justify-between text-slate-300">
                  <span className="text-metallic-steel">DISCIPLINE:</span>
                  <span className="text-white font-semibold">Mechatronics</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-metallic-steel">HARDWARE:</span>
                  <span className="text-copper-400">ESP32 / I2S / Sensors</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-metallic-steel">SILICON:</span>
                  <span className="text-cyber-neon">Verilog / RTL</span>
                </div>
              </div>

              {/* Status pill inside card */}
              <div className="pt-2">
                <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>READY FOR COLLABORATION</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Small Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-metallic-steel hover:text-copper-400 transition-colors z-20"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">
          SCROLL_TO_DISCOVER
        </span>
        <div className="w-5 h-8 rounded-full border border-titanium-700 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-copper-400"
          />
        </div>
      </motion.div>
    </section>
  );
};
