'use client';

import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden ${className}`}>
      {/* Fixed Background Effects */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-background" />

      {/* Content */}
      <div className="page-container relative z-10">
        {children}
      </div>
    </div>
  );
}
