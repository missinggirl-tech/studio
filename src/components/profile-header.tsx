import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileHeader() {
  return (
    <section id="about" className="flex flex-col items-center gap-6 text-center bento-item">
      <Avatar className="w-32 h-32 md:w-36 md:h-36 border-4 border-primary/50 shadow-lg">
        <AvatarImage src="https://placehold.co/144x144.png" alt="Sahana" data-ai-hint="woman portrait" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-headline text-white">Sahana</h1>
        <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-2xl">
          I am a NIAT student from Crescent Campus, passionate about technology, innovation, and creative design.
        </p>
      </div>
    </section>
  );
}
