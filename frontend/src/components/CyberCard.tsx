'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: 'blue' | 'purple' | 'cyan' | 'teal';
  hover?: boolean;
  delay?: number;
}

export default function CyberCard({
  children,
  className = '',
  glow = true,
  glowColor = 'blue',
  hover = true,
  delay = 0,
}: CyberCardProps) {
  const glowColors = {
    blue: 'rgba(0, 212, 255, 0.5)',
    purple: 'rgba(168, 85, 247, 0.5)',
    cyan: 'rgba(0, 240, 255, 0.5)',
    teal: 'rgba(0, 255, 204, 0.5)',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`
        relative p-6 rounded-lg border border-cyan-500/30 bg-gradient-to-br 
        from-slate-900/40 to-slate-950/40 backdrop-blur-xl
        transition-all duration-300
        ${glow ? 'cyber-glow' : ''}
        ${className}
      `}
      style={glow ? { boxShadow: `0 0 20px ${glowColors[glowColor]}` } : {}}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/50" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500/50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
