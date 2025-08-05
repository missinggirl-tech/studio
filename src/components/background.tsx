'use client';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-radial-gradient from-teal-500/30 to-transparent rounded-full blur-3xl"
          style={{ animation: 'pulse 8s infinite alternate' }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-radial-gradient from-purple-500/30 to-transparent rounded-full blur-3xl"
          style={{ animation: 'pulse 10s infinite alternate-reverse' }}
        />
        <div
          className="absolute -top-1/4 -right-1/4 w-1/3 h-1/3 bg-radial-gradient from-blue-500/30 to-transparent rounded-full blur-3xl"
          style={{ animation: 'pulse 12s infinite alternate' }}
        />
         <div
          className="absolute bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-radial-gradient from-pink-500/20 to-transparent rounded-full blur-3xl"
          style={{ animation: 'pulse 14s infinite alternate-reverse' }}
        />
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        .bg-radial-gradient {
          background-image: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </div>
  );
}
