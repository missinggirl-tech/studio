'use client';

import { useState, useEffect } from 'react';
import { generateBackground } from '@/ai/flows/generate-background';
import { Skeleton } from '@/components/ui/skeleton';

export function Background() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const result = await generateBackground({
          prompt:
            "A professional, elegant, and abstract background with soft, ethereal light and subtle gradients of lavender and pale violet. The design should be clean, modern, and minimalist, with a gentle, calming feel. No hard edges or distracting elements.",
        });
        setImageUrl(result.imageUrl);
      } catch (e) {
        console.error(e);
        setError('Could not generate background image.');
      }
    };

    fetchBackground();
  }, []);

  if (error) {
    return (
      <div className="absolute inset-0 -z-10 bg-destructive/10 flex items-center justify-center">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <Skeleton className="absolute inset-0 -z-10" />
    );
  }

  return (
    <>
      <div
        className="absolute inset-0 -z-20 bg-background"
      />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center animate-move-bg"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: '150% 150%',
        }}
      />
    </>
  );
}
