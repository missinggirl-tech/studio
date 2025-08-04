import { ProfileHeader } from '@/components/profile-header';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Suggestions } from '@/components/suggestions';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <header className="p-4 md:p-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
        <nav className="container mx-auto flex items-center justify-center md:justify-start">
          <h1 className="text-2xl font-headline text-primary-foreground bg-primary/90 px-3 py-1 rounded-md shadow-sm">Sahana's Space</h1>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-16 z-[1]">
        <div className="space-y-16 md:space-y-24">
          <ProfileHeader />
          <Skills />
          <Experience />
          <Suggestions />
          <Contact />
        </div>
      </main>
      <footer className="py-6 bg-muted/50 z-[1]">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Sahana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
