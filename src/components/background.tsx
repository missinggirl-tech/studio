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
            'A visually stunning background featuring a large, ornate clock with Roman numerals, set against a swirling cosmic scene with stars, clouds, and celestial elements. The overall mood should be mystical and dreamlike, with a sense of time and space blending together. Use dramatic lighting and deep, vibrant colors to create an immersive, otherworldly atmosphere.',
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
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
  );
}
