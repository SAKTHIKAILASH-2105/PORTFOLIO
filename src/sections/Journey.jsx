import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';
import { learningJourney } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

/**
 * ELECTRO-MECHANICAL 3D ANIMATED LEARNING JOURNEY SECTION
 * Vertical mechatronics transmission line with 3D perspective milestone boxes
 * and rotary encoder checkpoint nodes.
 */
export const Journey = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-graphite-950/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="05"
          title="Learning Journey & Roadmap"
          subtitle="A structured technical path through digital fundamentals, embedded firmware, HDL synthesis, and silicon design."
        />

        {/* Timeline Roadmap */}
        <div className="relative mt-12">
          {/* Central Vertical Transmission Drive Shaft & Copper Bus Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2.5px] bg-titanium-800 sm:-translate-x-1/2">
            <div className="absolute top-0 left-0 right-0 h-3/5 bg-gradient-to-b from-emerald-500 via-copper-500 to-transparent" />
          </div>

          <div className="space-y-12">
            {learningJourney.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = step.statusType === 'completed';
              const isOngoing = step.statusType === 'ongoing';

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
                    <TiltCard maxTilt={8} scale={1.02}>
                      <div
                        className={`p-6 rounded-2xl bg-graphite-900/90 border backdrop-blur-xl transition-all shadow-[0_10px_35px_rgba(0,0,0,0.5)] preserve-3d ${
                          isOngoing
                            ? 'border-copper-500/60 shadow-[0_0_25px_rgba(234,126,59,0.2)]'
                            : isCompleted
                            ? 'border-titanium-750 hover:border-emerald-500/40'
                            : 'border-titanium-800 opacity-85'
                        }`}
                      >
                        {/* Card Header & Status (3D Popout) */}
                        <div 
                          style={{ transform: 'translateZ(14px)' }}
                          className="flex flex-wrap items-center justify-between gap-2 mb-2 preserve-3d"
                        >
                          <span className="font-mono text-xs text-copper-400 font-medium">
                            {step.period}
                          </span>
                          <StatusBadge status={step.status} size="xs" />
                        </div>

                        <h3 
                          style={{ transform: 'translateZ(16px)' }}
                          className="text-xl font-bold font-display text-white mb-2 preserve-3d"
                        >
                          {step.title}
                        </h3>

                        <p 
                          style={{ transform: 'translateZ(10px)' }}
                          className="text-xs text-metallic-pewter leading-relaxed mb-4 preserve-3d"
                        >
                          {step.description}
                        </p>

                        {/* Skill tags */}
                        <div 
                          style={{ transform: 'translateZ(12px)' }}
                          className="preserve-3d"
                        >
                          <span className="text-[10px] font-mono text-metallic-steel block mb-1.5 uppercase tracking-wider">
                            Key Concepts Explored:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {step.skillsAcquired.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 text-[11px] font-mono rounded bg-graphite-950 border border-titanium-800 text-slate-300 shadow-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>

                  {/* Central Rotary Encoder Bearing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'border-emerald-500 bg-graphite-950 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                          : isOngoing
                          ? 'border-copper-500 bg-graphite-950 text-copper-400 shadow-[0_0_15px_rgba(234,126,59,0.6)] animate-pulse'
                          : 'border-titanium-700 bg-graphite-950 text-titanium-500'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : isOngoing ? (
                        <Clock className="w-4 h-4" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-titanium-600" />
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
