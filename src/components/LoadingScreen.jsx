import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Cog, Wrench } from 'lucide-react';

/**
 * High-tech initial booting sequence screen
 * Electro-Mechanical theme: Synchronized gear drive & silicon core
 */
export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('SYS_INIT // CALIBRATING HARDWARE CORES...');

  const bootStages = [
    { threshold: 20, text: 'SYNCHRONIZING GEAR DRIVES & SERVO ACTUATORS...' },
    { threshold: 45, text: 'MOUNTING VERILOG & RTL SILICON ARCHITECTURE...' },
    { threshold: 70, text: 'CALIBRATING ESP32, SENSORS & I2S BUS...' },
    { threshold: 90, text: 'VERIFYING ELECTRO-MECHANICAL SUBSYSTEMS...' },
    { threshold: 100, text: 'MECHATRONICS SYSTEM ONLINE // WELCOME' },
  ];

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }

        const currentStage = bootStages.find(
          (s) => next >= s.threshold && next < s.threshold + 25
        );
        if (currentStage) {
          setBootText(currentStage.text);
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#120205] text-white"
      >
        {/* Subtle blueprint grid pattern */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

        {/* Ambient Royal Burgundy and Champagne Glows */}
        <div className="absolute w-96 h-96 rounded-full bg-burgundy-500/20 blur-[120px] pointer-events-none" />
        <div className="absolute w-96 h-96 rounded-full bg-champagne-500/15 blur-[130px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-md px-6 text-center">
          {/* Central Electro-Mechanical Core (Meshed Gear + IC Core) */}
          <div className="relative mx-auto w-28 h-28 mb-8 flex items-center justify-center">
            {/* Outer Rotating Mechanical Gear Ring in Champagne */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-copper-500/50 animate-gear-slow" />
            <div className="absolute inset-2 rounded-full border border-burgundy-700/60" />

            {/* Inner Rotating Circuit Ring in Soft Champagne */}
            <div className="absolute inset-4 rounded-full border-2 border-dotted border-champagne-300/50 animate-gear-reverse" />

            {/* Central Silicon Microchip in Royal Burgundy */}
            <div className="relative w-14 h-14 rounded-xl bg-graphite-900 border border-copper-500/60 flex items-center justify-center shadow-[0_0_25px_rgba(216,176,125,0.4)]">
              <Cpu className="w-8 h-8 text-copper-400 animate-pulse" />
            </div>

            {/* Corner Fastener Rivets */}
            <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-champagne-200 shadow-xs" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-champagne-200 shadow-xs" />
            <span className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-champagne-200 shadow-xs" />
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-champagne-200 shadow-xs" />
          </div>

          {/* Engineer Identity */}
          <h2 className="text-xl md:text-2xl font-bold font-display tracking-wider text-white">
            SAKTHI KAILASH
          </h2>
          <p className="text-xs font-mono text-copper-400 tracking-widest mt-1 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]" />
            MECHATRONICS // ROYAL BURGUNDY EDITION
          </p>

          {/* Dual Champagne & Burgundy Progress Bar */}
          <div className="mt-8">
            <div className="h-2 w-full bg-graphite-900 rounded-full overflow-hidden border border-titanium-700/80 p-0.5 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-burgundy-500 via-copper-500 to-champagne-200 rounded-full shadow-[0_0_12px_#d8b07d]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            <div className="flex justify-between items-center mt-3 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 text-copper-300 text-[11px] truncate max-w-[280px] text-left">
                <Terminal className="w-3.5 h-3.5 shrink-0 text-copper-400" />
                {bootText}
              </span>
              <span className="text-metallic-silver font-semibold font-mono">{progress}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
