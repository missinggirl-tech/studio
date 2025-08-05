import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a custom CMS, payment integration, and a responsive user-friendly interface.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    link: "#"
  },
  {
    title: "Project Management Tool",
    description: "A web application to help teams manage tasks, track progress, and collaborate effectively, with real-time updates.",
    tags: ["React", "Firebase", "Tailwind CSS", "Trello API"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task board",
    link: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "This very website! Built to showcase my skills and projects, featuring a modern design and powered by Next.js.",
    tags: ["Next.js", "Genkit", "ShadCN UI", "Vercel"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website",
    link: "#"
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-3xl font-headline text-center font-bold">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="bento-item group !p-4 flex flex-col">
            <div className="relative mb-4">
              <Image 
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto transition-transform group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
            <ExternalLink className="absolute top-6 right-6 h-5 w-5 text-background/80 group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
}
