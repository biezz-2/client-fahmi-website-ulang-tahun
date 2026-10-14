"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface ConfettiProps {
  trigger?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  shape: "circle" | "rect" | "star";
  alpha: number;
}

export function Confetti({ trigger = false }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const colors = ["#F59E0B", "#EF4444", "#10B981", "#3B82F6", "#EC4899", "#8B5CF6", "#FBBF24"];

  const launchBurst = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const count = 120;
    const newParticles: Particle[] = [];
    const width = canvas.width;
    const height = canvas.height;

    for (let i = 0; i < count; i++) {
      // Shoot from bottom center or top
      const isFromLeft = Math.random() < 0.5;
      const originX = isFromLeft ? width * 0.2 : width * 0.8;
      const originY = height * 0.5;

      const angle = isFromLeft ? (Math.random() * Math.PI) / 3 - 0.2 : (Math.PI * 2) / 3 + (Math.random() * Math.PI) / 3;
      const speed = Math.random() * 12 + 6;

      newParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed * (isFromLeft ? 1 : -1),
        vy: -Math.abs(Math.sin(angle) * speed) - 3,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        shape: Math.random() > 0.6 ? "circle" : Math.random() > 0.3 ? "rect" : "star",
        alpha: 1,
      });
    }

    particlesRef.current.push(...newParticles);
  }, [colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const remainingParticles: Particle[] = [];

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.vx *= 0.98; // drag
        p.rotation += p.rotationSpeed;
        p.alpha -= 0.007;

        if (p.alpha > 0 && p.y < canvas.height + 50) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;

          if (p.shape === "circle") {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === "rect") {
            ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.7);
          } else {
            // Star
            ctx.beginPath();
            for (let j = 0; j < 5; j++) {
              ctx.lineTo(Math.cos(((18 + j * 72) * Math.PI) / 180) * p.size, -Math.sin(((18 + j * 72) * Math.PI) / 180) * p.size);
              ctx.lineTo(Math.cos(((54 + j * 72) * Math.PI) / 180) * (p.size / 2), -Math.sin(((54 + j * 72) * Math.PI) / 180) * (p.size / 2));
            }
            ctx.closePath();
            ctx.fill();
          }

          ctx.restore();
          remainingParticles.push(p);
        }
      }

      particlesRef.current = remainingParticles;
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (trigger) {
      launchBurst();
      const t1 = setTimeout(launchBurst, 400);
      const t2 = setTimeout(launchBurst, 900);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [trigger, launchBurst]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
}
