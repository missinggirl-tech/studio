'use client';

export function CursorGlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="blob-container">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob three"></div>
        <div className="blob four"></div>
        <div className="blob five"></div>
      </div>
    </div>
  );
}
