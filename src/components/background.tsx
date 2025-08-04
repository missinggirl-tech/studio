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
          prompt: "A highly visually stunning and professional galaxy-themed website background with deeply rich and swirling gradients of deep blues, indigos, purples, and magentas. Feature prominent, yet soft and glowing, nebulae and sparkling, distant stars. The composition should feel incredibly immersive and luminous, with a strong, subtle cosmic glow adding significant depth. The center must remain absolutely clear and uncluttered for content display. Exclusively include elements strictly cosmic in nature. The final result should be exceptionally clean and ideal for a high-end personal portfolio or professional brand site.",
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
