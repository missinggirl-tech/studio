import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, School } from 'lucide-react';

const experiences = [
  {
    icon: <Briefcase />,
    title: "Lead Frontend Developer at TechCorp",
    period: "2021 - Present",
    description: "Led the development of a large-scale e-commerce platform, improving performance by 30% and mentoring junior developers.",
    tags: ["React", "Next.js", "TypeScript", "Team Leadership"]
  },
  {
    icon: <Briefcase />,
    title: "UI/UX Designer at CreativeMinds",
    period: "2019 - 2021",
    description: "Designed intuitive user interfaces for mobile and web applications, conducted user research, and created high-fidelity prototypes.",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"]
  },
  {
    icon: <School />,
    title: "B.Sc. in Computer Science, University of Technology",
    period: "2015 - 2019",
    description: "Graduated with honors, specializing in Human-Computer Interaction and building a strong foundation in software engineering principles.",
    tags: ["HCI", "Algorithms", "Data Structures"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-headline text-center">Experience & Education</h2>
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.title} className={`flex items-start gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="hidden md:flex items-center justify-center relative">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground z-10 ring-8 ring-background">
                  {exp.icon}
                </span>
              </div>
              <Card className={`w-full md:w-[calc(50%-2rem)] transition-all duration-300 hover:shadow-xl hover:border-primary ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
                      <CardDescription>{exp.period}</CardDescription>
                    </div>
                    <span className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground flex-shrink-0">
                      {exp.icon}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
