import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, School } from 'lucide-react';

const experiences = [
  {
    icon: <Briefcase />,
    title: "Lead Frontend Developer",
    company: "TechCorp",
    period: "2021 - Present",
    description: "Led the development of a large-scale e-commerce platform, improving performance by 30% and mentoring junior developers.",
    tags: ["React", "Next.js", "TypeScript", "Team Leadership"]
  },
  {
    icon: <Briefcase />,
    title: "UI/UX Designer",
    company: "CreativeMinds",
    period: "2019 - 2021",
    description: "Designed intuitive user interfaces for mobile and web applications, conducted user research, and created high-fidelity prototypes.",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"]
  },
  {
    icon: <School />,
    title: "B.Sc. in Computer Science",
    company: "University of Technology",
    period: "2015 - 2019",
    description: "Graduated with honors, specializing in Human-Computer Interaction and building a strong foundation in software engineering principles.",
    tags: ["HCI", "Algorithms", "Data Structures"]
  }
];

export function Experience() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-headline text-center">Experience & Education</h2>
        {experiences.map((exp) => (
          <div key={exp.title} className="flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex-shrink-0 mt-1">
              {exp.icon}
            </span>
            <div>
              <h3 className="font-bold">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">{exp.company} &middot; {exp.period}</p>
              <p className="mt-2 text-sm">{exp.description}</p>
               <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
