import { ProfileHeader } from '@/components/profile-header';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Suggestions } from '@/components/suggestions';
import { Background } from '@/components/background';
import { BentoGrid } from '@/components/bento-grid';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Background />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-16 z-[1]">
        <div className="space-y-8 md:space-y-12">
          <ProfileHeader />
          <BentoGrid />
          <Suggestions />
          <Contact />
        </div>
      </main>
      <footer className="py-8 z-[1] bento-item max-w-3xl mx-auto mb-8 text-center">
        <h2 className="text-3xl font-headline mb-4">Let's Connect</h2>
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-transparent/10 rounded-full">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-transparent/10 rounded-full">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
          <a href="mailto:amreensahana16@gmail.com" className="flex items-center justify-center gap-2 hover:text-primary transition-colors text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span>amreensahana16@gmail.com</span>
            </a>
          <p className='mt-6'>&copy; {new Date().getFullYear()} Amreen Sahana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
