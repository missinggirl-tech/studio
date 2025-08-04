'use server';

/**
 * @fileOverview Provides AI-powered suggestions for relevant connections or opportunities for Sahana based on her profile information.
 *
 * - suggestConnections - A function that generates connection/opportunity suggestions.
 * - SuggestConnectionsInput - The input type for the suggestConnections function.
 * - SuggestConnectionsOutput - The return type for the suggestConnections function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestConnectionsInputSchema = z.object({
  profileInformation: z
    .string()
    .describe("Sahana's profile information, including skills, experience, and interests."),
});
export type SuggestConnectionsInput = z.infer<typeof SuggestConnectionsInputSchema>;

const SuggestConnectionsOutputSchema = z.object({
  suggestions: z.array(
    z.string().describe('A suggested connection or opportunity for Sahana.')
  ).describe('A list of suggested connections or opportunities.'),
});
export type SuggestConnectionsOutput = z.infer<typeof SuggestConnectionsOutputSchema>;

export async function suggestConnections(input: SuggestConnectionsInput): Promise<SuggestConnectionsOutput> {
  return suggestConnectionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestConnectionsPrompt',
  input: {schema: SuggestConnectionsInputSchema},
  output: {schema: SuggestConnectionsOutputSchema},
  prompt: `You are an AI assistant that helps people find relevant connections and opportunities.

  Based on the following profile information, suggest some relevant connections or opportunities for the user.

  Profile Information: {{{profileInformation}}}

  Suggestions should be specific and actionable.
  Return the suggestions as a list of strings.
  `,
});

const suggestConnectionsFlow = ai.defineFlow(
  {
    name: 'suggestConnectionsFlow',
    inputSchema: SuggestConnectionsInputSchema,
    outputSchema: SuggestConnectionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
