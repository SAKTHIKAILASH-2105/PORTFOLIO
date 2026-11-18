import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, FileText, Sparkles, Cpu, ChevronRight, Terminal, Layers, Radio } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/**
 * Hero Section
 * Premium dark futuristic engineering landing
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
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1800);
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
          {/* Engineering status pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan shadow-[0_0_15px_rgba(0,210,255,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-neon animate-ping" />
            <span className="tracking-wide">SYS_ONLINE // HARDWARE & VLSI ARCHITECTURE</span>
          </motion.div>

          {/* Main Greeting and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <span className="text-xs md:text-sm font-mono tracking-widest text-slate-400 block uppercase">
              {personalInfo.heroHeading}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Engineering Ideas Into{' '}
              <span className="bg-gradient-to-r from-cyber-neon via-cyber-cyan to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,210,255,0.3)]">
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
            <Terminal className="w-5 h-5 text-cyber-cyan shrink-0" />
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
              <span className="px-2.5 py-1 rounded bg-dark-900 border border-dark-750 text-slate-300">
                Mechatronics Engineering Student
              </span>
              <span className="text-cyber-cyan">•</span>
              <span className="px-2.5 py-1 rounded bg-dark-900 border border-dark-750 text-slate-300">
                Aspiring VLSI & Electronics Engineer
              </span>
            </div>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
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
            {/* View Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-600 text-dark-950 font-bold font-mono text-sm hover:from-cyber-neon hover:to-blue-500 shadow-[0_0_25px_rgba(0,210,255,0.35)] hover:shadow-[0_0_35px_rgba(0,245,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>View My Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Download Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-dark-900/80 hover:bg-dark-850 text-slate-200 hover:text-white font-mono text-sm font-semibold border border-dark-700 hover:border-cyber-cyan/50 shadow-md transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-cyber-cyan" />
              <span>Download Resume</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 sm:ml-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-900 border border-dark-750 text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 hover:shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-900 border border-dark-750 text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 hover:shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all"
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
          {/* Outer Circuit Aura Rings */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            {/* Spinning decorative orbit rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyber-cyan/20 animate-spin [animation-duration:35s]" />
            <div className="absolute inset-4 rounded-full border border-dotted border-cyber-blue/30 animate-spin [animation-direction:reverse] [animation-duration:25s]" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-cyber-cyan/10 via-blue-500/5 to-purple-600/10 blur-2xl" />

            {/* Glassmorphic Central Card / Holographic Profile Showcase */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-2xl p-6 bg-gradient-to-b from-dark-850/90 to-dark-950/95 border border-cyber-cyan/30 shadow-[0_0_40px_rgba(0,210,255,0.2)] backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              {/* Corner tech accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyber-cyan" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyber-cyan" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyber-cyan" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyber-cyan" />

              {/* Engineering Portrait / Silicon IC Frame */}
              <div className="text-center pt-2">
                <div className="relative mx-auto w-28 h-28 rounded-2xl bg-dark-900 border-2 border-cyber-cyan/50 p-1 shadow-[0_0_25px_rgba(0,245,255,0.25)] flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/15 to-blue-600/25 pointer-events-none z-10" />
                  
                  {/* Real Portrait Image */}
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt="Sakthi Kailash"
                    className="w-full h-full object-cover object-top rounded-xl filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Corner cyber node tag */}
                  <div className="absolute bottom-1 right-1 z-20 px-1.5 py-0.5 rounded bg-dark-950/80 border border-cyber-cyan/40 text-[8px] font-mono text-cyber-neon">
                    VLSI_ENG
                  </div>

                  {/* Pin connectors */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {[1, 2, 3, 4].map(i => (
                      <span key={i} className="w-1 h-1 bg-cyber-cyan rounded-xs shadow-[0_0_4px_#00d2ff]" />
                    ))}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {[1, 2, 3, 4].map(i => (
                      <span key={i} className="w-1 h-1 bg-cyber-cyan rounded-xs shadow-[0_0_4px_#00d2ff]" />
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-display font-bold text-lg text-white">
                    Sakthi Kailash
                  </h3>
                  <p className="text-xs font-mono text-cyber-cyan">
                    MECHATRONICS & VLSI
                  </p>
                </div>
              </div>

              {/* Real-time Hardware Specs Badge List */}
              <div className="space-y-1.5 pt-3 border-t border-dark-750 text-[11px] font-mono">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">DISCIPLINE:</span>
                  <span className="text-slate-100 font-semibold">Mechatronics</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">HARDWARE:</span>
                  <span className="text-cyber-cyan">ESP32 / I2S / C</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">SILICON:</span>
                  <span className="text-cyber-neon">Verilog / RTL</span>
                </div>
              </div>

              {/* Status pill inside card */}
              <div className="pt-2">
                <div className="flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400">
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-500 hover:text-cyber-cyan transition-colors z-20"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">
          SCROLL_TO_DISCOVER
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-cyber-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
};
