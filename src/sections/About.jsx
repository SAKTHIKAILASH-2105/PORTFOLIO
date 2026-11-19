import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Layers, BrainCircuit, GraduationCap, Compass, ShieldCheck, Terminal, Award, Cog } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { personalInfo, educationData, aboutHighlights } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

/**
 * ELECTRO-MECHANICAL 3D ANIMATED ABOUT ME SECTION
 * 3D perspective depth applied to portrait chassis, engineering mindset,
 * interest pillar modules, and education plaque.
 */
export const About = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-copper-400" />;
      case 'CircuitBoard': return <CircuitBoard className="w-5 h-5 text-cyber-neon" />;
      case 'Layers': return <Layers className="w-5 h-5 text-metallic-silver" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-copper-400" />;
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
            {/* 3D High-Tech Industrial Profile Frame */}
            <TiltCard maxTilt={8} scale={1.02} glareColor="rgba(234, 126, 59, 0.25)">
              <div className="p-5 rounded-2xl bg-gradient-to-b from-graphite-900/95 to-graphite-950/98 border border-titanium-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl relative group overflow-hidden preserve-3d">
                {/* Corner Brass Fastener Brackets */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-copper-500" />
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-copper-500" />
                <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-copper-500" />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-copper-500" />

                {/* Status Header */}
                <div 
                  style={{ transform: 'translateZ(15px)' }}
                  className="flex items-center justify-between pb-3 mb-3 border-b border-titanium-800 text-[11px] font-mono preserve-3d"
                >
                  <span className="text-copper-400 flex items-center gap-1.5 font-medium">
                    <Terminal className="w-3.5 h-3.5" />
                    SYS_PORTRAIT // ID_01
                  </span>
                  <span className="flex items-center gap-1 text-copper-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper-400 animate-pulse shadow-[0_0_8px_#ea7e3b]" />
                    ONLINE
                  </span>
                </div>

                {/* Image Container with Champagne Bevel (3D Popout) */}
                <div 
                  style={{ transform: 'translateZ(24px)' }}
                  className="relative mx-auto w-full aspect-[4/5] rounded-xl overflow-hidden border border-copper-500/40 bg-graphite-950 shadow-[0_0_25px_rgba(234, 126, 59,0.3)] preserve-3d"
                >
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt="Sakthi Kailash - Mechatronics Engineering Student"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-graphite-950/90 backdrop-blur-md border border-titanium-700 flex items-center justify-between text-xs font-mono">
                    <div>
                      <p className="text-white font-bold leading-tight">Sakthi Kailash</p>
                      <p className="text-[10px] text-copper-400">Mechatronics • VLSI</p>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-cyber-neon shrink-0" />
                  </div>
                </div>

                {/* Quick Specs Under Image */}
                <div 
                  style={{ transform: 'translateZ(14px)' }}
                  className="mt-4 pt-3 border-t border-titanium-800 space-y-2 text-xs font-mono preserve-3d"
                >
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-metallic-steel">FOCUS:</span>
                    <span className="text-copper-400 font-medium">VLSI & Embedded Systems</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-metallic-steel">DEGREE:</span>
                    <span className="text-metallic-silver">B.E. Mechatronics</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-metallic-steel">STATUS:</span>
                    <span className="text-emerald-400 font-semibold">Active Engineering</span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* 3D Quick Engineering Mindset Card */}
            <TiltCard maxTilt={10} scale={1.03}>
              <div className="p-5 rounded-2xl bg-graphite-900/80 border border-titanium-750/80 shadow-md preserve-3d">
                <div 
                  style={{ transform: 'translateZ(16px)' }}
                  className="flex items-center gap-2 mb-2 text-white font-display font-semibold text-sm preserve-3d"
                >
                  <Compass className="w-4 h-4 text-copper-400" />
                  <span>Engineering Mindset</span>
                </div>
                <p 
                  style={{ transform: 'translateZ(10px)' }}
                  className="text-xs text-metallic-steel leading-relaxed font-mono preserve-3d"
                >
                  "From breadboard prototypes to synthesizable hardware descriptions. Respect timing closure, prioritize signal integrity, and write clean, modular firmware."
                </p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Bio Narrative, Pillars & Education (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* 3D Metallic Narrative Card */}
            <TiltCard maxTilt={6} scale={1.01} glareColor="rgba(234, 126, 59, 0.12)">
              <div className="p-6 md:p-8 rounded-2xl bg-graphite-900/85 border border-titanium-700/80 backdrop-blur-xl relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.5)] preserve-3d">
                {/* Top Copper Circuit Trace Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-copper-500 via-amber-400 to-cyber-cyan" />

                <div 
                  style={{ transform: 'translateZ(14px)' }}
                  className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed preserve-3d"
                >
                  <p className="text-white font-medium">
                    {personalInfo.bio[0]}
                  </p>
                  <p className="text-metallic-pewter">
                    {personalInfo.bio[1]}
                  </p>
                  <p className="text-metallic-pewter">
                    {personalInfo.bio[2]}
                  </p>
                </div>

                {/* Tagline Callout */}
                <div 
                  style={{ transform: 'translateZ(18px)' }}
                  className="mt-6 pt-5 border-t border-titanium-800 flex items-center gap-3 preserve-3d"
                >
                  <div className="w-1.5 h-10 rounded-full bg-copper-500 shadow-[0_0_8px_#ea7e3b]" />
                  <p className="text-sm font-mono text-copper-400 italic">
                    "{personalInfo.tagline}"
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* 3D Core Interest Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <TiltCard maxTilt={12} scale={1.03}>
                    <div className="p-5 rounded-xl bg-graphite-900/75 border border-titanium-750 hover:border-copper-500/50 transition-all group shadow-sm hover:shadow-[0_8px_25px_rgba(234, 126, 59,0.15)] h-full preserve-3d flex flex-col justify-between">
                      <div>
                        <div 
                          style={{ transform: 'translateZ(20px)' }}
                          className="w-10 h-10 rounded-lg bg-titanium-800 border border-titanium-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform preserve-3d shadow-sm"
                        >
                          {getIcon(item.icon)}
                        </div>
                        <h4 
                          style={{ transform: 'translateZ(14px)' }}
                          className="font-display font-semibold text-white text-base mb-1 preserve-3d"
                        >
                          {item.title}
                        </h4>
                        <p 
                          style={{ transform: 'translateZ(8px)' }}
                          className="text-xs text-metallic-steel leading-relaxed preserve-3d"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* 3D Formal Education Card */}
            <TiltCard maxTilt={7} scale={1.01} glareColor="rgba(234, 126, 59, 0.14)">
              <div className="p-6 md:p-8 rounded-2xl bg-graphite-900/90 border border-titanium-700/80 backdrop-blur-xl relative shadow-md preserve-3d">
                <div 
                  style={{ transform: 'translateZ(18px)' }}
                  className="flex items-center gap-3 mb-5 preserve-3d"
                >
                  <div className="p-3 rounded-xl bg-copper-500/10 border border-copper-500/30 text-copper-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-copper-400 tracking-wider block">
                      ACADEMIC FOUNDATION
                    </span>
                    <h3 className="text-xl font-bold font-display text-white">
                      Education
                    </h3>
                  </div>
                </div>

                <div 
                  style={{ transform: 'translateZ(12px)' }}
                  className="space-y-4 preserve-3d"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-base font-semibold text-white">
                      {educationData.degree}
                    </h4>
                    <span className="text-xs font-mono text-metallic-steel">
                      {educationData.period}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-titanium-800">
                    <span className="font-mono text-xs uppercase tracking-wider text-metallic-steel block mb-2.5">
                      Core Engineering Coursework:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {educationData.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-metallic-pewter">
                          <span className="w-1.5 h-1.5 rounded-full bg-copper-500 shrink-0 shadow-[0_0_4px_#ea7e3b]" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
