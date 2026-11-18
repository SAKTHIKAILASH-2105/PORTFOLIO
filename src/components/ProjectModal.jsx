import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, Activity, Terminal, CheckCircle2, Box } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

/**
 * ELECTRO-MECHANICAL DETAILED PROJECT MODAL
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
          className="fixed inset-0 bg-graphite-950/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl my-8 rounded-2xl bg-graphite-900 border border-titanium-700 shadow-[0_0_60px_rgba(0,0,0,0.85)] overflow-hidden z-10"
        >
          {/* Top Bar / Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-titanium-800 bg-graphite-850/90">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs text-copper-400 bg-copper-500/10 px-2.5 py-1 rounded border border-copper-500/30">
                PROJ_{project.number}
              </span>
              <span className="font-mono text-xs text-metallic-silver bg-titanium-800 px-2.5 py-1 rounded border border-titanium-700">
                {project.category === 'hardware' ? 'HARDWARE // EMBEDDED' : 'SOFTWARE // AI & CLOUD'}
              </span>
              <StatusBadge status={project.status} size="xs" />
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-titanium-800 transition-colors"
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
              <p className="mt-3 text-metallic-pewter leading-relaxed text-base">
                {project.shortDescription}
              </p>
            </div>

            {/* 3D CAD Enclosure Model if present */}
            {project.cadImage && (
              <div className="rounded-xl p-4 bg-graphite-950/80 border border-titanium-800">
                <div className="flex items-center justify-between text-xs font-mono text-copper-400 mb-2.5">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Box className="w-4 h-4" />
                    SOLIDWORKS 3D ELECTRONICS ENCLOSURE
                  </span>
                  <span className="text-[10px] text-metallic-steel">ANC / COMM HARDWARE</span>
                </div>
                <div className="rounded-lg overflow-hidden border border-titanium-750 bg-black">
                  <img
                    src={project.cadImage}
                    alt={`${project.title} 3D CAD Enclosure`}
                    className="w-full h-auto max-h-60 object-contain mx-auto"
                  />
                </div>
              </div>
            )}

            {/* System Architecture Block */}
            <div className="rounded-xl p-5 bg-graphite-950/80 border border-titanium-800 font-mono text-xs">
              <div className="flex items-center gap-2 text-copper-400 mb-3 font-semibold tracking-wide">
                <Terminal className="w-4 h-4" />
                <span>SYSTEM ARCHITECTURE & SIGNAL PIPELINE</span>
              </div>
              <div className="p-3.5 rounded-lg bg-graphite-900 border border-titanium-800 text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                <code>{project.architecture}</code>
              </div>
            </div>

            {/* Technical Highlights */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-metallic-steel font-mono flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-copper-400" />
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-metallic-pewter leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Tags */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-metallic-steel font-mono flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-copper-400" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-titanium-800 text-slate-200 border border-titanium-700 hover:border-copper-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Status Disclaimer */}
            <div className="rounded-lg p-4 bg-titanium-850/60 border border-copper-500/30 text-xs text-metallic-silver leading-relaxed">
              <span className="font-semibold text-copper-400">Engineering Note:</span> This project is currently in the active development and research phase. Firmware architectures, hardware schematics, and simulation tests are continually iterated.
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-t border-titanium-800 bg-graphite-850/90 gap-3">
            <span className="text-xs font-mono text-metallic-steel">
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
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-titanium-800 hover:bg-titanium-700 text-slate-200 hover:text-white text-xs font-mono border border-titanium-700 hover:border-copper-500/50 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-copper-500 text-white font-semibold text-xs hover:bg-copper-400 transition-colors shadow-sm"
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
