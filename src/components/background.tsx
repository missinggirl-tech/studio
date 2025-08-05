'use client';

export function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/80 to-black" />
      <div
        className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-40%] right-[-30%] top-auto h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,100,255,.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
    </div>
  );
}
