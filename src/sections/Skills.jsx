import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, CpuIcon, CircuitBoard, Wrench, CheckCircle2, Clock } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';
import { skillCategories } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

/**
 * ELECTRO-MECHANICAL 3D ANIMATED TECHNICAL SKILLS SECTION
 * Categorized engineering module cards with hardware-accelerated 3D perspective tilt
 * and spatial depth layering.
 */
export const Skills = () => {
  const [filter, setFilter] = useState('all'); // 'all' | 'experienced' | 'learning'

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Electronics': return <CircuitBoard className="w-5 h-5 text-copper-400" />;
      case 'Programming': return <Code className="w-5 h-5 text-cyber-cyan" />;
      case 'VLSI': return <Cpu className="w-5 h-5 text-cyber-neon" />;
      case 'Embedded Systems': return <CpuIcon className="w-5 h-5 text-emerald-400" />;
      case 'Tools & CAD': return <Wrench className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-copper-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-graphite-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="02"
          title="Technical Competencies"
          subtitle="Hardware architecture, silicon design, firmware engineering, and computational toolsets."
        />

        {/* Filter Tabs (Brushed Metallic Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-copper-500 to-copper-600 text-white font-bold shadow-[0_0_15px_rgba(216, 176, 125,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-white border border-titanium-750'
            }`}
          >
            All Competencies
          </button>
          <button
            onClick={() => setFilter('experienced')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              filter === 'experienced'
                ? 'bg-gradient-to-r from-burgundy-600 to-burgundy-500 text-white font-bold shadow-[0_0_15px_rgba(139,35,62,0.5)] border border-burgundy-400/50'
                : 'bg-graphite-900 text-metallic-steel hover:text-white border border-titanium-750'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Experienced / Core</span>
          </button>
          <button
            onClick={() => setFilter('learning')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              filter === 'learning'
                ? 'bg-copper-500 text-white font-bold shadow-[0_0_15px_rgba(216, 176, 125,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-white border border-titanium-750'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Currently Learning</span>
          </button>
        </div>

        {/* Category Cards Grid with 3D Perspective Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const filteredSkills = cat.skills.filter((s) => {
              if (filter === 'all') return true;
              return s.status === filter;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="h-full"
              >
                <TiltCard maxTilt={10} scale={1.02} glareColor="rgba(216, 176, 125, 0.16)">
                  <div className="h-full rounded-2xl p-6 bg-graphite-900/90 border border-titanium-750 hover:border-copper-500/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.55)] flex flex-col justify-between group relative overflow-hidden preserve-3d">
                    {/* Top Corner Rivets */}
                    <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-titanium-600 shadow-xs" />
                    <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-titanium-600 shadow-xs" />

                    <div>
                      {/* Category Header (3D Popout) */}
                      <div 
                        style={{ transform: 'translateZ(18px)' }}
                        className="flex items-center justify-between mb-3 preserve-3d"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-titanium-800 border border-titanium-700 group-hover:border-copper-500/60 transition-colors shadow-inner">
                            {getCategoryIcon(cat.category)}
                          </div>
                          <h3 className="font-display font-bold text-lg text-white">
                            {cat.category}
                          </h3>
                        </div>
                        <span className="font-mono text-[10px] text-copper-400 bg-graphite-950 px-2 py-0.5 rounded border border-titanium-800">
                          {filteredSkills.length} SKILLS
                        </span>
                      </div>

                      <p 
                        style={{ transform: 'translateZ(10px)' }}
                        className="text-xs text-metallic-steel mb-5 leading-relaxed preserve-3d"
                      >
                        {cat.description}
                      </p>

                      {/* Skills List (3D Layered Rows) */}
                      <div 
                        style={{ transform: 'translateZ(14px)' }}
                        className="space-y-2.5 preserve-3d"
                      >
                        {filteredSkills.map((skill, sIdx) => {
                          const isLearning = skill.status === 'learning';

                          return (
                            <div
                              key={sIdx}
                              className="p-3 rounded-xl bg-graphite-950/75 border border-titanium-800 hover:border-titanium-650 transition-all flex items-center justify-between shadow-xs"
                            >
                              <div className="flex items-center gap-2.5">
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    isLearning ? 'bg-copper-400 animate-pulse shadow-[0_0_6px_#d8b07d]' : 'bg-copper-300 shadow-[0_0_6px_#f1dcbe]'
                                  }`}
                                />
                                <span className="text-sm font-medium text-slate-200">
                                  {skill.name}
                                </span>
                              </div>

                              <StatusBadge
                                status={isLearning ? 'Currently Learning' : 'Core'}
                                size="xs"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Subtle Bottom Trace Bar */}
                    <div 
                      style={{ transform: 'translateZ(12px)' }}
                      className="mt-6 pt-3 border-t border-titanium-800/80 flex items-center justify-between text-[10px] font-mono text-metallic-steel preserve-3d"
                    >
                      <span>SUBSYSTEM // {catIdx + 1}</span>
                      <span className="text-copper-400 font-medium">VERIFIED</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
