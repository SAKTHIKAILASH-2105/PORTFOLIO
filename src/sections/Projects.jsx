import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal, ArrowUpRight, Cpu, Radio, Radar, Box, Activity, Code2, Layers, GitBranch, Headphones, Network } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';
import { ProjectModal } from '../components/ProjectModal';
import { projects } from '../data/portfolioData';

/**
 * Featured Engineering Projects Section
 * Categorized into Hardware & Embedded Systems and Software & Intelligent Systems
 */
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'hardware' | 'software'

  // Counts
  const hardwareCount = projects.filter(p => p.category === 'hardware').length;
  const softwareCount = projects.filter(p => p.category === 'software').length;

  const filteredProjects = projects.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  // Render project-specific engineering schematics
  const renderProjectIllustration = (type, number) => {
    switch (type) {
      case 'audio-dsp':
        return (
          <div className="w-full h-44 bg-dark-950 flex flex-col items-center justify-center relative overflow-hidden group">
            <img
              src="/cad-models/anc-enclosure-solidworks.jpeg"
              alt="SolidWorks 3D CAD Enclosure Model"
              className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-cyber-neon z-10 bg-dark-950/85 px-2.5 py-1 rounded backdrop-blur-md border border-cyber-cyan/30">
              <span className="flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5 text-cyber-cyan" />
                SOLIDWORKS 3D ENCLOSURE
              </span>
              <span>ANC / COMM ASSEMBLY</span>
            </div>
          </div>
        );

      case 'rf-spectrum':
        return (
          <div className="w-full h-44 bg-gradient-to-b from-dark-900 to-dark-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            {/* RF Waterfall & Radar Sweep */}
            <div className="relative w-28 h-28 rounded-full border border-blue-500/30 flex items-center justify-center z-10">
              <div className="absolute inset-2 rounded-full border border-dashed border-cyber-cyan/30 animate-spin [animation-duration:12s]" />
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Radio className="w-6 h-6 text-cyber-cyan group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gradient-to-t from-transparent to-cyber-neon origin-bottom -rotate-45" />
            </div>

            <div className="mt-1 flex items-center justify-between w-full px-4 text-[10px] font-mono text-blue-400/80 z-10">
              <span>SPECTRAL_UNCERTAINTY // IQ</span>
              <span>DYNAMIC_OBSERVATION</span>
            </div>
          </div>
        );

      case 'sensor-fusion':
        return (
          <div className="w-full h-44 bg-gradient-to-b from-dark-900 to-dark-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            {/* 6-DOF IMU & Ultrasonic Pulse */}
            <div className="relative w-36 h-20 border border-emerald-500/30 rounded-xl bg-dark-900/60 p-3 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
                <span>ECHO_RANGE</span>
                <span>MPU6050_6DOF</span>
              </div>
              <div className="flex items-center justify-around">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <div className="h-[1px] w-20 bg-gradient-to-r from-emerald-500 to-transparent" />
                <Radar className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between w-full px-4 text-[10px] font-mono text-emerald-400/80 z-10">
              <span>OBSTACLE_TELEMETRY</span>
              <span>ESP32-S3_CORE</span>
            </div>
          </div>
        );

      case 'iot-telemetry':
        return (
          <div className="w-full h-44 bg-gradient-to-b from-dark-900 to-dark-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            {/* GPS Geofence & Container Tracker */}
            <div className="relative w-32 h-24 border border-purple-500/30 rounded-xl bg-dark-900/60 p-2 flex flex-col items-center justify-center gap-1 z-10">
              <Box className="w-7 h-7 text-purple-400 mb-1 group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-2 text-[10px] font-mono text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>GEOFENCE_LOCKED</span>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-between w-full px-4 text-[10px] font-mono text-purple-400/80 z-10">
              <span>GPS_COORDINATES</span>
              <span>POWER_MANAGED_MCU</span>
            </div>
          </div>
        );

      case 'helpdesk-flow':
        return (
          <div className="w-full h-44 bg-gradient-to-b from-dark-900 to-dark-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            {/* Helpdesk Ticket Pipeline Visualizer */}
            <div className="relative w-4/5 flex items-center justify-between z-10">
              {/* Inbound Ticket */}
              <div className="px-2.5 py-1.5 rounded-lg bg-dark-850 border border-cyber-cyan/40 text-[10px] font-mono text-cyber-cyan flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5" />
                <span>INBOUND_TKT</span>
              </div>

              {/* Pipeline Arrow */}
              <div className="flex-1 mx-2 h-[1px] bg-gradient-to-r from-cyber-cyan via-blue-500 to-cyber-neon relative">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon absolute -top-0.5 left-1/2 -translate-x-1/2 animate-ping" />
              </div>

              {/* NLP Triage Node */}
              <div className="px-2.5 py-1.5 rounded-lg bg-blue-950/80 border border-blue-500/40 text-[10px] font-mono text-blue-300 flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5" />
                <span>NLP_TRIAGE</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between w-full px-4 text-[10px] font-mono text-cyber-cyan/80 z-10">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                SENTIMENT_SCORE: 96%
              </span>
              <span>AUTO_DISPATCH // LIVE</span>
            </div>
          </div>
        );

      case 'skillpath-graph':
      default:
        return (
          <div className="w-full h-44 bg-gradient-to-b from-dark-900 to-dark-950 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            {/* Knowledge Graph Nodes */}
            <div className="relative w-4/5 h-20 flex items-center justify-center z-10">
              {/* Node 1: Verilog */}
              <div className="absolute left-2 px-2 py-1 rounded bg-dark-850 border border-purple-500/40 text-[10px] font-mono text-purple-300">
                Verilog HDL
              </div>

              {/* Connecting line */}
              <div className="w-24 h-[1px] bg-gradient-to-r from-purple-500 to-cyber-cyan relative">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute -top-0.5 left-1/2 -translate-x-1/2 animate-pulse" />
              </div>

              {/* Node 2: RTL & Silicon */}
              <div className="absolute right-2 px-2 py-1 rounded bg-dark-850 border border-cyber-cyan/40 text-[10px] font-mono text-cyber-cyan">
                RTL Synthesis
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between w-full px-4 text-[10px] font-mono text-purple-400/80 z-10">
              <span>VECTOR_SIMILARITY: 0.98</span>
              <span>ADAPTIVE_TREE // AI</span>
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
                ? 'bg-cyber-cyan text-dark-950 font-bold shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-dark-750'
            }`}
          >
            <span>All Projects</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-dark-950/40 font-bold">
              {projects.length}
            </span>
          </button>

          {/* Hardware */}
          <button
            onClick={() => setActiveCategory('hardware')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeCategory === 'hardware'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-dark-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-emerald-400 border border-dark-750'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Hardware & Embedded Systems</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-dark-950/40 font-bold">
              {hardwareCount}
            </span>
          </button>

          {/* Software */}
          <button
            onClick={() => setActiveCategory('software')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              activeCategory === 'software'
                ? 'bg-gradient-to-r from-blue-500 to-cyber-neon text-dark-950 font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                : 'bg-dark-900 text-slate-400 hover:text-cyber-cyan border border-dark-750'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Software & Intelligent Systems</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-dark-950/40 font-bold">
              {softwareCount}
            </span>
          </button>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl bg-dark-900/90 border transition-all duration-300 shadow-cyber-card flex flex-col overflow-hidden group hover:shadow-[0_12px_40px_rgba(0,210,255,0.12)] ${
                  project.category === 'hardware'
                    ? 'border-dark-750 hover:border-emerald-500/40'
                    : 'border-dark-750 hover:border-cyber-cyan/40'
                }`}
              >
                {/* Technical Schematic Image Placeholder */}
                <div className="relative border-b border-dark-750">
                  {renderProjectIllustration(project.schematicType, project.number)}

                  {/* Top Left: Project Number & Category Badge */}
                  <div className="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-dark-950/85 border border-dark-700 font-mono text-xs text-cyber-cyan backdrop-blur-md">
                      PROJ {project.number}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border backdrop-blur-md ${
                      project.category === 'hardware'
                        ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                        : 'bg-blue-950/80 text-cyber-neon border-blue-500/40'
                    }`}>
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
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-cyber-neon transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technologies List */}
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                      Technologies & Frameworks
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-dark-950/80 border border-dark-800 text-slate-300 group-hover:border-dark-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-dark-800 flex flex-wrap items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyber-cyan/15 hover:bg-cyber-cyan text-cyber-cyan hover:text-dark-950 border border-cyber-cyan/40 font-mono text-xs font-bold transition-all shadow-sm"
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
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-dark-950 border border-emerald-500/40 font-mono text-xs font-bold transition-all shadow-sm"
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
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-dark-800 font-mono text-xs transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
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
