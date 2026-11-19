import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, FileText, ArrowRight, Github, Linkedin, Cog } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

/**
 * ELECTRO-MECHANICAL INDUSTRIAL NAVIGATION BAR
 * Features brushed metallic surfaces, copper circuit trace accent,
 * active section tracking, glassmorphism, mobile drawer, and status pill.
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
            ? 'py-2.5 bg-graphite-950/90 backdrop-blur-xl border-b border-titanium-700/70 shadow-[0_8px_32px_rgba(0,0,0,0.7)]'
            : 'py-5 bg-transparent'
        }`}
      >
        {/* Top Edge Micro Copper Trace */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-copper-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo: Electro-Mechanical Fusion Icon */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-titanium-800 to-graphite-900 border border-titanium-600 group-hover:border-copper-500 transition-colors shadow-md flex items-center justify-center overflow-hidden">
                {/* Rotating gear motif in logo background */}
                <Cog className="w-7 h-7 text-titanium-500/40 absolute -top-1 -right-1 group-hover:rotate-45 transition-transform duration-500" />
                <Cpu className="w-5 h-5 text-copper-400 group-hover:text-cyber-neon transition-colors relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base tracking-wider flex items-center gap-1.5">
                  SAKTHI <span className="text-copper-400 group-hover:text-cyber-neon transition-colors">KAILASH</span>
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
                        className="absolute inset-0 bg-gradient-to-r from-copper-500/25 via-charcoal-700/50 to-cream-200/20 rounded-full border border-copper-400/60 shadow-[0_0_14px_rgba(234,126,59,0.45)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Status Pill in Industrial Copper */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-900/90 border border-copper-500/40 text-[11px] font-mono text-copper-300 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-copper-400 animate-pulse shadow-[0_0_8px_#ea7e3b]" />
                <span className="tracking-wide">Open for Opportunities</span>
              </div>

              {/* Resume Button with Micro-Interaction */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-titanium-800 to-graphite-900 hover:from-copper-600 hover:to-copper-500 text-copper-400 hover:text-white border border-copper-500/40 hover:border-copper-400 font-mono text-xs font-semibold transition-all duration-200 shadow-sm cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenResume}
                className="p-2 rounded-lg bg-titanium-800 text-copper-400 border border-copper-500/40 text-xs font-mono"
                title="View Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-graphite-900 border border-titanium-700 text-slate-300 hover:text-white hover:border-copper-500 transition-colors"
                aria-label="Toggle mobile navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-copper-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[62px] z-30 p-4 md:hidden bg-graphite-950/98 backdrop-blur-2xl border-b border-titanium-700 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-mono text-sm flex items-center justify-between transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-copper-500/15 text-copper-400 border border-copper-500/40'
                      : 'text-slate-300 hover:bg-titanium-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 border-t border-titanium-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-copper-500 to-copper-600 text-white font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(234,126,59,0.4)]"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW / DOWNLOAD RESUME</span>
                </button>

                <div className="flex items-center justify-center gap-4 pt-2 text-slate-400">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-graphite-900 border border-titanium-700 hover:text-copper-400 hover:border-copper-500 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-graphite-900 border border-titanium-700 hover:text-copper-400 hover:border-copper-500 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
