import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Maximize2, X, Wrench } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { cadModels } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

/**
 * ELECTRO-MECHANICAL 3D ANIMATED CAD SHOWCASE
 * Features authentic 3D parametric models with 3D perspective tilt,
 * blueprint coordinate watermarks, and spatial Z-axis popout.
 */
export const CadShowcase = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'fusion' | 'solidworks'

  const fusionCount = cadModels.filter((m) => m.software.toLowerCase().includes('fusion')).length;
  const solidworksCount = cadModels.filter((m) => m.software.toLowerCase().includes('solidworks')).length;

  const filteredModels = cadModels.filter((m) => {
    if (activeFilter === 'fusion') return m.software.toLowerCase().includes('fusion');
    if (activeFilter === 'solidworks') return m.software.toLowerCase().includes('solidworks');
    return true;
  });

  return (
    <section id="cad-models" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-graphite-950/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="04"
          title="CAD Modeling & Mechanical Design"
          subtitle="Parametric 3D mechanical parts, structural brackets, mounting flanges, and custom electronics enclosures designed in Autodesk Fusion 360 and SolidWorks."
        />

        {/* Software Filter Tabs (Metallic Brushed) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-copper-500 to-copper-600 text-white font-bold shadow-[0_0_15px_rgba(234,126,59,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-white border border-titanium-750'
            }`}
          >
            <span>All CAD Models</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-graphite-950/60 font-bold">
              {cadModels.length}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter('fusion')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeFilter === 'fusion'
                ? 'bg-gradient-to-r from-amber-500 to-copper-500 text-white font-bold shadow-[0_0_15px_rgba(234,126,59,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-amber-400 border border-titanium-750'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Autodesk Fusion 360</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-graphite-950/60 font-bold">
              {fusionCount}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter('solidworks')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeFilter === 'solidworks'
                ? 'bg-gradient-to-r from-titanium-700 to-graphite-800 text-white border border-copper-500/50 font-bold shadow-[0_0_15px_rgba(234,126,59,0.3)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-rose-400 border border-titanium-750'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>SolidWorks Design</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-graphite-950/60 font-bold">
              {solidworksCount}
            </span>
          </button>
        </div>

        {/* CAD Gallery Grid with 3D Perspective Tilt */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredModels.map((model, idx) => {
              const isSolidworks = model.software.toLowerCase().includes('solidworks');

              return (
                <motion.div
                  key={model.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <TiltCard maxTilt={12} scale={1.03} glareColor="rgba(234, 126, 59, 0.16)">
                    <div
                      onClick={() => setSelectedModel(model)}
                      className="h-full rounded-2xl bg-graphite-900/90 border border-titanium-750 hover:border-copper-500/60 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.55)] flex flex-col justify-between overflow-hidden cursor-pointer group hover:shadow-[0_14px_45px_rgba(234, 126, 59,0.22)] relative preserve-3d"
                    >
                      {/* Subtle Blueprint Coordinate Mark */}
                      <div className="absolute top-1 right-2 text-[8px] font-mono text-titanium-500 pointer-events-none z-20">
                        DWG_0{idx + 1}
                      </div>

                      <div>
                        {/* CAD Preview Image Frame (3D Popout) */}
                        <div 
                          style={{ transform: 'translateZ(20px)' }}
                          className="relative aspect-[16/10] bg-graphite-950 overflow-hidden border-b border-titanium-800 preserve-3d"
                        >
                          <img
                            src={model.image}
                            alt={model.title}
                            className="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />

                          {/* Vignette overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-transparent to-transparent pointer-events-none" />

                          {/* Top Badges */}
                          <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap gap-1.5">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-mono border backdrop-blur-md ${
                                isSolidworks
                                  ? 'bg-titanium-900/90 text-rose-300 border-rose-500/40'
                                  : 'bg-copper-950/85 text-copper-300 border-copper-500/40'
                              }`}
                            >
                              {model.software}
                            </span>
                          </div>

                          {/* Click to Expand Action Pill */}
                          <div className="absolute bottom-2.5 right-2.5 z-10 px-2 py-1 rounded bg-graphite-950/90 border border-titanium-700 text-slate-300 group-hover:text-copper-400 group-hover:border-copper-500/50 text-[10px] font-mono flex items-center gap-1 transition-colors">
                            <Maximize2 className="w-3 h-3" />
                            <span>Inspect Blueprint</span>
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-5 space-y-3">
                          <div>
                            <span 
                              style={{ transform: 'translateZ(10px)' }}
                              className="text-[10px] font-mono text-copper-400 block mb-1 preserve-3d"
                            >
                              {model.category.toUpperCase()}
                            </span>
                            <h4 
                              style={{ transform: 'translateZ(16px)' }}
                              className="font-display font-bold text-lg text-white group-hover:text-copper-400 transition-colors leading-snug preserve-3d"
                            >
                              {model.title}
                            </h4>
                          </div>

                          <p 
                            style={{ transform: 'translateZ(8px)' }}
                            className="text-xs text-metallic-pewter leading-relaxed line-clamp-3 preserve-3d"
                          >
                            {model.description}
                          </p>

                          {/* Views list */}
                          <div 
                            style={{ transform: 'translateZ(12px)' }}
                            className="pt-2 preserve-3d"
                          >
                            <span className="text-[10px] font-mono text-metallic-steel block mb-1 uppercase">
                              Projections / Views:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {model.views.map((v, vIdx) => (
                                <span
                                  key={vIdx}
                                  className="px-2 py-0.5 rounded bg-graphite-950 border border-titanium-800 text-[10px] font-mono text-slate-300"
                                >
                                  {v}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer Tags */}
                      <div 
                        style={{ transform: 'translateZ(10px)' }}
                        className="p-5 pt-0 mt-3 border-t border-titanium-800/80 flex flex-wrap gap-1.5 pt-3 preserve-3d"
                      >
                        {model.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono text-metallic-steel bg-titanium-850 px-2 py-0.5 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* High-Resolution CAD Blueprint Lightbox Modal */}
      <AnimatePresence>
        {selectedModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModel(null)}
              className="fixed inset-0 bg-graphite-950/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl my-8 rounded-2xl bg-graphite-900 border border-titanium-700 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-titanium-800 bg-graphite-850/90">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs text-copper-400 bg-copper-500/10 px-2.5 py-0.5 rounded border border-copper-500/30">
                    CAD_BLUEPRINT // {selectedModel.id.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-metallic-silver bg-titanium-800 px-2.5 py-0.5 rounded border border-titanium-700">
                    {selectedModel.software}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedModel(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-titanium-800 transition-colors"
                  aria-label="Close CAD modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
                {/* Full Resolution Image */}
                <div className="relative rounded-xl overflow-hidden border border-titanium-750 bg-black shadow-inner">
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.title}
                    className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                  />
                </div>

                {/* Technical Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <span className="text-xs font-mono text-copper-400 block uppercase">
                      {selectedModel.category}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white">
                      {selectedModel.title}
                    </h3>
                    <p className="text-sm text-metallic-pewter leading-relaxed pt-2">
                      {selectedModel.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-graphite-950/80 border border-titanium-800 space-y-3 font-mono text-xs">
                    <div>
                      <span className="text-metallic-steel block mb-1">MODELING SOFTWARE:</span>
                      <span className="text-white font-semibold">{selectedModel.software}</span>
                    </div>
                    <div>
                      <span className="text-metallic-steel block mb-1">PROJECTION SCHEME:</span>
                      <span className="text-copper-400">Multi-View (Front, Top, Side, Trimetric)</span>
                    </div>
                    <div>
                      <span className="text-metallic-steel block mb-1">DISCIPLINE:</span>
                      <span className="text-emerald-400">Mechatronics CAD & Prototyping</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-t border-titanium-800 bg-graphite-850/90 text-xs font-mono">
                <span className="text-metallic-steel truncate max-w-[180px] sm:max-w-none">
                  Sakthi Kailash // Autodesk Fusion 360 & SolidWorks Portfolio
                </span>
                <button
                  onClick={() => setSelectedModel(null)}
                  className="px-4 py-2 rounded-lg bg-copper-500 text-white font-semibold hover:bg-copper-400 transition-colors shadow-sm shrink-0"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
