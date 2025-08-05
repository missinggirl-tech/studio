'use client';

export function CursorGlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 animate-move-bg bg-gradient-to-br from-blue-900 via-teal-900 to-violet-900 bg-[length:200%_200%]" />
    </div>
  );
}
