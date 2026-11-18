import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, Activity, Layers, Terminal, CheckCircle2, Box } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

/**
 * Detailed Project View Modal
 */
export const ProjectModal = ({ project, isOpen, onClose }) => {
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

  if (!isOpen || !project) return null;

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
          className="relative w-full max-w-3xl my-8 rounded-2xl bg-dark-900 border border-cyber-cyan/30 shadow-[0_0_50px_rgba(0,210,255,0.15)] overflow-hidden z-10"
        >
          {/* Top Bar / Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-dark-750 bg-dark-850/80">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs text-cyber-cyan bg-cyber-cyan/10 px-2.5 py-1 rounded border border-cyber-cyan/20">
                PROJ_{project.number}
              </span>
              <span className="font-mono text-xs text-slate-300 bg-dark-800 px-2.5 py-1 rounded border border-dark-700">
                {project.category === 'hardware' ? 'HARDWARE // EMBEDDED' : 'SOFTWARE // AI & CLOUD'}
              </span>
              <StatusBadge status={project.status} size="xs" />
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-dark-750 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Title & Overview */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-300 leading-relaxed text-base">
                {project.shortDescription}
              </p>
            </div>

            {/* 3D CAD Enclosure Model if present */}
            {project.cadImage && (
              <div className="rounded-xl p-4 bg-dark-950/80 border border-dark-700">
                <div className="flex items-center justify-between text-xs font-mono text-cyber-cyan mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <Box className="w-4 h-4" />
                    SOLIDWORKS 3D ELECTRONICS ENCLOSURE
                  </span>
                  <span className="text-[10px] text-slate-400">ANC / COMM HARDWARE</span>
                </div>
                <div className="rounded-lg overflow-hidden border border-dark-750 bg-black">
                  <img
                    src={project.cadImage}
                    alt={`${project.title} 3D CAD Enclosure`}
                    className="w-full h-auto max-h-60 object-contain mx-auto"
                  />
                </div>
              </div>
            )}

            {/* System Architecture Block */}
            <div className="rounded-xl p-5 bg-dark-950/80 border border-dark-700 font-mono text-xs">
              <div className="flex items-center gap-2 text-cyber-cyan mb-3 font-semibold tracking-wide">
                <Terminal className="w-4 h-4" />
                <span>SYSTEM ARCHITECTURE & SIGNAL PIPELINE</span>
              </div>
              <div className="p-3.5 rounded-lg bg-dark-900/90 border border-dark-750 text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                <code>{project.architecture}</code>
              </div>
            </div>

            {/* Technical Highlights */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-cyber-cyan" />
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Tags */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-cyber-cyan" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-dark-800 text-slate-200 border border-dark-700 hover:border-cyber-cyan/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Status Disclaimer */}
            <div className="rounded-lg p-4 bg-blue-950/30 border border-blue-500/20 text-xs text-blue-200/90 leading-relaxed">
              <span className="font-semibold text-cyber-cyan">Engineering Note:</span> This project is currently in the active development and research phase. Firmware architectures, hardware schematics, and simulation tests are continually iterated.
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-t border-dark-750 bg-dark-850/80 gap-3">
            <span className="text-xs font-mono text-slate-400">
              Sakthi Kailash // Engineering Portfolio
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs font-mono transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Live App</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-dark-750 hover:bg-dark-700 text-slate-200 hover:text-white text-xs font-mono border border-slate-700 hover:border-cyber-cyan/50 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-cyber-cyan text-dark-950 font-semibold text-xs hover:bg-cyber-neon transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
