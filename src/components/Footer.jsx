import React, { useState, useEffect } from 'react';
import { Cpu, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

/**
 * Futuristic Engineering Footer
 */
export const Footer = () => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' IST'
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative border-t border-dark-800 bg-dark-950/90 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      {/* Circuit accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-dark-900 border border-cyber-cyan/40 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-cyber-neon" />
              </div>
              <span className="font-display font-bold text-white text-lg tracking-wider">
                SAKTHI <span className="text-cyber-cyan">KAILASH</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-750 font-mono text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CORE_CLOCK: {timeStr || 'TELEMETRY ACTIVE'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>NAVIGATION</span>
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyber-cyan transition-colors"
                  >
                    // {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              CONNECT
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-750 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-750 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-750 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-4 text-[11px] font-mono text-slate-500">
              India • Open to Relocation & Remote Roles
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Sakthi Kailash. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered for High Performance Silicon & Systems
          </p>
        </div>
      </div>
    </footer>
  );
};
