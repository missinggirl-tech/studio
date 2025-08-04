import { Button } from "./ui/button";
import { SuggestionEngine } from "./suggestion-engine";
import { Github, Linkedin } from "lucide-react";

export function Suggestions() {
  const sahanaProfile = `
    Name: Amreen Sahana
    Introduction: A creative and passionate individual with a love for technology and design. Exploring the intersection of art and code to build beautiful, user-centric experiences.
    Skills: React, Next.js, UI/UX Design, TypeScript, Tailwind CSS, Node.js, Figma, GenAI Prompting, Agile Methodologies.
    Experience: 
    - Lead Frontend Developer at TechCorp (2021-Present): Led development of a large-scale e-commerce platform.
    - UI/UX Designer at CreativeMinds (2019-2021): Designed intuitive user interfaces for mobile and web apps.
    - B.Sc. in Computer Science, specializing in Human-Computer Interaction.
  `;

  return (
    <section id="suggestions" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline">Smart Suggestions for Amreen Sahana</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Discover new connections and opportunities based on my profile, powered by AI. Click the button to see what it comes up with!</p>
        <div className="flex justify-center items-center gap-4 mt-4">
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-transparent/10 rounded-full">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-transparent/10 rounded-full">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
      </div>
      <SuggestionEngine profileInformation={sahanaProfile} />
    </section>
  );
}
