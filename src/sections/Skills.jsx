import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Code, 
  CpuIcon, 
  CircuitBoard, 
  Wrench, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Zap, 
  Activity, 
  ChevronDown, 
  Check, 
  Layers, 
  Radio, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';
import { skillCategories } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

/**
 * HIGH-IMPACT INTERACTIVE 3D ANIMATED TECHNICAL SKILLS SECTION
 * Features:
 * - Fluid sliding indicator pills on both Status and Category filter tabs
 * - Dynamic AnimatePresence popLayout transitions on card grid
 * - Interactive click-to-expand skill details with animated proficiency gauges
 * - "Initiate Subsystem Diagnostic Scan" wave pulse animation
 * - 3D spatial perspective tilt with specular copper sheen
 */
export const Skills = () => {
  // Status Filter: 'all' | 'experienced' | 'learning'
  const [statusFilter, setStatusFilter] = useState('all');

  // Category Filter: 'all' | 'Electronics' | 'Programming' | 'VLSI' | 'Embedded Systems' | 'Tools & CAD'
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Selected / Expanded Skill on click
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Diagnostic scan animation state
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);

  // Category icon helper
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Electronics': return <CircuitBoard className="w-5 h-5 text-copper-400" />;
      case 'Programming': return <Code className="w-5 h-5 text-cyber-cyan" />;
      case 'VLSI': return <Cpu className="w-5 h-5 text-copper-300" />;
      case 'Embedded Systems': return <CpuIcon className="w-5 h-5 text-emerald-400" />;
      case 'Tools & CAD': return <Wrench className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-copper-400" />;
    }
  };

  // Skill proficiency percentage mapping for animated progress bars
  const getSkillProficiency = (level, status) => {
    if (status === 'learning') return { percent: 68, label: 'In-Progress (68%)' };
    switch (level?.toLowerCase()) {
      case 'core': return { percent: 94, label: 'Core Mastery (94%)' };
      case 'proficient': return { percent: 90, label: 'Proficient (90%)' };
      case 'cad & cam': return { percent: 92, label: 'Advanced Modeling (92%)' };
      case '3d cad': return { percent: 92, label: 'Parametric Design (92%)' };
      case 'practical': return { percent: 86, label: 'Hands-on Applied (86%)' };
      case 'applied': return { percent: 85, label: 'Applied Engineering (85%)' };
      case 'intermediate': return { percent: 80, label: 'Intermediate (80%)' };
      case 'familiar': return { percent: 75, label: 'Functional Working (75%)' };
      default: return { percent: 85, label: 'Proficient (85%)' };
    }
  };

  // Practical context description for expanded skill view
  const getSkillContext = (skillName) => {
    const contexts = {
      'Digital Electronics': 'Combinational/sequential circuits, logic gate optimization, flip-flops, multiplexers, and Boolean timing analysis.',
      'Basic Circuit Design': 'Schematic capture, Ohm/Kirchhoff node analysis, passive RLC filtering, and PCB breadboard prototyping.',
      'Microcontrollers': 'GPIO control, interrupt handling, timer registers, PWM peripheral driving, and ADC sensor reading.',
      'Sensors and Interfacing': 'I2C, SPI, and UART bus communications, analog signal conditioning, and noise mitigation.',
      'C Programming': 'Low-level embedded firmware, pointers, bitwise register manipulation, and memory-constrained execution.',
      'Python Basics': 'Scripting automated testbenches, NumPy scientific signal analysis, and raw serial telemetry plotting.',
      'HTML': 'Structuring clean, accessible web components and interface layouts for modern engineering dashboards.',
      'CSS': 'Responsive UI styling, hardware-accelerated animations, glassmorphism, and industrial UI themes.',
      'JavaScript': 'Client-side event streaming, dynamic DOM state management, and asynchronous telemetry fetching.',
      'Digital Logic Design': 'Synchronous state machines (FSM), Moore/Mealy models, timing closure, and ALU datapath architecture.',
      'Verilog HDL': 'Synthesizable RTL description, behavioral modeling, non-blocking assignments, and testbench verification.',
      'RTL Design': 'Register-Transfer Level pipelining, synchronous clock domain crossing, and hardware resource minimization.',
      'ESP32 Architecture': 'Dual Tensilica Xtensa 240MHz 32-bit cores, FreeRTOS multi-threading, and hardware peripherals.',
      'I2S Audio Protocol': 'Inter-IC Sound 24/32-bit digital audio streaming, DMA buffering, and real-time acoustic DSP filtering.',
      'Sensor Integration': 'MPU-6050 6-DOF IMU accelerometer/gyroscope fusion, ultrasonic range echo, and GPS geofence telemetry.',
      'Fusion 360': 'Parametric solid modeling, generative mechanical components, mechanical assemblies, and orthographic drawings.',
      'SolidWorks': 'Engineering part modeling, 3D structural brackets, kinematic mates, sheet metal, and enclosure tolerance fits.',
      'MATLAB': 'Signal processing toolbox, DSP filter design, mathematical system simulations, and algorithmic modeling.'
    };
    return contexts[skillName] || 'Applied across mechatronics hardware systems, digital logic architectures, and embedded firmware.';
  };

  // Trigger diagnostic scan animation
  const handleTriggerScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsScanning(false), 600);
          return 100;
        }
        return prev + 10;
      });
    }, 70);
  };

  // Filter categories according to selection
  const filteredCategories = skillCategories.filter((cat) => {
    if (categoryFilter !== 'all' && cat.category !== categoryFilter) return false;
    return true;
  });

  // Calculate totals
  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const experiencedCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.filter((s) => s.status === 'experienced').length,
    0
  );
  const learningCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.filter((s) => s.status === 'learning').length,
    0
  );

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-graphite-950/50 overflow-hidden">
      {/* Background Circuit Grid Accent */}
      <div className="absolute inset-0 bg-blueprint-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          index="02"
          title="Technical Competencies"
          subtitle="Hardware architecture, silicon logic design, firmware engineering, and computational toolsets."
        />

        {/* ======================================================== */}
        {/* INTERACTIVE CONTROLS & DIAGNOSTIC SCAN BAR               */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Status Filter Tabs (All / Core / Learning) */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-graphite-900/90 border border-titanium-700/80 shadow-inner backdrop-blur-md">
            {/* All Competencies */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setStatusFilter('all')}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 flex items-center gap-2 ${
                statusFilter === 'all' ? 'text-white font-bold' : 'text-metallic-steel hover:text-white'
              }`}
            >
              {statusFilter === 'all' && (
                <motion.div
                  layoutId="activeSkillStatus"
                  className="absolute inset-0 bg-gradient-to-r from-copper-500 to-copper-600 rounded-xl shadow-[0_0_18px_rgba(234,126,59,0.45)] border border-copper-400/50"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10">All Competencies</span>
              <span className={`relative z-10 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                statusFilter === 'all' ? 'bg-black/30 text-cream-200' : 'bg-graphite-950 text-metallic-steel'
              }`}>
                {totalSkillsCount}
              </span>
            </motion.button>

            {/* Experienced / Core */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setStatusFilter('experienced')}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 flex items-center gap-2 ${
                statusFilter === 'experienced' ? 'text-white font-bold' : 'text-metallic-steel hover:text-white'
              }`}
            >
              {statusFilter === 'experienced' && (
                <motion.div
                  layoutId="activeSkillStatus"
                  className="absolute inset-0 bg-gradient-to-r from-charcoal-700 to-copper-700 rounded-xl shadow-[0_0_18px_rgba(234,126,59,0.4)] border border-copper-500/50"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <CheckCircle2 className="w-3.5 h-3.5 relative z-10 text-emerald-400" />
              <span className="relative z-10">Experienced / Core</span>
              <span className={`relative z-10 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                statusFilter === 'experienced' ? 'bg-black/30 text-cream-200' : 'bg-graphite-950 text-metallic-steel'
              }`}>
                {experiencedCount}
              </span>
            </motion.button>

            {/* Currently Learning */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setStatusFilter('learning')}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 flex items-center gap-2 ${
                statusFilter === 'learning' ? 'text-white font-bold' : 'text-metallic-steel hover:text-white'
              }`}
            >
              {statusFilter === 'learning' && (
                <motion.div
                  layoutId="activeSkillStatus"
                  className="absolute inset-0 bg-gradient-to-r from-copper-500 via-amber-500 to-copper-600 rounded-xl shadow-[0_0_18px_rgba(234,126,59,0.45)] border border-copper-400/50"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <Clock className="w-3.5 h-3.5 relative z-10 text-amber-300" />
              <span className="relative z-10">Currently Learning</span>
              <span className={`relative z-10 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                statusFilter === 'learning' ? 'bg-black/30 text-cream-200' : 'bg-graphite-950 text-metallic-steel'
              }`}>
                {learningCount}
              </span>
            </motion.button>
          </div>

          {/* Diagnostic System Scan Action Button */}
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleTriggerScan}
            disabled={isScanning}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-copper-950 via-graphite-900 to-copper-950 border border-copper-500/50 text-copper-300 hover:text-white hover:border-copper-400 text-xs font-mono font-semibold shadow-[0_0_15px_rgba(234,126,59,0.2)] transition-all cursor-pointer group"
          >
            <Activity className={`w-4 h-4 text-copper-400 group-hover:text-cyber-neon transition-colors ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? `SCANNING LOGIC: ${scanProgress}%` : 'RUN DIAGNOSTIC SCAN'}</span>
            <Sparkles className="w-3.5 h-3.5 text-cream-300" />
          </motion.button>
        </div>

        {/* ======================================================== */}
        {/* SECONDARY CATEGORY PILL SELECTOR (Smooth Switcher)       */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCategoryFilter('all')}
            className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              categoryFilter === 'all'
                ? 'text-cream-100 font-semibold bg-copper-500/20 border border-copper-500/60 shadow-[0_0_12px_rgba(234,126,59,0.3)]'
                : 'text-metallic-steel bg-graphite-900/60 hover:text-slate-200 border border-titanium-800'
            }`}
          >
            All Disciplines
          </motion.button>

          {skillCategories.map((cat) => {
            const isCatActive = categoryFilter === cat.category;
            return (
              <motion.button
                key={cat.category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategoryFilter(cat.category)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isCatActive
                    ? 'text-cream-100 font-semibold bg-copper-500/20 border border-copper-500/60 shadow-[0_0_12px_rgba(234,126,59,0.3)]'
                    : 'text-metallic-steel bg-graphite-900/60 hover:text-slate-200 border border-titanium-800'
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Scanning Beam Overlay Banner */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-3 rounded-xl bg-copper-950/60 border border-copper-500/60 text-xs font-mono text-center text-cream-200 shadow-[0_0_25px_rgba(234,126,59,0.3)] overflow-hidden flex items-center justify-between px-6"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>DIAGNOSTIC WAVE: TESTING SILICON GATES & FIRMWARE ROUTINES...</span>
              </span>
              <span className="text-copper-400 font-bold">{scanProgress}% COMPLETE</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* CATEGORY CARDS GRID WITH 3D PERSPECTIVE ANIMATION       */}
        {/* ======================================================== */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, catIdx) => {
              const skillsInStatus = cat.skills.filter((s) => {
                if (statusFilter === 'all') return true;
                return s.status === statusFilter;
              });

              if (skillsInStatus.length === 0) return null;

              return (
                <motion.div
                  key={cat.category}
                  layout
                  initial={{ opacity: 0, scale: 0.88, y: 35, rotateX: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -25, rotateX: -8 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26, delay: catIdx * 0.05 }}
                  className="h-full"
                >
                  <TiltCard maxTilt={10} scale={1.02} glareColor="rgba(234, 126, 59, 0.2)">
                    <div className="h-full rounded-2xl p-6 bg-gradient-to-b from-graphite-900/95 via-graphite-900/90 to-graphite-950/98 border border-titanium-750 hover:border-copper-500/60 transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.65)] flex flex-col justify-between group relative overflow-hidden preserve-3d">
                      {/* Top Corner Metallic Rivets */}
                      <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-copper-400/80 shadow-xs" />
                      <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-copper-400/80 shadow-xs" />

                      {/* Scanning Line Effect when triggerScan is active */}
                      {isScanning && (
                        <motion.div
                          initial={{ top: '-10%' }}
                          animate={{ top: '110%' }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-copper-400 to-transparent pointer-events-none z-20 shadow-[0_0_12px_#ea7e3b]"
                        />
                      )}

                      <div>
                        {/* Category Header (3D Popout) */}
                        <div 
                          style={{ transform: 'translateZ(18px)' }}
                          className="flex items-center justify-between mb-3 preserve-3d"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-titanium-800 border border-titanium-700 group-hover:border-copper-500/60 transition-colors shadow-inner">
                              {getCategoryIcon(cat.category)}
                            </div>
                            <h3 className="font-display font-bold text-lg text-white">
                              {cat.category}
                            </h3>
                          </div>
                          <span className="font-mono text-[10px] text-copper-400 bg-graphite-950 px-2 py-0.5 rounded border border-titanium-800">
                            {skillsInStatus.length} SKILLS
                          </span>
                        </div>

                        <p 
                          style={{ transform: 'translateZ(10px)' }}
                          className="text-xs text-metallic-steel mb-5 leading-relaxed preserve-3d"
                        >
                          {cat.description}
                        </p>

                        {/* Interactive Clickable Skills List (3D Layered Rows) */}
                        <div 
                          style={{ transform: 'translateZ(14px)' }}
                          className="space-y-2.5 preserve-3d"
                        >
                          {skillsInStatus.map((skill, sIdx) => {
                            const isLearning = skill.status === 'learning';
                            const isSelected = selectedSkill === skill.name;
                            const prof = getSkillProficiency(skill.level, skill.status);

                            return (
                              <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 + sIdx * 0.03 }}
                                onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`rounded-xl border transition-all cursor-pointer overflow-hidden ${
                                  isSelected
                                    ? 'bg-gradient-to-b from-graphite-900 via-graphite-900 to-copper-950/40 border-copper-500/70 shadow-[0_0_20px_rgba(234,126,59,0.3)] ring-1 ring-copper-500/50'
                                    : 'bg-graphite-950/75 border-titanium-800 hover:border-titanium-650 hover:bg-graphite-900/50'
                                }`}
                              >
                                {/* Main Row */}
                                <div className="p-3 flex items-center justify-between">
                                  <div className="flex items-center gap-2.5">
                                    <span
                                      className={`w-2 h-2 rounded-full transition-transform ${
                                        isLearning 
                                          ? 'bg-copper-400 animate-pulse shadow-[0_0_6px_#ea7e3b]' 
                                          : 'bg-copper-300 shadow-[0_0_6px_#fed7aa]'
                                      } ${isSelected ? 'scale-125' : ''}`}
                                    />
                                    <span className={`text-sm font-medium transition-colors ${
                                      isSelected ? 'text-white font-bold' : 'text-slate-200'
                                    }`}>
                                      {skill.name}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <StatusBadge
                                      status={isLearning ? 'Currently Learning' : 'Core'}
                                      size="xs"
                                    />
                                    <ChevronDown
                                      className={`w-3.5 h-3.5 text-copper-400 transition-transform duration-300 ${
                                        isSelected ? 'rotate-180 text-white' : ''
                                      }`}
                                    />
                                  </div>
                                </div>

                                {/* Expanded Animated Skill Inspector Drawer */}
                                <AnimatePresence>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                                      className="px-3.5 pb-3.5 pt-1 border-t border-copper-500/20 bg-black/40 space-y-2.5 text-xs font-mono"
                                    >
                                      {/* Proficiency Progress Bar */}
                                      <div>
                                        <div className="flex justify-between items-center text-[11px] mb-1">
                                          <span className="text-metallic-steel uppercase tracking-wider">
                                            Proficiency Level:
                                          </span>
                                          <span className="text-copper-400 font-bold">
                                            {prof.label}
                                          </span>
                                        </div>
                                        <div className="w-full h-1.5 rounded-full bg-graphite-950 overflow-hidden border border-titanium-800">
                                          <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${prof.percent}%` }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                            className="h-full bg-gradient-to-r from-copper-500 via-amber-400 to-cream-200 shadow-[0_0_8px_#ea7e3b]"
                                          />
                                        </div>
                                      </div>

                                      {/* Engineering Application Context */}
                                      <p className="text-[11px] text-metallic-pewter leading-relaxed font-sans pt-1">
                                        {getSkillContext(skill.name)}
                                      </p>

                                      {/* Micro Telemetry Footer */}
                                      <div className="pt-2 border-t border-titanium-800/80 flex items-center justify-between text-[10px] text-metallic-steel">
                                        <span className="text-copper-400 flex items-center gap-1 font-semibold">
                                          <Check className="w-3 h-3 text-emerald-400" />
                                          ACTIVE MODULE
                                        </span>
                                        <span className="text-metallic-silver">CLICK TO COLLAPSE</span>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Subtle Bottom Trace Bar */}
                      <div 
                        style={{ transform: 'translateZ(12px)' }}
                        className="mt-6 pt-3 border-t border-titanium-800/80 flex items-center justify-between text-[10px] font-mono text-metallic-steel preserve-3d"
                      >
                        <span className="flex items-center gap-1.5">
                          <Radio className="w-3 h-3 text-copper-400" />
                          <span>SUBSYSTEM // 0{catIdx + 1}</span>
                        </span>
                        <span className="text-copper-400 font-medium">VERIFIED</span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
