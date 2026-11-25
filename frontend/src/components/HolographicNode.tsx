'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HolographicNodeProps {
  icon: React.ReactNode;
  title: string;
  value?: string | number;
  color?: 'cyan' | 'purple' | 'teal' | 'orange';
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function HolographicNode({
  icon,
  title,
  value,
  color = 'cyan',
  delay = 0,
  size = 'md',
  onClick,
}: HolographicNodeProps) {
  const colors = {
    cyan: {
      bg: 'from-cyan-500/20 to-cyan-600/10',
      border: 'border-cyan-500/50',
      glow: 'shadow-lg shadow-cyan-500/30',
      text: 'text-cyan-400',
    },
    purple: {
      bg: 'from-purple-500/20 to-purple-600/10',
      border: 'border-purple-500/50',
      glow: 'shadow-lg shadow-purple-500/30',
      text: 'text-purple-400',
    },
    teal: {
      bg: 'from-teal-500/20 to-teal-600/10',
      border: 'border-teal-500/50',
      glow: 'shadow-lg shadow-teal-500/30',
      text: 'text-teal-400',
    },
    orange: {
      bg: 'from-orange-500/20 to-orange-600/10',
      border: 'border-orange-500/50',
      glow: 'shadow-lg shadow-orange-500/30',
      text: 'text-orange-400',
    },
  };

  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const c = colors[color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      onClick={onClick}
      className={`
        relative ${sizes[size]} rounded-full cursor-pointer
        bg-gradient-to-br ${c.bg}
        border-2 ${c.border}
        flex flex-col items-center justify-center
        ${c.glow}
        backdrop-blur-md
        transition-all duration-300
        group
      `}
    >
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/5 to-transparent" />

      {/* Rotating border */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400/50 border-r-purple-400/30 animate-spin opacity-50" />

      {/* Icon */}
      <div className={`${iconSizes[size]} ${c.text} relative z-10`}>
        {icon}
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none">
        <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-cyan-500/30 whitespace-nowrap text-xs text-cyan-300">
          {title}
        </div>
      </div>

      {/* Value display if provided */}
      {value && (
        <div className="absolute bottom-2 text-xs font-bold text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
          {value}
        </div>
      )}

      {/* Pulsing dots around node */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`
            absolute w-1 h-1 rounded-full bg-cyan-400
            ${c.text === 'text-purple-400' ? 'bg-purple-400' : ''}
            ${c.text === 'text-teal-400' ? 'bg-teal-400' : ''}
            ${c.text === 'text-orange-400' ? 'bg-orange-400' : ''}
            animate-pulse
          `}
          style={{
            top: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
            left: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </motion.div>
  );
}
