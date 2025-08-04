'use client';

import { useState } from 'react';
import { suggestConnections } from '@/ai/flows/suggest-connections';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

type SuggestionEngineProps = {
  profileInformation: string;
};

export function SuggestionEngine({ profileInformation }: SuggestionEngineProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggest = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);
    try {
      const result = await suggestConnections({ profileInformation });
      setSuggestions(result.suggestions);
    } catch (e) {
      setError('Failed to get suggestions. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Button onClick={handleSuggest} disabled={isLoading} size="lg" className="shadow-md">
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <Wand2 className="mr-2" />
              Generate Suggestions
            </>
          )}
        </Button>
      </div>

      {isLoading && (
        <div className="grid gap-4 md:grid-cols-2">
          {[...Array(2)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6 space-y-2">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {error && <p className="text-center text-destructive">{error}</p>}

      {!isLoading && suggestions.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 animate-in fade-in-50">
          {suggestions.map((suggestion, index) => (
            <Card key={index} className="bg-accent/30 border-accent hover:border-primary transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <span className="text-primary pt-1">
                  <Sparkles />
                </span>
                <p className="font-body">{suggestion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
