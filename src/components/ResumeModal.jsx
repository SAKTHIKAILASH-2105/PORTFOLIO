import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, ExternalLink, Mail, MapPin, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData, skillCategories, projects, certificationsAndAchievements } from '../data/portfolioData';

/**
 * ELECTRO-MECHANICAL RESUME PREVIEW & DOWNLOAD MODAL
 * Includes executive profile photo, verified IIT credentials,
 * one-click PDF direct download, new-tab preview, and print support.
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06070b]/92 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl my-6 rounded-2xl bg-[#090b14] border border-amber-500/40 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden z-10"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-titanium-800 bg-[#0c0e18]/95 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-xs text-slate-200 font-semibold tracking-wide">
                RESUME_PREVIEW // SAKTHI_KAILASH.PDF
              </span>
            </div>
            <div className="flex items-center gap-2">
              {/* Open in New Tab */}
              <a
                href={personalInfo.socialLinks.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-titanium-850 hover:bg-titanium-800 text-slate-300 hover:text-white text-xs font-mono border border-titanium-700 transition-colors"
                title="Open PDF in new browser tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Open PDF</span>
              </a>

              {/* Print / Save as PDF */}
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-titanium-850 hover:bg-titanium-800 text-slate-300 hover:text-white text-xs font-mono border border-titanium-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              {/* Direct PDF Download */}
              <a
                href={personalInfo.socialLinks.resumeUrl}
                download="Sakthi_Kailash_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-rose-600 to-purple-600 hover:opacity-90 text-white text-xs font-semibold font-mono transition-all shadow-[0_0_15px_rgba(234,126,59,0.35)] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-titanium-800 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document Body */}
          <div className="p-5 sm:p-8 md:p-10 space-y-6 max-h-[78vh] overflow-y-auto bg-[#07080f] font-sans print:bg-white print:text-black">
            {/* Header info with Photo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 border-b border-titanium-800 pb-6">
              {/* Profile Photo */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-500/80 p-1 bg-graphite-950 shadow-[0_0_25px_rgba(234,126,59,0.35)]">
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top rounded-xl filter contrast-[1.03]"
                  />
                </div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-graphite-950/95 border border-amber-500/60 text-[9px] font-mono text-amber-300 font-bold tracking-wider uppercase">
                  VERIFIED
                </div>
              </div>

              {/* Personal Details */}
              <div className="flex-1 text-center sm:text-left space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                    {personalInfo.name}
                  </h2>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold self-center sm:self-auto">
                    Open for Internships
                  </span>
                </div>

                <p className="text-amber-400 font-mono text-sm font-semibold">
                  {personalInfo.heroSubrole}
                </p>

                <p className="text-slate-300 text-xs italic">
                  "{personalInfo.tagline}"
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 pt-2 text-xs font-mono text-slate-300">
                  <span>Email: <strong className="text-white">{personalInfo.socialLinks.email}</strong></span>
                  <span>•</span>
                  <span>Location: <strong className="text-slate-200">{personalInfo.location}</strong></span>
                  <span>•</span>
                  <span>Undergraduate Cycle: <strong className="text-amber-400">2025 – 2029</strong></span>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs font-mono text-slate-300">
                  <span>Institution: <strong className="text-slate-200">{personalInfo.institution}</strong></span>
                  <span>•</span>
                  <span>Specialization: <strong className="text-purple-400">VLSI & Embedded Systems</strong></span>
                </div>
              </div>
            </div>

            {/* Engineering Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                Executive Engineering Summary
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-[#0c0e18] p-4 rounded-xl border border-titanium-800">
                {personalInfo.bio.join(" ")}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Education
              </h3>
              <div className="bg-[#0c0e18] p-4 rounded-xl border border-titanium-800">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {educationData.degree}
                    </h4>
                    <p className="text-xs text-amber-300 mt-0.5">
                      {educationData.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                    {educationData.period}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-2.5 pt-2 border-t border-titanium-800/80">
                  <strong>Relevant Coursework:</strong> {educationData.focusAreas.join(" • ")}
                </p>
              </div>
            </div>

            {/* Technical Skills Categorized */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                Technical Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0c0e18] border border-titanium-800">
                    <span className="font-bold text-amber-300 block mb-1">
                      {cat.category}:
                    </span>
                    <span className="text-slate-300 leading-relaxed">
                      {cat.skills.map(s => `${s.name}${s.status === 'learning' ? ' (Learning)' : ''}`).join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                Featured Engineering Projects
              </h3>
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-[#0c0e18] border border-titanium-800">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">
                          {proj.title}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-titanium-850 text-slate-300 border border-titanium-700">
                          {proj.category === 'hardware' ? 'HARDWARE' : 'SOFTWARE'}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mb-2.5 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#07080f] text-slate-300 border border-titanium-800">
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
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Verified Certifications & Accreditations
              </h3>
              <div className="space-y-3 text-xs">
                {/* NPTEL */}
                <div className="p-4 rounded-xl bg-[#0c0e18] border border-titanium-800">
                  <span className="font-bold text-amber-300 block mb-2 text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    NPTEL (IIT) Online Certifications:
                  </span>
                  <ul className="space-y-2 text-slate-300">
                    {certificationsAndAchievements.nptelCertifications.map(c => (
                      <li key={c.id} className="flex flex-wrap items-center justify-between gap-1 p-2 rounded-lg bg-[#07080f] border border-titanium-800/60">
                        <span>• <strong>{c.title}</strong> — {c.organization} <span className="text-metallic-steel font-mono">(Roll: {c.credentialId})</span></span>
                        <span className="text-[10px] font-mono text-amber-400 font-semibold">{c.period}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LinkedIn Learning */}
                <div className="p-4 rounded-xl bg-[#0c0e18] border border-titanium-800">
                  <span className="font-bold text-purple-300 block mb-2 text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    LinkedIn Learning Credentials (AWS & IoT):
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                    {certificationsAndAchievements.linkedinCertifications.map(c => (
                      <li key={c.id} className="text-[11px] p-2 rounded-lg bg-[#07080f] border border-titanium-800/60">
                        • <strong>{c.title}</strong> <span className="text-metallic-steel font-mono">({c.date})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Note & Direct PDF Download Prompt */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-titanium-800 pt-4 text-xs font-mono text-slate-400">
              <span>Full verified credentials & project repositories available on live portfolio.</span>
              <a
                href={personalInfo.socialLinks.resumeUrl}
                download="Sakthi_Kailash_Resume.pdf"
                className="text-amber-400 hover:text-amber-300 underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                Download Official PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
