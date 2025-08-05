'use client';

import { useState, useEffect } from 'react';

export function CursorGlowBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-background transition-all duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, hsla(263, 95%, 83%, 0.15), transparent 80%)`,
      }}
    />
  );
}
