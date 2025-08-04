import { Badge } from "@/components/ui/badge";
import { CodeXml, Palette, BrainCircuit, Users } from "lucide-react";

const skills = [
  { name: "React & Next.js", icon: <CodeXml /> },
  { name: "UI/UX Design", icon: <Palette /> },
  { name: "TypeScript", icon: <CodeXml /> },
  { name: "Tailwind CSS", icon: <Palette /> },
  { name: "Node.js", icon: <CodeXml /> },
  { name: "Figma", icon: <Palette /> },
  { name: "GenAI Prompting", icon: <BrainCircuit /> },
  { name: "Agile Methodologies", icon: <Users /> },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-headline text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <Badge 
            key={skill.name} 
            variant="outline" 
            className="text-sm font-body px-3 py-1.5 bg-card border-primary/30 transition-transform hover:scale-105 hover:bg-accent/50 flex items-center gap-2"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
}
