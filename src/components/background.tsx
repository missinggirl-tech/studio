'use client';

import { useState, useEffect } from 'react';

export function CursorGlowBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // Set initial size
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallax = (speed: number) => {
    if (windowSize.width === 0 || windowSize.height === 0) {
      return {};
    }
    return {
        transform: `translate(${(position.x / windowSize.width - 0.5) * speed}px, ${(position.y / windowSize.height - 0.5) * speed}px)`,
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
        <div 
            className="absolute inset-0 transition-transform duration-500 ease-out"
            style={{
                ...parallax(50),
                background: `radial-gradient(600px at ${position.x}px ${position.y}px, hsla(263.4, 95.4%, 83.3%, 0.25), transparent 80%)`,
            }}
        />
        {windowSize.width > 0 && <div 
            className="absolute inset-0 transition-transform duration-500 ease-out"
            style={{
                ...parallax(-30),
                background: `radial-gradient(800px at ${windowSize.width - position.x}px ${windowSize.height - position.y}px, hsla(180, 100%, 75%, 0.1), transparent 80%)`,
            }}
        />}
        {windowSize.height > 0 && <div 
            className="absolute inset-0 transition-transform duration-500 ease-out"
            style={{
                ...parallax(20),
                background: `radial-gradient(400px at ${position.x + 200}px ${windowSize.height - position.y}px, hsla(300, 100%, 75%, 0.1), transparent 80%)`,
            }}
        />}
    </div>
  );
}
