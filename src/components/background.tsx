'use client';
import { useTheme } from 'next-themes';

export function CursorGlowBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
       <div className="absolute inset-0 animate-move-bg bg-gradient-to-br from-blue-100 via-white to-blue-50 bg-[length:200%_200%] dark:from-blue-900 dark:via-teal-900 dark:to-violet-900" />
    </div>
  );
}
