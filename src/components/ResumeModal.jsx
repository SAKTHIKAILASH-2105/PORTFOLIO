import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, CheckCircle, FileText, Cpu, Code2, Award } from 'lucide-react';
import { personalInfo, educationData, skillCategories, projects, certificationsAndAchievements } from '../data/portfolioData';

/**
 * Interactive Resume Preview & Download Modal
 */
export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl my-8 rounded-2xl bg-dark-900 border border-cyber-cyan/30 shadow-[0_0_50px_rgba(0,210,255,0.15)] overflow-hidden z-10"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-dark-750 bg-dark-850/80">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyber-cyan" />
              <span className="font-mono text-xs text-slate-300">
                RESUME_PREVIEW // SAKTHI_KAILASH.PDF
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-750 hover:bg-dark-700 text-slate-300 hover:text-white text-xs font-mono border border-slate-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
              <a
                href={personalInfo.socialLinks.resumeUrl}
                download="Sakthi_Kailash_Resume.pdf"
                onClick={(e) => {
                  if (personalInfo.socialLinks.resumeUrl === '#resume') {
                    e.preventDefault();
                    window.print();
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyber-cyan hover:bg-cyber-neon text-dark-950 text-xs font-semibold font-mono transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-750 transition-colors ml-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document Body */}
          <div className="p-6 md:p-10 space-y-6 max-h-[78vh] overflow-y-auto bg-dark-950/60 font-sans print:bg-white print:text-black">
            {/* Header info */}
            <div className="border-b border-dark-750 pb-6">
              <h2 className="text-3xl font-bold font-display text-white tracking-tight">
                {personalInfo.name}
              </h2>
              <p className="text-cyber-cyan font-mono text-sm mt-1">
                {personalInfo.heroSubrole}
              </p>
              <p className="text-slate-400 text-xs mt-2 italic">
                "{personalInfo.tagline}"
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-slate-400">
                <span>Email: {personalInfo.socialLinks.email}</span>
                <span>•</span>
                <span>Location: {personalInfo.location}</span>
                <span>•</span>
                <span>Focus: VLSI, Embedded Systems, Mechatronics</span>
              </div>
            </div>

            {/* Engineering Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan mb-2">
                Engineering Summary
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {personalInfo.bio.join(" ")}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan mb-2">
                Education
              </h3>
              <div className="bg-dark-900/80 p-4 rounded-xl border border-dark-750">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-white">
                    {educationData.degree}
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    {educationData.period}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Relevant Coursework: {educationData.focusAreas.join(" • ")}
                </p>
              </div>
            </div>

            {/* Technical Skills Categorized */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan mb-2">
                Technical Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-dark-900/60 border border-dark-800">
                    <span className="font-semibold text-slate-200 block mb-1">
                      {cat.category}:
                    </span>
                    <span className="text-slate-400">
                      {cat.skills.map(s => `${s.name}${s.status === 'learning' ? ' (Learning)' : ''}`).join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan mb-2">
                Featured Engineering Projects
              </h3>
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-lg bg-dark-900/60 border border-dark-800">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          {proj.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dark-800 text-slate-400 border border-dark-700">
                          {proj.category === 'hardware' ? 'HARDWARE' : 'SOFTWARE'}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded">
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Certifications & Credentials */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-cyan mb-2">
                Verified Certifications & Accreditations
              </h3>
              <div className="space-y-2 text-xs">
                {/* NPTEL */}
                <div className="p-3 rounded-lg bg-dark-900/60 border border-dark-800">
                  <span className="font-semibold text-amber-300 block mb-1">
                    NPTEL (IIT) Online Certifications:
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    {certificationsAndAchievements.nptelCertifications.map(c => (
                      <li key={c.id} className="flex flex-wrap items-center justify-between gap-1">
                        <span>• <strong>{c.title}</strong> — {c.organization} (Roll: {c.credentialId})</span>
                        <span className="text-[10px] font-mono text-amber-400">{c.period}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LinkedIn Learning */}
                <div className="p-3 rounded-lg bg-dark-900/60 border border-dark-800">
                  <span className="font-semibold text-blue-400 block mb-1">
                    LinkedIn Learning Credentials (AWS & IoT):
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
                    {certificationsAndAchievements.linkedinCertifications.map(c => (
                      <li key={c.id} className="text-[11px]">
                        • {c.title} <span className="text-slate-400">({c.date})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-[11px] font-mono text-slate-500 border-t border-dark-800 pt-4">
              Note: Full verified credentials, institutional marks, and hardware code repositories available upon request.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
