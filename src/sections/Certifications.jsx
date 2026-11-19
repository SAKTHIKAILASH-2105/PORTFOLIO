import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Trophy, 
  Cloud, 
  FileCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  Check, 
  X, 
  ZoomIn, 
  Download, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { certificationsAndAchievements } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { CertificateImage } from '../components/CertificateImage';

/**
 * ELECTRO-MECHANICAL 3D ANIMATED CERTIFICATIONS & CREDENTIALS SECTION
 * Engraved metallic plaque aesthetic with 3D perspective tilt displaying
 * visual certificate previews, accredited NPTEL (IIT) certifications,
 * LinkedIn Learning credentials, and competitions.
 * Optimized for mobile, tablet, and desktop viewing.
 */
export const Certifications = () => {
  const { nptelCertifications, linkedinCertifications, workshops, competitions } = certificationsAndAchievements;
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'nptel' | 'linkedin' | 'engagements'
  const [modalCert, setModalCert] = useState(null);

  const totalCertCount = (nptelCertifications?.length || 0) + (linkedinCertifications?.length || 0);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalCert(null);
    };
    if (modalCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalCert]);

  return (
    <section id="achievements" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="06"
          title="Verified Certifications & Credentials"
          subtitle="Accredited academic certifications from NPTEL (IITs), specialized cloud & IoT training from LinkedIn Learning, and competitive hackathon engagements."
        />

        {/* Filter Navigation Tabs (Brushed Metallic) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-copper-500 to-copper-600 text-white font-bold shadow-[0_0_15px_rgba(192, 132, 252,0.4)]'
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
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'nptel'
                ? 'bg-gradient-to-r from-amber-500 to-copper-500 text-white font-bold shadow-[0_0_15px_rgba(192, 132, 252,0.4)]'
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
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'linkedin'
                ? 'bg-gradient-to-r from-titanium-700 to-graphite-800 text-cyber-neon border border-cyber-cyan/50 font-bold shadow-[0_0_15px_rgba(192, 132, 252,0.3)]'
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
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeTab === 'engagements'
                ? 'bg-gradient-to-r from-charcoal-700 to-lavender-700 text-white font-bold shadow-[0_0_15px_rgba(168, 85, 247,0.5)] border border-lavender-500/50'
                : 'bg-graphite-900 text-metallic-steel hover:text-copper-400 border border-titanium-750'
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
          {/* Track 1: NPTEL Online Certifications (IIT Madras & IIT Kharagpur) with 3D Tilt */}
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
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
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
                    className="h-full"
                  >
                    <TiltCard maxTilt={8} scale={1.015} glareColor="rgba(192, 132, 252, 0.2)">
                      <div className="h-full p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-graphite-900 via-graphite-900 to-graphite-950 border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.55)] flex flex-col justify-between group hover:shadow-[0_12px_40px_rgba(192, 132, 252,0.22)] preserve-3d">
                        <div>
                          {/* Badge bar */}
                          <div 
                            style={{ transform: 'translateZ(14px)' }}
                            className="flex flex-wrap items-center justify-between gap-2 mb-3.5 preserve-3d"
                          >
                            <span className="font-mono text-xs text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-md border border-amber-500/30 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                              <span>{cert.status}</span>
                            </span>
                            <span className="font-mono text-xs text-metallic-steel">
                              {cert.period}
                            </span>
                          </div>

                          {/* ======================================================== */}
                          {/* VISUAL CERTIFICATE PREVIEW (Outside directly on card)    */}
                          {/* ======================================================== */}
                          <div
                            style={{ transform: 'translateZ(18px)' }}
                            className="mb-4 preserve-3d"
                          >
                            <CertificateImage
                              imageUrl={cert.imageUrl}
                              pdfUrl={cert.link}
                              title={cert.title}
                              organization={cert.organization}
                              credentialId={cert.credentialId}
                              score={cert.score}
                              onExpand={() => setModalCert({
                                imageUrl: cert.imageUrl,
                                pdfUrl: cert.link,
                                title: cert.title,
                                organization: cert.organization,
                                credentialId: cert.credentialId,
                                score: cert.score,
                                period: cert.period,
                                credits: cert.credits,
                                instructor: cert.instructor,
                                notes: cert.notes,
                                type: 'nptel'
                              })}
                            />
                          </div>

                          {/* Course Title */}
                          <h4 
                            style={{ transform: 'translateZ(16px)' }}
                            className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors mb-1.5 preserve-3d"
                          >
                            {cert.title}
                          </h4>
                          <p 
                            style={{ transform: 'translateZ(12px)' }}
                            className="text-xs font-mono text-copper-400 mb-3 preserve-3d"
                          >
                            {cert.organization}
                          </p>

                          <p 
                            style={{ transform: 'translateZ(10px)' }}
                            className="text-xs sm:text-sm text-metallic-pewter leading-relaxed mb-4 preserve-3d"
                          >
                            {cert.notes}
                          </p>

                          {/* Score / Credit highlights */}
                          <div 
                            style={{ transform: 'translateZ(14px)' }}
                            className="p-3 rounded-xl bg-graphite-950/80 border border-titanium-800 space-y-1.5 mb-4 text-xs font-mono preserve-3d"
                          >
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
                        <div 
                          style={{ transform: 'translateZ(16px)' }}
                          className="pt-4 border-t border-titanium-800 flex items-center justify-between gap-2 preserve-3d"
                        >
                          <span className="font-mono text-[11px] text-metallic-steel truncate">
                            ROLL: {cert.credentialId}
                          </span>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => setModalCert({
                                imageUrl: cert.imageUrl,
                                pdfUrl: cert.link,
                                title: cert.title,
                                organization: cert.organization,
                                credentialId: cert.credentialId,
                                score: cert.score,
                                period: cert.period,
                                credits: cert.credits,
                                instructor: cert.instructor,
                                notes: cert.notes,
                                type: 'nptel'
                              })}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-titanium-850 hover:bg-titanium-750 text-metallic-silver text-xs font-mono border border-titanium-700 transition-all"
                              title="Inspect certificate preview"
                            >
                              <ZoomIn className="w-3.5 h-3.5 text-copper-400" />
                              <span className="hidden sm:inline">Inspect</span>
                            </button>
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-titanium-800 hover:bg-amber-500 text-amber-300 hover:text-dark-950 text-xs font-mono font-semibold border border-amber-500/40 transition-all shadow-sm"
                            >
                              <FileCheck className="w-3.5 h-3.5" />
                              <span>PDF</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Track 2: LinkedIn Learning Certifications with 3D Tilt */}
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
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
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
                    className="h-full"
                  >
                    <TiltCard maxTilt={8} scale={1.015} glareColor="rgba(192, 132, 252, 0.16)">
                      <div className="h-full p-5 sm:p-6 rounded-2xl bg-graphite-900/85 border border-titanium-750 hover:border-cyber-cyan/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:shadow-[0_12px_35px_rgba(192, 132, 252,0.18)] preserve-3d">
                        <div>
                          <div 
                            style={{ transform: 'translateZ(14px)' }}
                            className="flex items-center justify-between mb-3 text-xs font-mono preserve-3d"
                          >
                            <span className="text-cyber-cyan bg-titanium-850 px-2.5 py-0.5 rounded border border-titanium-700">
                              {cert.organization}
                            </span>
                            <span className="text-metallic-steel">{cert.date}</span>
                          </div>

                          {/* ======================================================== */}
                          {/* VISUAL CERTIFICATE PREVIEW (Outside directly on card)    */}
                          {/* ======================================================== */}
                          <div
                            style={{ transform: 'translateZ(18px)' }}
                            className="mb-4 preserve-3d"
                          >
                            <CertificateImage
                              imageUrl={cert.imageUrl}
                              pdfUrl={cert.link}
                              title={cert.title}
                              organization={cert.organization}
                              credentialId={cert.id}
                              score="VERIFIED"
                              onExpand={() => setModalCert({
                                imageUrl: cert.imageUrl,
                                pdfUrl: cert.link,
                                title: cert.title,
                                organization: cert.organization,
                                credentialId: cert.id,
                                date: cert.date,
                                skills: cert.skills,
                                notes: cert.notes,
                                type: 'linkedin'
                              })}
                            />
                          </div>

                          <h4 
                            style={{ transform: 'translateZ(16px)' }}
                            className="font-display font-bold text-base text-white group-hover:text-copper-400 transition-colors mb-2 preserve-3d"
                          >
                            {cert.title}
                          </h4>

                          <p 
                            style={{ transform: 'translateZ(10px)' }}
                            className="text-xs text-metallic-pewter leading-relaxed mb-4 preserve-3d"
                          >
                            {cert.notes}
                          </p>

                          {/* Skills Covered */}
                          <div 
                            style={{ transform: 'translateZ(12px)' }}
                            className="mb-4 preserve-3d"
                          >
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

                        {/* PDF link & Inspection */}
                        <div 
                          style={{ transform: 'translateZ(16px)' }}
                          className="pt-3 border-t border-titanium-800 flex items-center justify-between gap-2 preserve-3d"
                        >
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            VERIFIED
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setModalCert({
                                imageUrl: cert.imageUrl,
                                pdfUrl: cert.link,
                                title: cert.title,
                                organization: cert.organization,
                                credentialId: cert.id,
                                date: cert.date,
                                skills: cert.skills,
                                notes: cert.notes,
                                type: 'linkedin'
                              })}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-titanium-850 hover:bg-titanium-750 text-metallic-silver text-xs font-mono border border-titanium-700 transition-all"
                              title="Inspect certificate preview"
                            >
                              <ZoomIn className="w-3.5 h-3.5 text-cyber-cyan" />
                              <span className="hidden sm:inline">Inspect</span>
                            </button>
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-titanium-800 hover:bg-copper-500 text-slate-300 hover:text-white text-xs font-mono font-medium border border-titanium-700 hover:border-copper-500 transition-all"
                            >
                              <FileCheck className="w-3.5 h-3.5" />
                              <span>PDF</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Track 3: Workshops & Hackathons with 3D Tilt */}
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
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    Technical Workshops & Hands-on Seminars
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workshops.map((ws, idx) => (
                    <TiltCard key={ws.id} maxTilt={8} scale={1.015}>
                      <div className="p-5 sm:p-6 rounded-2xl bg-graphite-900/85 border border-titanium-750 hover:border-copper-500/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] preserve-3d">
                        <div 
                          style={{ transform: 'translateZ(12px)' }}
                          className="flex items-center justify-between mb-2 text-xs font-mono preserve-3d"
                        >
                          <span className="text-copper-400 font-medium">{ws.host}</span>
                          <span className="text-metallic-steel">{ws.date}</span>
                        </div>
                        <h4 
                          style={{ transform: 'translateZ(16px)' }}
                          className="font-display font-bold text-lg text-white mb-2 preserve-3d"
                        >
                          {ws.title}
                        </h4>
                        <p 
                          style={{ transform: 'translateZ(10px)' }}
                          className="text-xs text-metallic-pewter leading-relaxed mb-3 preserve-3d"
                        >
                          <span className="text-metallic-steel">Core Focus:</span> {ws.focus}
                        </p>
                        <div 
                          style={{ transform: 'translateZ(14px)' }}
                          className="p-3 rounded-lg bg-graphite-950/70 border border-titanium-800 text-xs text-slate-300 font-mono preserve-3d"
                        >
                          <span className="text-copper-400">Key Outcome:</span> {ws.highlight}
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>

              {/* Hackathons & Competitions */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    Hackathons & Engineering Competitions
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {competitions.map((comp, idx) => (
                    <TiltCard key={comp.id} maxTilt={8} scale={1.015}>
                      <div className="p-5 sm:p-6 rounded-2xl bg-graphite-900/85 border border-titanium-750 hover:border-emerald-500/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between preserve-3d">
                        <div>
                          <div 
                            style={{ transform: 'translateZ(12px)' }}
                            className="flex items-center justify-between mb-2 text-xs font-mono preserve-3d"
                          >
                            <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                              {comp.status}
                            </span>
                            <span className="text-metallic-steel">{comp.category}</span>
                          </div>
                          <h4 
                            style={{ transform: 'translateZ(16px)' }}
                            className="font-display font-bold text-lg text-white mb-2 preserve-3d"
                          >
                            {comp.title}
                          </h4>
                          <p 
                            style={{ transform: 'translateZ(10px)' }}
                            className="text-xs font-mono text-copper-400 mb-2 preserve-3d"
                          >
                            Role: {comp.role}
                          </p>
                          <p 
                            style={{ transform: 'translateZ(8px)' }}
                            className="text-sm text-metallic-pewter leading-relaxed preserve-3d"
                          >
                            {comp.details}
                          </p>
                        </div>
                        <div 
                          style={{ transform: 'translateZ(12px)' }}
                          className="mt-4 pt-3 border-t border-titanium-800 text-[11px] font-mono text-metallic-steel preserve-3d"
                        >
                          HARDWARE-SOFTWARE TELEMETRY // INNOVATION
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* HIGH-RESOLUTION CERTIFICATE LIGHTBOX MODAL               */}
      {/* ======================================================== */}
      <AnimatePresence>
        {modalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalCert(null)}
              className="fixed inset-0 bg-graphite-950/90 backdrop-blur-xl"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-graphite-900 via-graphite-900 to-graphite-950 border border-copper-500/50 shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-4 sm:p-6 z-10 flex flex-col justify-between"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-titanium-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-copper-500/15 text-copper-400 border border-copper-500/30 flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-copper-400" />
                      <span>OFFICIALLY VERIFIED CREDENTIAL</span>
                    </span>
                    {modalCert.period && (
                      <span className="text-xs font-mono text-metallic-steel hidden sm:inline">
                        {modalCert.period}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold font-display text-white">
                    {modalCert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-copper-400">
                    {modalCert.organization}
                  </p>
                </div>

                <button
                  onClick={() => setModalCert(null)}
                  className="p-2 rounded-xl bg-graphite-800/80 hover:bg-copper-500 text-slate-300 hover:text-white border border-titanium-700 transition-colors shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Certificate High-Res Image View */}
              <div className="my-5 w-full bg-graphite-950 rounded-xl p-2 sm:p-4 border border-titanium-800 shadow-inner flex justify-center items-center">
                <div className="w-full max-w-3xl">
                  <img
                    src={modalCert.imageUrl}
                    alt={modalCert.title}
                    className="w-full h-auto object-contain rounded-lg shadow-2xl border border-titanium-700"
                  />
                </div>
              </div>

              {/* Modal Footer with Metadata & Download Options */}
              <div className="pt-4 border-t border-titanium-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <div className="text-metallic-steel text-center sm:text-left">
                  {modalCert.credentialId && (
                    <span>CREDENTIAL ID: <strong className="text-metallic-silver">{modalCert.credentialId}</strong></span>
                  )}
                  {modalCert.score && (
                    <span className="ml-3 sm:ml-4 text-amber-400">SCORE: {modalCert.score}</span>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <a
                    href={modalCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-titanium-800 hover:bg-titanium-700 text-slate-200 border border-titanium-700 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Full PDF</span>
                  </a>

                  <a
                    href={modalCert.pdfUrl}
                    download
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-copper-500 to-copper-600 hover:from-copper-400 hover:to-copper-500 text-white font-semibold shadow-md transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
