'use client';

import { useEffect, useRef } from 'react';

interface EyeTrackerProps {
  isVisible: boolean;
}

export default function EyeTracker({ isVisible }: EyeTrackerProps) {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (leftEyeRef.current && rightEyeRef.current) {
        const leftEye = leftEyeRef.current;
        const rightEye = rightEyeRef.current;

        // Calculate angles
        const leftRect = leftEye.getBoundingClientRect();
        const rightRect = rightEye.getBoundingClientRect();

        const leftX = leftRect.left + leftRect.width / 2;
        const leftY = leftRect.top + leftRect.height / 2;
        const rightX = rightRect.left + rightRect.width / 2;
        const rightY = rightRect.top + rightRect.height / 2;

        const leftAngle = Math.atan2(e.clientY - leftY, e.clientX - leftX);
        const rightAngle = Math.atan2(e.clientY - rightY, e.clientX - rightX);

        const distance = 15;
        const leftPupilX = Math.cos(leftAngle) * distance;
        const leftPupilY = Math.sin(leftAngle) * distance;
        const rightPupilX = Math.cos(rightAngle) * distance;
        const rightPupilY = Math.sin(rightAngle) * distance;

        const leftPupil = leftEye.querySelector('.pupil') as HTMLElement;
        const rightPupil = rightEye.querySelector('.pupil') as HTMLElement;

        if (leftPupil) {
          leftPupil.style.transform = `translate(${leftPupilX}px, ${leftPupilY}px)`;
        }
        if (rightPupil) {
          rightPupil.style.transform = `translate(${rightPupilX}px, ${rightPupilY}px)`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-8 right-16 z-50 flex gap-6 pointer-events-none">
      {/* Left Eye */}
      <div
        ref={leftEyeRef}
        className="relative w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-cyan-300 shadow-lg shadow-cyan-500/50 flex items-center justify-center overflow-hidden"
      >
        <div className="pupil absolute w-6 h-6 bg-black rounded-full shadow-inner transition-transform duration-0"></div>
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-200/20 to-transparent"></div>
      </div>

      {/* Right Eye */}
      <div
        ref={rightEyeRef}
        className="relative w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-purple-300 shadow-lg shadow-purple-500/50 flex items-center justify-center overflow-hidden"
      >
        <div className="pupil absolute w-6 h-6 bg-black rounded-full shadow-inner transition-transform duration-0"></div>
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-200/20 to-transparent"></div>
      </div>

      {/* Connecting glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-10 blur-2xl pointer-events-none"></div>
    </div>
  );
}
