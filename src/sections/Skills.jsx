import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, CpuIcon, CircuitBoard, Wrench, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';
import { skillCategories } from '../data/portfolioData';

/**
 * Technical Skills Section
 * Categorized animated skill cards clearly distinguishing experienced vs learning skills
 */
export const Skills = () => {
  const [filter, setFilter] = useState('all'); // 'all' | 'experienced' | 'learning'

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Electronics': return <CircuitBoard className="w-5 h-5 text-cyber-cyan" />;
      case 'Programming': return <Code className="w-5 h-5 text-blue-400" />;
      case 'VLSI': return <Cpu className="w-5 h-5 text-cyber-neon" />;
      case 'Embedded Systems': return <CpuIcon className="w-5 h-5 text-emerald-400" />;
      case 'Tools & CAD': return <Wrench className="w-5 h-5 text-purple-400" />;
      default: return <Cpu className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-dark-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="02"
          title="Technical Competencies"
          subtitle="Hardware architecture, silicon design, firmware engineering, and computational toolsets."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === 'all'
                ? 'bg-cyber-cyan text-dark-950 font-bold shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-dark-750'
            }`}
          >
            All Competencies
          </button>
          <button
            onClick={() => setFilter('experienced')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === 'experienced'
                ? 'bg-emerald-500 text-dark-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-dark-750'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Experienced / Core</span>
          </button>
          <button
            onClick={() => setFilter('learning')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === 'learning'
                ? 'bg-cyber-neon text-dark-950 font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-dark-750'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Currently Learning</span>
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const filteredSkills = cat.skills.filter(s => {
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
                className="rounded-2xl p-6 bg-dark-900/80 border border-dark-750 hover:border-cyber-cyan/35 transition-all shadow-cyber-card flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 group-hover:border-cyber-cyan/40 transition-colors">
                        {getIcon(cat.category)}
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 bg-dark-850 px-2 py-0.5 rounded border border-dark-800">
                      {filteredSkills.length} SKILLS
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {filteredSkills.map((skill, sIdx) => {
                      const isLearning = skill.status === 'learning';

                      return (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-dark-950/60 border border-dark-800 hover:border-slate-700 transition-all flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`w-2 h-2 rounded-full ${
                              isLearning ? 'bg-cyber-neon animate-pulse' : 'bg-emerald-400'
                            }`} />
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

                {/* Footer Indicator */}
                <div className="mt-6 pt-4 border-t border-dark-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>DISCIPLINE // {cat.category.toUpperCase()}</span>
                  <span className="text-cyber-cyan">ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

  function getIcon(category) {
    switch (category) {
      case 'Electronics': return <CircuitBoard className="w-5 h-5 text-cyber-cyan" />;
      case 'Programming': return <Code className="w-5 h-5 text-blue-400" />;
      case 'VLSI': return <Cpu className="w-5 h-5 text-cyber-neon" />;
      case 'Embedded Systems': return <CpuIcon className="w-5 h-5 text-emerald-400" />;
      case 'Tools & CAD': return <Wrench className="w-5 h-5 text-purple-400" />;
      default: return <Cpu className="w-5 h-5 text-cyber-cyan" />;
    }
  }
};
