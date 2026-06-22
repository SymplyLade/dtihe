import { useState } from 'react';
import Button from '../components/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'About', href: '#mission' },
    { label: 'Challenges', href: '#sectors' },
    { label: 'Teams', href: '#speakers' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Mentorship', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black px-4 py-4 font-mono sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-8">
          <a href="#" className="block shrink-0" aria-label="DTIHE home">
            <img src="/assets/dtihe-logo.png" alt="DTIHE" className="h-6 w-auto sm:h-7" />
          </a>

          <nav className="hidden justify-center gap-6 text-[10px] uppercase tracking-wider text-white/70 md:flex lg:gap-9">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="shrink-0 hover:text-[#96ff00]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Button href="#contact" className="hidden min-w-[138px] px-7 py-4 text-[10px] tracking-[0.24em] sm:inline-flex lg:min-w-[184px] lg:py-5">
              Enlist Now
            </Button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white md:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="flex w-4 flex-col gap-1">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 grid gap-3 border-t border-white/10 pt-4 text-[10px] uppercase tracking-wider text-white/70 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 hover:text-[#96ff00]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
