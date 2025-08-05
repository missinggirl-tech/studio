import * as React from "react";
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
    <div>
      <h2 className="text-3xl font-headline text-center font-bold mb-6">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <Badge 
            key={skill.name} 
            variant="secondary"
            className="text-xs font-body px-3 py-1.5 flex items-center gap-1.5"
          >
            {React.cloneElement(skill.icon, { size: 14 })}
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
