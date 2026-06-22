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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black px-4 py-4 font-mono sm:px-5 lg:px-9 lg:py-5">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-10">
          <a href="#" className="block shrink-0" aria-label="DTIHE home">
            <img src="/assets/dtihe-logo.png" alt="DTIHE" className="h-6 w-auto sm:h-7 lg:h-8" />
          </a>

          <nav className="hidden justify-center gap-6 text-[10px] uppercase tracking-wider text-white/70 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative shrink-0 py-2 hover:text-[#96ff00] ${link.label === 'Mission' ? 'text-[#96ff00] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#96ff00]' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Button href="#contact" className="min-w-[96px] px-3 py-3 text-[9px] tracking-[0.08em] sm:min-w-[116px] sm:px-5 sm:text-[10px] lg:min-w-[148px] lg:px-7">
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
