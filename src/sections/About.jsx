import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Layers, BrainCircuit, GraduationCap, Compass, ShieldCheck, Terminal, Award } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { personalInfo, educationData, aboutHighlights } from '../data/portfolioData';

/**
 * About Me Section with Personal Engineering Portrait
 * Highlights technical creativity, engineering knowledge, and problem-solving
 */
export const About = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyber-cyan" />;
      case 'CircuitBoard': return <CircuitBoard className="w-5 h-5 text-cyber-neon" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      default: return <Cpu className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="01"
          title="About My Engineering Journey"
          subtitle="Transforming creative ideas into functional hardware and digital silicon architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Engineering Portrait & Status HUD (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* High-Tech Profile Frame */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-dark-900/90 to-dark-950/95 border border-cyber-cyan/35 shadow-[0_0_35px_rgba(0,210,255,0.15)] backdrop-blur-xl relative group overflow-hidden">
              {/* Corner Cyber Reticles */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-cyber-cyan" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-cyber-cyan" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-cyber-cyan" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-cyber-cyan" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-dark-750/80 text-[11px] font-mono">
                <span className="text-cyber-cyan flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  SYS_PORTRAIT // ID_01
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Image Container with Glow & Scanline Overlay */}
              <div className="relative mx-auto w-full aspect-[4/5] rounded-xl overflow-hidden border border-cyber-cyan/40 bg-dark-950 shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                <img
                  src={personalInfo.profileImage || "/profile.jpg"}
                  alt="Sakthi Kailash - Mechatronics Engineering Student"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle cyber gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-dark-950/85 backdrop-blur-md border border-dark-750 flex items-center justify-between text-xs font-mono">
                  <div>
                    <p className="text-white font-bold leading-tight">Sakthi Kailash</p>
                    <p className="text-[10px] text-cyber-cyan">Mechatronics • VLSI</p>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-cyber-neon shrink-0" />
                </div>
              </div>

              {/* Quick Specs Under Image */}
              <div className="mt-4 pt-3 border-t border-dark-750/80 space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">FOCUS:</span>
                  <span className="text-cyber-cyan font-medium">VLSI & Embedded Systems</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">DEGREE:</span>
                  <span className="text-slate-200">B.E. Mechatronics</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">STATUS:</span>
                  <span className="text-emerald-400 font-semibold">Active Engineering</span>
                </div>
              </div>
            </div>

            {/* Quick Engineering Mindset Card */}
            <div className="p-5 rounded-2xl bg-dark-900/60 border border-dark-800">
              <div className="flex items-center gap-2 mb-2 text-white font-display font-semibold text-sm">
                <Compass className="w-4 h-4 text-cyber-cyan" />
                <span>Engineering Mindset</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                "From breadboard prototypes to synthesizable hardware descriptions. Respect timing closure, prioritize signal integrity, and write clean, modular firmware."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative, Pillars & Education (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Glass Narrative Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-dark-900/80 border border-dark-750 backdrop-blur-xl relative overflow-hidden shadow-cyber-card">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-blue-500 to-transparent" />
              
              <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
                <p className="text-white font-medium">
                  {personalInfo.bio[0]}
                </p>
                <p className="text-slate-300">
                  {personalInfo.bio[1]}
                </p>
                <p className="text-slate-300">
                  {personalInfo.bio[2]}
                </p>
              </div>

              {/* Tagline Callout */}
              <div className="mt-6 pt-5 border-t border-dark-750/80 flex items-center gap-3">
                <div className="w-1.5 h-10 rounded-full bg-cyber-cyan" />
                <p className="text-sm font-mono text-cyber-cyan italic">
                  "{personalInfo.tagline}"
                </p>
              </div>
            </div>

            {/* Core Interest Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-xl bg-dark-900/60 border border-dark-800 hover:border-cyber-cyan/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <h4 className="font-display font-semibold text-white text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Formal Education Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-dark-900/90 border border-cyber-cyan/25 backdrop-blur-xl relative shadow-cyber">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-cyber-cyan tracking-wider block">
                    ACADEMIC FOUNDATION
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    Education
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="text-base font-semibold text-slate-100">
                    {educationData.degree}
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    {educationData.period}
                  </span>
                </div>

                <div className="pt-3 border-t border-dark-750">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block mb-2.5">
                    Core Engineering Coursework:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {educationData.focusAreas.map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
