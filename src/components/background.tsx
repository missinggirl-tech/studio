'use client';

export function CursorGlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}
