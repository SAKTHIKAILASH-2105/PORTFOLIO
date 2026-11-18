import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Trophy, ExternalLink, ShieldCheck, FileCheck, CheckCircle2, Cloud, Cpu, ArrowUpRight, Check } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { certificationsAndAchievements } from '../data/portfolioData';

/**
 * Certifications & Achievements Section
 * Showcases verified NPTEL (IIT) certifications, LinkedIn Learning credentials,
 * technical workshops, and hackathons with direct PDF links.
 */
export const Certifications = () => {
  const { nptelCertifications, linkedinCertifications, workshops, competitions } = certificationsAndAchievements;
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'nptel' | 'linkedin' | 'engagements'

  const totalCertCount = (nptelCertifications?.length || 0) + (linkedinCertifications?.length || 0);

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="05"
          title="Verified Certifications & Credentials"
          subtitle="Accredited academic certifications from NPTEL (IITs), specialized cloud & IoT training from LinkedIn Learning, and competitive hackathon engagements."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-cyber-cyan text-dark-950 font-bold shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-dark-750'
            }`}
          >
            <span>All Credentials</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-dark-950/40 font-bold">
              {totalCertCount + (workshops?.length || 0) + (competitions?.length || 0)}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('nptel')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'nptel'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-dark-950 font-bold shadow-[0_0_15px_rgba(251,191,36,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-amber-400 border border-dark-750'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>NPTEL / IIT Certifications</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-dark-950/40 font-bold">
              {nptelCertifications?.length || 0}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('linkedin')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'linkedin'
                ? 'bg-gradient-to-r from-blue-500 to-cyber-cyan text-dark-950 font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-blue-400 border border-dark-750'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>LinkedIn Learning</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-dark-950/40 font-bold">
              {linkedinCertifications?.length || 0}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('engagements')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'engagements'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-dark-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-emerald-400 border border-dark-750'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Workshops & Hackathons</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-dark-950/40 font-bold">
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
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    NPTEL (IIT) Online Certifications
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
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
                    className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-dark-900 via-dark-900 to-dark-850 border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-cyber-card flex flex-col justify-between group hover:shadow-[0_10px_35px_rgba(251,191,36,0.15)]"
                  >
                    <div>
                      {/* Badge bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-md border border-amber-500/30 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-amber-400" />
                          <span>{cert.status}</span>
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          {cert.period}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h4 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors mb-1.5">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-amber-400/90 mb-3">
                        {cert.organization}
                      </p>

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {cert.notes}
                      </p>

                      {/* Score / Credit highlights */}
                      <div className="p-3 rounded-xl bg-dark-950/80 border border-dark-750 space-y-1.5 mb-4 text-xs font-mono">
                        {cert.score && (
                          <div className="flex justify-between text-slate-300">
                            <span className="text-slate-400">EXAMINATION SCORE:</span>
                            <span className="text-amber-400 font-semibold">{cert.score}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">ACADEMIC CREDITS:</span>
                          <span className="text-slate-200 font-medium">{cert.credits}</span>
                        </div>
                        {cert.instructor && (
                          <div className="flex justify-between text-slate-300">
                            <span className="text-slate-400">INSTRUCTOR:</span>
                            <span className="text-slate-200">{cert.instructor}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-dark-800 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-slate-400">
                        ROLL: {cert.credentialId}
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-400 text-amber-300 hover:text-dark-950 text-xs font-mono font-semibold border border-amber-500/40 transition-all shadow-sm"
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
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    LinkedIn Learning Professional Credentials
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
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
                    className="p-6 rounded-2xl bg-dark-900/80 border border-dark-750 hover:border-blue-500/50 transition-all shadow-cyber-card flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 text-xs font-mono">
                        <span className="text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                          {cert.organization}
                        </span>
                        <span className="text-slate-400">{cert.date}</span>
                      </div>

                      <h4 className="font-display font-bold text-base text-white group-hover:text-cyber-cyan transition-colors mb-2">
                        {cert.title}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {cert.notes}
                      </p>

                      {/* Skills Covered */}
                      <div className="mb-4">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase">
                          Skills Covered:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 text-[10px] font-mono rounded bg-dark-950 border border-dark-800 text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* PDF link */}
                    <div className="pt-3 border-t border-dark-800 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        VERIFIED
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-cyber-cyan text-slate-300 hover:text-dark-950 text-xs font-mono font-medium border border-dark-750 hover:border-cyber-cyan transition-all"
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
                  <BookOpen className="w-5 h-5 text-cyber-cyan" />
                  <h3 className="font-display font-bold text-xl text-white">
                    Technical Workshops & Hands-on Seminars
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workshops.map((ws, idx) => (
                    <div
                      key={ws.id}
                      className="p-6 rounded-2xl bg-dark-900/80 border border-dark-750 hover:border-cyber-cyan/40 transition-all shadow-cyber-card"
                    >
                      <div className="flex items-center justify-between mb-2 text-xs font-mono">
                        <span className="text-cyber-cyan">{ws.host}</span>
                        <span className="text-slate-400">{ws.date}</span>
                      </div>
                      <h4 className="font-display font-bold text-lg text-white mb-2">
                        {ws.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        <span className="text-slate-400">Core Focus:</span> {ws.focus}
                      </p>
                      <div className="p-3 rounded-lg bg-dark-950/60 border border-dark-800 text-xs text-slate-300 font-mono">
                        <span className="text-cyber-cyan">Key Outcome:</span> {ws.highlight}
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
                      className="p-6 rounded-2xl bg-dark-900/80 border border-dark-750 hover:border-emerald-500/40 transition-all shadow-cyber-card flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2 text-xs font-mono">
                          <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {comp.status}
                          </span>
                          <span className="text-slate-400">{comp.category}</span>
                        </div>
                        <h4 className="font-display font-bold text-lg text-white mb-2">
                          {comp.title}
                        </h4>
                        <p className="text-xs font-mono text-cyber-cyan mb-2">
                          Role: {comp.role}
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {comp.details}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-dark-800 text-[11px] font-mono text-slate-400">
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
