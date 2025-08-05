'use client';

import { useScrollspy } from '@/hooks/use-scrollspy';
import { cn } from '@/lib/utils';
import { Home } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const activeId = useScrollspy(
    navLinks.map((link) => link.href.substring(1)),
    {
      rootMargin: '0% 0% -80% 0%',
    }
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-nav">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#about" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Home/>
          <span className="sr-only">Home</span>
        </a>
        <nav className='flex items-center gap-2'>
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    activeId === link.href.substring(1)
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
           <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
