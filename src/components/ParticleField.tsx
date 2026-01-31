import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitAngle: number;
}

interface ParticleFieldProps {
  particleCount?: number;
  connectionDistance?: number;
  particleColor?: string;
  lineColor?: string;
  speed?: number;
  className?: string;
  interactive?: boolean;
}

export default function ParticleField({
  particleCount = 80,
  connectionDistance = 140,
  particleColor = '74, 144, 217',
  lineColor = '74, 144, 217',
  speed = 0.4,
  className = '',
  interactive = true,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const timeRef = useRef(0);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        orbitRadius: Math.random() * 30 + 10,
        orbitSpeed: (Math.random() - 0.5) * 0.02,
        orbitAngle: Math.random() * Math.PI * 2,
      });
    }
    return particles;
  }, [particleCount, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      particlesRef.current = initParticles(canvas.offsetWidth, canvas.offsetHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      timeRef.current += 0.016;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((particle, i) => {
        particle.orbitAngle += particle.orbitSpeed;
        particle.pulsePhase += particle.pulseSpeed;

        const orbitX = Math.cos(particle.orbitAngle) * particle.orbitRadius * 0.3;
        const orbitY = Math.sin(particle.orbitAngle) * particle.orbitRadius * 0.3;

        particle.x += particle.vx;
        particle.y += particle.vy;

        const displayX = particle.x + orbitX;
        const displayY = particle.y + orbitY;

        if (particle.x < -50) particle.x = width + 50;
        if (particle.x > width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = height + 50;
        if (particle.y > height + 50) particle.y = -50;

        if (mouse.active) {
          const dx = mouse.x - displayX;
          const dy = mouse.y - displayY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 0.08;
            particle.x -= dx * force;
            particle.y -= dy * force;
          }
        }

        const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;
        const currentRadius = particle.radius * pulse;
        const currentOpacity = particle.opacity * pulse;

        const gradient = ctx.createRadialGradient(
          displayX, displayY, 0,
          displayX, displayY, currentRadius * 3
        );
        gradient.addColorStop(0, `rgba(${particleColor}, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(${particleColor}, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${particleColor}, 0)`);

        ctx.beginPath();
        ctx.arc(displayX, displayY, currentRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(displayX, displayY, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${currentOpacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const otherX = other.x + Math.cos(other.orbitAngle) * other.orbitRadius * 0.3;
          const otherY = other.y + Math.sin(other.orbitAngle) * other.orbitRadius * 0.3;

          const dx2 = displayX - otherX;
          const dy2 = displayY - otherY;
          const distance = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.4;
            const lineGradient = ctx.createLinearGradient(displayX, displayY, otherX, otherY);
            lineGradient.addColorStop(0, `rgba(${lineColor}, ${opacity * currentOpacity})`);
            lineGradient.addColorStop(0.5, `rgba(${lineColor}, ${opacity * 0.5})`);
            lineGradient.addColorStop(1, `rgba(${lineColor}, ${opacity * other.opacity * pulse})`);

            ctx.beginPath();
            ctx.moveTo(displayX, displayY);
            ctx.lineTo(otherX, otherY);
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = opacity * 1.5;
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const dx = mouse.x - displayX;
          const dy = mouse.y - displayY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const opacity = (1 - dist / 180) * 0.6;
            ctx.beginPath();
            ctx.moveTo(displayX, displayY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = opacity * 2;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, particleColor, lineColor, connectionDistance, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: interactive ? 'auto' : 'none' }}
    />
  );
}
