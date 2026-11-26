'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AdvancedEyeTrackerProps {
  isVisible: boolean;
}

export default function AdvancedEyeTracker({ isVisible }: AdvancedEyeTrackerProps) {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let blinkTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      if (!leftEyeRef.current || !rightEyeRef.current || !leftPupilRef.current || !rightPupilRef.current) return;

      const leftEye = leftEyeRef.current;
      const rightEye = rightEyeRef.current;

      // Calculate positions
      const leftRect = leftEye.getBoundingClientRect();
      const rightRect = rightEye.getBoundingClientRect();

      const leftX = leftRect.left + leftRect.width / 2;
      const leftY = leftRect.top + leftRect.height / 2;
      const rightX = rightRect.left + rightRect.width / 2;
      const rightY = rightRect.top + rightRect.height / 2;

      // Calculate angles
      const leftAngle = Math.atan2(e.clientY - leftY, e.clientX - leftX);
      const rightAngle = Math.atan2(e.clientY - rightY, e.clientX - rightX);

      const distance = 20;
      const leftPupilX = Math.cos(leftAngle) * distance;
      const leftPupilY = Math.sin(leftAngle) * distance;
      const rightPupilX = Math.cos(rightAngle) * distance;
      const rightPupilY = Math.sin(rightAngle) * distance;

      leftPupilRef.current.style.transform = `translate(${leftPupilX}px, ${leftPupilY}px)`;
      rightPupilRef.current.style.transform = `translate(${rightPupilX}px, ${rightPupilY}px)`;
    };

    // Auto-blink every 5 seconds
    const startBlink = () => {
      setBlink(true);
      blinkTimeout = setTimeout(() => {
        setBlink(false);
        blinkTimeout = setTimeout(startBlink, 5000 + Math.random() * 3000);
      }, 150);
    };

    blinkTimeout = setTimeout(startBlink, 5000);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(blinkTimeout);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-8 right-16 z-50 flex gap-8 pointer-events-none"
    >
      {/* Left Eye - Cyan */}
      <motion.div
        ref={leftEyeRef}
        className="relative w-24 h-24 bg-gradient-to-br from-cyan-300 to-cyan-600 rounded-full border-2 border-cyan-200 shadow-lg shadow-cyan-500/60 flex items-center justify-center overflow-hidden"
        animate={{ scaleY: blink ? 0.1 : 1 }}
        transition={{ duration: 0.1 }}
      >
        {/* Pupil */}
        <div
          ref={leftPupilRef}
          className="absolute w-7 h-7 bg-black rounded-full shadow-inner transition-transform duration-0"
        >
          <div className="absolute inset-0.5 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
        </div>

        {/* Eye shine */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-200/40 to-transparent" />

        {/* Iris */}
        <div className="absolute inset-2 rounded-full border border-cyan-400/30" />
      </motion.div>

      {/* Right Eye - Purple */}
      <motion.div
        ref={rightEyeRef}
        className="relative w-24 h-24 bg-gradient-to-br from-purple-300 to-purple-600 rounded-full border-2 border-purple-200 shadow-lg shadow-purple-500/60 flex items-center justify-center overflow-hidden"
        animate={{ scaleY: blink ? 0.1 : 1 }}
        transition={{ duration: 0.1 }}
      >
        {/* Pupil */}
        <div
          ref={rightPupilRef}
          className="absolute w-7 h-7 bg-black rounded-full shadow-inner transition-transform duration-0"
        >
          <div className="absolute inset-0.5 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
        </div>

        {/* Eye shine */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-200/40 to-transparent" />

        {/* Iris */}
        <div className="absolute inset-2 rounded-full border border-purple-400/30" />
      </motion.div>

      {/* Connecting glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-20 blur-3xl pointer-events-none"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}
