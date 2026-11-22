import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, FileText, ArrowRight, Github, Linkedin, Cog } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { ThemeSwitcher } from './ThemeSwitcher';

/**
 * ELECTRO-MECHANICAL INDUSTRIAL NAVIGATION BAR
 * Features brushed metallic surfaces, copper circuit trace accent,
 * active section tracking, theme switcher, glassmorphism, mobile drawer, and status pill.
 */
export const Navbar = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section intersection detection
      const sections = ['about', 'skills', 'projects', 'cad-models', 'journey', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-[#080912]/92 backdrop-blur-xl border-b border-titanium-700/70 shadow-[0_8px_32px_rgba(0,0,0,0.7)]'
            : 'py-5 bg-transparent'
        }`}
      >
        {/* Top Edge Micro Multi-Color Trace */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/40 via-rose-600/40 via-purple-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo: Electro-Mechanical Fusion Icon */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-titanium-800 to-graphite-900 border border-titanium-600 group-hover:border-amber-500 transition-colors shadow-md flex items-center justify-center overflow-hidden">
                <Cog className="w-7 h-7 text-titanium-500/40 absolute -top-1 -right-1 group-hover:rotate-45 transition-transform duration-500" />
                <Cpu className="w-5 h-5 text-amber-400 group-hover:text-purple-400 transition-colors relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base tracking-wider flex items-center gap-1.5">
                  SAKTHI <span className="text-amber-400 group-hover:text-purple-400 transition-colors">KAILASH</span>
                </span>
                <span className="font-mono text-[9px] text-metallic-steel tracking-widest uppercase">
                  MECHATRONICS • VLSI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-graphite-900/80 border border-titanium-700/80 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                      isActive
                        ? 'text-white font-medium'
                        : 'text-metallic-steel hover:text-white hover:bg-titanium-800/40'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-amber-500/25 via-rose-600/20 to-purple-500/25 rounded-full border border-amber-400/60 shadow-[0_0_14px_rgba(234,126,59,0.45)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Right Side Actions: Theme Switcher + Status Pill + Resume */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Interactive Theme Switcher */}
              <ThemeSwitcher compact={true} />

              {/* Status Pill in Industrial Copper */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-900/90 border border-amber-500/40 text-[11px] font-mono text-amber-300 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="tracking-wide">Open for Opportunities</span>
              </div>

              {/* Resume Button with Micro-Interaction */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-titanium-800 to-graphite-900 hover:from-amber-600 hover:to-orange-500 text-amber-400 hover:text-white border border-amber-500/40 hover:border-amber-400 font-mono text-xs font-semibold transition-all duration-200 shadow-sm cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeSwitcher compact={true} />
              <button
                onClick={onOpenResume}
                className="p-2 rounded-lg bg-titanium-800 text-amber-400 border border-amber-500/40 text-xs font-mono"
                title="View Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-titanium-800 text-slate-200 border border-titanium-700 hover:border-amber-500/50"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 p-4 md:hidden"
          >
            <div className="p-4 rounded-2xl bg-[#090b14]/95 border border-amber-500/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
              <div className="pb-2 border-b border-titanium-800 flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Navigation Menu
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl font-mono text-sm flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/40'
                        : 'text-slate-300 hover:bg-titanium-900 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}

              <div className="pt-3 mt-1 border-t border-titanium-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-titanium-850 text-slate-300 hover:text-amber-400"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-titanium-850 text-slate-300 hover:text-amber-400"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-mono text-xs font-bold"
                >
                  View Full Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
