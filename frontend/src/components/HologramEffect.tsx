'use client';

import { useEffect, useRef } from 'react';

interface HologramEffectProps {
  isActive: boolean;
}

export default function HologramEffect({ isActive }: HologramEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system for hologram effect
    const particles: any[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      hue: number;
      ctx: CanvasRenderingContext2D;

      constructor(context: CanvasRenderingContext2D) {
        this.ctx = context;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2 - 0.5;
        this.life = 1;
        this.maxLife = Math.random() * 2 + 1;
        this.size = Math.random() * 2 + 0.5;
        this.hue = Math.random() * 60 + 180; // Cyan to purple range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy -= 0.02; // Gravity effect
        this.life -= 1 / (this.maxLife * 60);

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        this.ctx.save();
        this.ctx.globalAlpha = this.life * 0.6;
        this.ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 1)`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
    }

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(ctx));
    }

    let animationId: number;
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Add new particles
      if (particles.length < 150) {
        particles.push(new Particle(ctx));
      }

      // Draw connecting lines for hologram grid effect
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-50 mix-blend-screen"
      style={{ zIndex: 5 }}
    />
  );
}
