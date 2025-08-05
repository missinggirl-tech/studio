'use client';

export function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-black"
      />
    </div>
  );
}
