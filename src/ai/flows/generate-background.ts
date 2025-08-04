'use server';
/**
 * @fileOverview A flow for generating a background image.
 *
 * - generateBackground - A function that generates a background image from a prompt.
 * - GenerateBackgroundInput - The input type for the generateBackground function.
 * - GenerateBackgroundOutput - The return type for the generateBackground function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBackgroundInputSchema = z.object({
  prompt: z.string().describe('The prompt to use for image generation.'),
});
export type GenerateBackgroundInput = z.infer<typeof GenerateBackgroundInputSchema>;

const GenerateBackgroundOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateBackgroundOutput = z.infer<typeof GenerateBackgroundOutputSchema>;

export async function generateBackground(input: GenerateBackgroundInput): Promise<GenerateBackgroundOutput> {
  return generateBackgroundFlow(input);
}

const generateBackgroundFlow = ai.defineFlow(
  {
    name: 'generateBackgroundFlow',
    inputSchema: GenerateBackgroundInputSchema,
    outputSchema: GenerateBackgroundOutputSchema,
  },
  async ({prompt}) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media.url) {
      throw new Error('Image generation failed');
    }

    return {
      imageUrl: media.url,
    };
  }
);
