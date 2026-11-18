import React from 'react';

/**
 * ELECTRO-MECHANICAL INDUSTRIAL STATUS BADGE
 * Precise telemetry tags for skill mastery, project completion, and timeline stages.
 */
export const StatusBadge = ({ status, variant = 'default', size = 'sm' }) => {
  const getStyles = () => {
    switch (status?.toLowerCase()) {
      case 'experienced':
      case 'core':
      case 'completed':
      case 'proficient':
        return {
          bg: 'bg-emerald-950/40',
          border: 'border-emerald-500/40',
          text: 'text-emerald-400',
          dot: 'bg-emerald-400',
          glow: 'shadow-[0_0_8px_rgba(52,211,153,0.25)]',
        };
      case 'currently learning':
      case 'in-progress':
      case 'ongoing':
      case 'active':
      case 'under active development':
        return {
          bg: 'bg-copper-950/40',
          border: 'border-copper-500/50',
          text: 'text-copper-400',
          dot: 'bg-copper-400 animate-pulse',
          glow: 'shadow-[0_0_10px_rgba(234,126,59,0.35)]',
        };
      case 'concept':
      case 'planned':
      case 'roadmap target':
        return {
          bg: 'bg-titanium-900/60',
          border: 'border-titanium-600',
          text: 'text-metallic-pewter',
          dot: 'bg-metallic-steel',
          glow: 'shadow-[0_0_6px_rgba(148,163,184,0.15)]',
        };
      case 'prototype':
      case 'prototype in progress':
        return {
          bg: 'bg-amber-950/40',
          border: 'border-amber-500/50',
          text: 'text-amber-400',
          dot: 'bg-amber-400 animate-pulse',
          glow: 'shadow-[0_0_10px_rgba(245,158,11,0.3)]',
        };
      default:
        return {
          bg: 'bg-graphite-900/80',
          border: 'border-titanium-700',
          text: 'text-slate-300',
          dot: 'bg-slate-400',
          glow: '',
        };
    }
  };

  const style = getStyles();
  const sizeClasses = size === 'xs' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono rounded-full border ${style.bg} ${style.border} ${style.text} ${style.glow} ${sizeClasses} backdrop-blur-xs`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      <span>{status}</span>
    </span>
  );
};
