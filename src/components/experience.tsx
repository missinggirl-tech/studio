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
    <section id="experience" className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-headline text-center">Experience & Education</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.title} className="transition-all duration-300 hover:shadow-lg border-primary/20">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
                <CardDescription>{exp.company} &middot; {exp.period}</CardDescription>
                <p className="mt-3 text-muted-foreground">{exp.description}</p>
              </div>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground flex-shrink-0">
                {exp.icon}
              </span>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
