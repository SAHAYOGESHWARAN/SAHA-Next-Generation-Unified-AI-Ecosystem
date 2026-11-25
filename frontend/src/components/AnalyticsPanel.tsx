'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Activity } from 'lucide-react';

interface DataPoint {
  value: number;
  label: string;
}

interface AnalyticsPanelProps {
  title: string;
  data: DataPoint[];
  color?: 'cyan' | 'purple' | 'teal';
  icon?: React.ReactNode;
}

export default function AnalyticsPanel({
  title,
  data,
  color = 'cyan',
  icon = <BarChart3 className="w-5 h-5" />,
}: AnalyticsPanelProps) {
  const colors = {
    cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400',
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400',
    teal: 'from-teal-500/20 to-teal-600/10 border-teal-500/30 text-teal-400',
  };

  const maxValue = Math.max(...data.map((d) => d.value));
  const gradients = ['from-cyan-500', 'from-purple-500', 'from-teal-500', 'from-orange-500'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        relative p-6 rounded-lg border-2 bg-gradient-to-br
        ${colors[color]}
        backdrop-blur-xl overflow-hidden
      `}
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 to-transparent" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`text-${color === 'cyan' ? 'cyan' : color === 'purple' ? 'purple' : 'teal'}-400`}>
            {icon}
          </div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <TrendingUp className="w-5 h-5 text-green-400 animate-bounce" />
      </div>

      {/* Chart */}
      <div className="relative z-10 space-y-4">
        {data.map((point, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-300">{point.label}</span>
              <span className="text-sm font-bold text-cyan-300">{point.value}%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(point.value / maxValue) * 100}%` }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`
                h-2 rounded-full bg-gradient-to-r ${gradients[idx % 4]} 
                to-transparent relative overflow-hidden
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-cyan-500/50" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-cyan-500/50" />
    </motion.div>
  );
}
