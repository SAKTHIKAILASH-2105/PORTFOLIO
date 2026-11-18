import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText } from 'lucide-react';
import { personalInfo, educationData, skillCategories, projects, certificationsAndAchievements } from '../data/portfolioData';

/**
 * ELECTRO-MECHANICAL RESUME PREVIEW & DOWNLOAD MODAL
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
          className="fixed inset-0 bg-graphite-950/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl my-8 rounded-2xl bg-graphite-900 border border-titanium-700 shadow-[0_0_60px_rgba(0,0,0,0.85)] overflow-hidden z-10"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-titanium-800 bg-graphite-850/90">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-copper-400" />
              <span className="font-mono text-xs text-slate-300">
                RESUME_PREVIEW // SAKTHI_KAILASH.PDF
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-titanium-800 hover:bg-titanium-700 text-slate-300 hover:text-white text-xs font-mono border border-titanium-700 transition-colors"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-copper-500 to-copper-600 hover:from-copper-400 hover:to-copper-500 text-white text-xs font-semibold font-mono transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-titanium-800 transition-colors ml-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document Body */}
          <div className="p-6 md:p-10 space-y-6 max-h-[78vh] overflow-y-auto bg-graphite-950/70 font-sans print:bg-white print:text-black">
            {/* Header info */}
            <div className="border-b border-titanium-800 pb-6">
              <h2 className="text-3xl font-bold font-display text-white tracking-tight">
                {personalInfo.name}
              </h2>
              <p className="text-copper-400 font-mono text-sm mt-1">
                {personalInfo.heroSubrole}
              </p>
              <p className="text-metallic-steel text-xs mt-2 italic">
                "{personalInfo.tagline}"
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-metallic-steel">
                <span>Email: {personalInfo.socialLinks.email}</span>
                <span>•</span>
                <span>Location: {personalInfo.location}</span>
                <span>•</span>
                <span>Focus: VLSI, Embedded Systems, Mechatronics</span>
              </div>
            </div>

            {/* Engineering Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-copper-400 mb-2">
                Engineering Summary
              </h3>
              <p className="text-sm text-metallic-pewter leading-relaxed">
                {personalInfo.bio.join(" ")}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-copper-400 mb-2">
                Education
              </h3>
              <div className="bg-graphite-900/90 p-4 rounded-xl border border-titanium-800">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-white">
                    {educationData.degree}
                  </h4>
                  <span className="text-xs font-mono text-metallic-steel">
                    {educationData.period}
                  </span>
                </div>
                <p className="text-xs text-metallic-steel mt-1">
                  Relevant Coursework: {educationData.focusAreas.join(" • ")}
                </p>
              </div>
            </div>

            {/* Technical Skills Categorized */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-copper-400 mb-2">
                Technical Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-graphite-900/70 border border-titanium-800">
                    <span className="font-semibold text-slate-200 block mb-1">
                      {cat.category}:
                    </span>
                    <span className="text-metallic-steel">
                      {cat.skills.map(s => `${s.name}${s.status === 'learning' ? ' (Learning)' : ''}`).join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-copper-400 mb-2">
                Featured Engineering Projects
              </h3>
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-lg bg-graphite-900/70 border border-titanium-800">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          {proj.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-titanium-850 text-slate-300 border border-titanium-700">
                          {proj.category === 'hardware' ? 'HARDWARE' : 'SOFTWARE'}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-copper-400 bg-copper-500/10 px-2 py-0.5 rounded">
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-xs text-metallic-pewter mb-2 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-graphite-950 text-metallic-steel border border-titanium-800">
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
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-copper-400 mb-2">
                Verified Certifications & Accreditations
              </h3>
              <div className="space-y-2 text-xs">
                {/* NPTEL */}
                <div className="p-3 rounded-lg bg-graphite-900/70 border border-titanium-800">
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
                <div className="p-3 rounded-lg bg-graphite-900/70 border border-titanium-800">
                  <span className="font-semibold text-cyber-cyan block mb-1">
                    LinkedIn Learning Credentials (AWS & IoT):
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
                    {certificationsAndAchievements.linkedinCertifications.map(c => (
                      <li key={c.id} className="text-[11px]">
                        • {c.title} <span className="text-metallic-steel">({c.date})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-[11px] font-mono text-metallic-steel border-t border-titanium-800 pt-4">
              Note: Full verified credentials, institutional marks, and hardware code repositories available upon request.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
