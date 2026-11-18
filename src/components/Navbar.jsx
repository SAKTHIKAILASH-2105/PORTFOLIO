import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, FileText, ArrowRight, Github, Linkedin } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

/**
 * Modern Futuristic Navigation Bar
 * Features active section tracking, glassmorphism, mobile drawer, and status pill
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
            ? 'py-3 bg-dark-950/85 backdrop-blur-xl border-b border-cyber-cyan/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyber-cyan rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-dark-900 border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-neon transition-colors shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                <Cpu className="w-5 h-5 text-cyber-neon group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base tracking-wider flex items-center gap-1">
                  SAKTHI <span className="text-cyber-cyan">KAILASH</span>
                </span>
                <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                  VLSI & EMBEDDED
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-dark-900/60 border border-dark-750/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                      isActive
                        ? 'text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-dark-800/40'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-cyber-cyan/15 rounded-full border border-cyber-cyan/40 shadow-[0_0_10px_rgba(0,210,255,0.3)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Status Pill */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900/80 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>Open for Opportunities</span>
              </div>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyber-cyan/10 hover:bg-cyber-cyan text-cyber-cyan hover:text-dark-950 border border-cyber-cyan/40 hover:border-cyber-cyan font-mono text-xs font-semibold transition-all duration-200 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenResume}
                className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 text-xs font-mono"
                title="View Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-dark-900 border border-dark-750 text-slate-300 hover:text-white hover:border-cyber-cyan/40 transition-colors"
                aria-label="Toggle mobile navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyber-neon" /> : <Menu className="w-5 h-5" />}
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
            className="fixed inset-x-0 top-[65px] z-30 p-4 md:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-dark-750 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-mono text-sm flex items-center justify-between transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-cyber-cyan/15 text-cyber-neon border border-cyber-cyan/30'
                      : 'text-slate-300 hover:bg-dark-850 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 border-t border-dark-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3 rounded-xl bg-cyber-cyan text-dark-950 font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,210,255,0.3)]"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW / DOWNLOAD RESUME</span>
                </button>

                <div className="flex items-center justify-center gap-4 pt-2 text-slate-400">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-dark-900 border border-dark-750 hover:text-cyber-cyan"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-dark-900 border border-dark-750 hover:text-cyber-cyan"
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
