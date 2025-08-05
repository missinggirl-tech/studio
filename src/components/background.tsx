'use client';

import React, { useEffect, useRef } from 'react';

// Helper function to get a random value in a range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Particle class
class Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = random(0, this.canvas.width);
    this.y = random(0, this.canvas.height);
    this.radius = random(1, 3);
    this.vx = random(-0.5, 0.5);
    this.vy = random(-0.5, 0.5);
    const colors = ['#00ffff', '#ff00ff', '#ffffff', '#87ceeb'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }) {
    // Movement
    this.x += this.vx;
    this.y += this.vy;

    // Wall collision
    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
    
    // Mouse interaction - repulsion
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (mouse.radius - distance) / mouse.radius;
      const directionX = forceDirectionX * force * 0.5;
      const directionY = forceDirectionY * force * 0.5;

      this.vx += directionX;
      this.vy += directionY;

      // Limit velocity
      this.vx = Math.max(-2, Math.min(2, this.vx));
      this.vy = Math.max(-2, Math.min(2, this.vy));
    } else {
        // Slow down to original velocity
        if (this.vx > 0.5) this.vx -= 0.01;
        if (this.vx < -0.5) this.vx += 0.01;
        if (this.vy > 0.5) this.vy -= 0.01;
        if (this.vy < -0.5) this.vy += 0.01;
    }

    this.draw();
  }
}

export function CursorGlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = {
      x: -100,
      y: -100,
      radius: 150,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(ctx, canvas));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(140, 206, 235, ${opacityValue})`; // Pale blue lines
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => p.update(mouse));
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particle-canvas" ref={canvasRef}></canvas>;
}
