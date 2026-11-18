import React from 'react';

/**
 * High-tech Status & Level Badge
 */
export const StatusBadge = ({ status, variant = 'default', size = 'sm' }) => {
  const getStyles = () => {
    switch (status?.toLowerCase()) {
      case 'experienced':
      case 'core':
      case 'completed':
      case 'proficient':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-400',
          dot: 'bg-emerald-400',
          glow: 'shadow-[0_0_8px_rgba(52,211,153,0.3)]'
        };
      case 'currently learning':
      case 'in-progress':
      case 'ongoing':
      case 'active':
      case 'under active development':
        return {
          bg: 'bg-cyber-cyan/10',
          border: 'border-cyber-cyan/40',
          text: 'text-cyber-neon',
          dot: 'bg-cyber-neon animate-pulse',
          glow: 'shadow-[0_0_8px_rgba(0,245,255,0.4)]'
        };
      case 'concept':
      case 'planned':
      case 'roadmap target':
        return {
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          text: 'text-purple-300',
          dot: 'bg-purple-400',
          glow: 'shadow-[0_0_8px_rgba(168,85,247,0.3)]'
        };
      case 'prototype':
      case 'prototype in progress':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-300',
          dot: 'bg-amber-400',
          glow: 'shadow-[0_0_8px_rgba(251,191,36,0.3)]'
        };
      default:
        return {
          bg: 'bg-slate-800/60',
          border: 'border-slate-700',
          text: 'text-slate-300',
          dot: 'bg-slate-400',
          glow: ''
        };
    }
  };

  const style = getStyles();
  const sizeClasses = size === 'xs' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono rounded-full border ${style.bg} ${style.border} ${style.text} ${style.glow} ${sizeClasses}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      <span>{status}</span>
    </span>
  );
};
