'use client';
import React, { useState, useEffect } from 'react';

export function FallingStars() {
  const [stars, setStars] = useState<
    { id: number; x: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: Math.random() * 2 + 3, // 3s to 5s
      delay: Math.random() * 5, // 0s to 5s
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={
            {
              left: `${star.x}%`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
