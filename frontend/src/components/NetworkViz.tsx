'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface NetworkVizProps {
  nodes?: Node[];
  title?: string;
}

export default function NetworkViz({
  nodes = [],
  title = 'Network Topology',
}: NetworkVizProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || nodes.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Animation frame
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;

      // Clear canvas with gradient
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, 'rgba(10, 14, 39, 0.1)');
      grad.addColorStop(1, 'rgba(10, 14, 39, 0.3)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.id.charCodeAt(0)) * 0.2 + 0.8;

        // Glow effect
        const glowGrad = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.size * 3
        );
        glowGrad.addColorStop(0, `rgba(0, 212, 255, ${0.3 * pulse})`);
        glowGrad.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(
          node.x - node.size * 3,
          node.y - node.size * 3,
          node.size * 6,
          node.size * 6
        );

        // Node circle
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Node border
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [nodes]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-full rounded-lg border-2 border-cyan-500/30 overflow-hidden bg-gradient-to-br from-slate-900/20 to-slate-950/20 backdrop-blur-xl"
    >
      {/* Title */}
      {title && (
        <div className="absolute top-4 left-4 z-20">
          <h3 className="text-cyan-400 font-bold text-sm">{title}</h3>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />

      {/* Corner decorations */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-500/50 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-500/50 pointer-events-none" />
    </motion.div>
  );
}
