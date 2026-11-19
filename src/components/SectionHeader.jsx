import React from 'react';
import { motion } from 'framer-motion';
import { Cog } from 'lucide-react';

/**
 * ELECTRO-MECHANICAL SECTION HEADER
 * Features:
 * - Industrial telemetry index badge
 * - Metallic titanium / silver title typography
 * - Mechanical hex-bolt / gear tooth center glyph
 * - Copper and cyan circuit trace divider lines
 */
export const SectionHeader = ({ index, title, subtitle, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Engineering Index Telemetry Tag */}
      {index && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3 py-1 mb-3.5 rounded-full bg-graphite-900/90 border border-titanium-700/80 text-xs font-mono text-copper-400 tracking-wider shadow-sm ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon animate-ping" />
          <span className="text-metallic-silver font-semibold">SYS_ENG // SECTION {index}</span>
        </motion.div>
      )}

      {/* Main Title with Metallic Sheen */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Subtitle / Engineering Descriptor */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-metallic-steel text-base md:text-lg max-w-2xl leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Electro-Mechanical Divider (Copper Trace + Gear Glyph + Cyan Signal) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`mt-6 flex items-center gap-3 ${isCenter ? 'justify-center' : 'justify-start'}`}
      >
        {/* Left Copper Trace */}
        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-copper-600 to-copper-400" />

        {/* Central Mechanical Hex / Gear Glyph in Cyber Lavender */}
        <div className="relative flex items-center justify-center">
          <div className="w-5 h-5 rounded-md bg-graphite-900 border border-copper-500/80 flex items-center justify-center rotate-45 shadow-[0_0_8px_rgba(192,132,252,0.5)]">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
          </div>
        </div>

        {/* Right Lavender Circuit Trace */}
        <div className="w-24 h-[1.5px] bg-gradient-to-r from-copper-400 via-silver-200 to-transparent" />
      </motion.div>
    </div>
  );
};
