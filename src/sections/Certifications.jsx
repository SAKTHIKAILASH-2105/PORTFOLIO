import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Trophy, Cloud, FileCheck, CheckCircle2, ArrowUpRight, Check } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { certificationsAndAchievements } from '../data/portfolioData';

/**
 * ELECTRO-MECHANICAL CERTIFICATIONS & CREDENTIALS SECTION
 * Engraved metallic plaque aesthetic displaying accredited NPTEL (IIT) certifications,
 * LinkedIn Learning cloud/IoT credentials, and engineering competitions.
 */
export const Certifications = () => {
  const { nptelCertifications, linkedinCertifications, workshops, competitions } = certificationsAndAchievements;
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'nptel' | 'linkedin' | 'engagements'

  const totalCertCount = (nptelCertifications?.length || 0) + (linkedinCertifications?.length || 0);

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="06"
          title="Verified Certifications & Credentials"
          subtitle="Accredited academic certifications from NPTEL (IITs), specialized cloud & IoT training from LinkedIn Learning, and competitive hackathon engagements."
        />

        {/* Filter Navigation Tabs (Brushed Metallic) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-copper-500 to-copper-600 text-white font-bold shadow-[0_0_15px_rgba(234,126,59,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-white border border-titanium-750'
            }`}
          >
            <span>All Credentials</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-graphite-950/60 font-bold">
              {totalCertCount + (workshops?.length || 0) + (competitions?.length || 0)}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('nptel')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'nptel'
                ? 'bg-gradient-to-r from-amber-500 to-copper-500 text-white font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-amber-400 border border-titanium-750'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>NPTEL / IIT Certifications</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-graphite-950/60 font-bold">
              {nptelCertifications?.length || 0}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('linkedin')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'linkedin'
                ? 'bg-gradient-to-r from-titanium-700 to-graphite-800 text-cyber-neon border border-cyber-cyan/50 font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-cyber-cyan border border-titanium-750'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>LinkedIn Learning</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-graphite-950/60 font-bold">
              {linkedinCertifications?.length || 0}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('engagements')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'engagements'
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-emerald-400 border border-titanium-750'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Workshops & Hackathons</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-graphite-950/60 font-bold">
              {(workshops?.length || 0) + (competitions?.length || 0)}
            </span>
          </button>
        </div>

        {/* Content Container */}
        <div className="space-y-16">
          {/* Track 1: NPTEL Online Certifications (IIT Madras & IIT Kharagpur) */}
          {(activeTab === 'all' || activeTab === 'nptel') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    NPTEL (IIT) Online Certifications
                  </h3>
                  <p className="text-xs font-mono text-metallic-steel">
                    Rigorous semester-length academic courses accredited by the Ministry of Education & National Programme on Technology Enhanced Learning.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nptelCertifications.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-graphite-900 via-graphite-900 to-graphite-950 border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.55)] flex flex-col justify-between group hover:shadow-[0_12px_40px_rgba(245,158,11,0.18)]"
                  >
                    <div>
                      {/* Badge bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-md border border-amber-500/30 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-amber-400" />
                          <span>{cert.status}</span>
                        </span>
                        <span className="font-mono text-xs text-metallic-steel">
                          {cert.period}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h4 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors mb-1.5">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-copper-400 mb-3">
                        {cert.organization}
                      </p>

                      <p className="text-sm text-metallic-pewter leading-relaxed mb-4">
                        {cert.notes}
                      </p>

                      {/* Score / Credit highlights */}
                      <div className="p-3 rounded-xl bg-graphite-950/80 border border-titanium-800 space-y-1.5 mb-4 text-xs font-mono">
                        {cert.score && (
                          <div className="flex justify-between text-slate-300">
                            <span className="text-metallic-steel">EXAMINATION SCORE:</span>
                            <span className="text-amber-400 font-semibold">{cert.score}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-slate-300">
                          <span className="text-metallic-steel">ACADEMIC CREDITS:</span>
                          <span className="text-metallic-silver font-medium">{cert.credits}</span>
                        </div>
                        {cert.instructor && (
                          <div className="flex justify-between text-slate-300">
                            <span className="text-metallic-steel">INSTRUCTOR:</span>
                            <span className="text-metallic-silver">{cert.instructor}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-titanium-800 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-metallic-steel">
                        ROLL: {cert.credentialId}
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-titanium-800 hover:bg-amber-500 text-amber-300 hover:text-dark-950 text-xs font-mono font-semibold border border-amber-500/40 transition-all shadow-sm"
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>View Certificate PDF</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Track 2: LinkedIn Learning Certifications (AWS, Cloud & IoT) */}
          {(activeTab === 'all' || activeTab === 'linkedin') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2.5 rounded-xl bg-titanium-800 border border-titanium-700 text-cyber-neon shadow-sm">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    LinkedIn Learning Professional Credentials
                  </h3>
                  <p className="text-xs font-mono text-metallic-steel">
                    Industry-recognized certifications in AWS Cloud Architecture, Serverless Microservices, IoT Device Fleet Management, and DevOps.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {linkedinCertifications.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-6 rounded-2xl bg-graphite-900/85 border border-titanium-750 hover:border-cyber-cyan/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:shadow-[0_10px_35px_rgba(0,245,255,0.15)]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 text-xs font-mono">
                        <span className="text-cyber-cyan bg-titanium-850 px-2.5 py-0.5 rounded border border-titanium-700">
                          {cert.organization}
                        </span>
                        <span className="text-metallic-steel">{cert.date}</span>
                      </div>

                      <h4 className="font-display font-bold text-base text-white group-hover:text-copper-400 transition-colors mb-2">
                        {cert.title}
                      </h4>

                      <p className="text-xs text-metallic-pewter leading-relaxed mb-4">
                        {cert.notes}
                      </p>

                      {/* Skills Covered */}
                      <div className="mb-4">
                        <span className="text-[10px] font-mono text-metallic-steel block mb-1.5 uppercase">
                          Skills Covered:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 text-[10px] font-mono rounded bg-graphite-950 border border-titanium-800 text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* PDF link */}
                    <div className="pt-3 border-t border-titanium-800 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        VERIFIED
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-titanium-800 hover:bg-copper-500 text-slate-300 hover:text-white text-xs font-mono font-medium border border-titanium-700 hover:border-copper-500 transition-all"
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>PDF</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Track 3: Workshops & Hackathon Symposia */}
          {(activeTab === 'all' || activeTab === 'engagements') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {/* Technical Workshops */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-copper-400" />
                  <h3 className="font-display font-bold text-xl text-white">
                    Technical Workshops & Hands-on Seminars
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workshops.map((ws, idx) => (
                    <div
                      key={ws.id}
                      className="p-6 rounded-2xl bg-graphite-900/85 border border-titanium-750 hover:border-copper-500/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                      <div className="flex items-center justify-between mb-2 text-xs font-mono">
                        <span className="text-copper-400 font-medium">{ws.host}</span>
                        <span className="text-metallic-steel">{ws.date}</span>
                      </div>
                      <h4 className="font-display font-bold text-lg text-white mb-2">
                        {ws.title}
                      </h4>
                      <p className="text-xs text-metallic-pewter leading-relaxed mb-3">
                        <span className="text-metallic-steel">Core Focus:</span> {ws.focus}
                      </p>
                      <div className="p-3 rounded-lg bg-graphite-950/70 border border-titanium-800 text-xs text-slate-300 font-mono">
                        <span className="text-copper-400">Key Outcome:</span> {ws.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hackathons & Competitions */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-display font-bold text-xl text-white">
                    Hackathons & Engineering Competitions
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {competitions.map((comp, idx) => (
                    <div
                      key={comp.id}
                      className="p-6 rounded-2xl bg-graphite-900/85 border border-titanium-750 hover:border-emerald-500/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2 text-xs font-mono">
                          <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                            {comp.status}
                          </span>
                          <span className="text-metallic-steel">{comp.category}</span>
                        </div>
                        <h4 className="font-display font-bold text-lg text-white mb-2">
                          {comp.title}
                        </h4>
                        <p className="text-xs font-mono text-copper-400 mb-2">
                          Role: {comp.role}
                        </p>
                        <p className="text-sm text-metallic-pewter leading-relaxed">
                          {comp.details}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-titanium-800 text-[11px] font-mono text-metallic-steel">
                        HARDWARE-SOFTWARE TELEMETRY // INNOVATION
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
