'use client';

import React from 'react';

export function Bubbles() {
  return (
    <div className="bubbles" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <div className="bubble" key={i} />
      ))}
    </div>
  );
}
