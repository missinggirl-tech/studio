'use client';

import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';

const GRID_SIZE = 30;

export function CursorGlowBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const dots = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const distance = Math.sqrt(
        Math.pow(j * 32 - mousePosition.x, 2) + Math.pow(i * 32 - mousePosition.y, 2)
      );
      const opacity = Math.max(0, 1 - distance / 400);
      const scale = Math.max(0.2, 1 - distance / 500);

      dots.push(
        <div
          key={`${i}-${j}`}
          className="dot"
          style={{
            left: j * 32,
            top: i * 32,
            opacity: opacity,
            transform: `scale(${scale})`,
          }}
        />
      );
    }
  }

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="dot-grid">{dots}</div>
    </div>
  );
}