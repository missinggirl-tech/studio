import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github } from "lucide-react";
import { Button } from './ui/button';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a custom CMS, payment integration, and a responsive user-friendly interface.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Project Management Tool",
    description: "A web application to help teams manage tasks, track progress, and collaborate effectively, with real-time updates.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task board",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "This very website! Built to showcase my skills and projects, featuring a modern design and powered by Next.js.",
    tags: ["Next.js", "Genkit", "ShadCN UI"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website",
    demoUrl: "#",
    githubUrl: "#"
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-headline text-center font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bento-item group flex flex-col overflow-hidden">
            <div className="relative overflow-hidden rounded-lg">
              <Image 
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="flex-grow pt-4 flex flex-col">
              <h3 className="font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <Button asChild size="sm">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                     <Github /> Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
