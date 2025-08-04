import { ProfileHeader } from '@/components/profile-header';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Suggestions } from '@/components/suggestions';
import { Background } from '@/components/background';
import { BentoGrid } from '@/components/bento-grid';

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
      <footer className="py-6 z-[1]">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Amreen Sahana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
