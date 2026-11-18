import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Section Header with engineering styling & circuit accent lines
 */
export const SectionHeader = ({ index, title, subtitle, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Engineering Index Tag */}
      {index && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-dark-850/80 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan tracking-wider ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon animate-ping" />
          <span>SYS_SECTION // {index}</span>
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Subtitle / Descriptor */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Futuristic Circuit Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`mt-6 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}
      >
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyber-cyan" />
        <div className="w-2 h-2 rotate-45 border border-cyber-neon bg-dark-950" />
        <div className="w-24 h-[1px] bg-gradient-to-r from-cyber-cyan via-cyber-blue to-transparent" />
      </motion.div>
    </div>
  );
};
