import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal } from 'lucide-react';

/**
 * High-tech initial booting sequence screen
 */
export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('SYS_INIT // CHECKING HARDWARE CORES...');

  const bootStages = [
    { threshold: 20, text: 'LOADING FIRMWARE ARCHITECTURE...' },
    { threshold: 45, text: 'MOUNTING VERILOG & RTL MODULES...' },
    { threshold: 70, text: 'CALIBRATING ESP32 & I2S BUS...' },
    { threshold: 90, text: 'OPTIMIZING NEURAL PIPELINE...' },
    { threshold: 100, text: 'SYSTEM READY // WELCOME' }
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
          }, 400);
          return 100;
        }

        const currentStage = bootStages.find(s => next >= s.threshold && next < s.threshold + 25);
        if (currentStage) {
          setBootText(currentStage.text);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-dark-950 text-white"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 w-full max-w-md px-6 text-center">
          {/* Central Animated Silicon Core Logo */}
          <div className="relative mx-auto w-24 h-24 mb-8 flex items-center justify-center">
            {/* Outer Rotating Cyber Hex / Rings */}
            <div className="absolute inset-0 border border-cyber-cyan/30 rounded-2xl animate-spin [animation-duration:8s]" />
            <div className="absolute inset-2 border border-cyber-blue/40 rounded-xl animate-spin [animation-direction:reverse] [animation-duration:6s]" />
            <div className="absolute inset-0 bg-cyber-cyan/10 rounded-2xl blur-xl animate-pulse" />

            <div className="relative w-14 h-14 rounded-lg bg-dark-900 border border-cyber-neon/60 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.4)]">
              <Cpu className="w-8 h-8 text-cyber-neon animate-pulse" />
            </div>
          </div>

          {/* Engineer Identity */}
          <h2 className="text-xl font-bold font-display tracking-wider text-white">
            SAKTHI KAILASH
          </h2>
          <p className="text-xs font-mono text-cyber-cyan tracking-widest mt-1">
            ELECTRONICS & VLSI PORTFOLIO
          </p>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="h-1.5 w-full bg-dark-800 rounded-full overflow-hidden border border-dark-700 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyber-cyan to-cyber-neon rounded-full shadow-[0_0_12px_#00f5ff]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
            
            <div className="flex justify-between items-center mt-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyber-neon text-[11px]">
                <Terminal className="w-3.5 h-3.5 inline" />
                {bootText}
              </span>
              <span className="text-white font-semibold">{progress}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
