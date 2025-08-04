import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileHeader() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
      <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary shadow-lg">
        <AvatarImage src="https://placehold.co/160x160.png" alt="Sahana" data-ai-hint="woman portrait" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <div className="space-y-2">
        <h1 className="text-5xl md:text-7xl font-headline text-foreground">Sahana</h1>
        <p className="mt-2 text-lg md:text-xl text-muted-foreground max-w-2xl">
          A creative and passionate individual with a love for technology and design. Exploring the intersection of art and code to build beautiful, user-centric experiences.
        </p>
      </div>
    </section>
  );
}
