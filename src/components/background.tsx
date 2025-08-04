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
            "Vivid dark blue cosmic website background, swirling galaxies, blue and indigo nebulae, sparkling stars, glowing clouds, deep gradients, modern style, immersive and luminous, no non-cosmic elements.",
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
      className="absolute inset-0 -z-10 bg-cover bg-center animate-move-bg"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '150% 150%',
      }}
    />
  );
}
