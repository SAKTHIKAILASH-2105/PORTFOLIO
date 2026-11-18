import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Cpu, Radio, Radar, Box, Code2, Headphones, Network } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';
import { ProjectModal } from '../components/ProjectModal';
import { projects } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

/**
 * ELECTRO-MECHANICAL 3D ANIMATED FEATURED PROJECTS SECTION
 * Heavy-duty mechatronic equipment enclosures featuring true 3D perspective tilt,
 * internal Z-axis component depth, and specular metallic light sheen.
 */
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'hardware' | 'software'

  // Counts
  const hardwareCount = projects.filter((p) => p.category === 'hardware').length;
  const softwareCount = projects.filter((p) => p.category === 'software').length;

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  // Render project-specific engineering schematics
  const renderProjectIllustration = (type, number) => {
    switch (type) {
      case 'audio-dsp':
        return (
          <div className="w-full h-44 bg-graphite-950 flex flex-col items-center justify-center relative overflow-hidden group">
            <img
              src="/cad-models/anc-enclosure-solidworks.jpeg"
              alt="SolidWorks 3D CAD Enclosure Model"
              className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-copper-400 z-10 bg-graphite-900/90 px-2.5 py-1 rounded backdrop-blur-md border border-copper-500/40">
              <span className="flex items-center gap-1.5 font-medium">
                <Box className="w-3.5 h-3.5 text-copper-400" />
                SOLIDWORKS 3D ENCLOSURE
              </span>
              <span className="text-metallic-silver">ANC / COMM ASSEMBLY</span>
            </div>
          </div>
        );

      case 'rf-spectrum':
        return (
          <div className="w-full h-44 bg-gradient-to-b from-graphite-900 to-graphite-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blueprint-grid opacity-25" />

            {/* RF Waterfall & Radar Sweep */}
            <div className="relative w-28 h-28 rounded-full border border-cyber-cyan/30 flex items-center justify-center z-10">
              <div className="absolute inset-2 rounded-full border border-dashed border-copper-500/40 animate-gear-slow" />
              <div className="w-12 h-12 rounded-full bg-titanium-800/60 flex items-center justify-center border border-titanium-700">
                <Radio className="w-6 h-6 text-cyber-neon group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gradient-to-t from-transparent to-copper-400 origin-bottom -rotate-45" />
            </div>

            <div className="mt-1 flex items-center justify-between w-full px-4 text-[10px] font-mono text-metallic-steel z-10">
              <span>SPECTRAL_UNCERTAINTY // IQ</span>
              <span className="text-copper-400">DYNAMIC_OBSERVATION</span>
            </div>
          </div>
        );

      case 'sensor-fusion':
        return (
          <div className="w-full h-44 bg-gradient-to-b from-graphite-900 to-graphite-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blueprint-grid opacity-25" />

            {/* 6-DOF IMU & Ultrasonic Pulse */}
            <div className="relative w-36 h-20 border border-emerald-500/40 rounded-xl bg-graphite-900/80 p-3 flex flex-col justify-between z-10 shadow-sm">
              <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
                <span>ECHO_RANGE</span>
                <span>MPU6050_6DOF</span>
              </div>
              <div className="flex items-center justify-around">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <div className="h-[1px] w-20 bg-gradient-to-r from-emerald-500 via-copper-400 to-transparent" />
                <Radar className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between w-full px-4 text-[10px] font-mono text-metallic-steel z-10">
              <span>OBSTACLE_TELEMETRY</span>
              <span className="text-emerald-400">ESP32-S3_CORE</span>
            </div>
          </div>
        );

      case 'iot-telemetry':
        return (
          <div className="w-full h-44 bg-gradient-to-b from-graphite-900 to-graphite-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blueprint-grid opacity-25" />

            {/* GPS Geofence & Container Tracker */}
            <div className="relative w-32 h-24 border border-copper-500/40 rounded-xl bg-graphite-900/80 p-2 flex flex-col items-center justify-center gap-1 z-10 shadow-sm">
              <Box className="w-7 h-7 text-copper-400 mb-1 group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-2 text-[10px] font-mono text-copper-300">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-400 animate-pulse" />
                <span>GEOFENCE_LOCKED</span>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-between w-full px-4 text-[10px] font-mono text-metallic-steel z-10">
              <span>GPS_COORDINATES</span>
              <span className="text-copper-400">POWER_MANAGED_MCU</span>
            </div>
          </div>
        );

      case 'helpdesk-flow':
        return (
          <div className="w-full h-44 bg-gradient-to-b from-graphite-900 to-graphite-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blueprint-grid opacity-25" />

            {/* Helpdesk Ticket Pipeline Visualizer */}
            <div className="relative w-4/5 flex items-center justify-between z-10">
              {/* Inbound Ticket */}
              <div className="px-2.5 py-1.5 rounded-lg bg-graphite-950 border border-copper-500/40 text-[10px] font-mono text-copper-400 flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5" />
                <span>INBOUND_TKT</span>
              </div>

              {/* Pipeline Arrow */}
              <div className="flex-1 mx-2 h-[1px] bg-gradient-to-r from-copper-500 via-amber-400 to-cyber-neon relative">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon absolute -top-0.5 left-1/2 -translate-x-1/2 animate-ping" />
              </div>

              {/* NLP Triage Node */}
              <div className="px-2.5 py-1.5 rounded-lg bg-titanium-850 border border-cyber-cyan/40 text-[10px] font-mono text-cyber-neon flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5" />
                <span>NLP_TRIAGE</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between w-full px-4 text-[10px] font-mono text-metallic-steel z-10">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                SENTIMENT_SCORE: 96%
              </span>
              <span className="text-cyber-cyan">AUTO_DISPATCH // LIVE</span>
            </div>
          </div>
        );

      case 'skillpath-graph':
      default:
        return (
          <div className="w-full h-44 bg-gradient-to-b from-graphite-900 to-graphite-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blueprint-grid opacity-25" />

            {/* Knowledge Graph Nodes */}
            <div className="relative w-4/5 h-20 flex items-center justify-center z-10">
              {/* Node 1: Verilog */}
              <div className="absolute left-2 px-2.5 py-1 rounded-lg bg-graphite-950 border border-copper-500/40 text-[10px] font-mono text-copper-300">
                Verilog HDL
              </div>

              {/* Connecting line */}
              <div className="w-24 h-[1px] bg-gradient-to-r from-copper-500 to-cyber-cyan relative">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-400 absolute -top-0.5 left-1/2 -translate-x-1/2 animate-pulse" />
              </div>

              {/* Node 2: RTL & Silicon */}
              <div className="absolute right-2 px-2.5 py-1 rounded-lg bg-titanium-850 border border-cyber-cyan/40 text-[10px] font-mono text-cyber-cyan">
                RTL Synthesis
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between w-full px-4 text-[10px] font-mono text-metallic-steel z-10">
              <span>VECTOR_SIMILARITY: 0.98</span>
              <span className="text-copper-400">ADAPTIVE_TREE // AI</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="03"
          title="Featured Engineering Projects"
          subtitle="Hardware prototypes, digital signal processing concepts, IoT systems, and intelligent software platforms."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {/* All */}
          <button
            onClick={() => setActiveCategory('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-copper-500 to-copper-600 text-white font-bold shadow-[0_0_15px_rgba(234,126,59,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-white border border-titanium-750'
            }`}
          >
            <span>All Projects</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-graphite-950/60 font-bold">
              {projects.length}
            </span>
          </button>

          {/* Hardware */}
          <button
            onClick={() => setActiveCategory('hardware')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeCategory === 'hardware'
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-emerald-400 border border-titanium-750'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Hardware & Embedded Systems</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-graphite-950/60 font-bold">
              {hardwareCount}
            </span>
          </button>

          {/* Software */}
          <button
            onClick={() => setActiveCategory('software')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeCategory === 'software'
                ? 'bg-gradient-to-r from-titanium-700 to-graphite-800 text-cyber-neon border border-cyber-cyan/50 font-bold shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                : 'bg-graphite-900 text-metallic-steel hover:text-cyber-cyan border border-titanium-750'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Software & Intelligent Systems</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-graphite-950/60 font-bold">
              {softwareCount}
            </span>
          </button>
        </div>

        {/* Project Cards Grid with 3D Perspective Tilt */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                <TiltCard maxTilt={10} scale={1.02} glareColor="rgba(234, 126, 59, 0.18)">
                  <div
                    className={`h-full rounded-2xl bg-graphite-900/90 border transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden group hover:shadow-[0_16px_50px_rgba(234,126,59,0.22)] preserve-3d ${
                      project.category === 'hardware'
                        ? 'border-titanium-750 hover:border-copper-500/60'
                        : 'border-titanium-750 hover:border-cyber-cyan/50'
                    }`}
                  >
                    {/* Technical Schematic Image Placeholder (3D Popout) */}
                    <div 
                      style={{ transform: 'translateZ(18px)' }}
                      className="relative border-b border-titanium-800 preserve-3d"
                    >
                      {renderProjectIllustration(project.schematicType, project.number)}

                      {/* Top Left: Project Number & Category Badge */}
                      <div className="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-graphite-950/90 border border-titanium-700 font-mono text-xs text-copper-400 backdrop-blur-md">
                          PROJ {project.number}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono border backdrop-blur-md ${
                            project.category === 'hardware'
                              ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                              : 'bg-titanium-850/90 text-cyber-neon border-cyber-cyan/40'
                          }`}
                        >
                          {project.category === 'hardware' ? 'HARDWARE' : 'SOFTWARE'}
                        </span>
                      </div>

                      {/* Top Right: Status Badge */}
                      <div className="absolute top-3 right-3 z-20">
                        <StatusBadge status={project.status} size="xs" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col justify-between space-y-5">
                      <div>
                        <h3 
                          style={{ transform: 'translateZ(16px)' }}
                          className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-copper-400 transition-colors preserve-3d"
                        >
                          {project.title}
                        </h3>

                        <p 
                          style={{ transform: 'translateZ(10px)' }}
                          className="mt-3 text-metallic-pewter text-sm leading-relaxed preserve-3d"
                        >
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Technologies List (3D Layered) */}
                      <div 
                        style={{ transform: 'translateZ(14px)' }}
                        className="preserve-3d"
                      >
                        <span className="text-[11px] font-mono text-metallic-steel block mb-2 uppercase tracking-wider">
                          Technologies & Frameworks
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 text-xs font-mono rounded bg-graphite-950/80 border border-titanium-800 text-slate-300 group-hover:border-titanium-700 transition-colors shadow-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Actions (3D Popout) */}
                      <div 
                        style={{ transform: 'translateZ(20px)' }}
                        className="pt-4 border-t border-titanium-800 flex flex-wrap items-center justify-between gap-2 preserve-3d"
                      >
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-titanium-800 hover:bg-copper-600 text-copper-400 hover:text-white border border-copper-500/40 font-mono text-xs font-bold transition-all shadow-sm"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-500 text-emerald-400 hover:text-dark-950 border border-emerald-500/40 font-mono text-xs font-bold transition-all shadow-sm"
                              title="Open Live Deployed Web App"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Live Demo</span>
                            </a>
                          )}

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-metallic-steel hover:text-white hover:bg-titanium-800 font-mono text-xs transition-colors"
                            title="View GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                            <span className="hidden sm:inline">GitHub</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
