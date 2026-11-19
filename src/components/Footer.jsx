import React, { useState, useEffect } from 'react';
import { Cpu, Github, Linkedin, Terminal, Cog } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

/**
 * ELECTRO-MECHANICAL INDUSTRIAL FOOTER
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
    <footer className="relative border-t border-titanium-800 bg-graphite-950/95 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      {/* Top Copper Circuit Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-copper-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-titanium-850 border border-titanium-700 flex items-center justify-center shadow-xs">
                <Cpu className="w-4 h-4 text-copper-400" />
              </div>
              <span className="font-display font-bold text-white text-lg tracking-wider">
                SAKTHI <span className="text-copper-400">KAILASH</span>
              </span>
            </div>
            
            <p className="text-metallic-steel text-sm max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-graphite-900 border border-titanium-750 font-mono text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-copper-400 animate-pulse shadow-[0_0_6px_#d8b07d]" />
              <span>CORE_CLOCK: {timeStr || 'TELEMETRY ACTIVE'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-copper-400" />
              <span>NAVIGATION</span>
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-metallic-steel hover:text-copper-400 transition-colors"
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
                className="w-10 h-10 rounded-xl bg-graphite-900 border border-titanium-700 flex items-center justify-center text-metallic-steel hover:text-white hover:border-copper-500 hover:shadow-[0_0_15px_rgba(216, 176, 125,0.3)] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-graphite-900 border border-titanium-700 flex items-center justify-center text-metallic-steel hover:text-white hover:border-copper-500 hover:shadow-[0_0_15px_rgba(216, 176, 125,0.3)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-titanium-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-metallic-steel">
          <p>© {new Date().getFullYear()} Sakthi Kailash. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span>DESIGNED FOR</span>
            <span className="text-copper-400 font-semibold">MECHATRONICS & VLSI ENGINEERING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
