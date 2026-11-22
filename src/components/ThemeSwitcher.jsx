import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';

export const ThemeSwitcher = ({ compact = false }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = THEMES[theme] || THEMES.fusion;

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Theme Menu"
        className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 font-mono ${
          compact ? 'text-xs' : 'text-xs sm:text-sm'
        } bg-graphite-900/90 backdrop-blur-md shadow-md ${
          isOpen
            ? 'border-amber-400/80 shadow-[0_0_18px_rgba(234,126,59,0.4)] text-white'
            : 'border-titanium-700 hover:border-amber-500/50 text-slate-300 hover:text-white'
        }`}
      >
        {/* Animated Color Swatch Dots */}
        <div className="flex items-center -space-x-1">
          {current.dots.map((c, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full ring-1 ring-black/60 shadow-xs"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        <span className="hidden sm:inline font-semibold tracking-wide">
          {current.name}
        </span>

        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider hidden md:inline">
          {current.badge}
        </span>

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-amber-400' : ''
          }`}
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 mt-2.5 w-72 sm:w-80 p-2.5 rounded-2xl bg-[#090b14]/95 backdrop-blur-2xl border border-amber-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.85)] z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="px-3 py-2 border-b border-titanium-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                  Mechatronics Theme Palette
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                1-Click Switch
              </span>
            </div>

            {/* Theme Options */}
            <div className="mt-2 space-y-1.5">
              {Object.values(THEMES).map((t) => {
                const isSelected = t.id === theme;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl font-mono text-left flex items-center justify-between transition-all duration-200 group ${
                      isSelected
                        ? 'bg-amber-500/15 border border-amber-500/50 text-white shadow-sm'
                        : 'hover:bg-titanium-800/60 border border-transparent text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Dots representation */}
                      <div className="flex items-center -space-x-1 shrink-0">
                        {t.dots.map((c, i) => (
                          <span
                            key={i}
                            className="w-3.5 h-3.5 rounded-full ring-1 ring-black/70 shadow-sm"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-sans">
                            {t.name}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-titanium-800 text-amber-300 font-mono border border-titanium-700">
                            {t.badge}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-sans line-clamp-1">
                          {t.subtitle}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Note badge */}
            <div className="mt-2.5 pt-2 border-t border-titanium-800/80 px-2 flex items-center gap-1.5 text-[10px] font-mono text-amber-300/80">
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              <span>Default: Combined Prismatic Fusion of all 3 themes</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
