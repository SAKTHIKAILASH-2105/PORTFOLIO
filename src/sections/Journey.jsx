import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Calendar, ArrowRight, Sparkles, Cpu } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';
import { learningJourney } from '../data/portfolioData';

/**
 * Learning Journey Section
 * Modern vertical circuit timeline depicting progression from foundational logic to VLSI
 */
export const Journey = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-dark-950/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="04"
          title="Learning Journey & Roadmap"
          subtitle="A structured technical path through digital fundamentals, embedded firmware, HDL synthesis, and silicon design."
        />

        {/* Timeline Roadmap */}
        <div className="relative mt-12">
          {/* Central Vertical Circuit Bus Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-dark-800 sm:-translate-x-1/2">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-emerald-500 via-cyber-cyan to-transparent" />
          </div>

          <div className="space-y-12">
            {learningJourney.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = step.statusType === 'completed';
              const isOngoing = step.statusType === 'ongoing';
              const isPlanned = step.statusType === 'planned';

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card (Half width on sm+) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`ml-12 sm:ml-0 w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] ${
                      isEven ? 'sm:text-left sm:pl-0' : 'sm:text-left sm:pr-0'
                    }`}
                  >
                    <div className={`p-6 rounded-2xl bg-dark-900/90 border backdrop-blur-xl transition-all shadow-cyber-card ${
                      isOngoing
                        ? 'border-cyber-cyan/50 shadow-[0_0_25px_rgba(0,210,255,0.15)]'
                        : isCompleted
                        ? 'border-dark-750 hover:border-emerald-500/40'
                        : 'border-dark-800 opacity-85'
                    }`}>
                      {/* Card Header & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs text-cyber-cyan">
                          {step.period}
                        </span>
                        <StatusBadge status={step.status} size="xs" />
                      </div>

                      <h3 className="text-xl font-bold font-display text-white mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Skill tags */}
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase tracking-wider">
                          Key Concepts Explored:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {step.skillsAcquired.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 text-[11px] font-mono rounded bg-dark-950 border border-dark-800 text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Central Node Checkpoint on the Bus Line */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'border-emerald-500 bg-dark-950 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                        : isOngoing
                        ? 'border-cyber-neon bg-dark-950 text-cyber-neon shadow-[0_0_15px_rgba(0,245,255,0.6)] animate-pulse'
                        : 'border-slate-700 bg-dark-950 text-slate-600'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : isOngoing ? (
                        <Clock className="w-4 h-4" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-slate-600" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
