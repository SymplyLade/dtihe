import Button from '../components/Button';

export default function Header() {
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black px-5 py-5 font-mono lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#" className="block shrink-0" aria-label="DTIHE home">
          <img src="/assets/dtihe-logo.png" alt="DTIHE" className="h-6 w-auto sm:h-7" />
        </a>

        <nav className="hidden items-center gap-9 text-[10px] uppercase tracking-wider text-white/70 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={`${link.label}-${index}`}
              href={link.href}
              className={index === 0 ? 'text-[#96ff00] underline decoration-[#96ff00] underline-offset-4' : 'transition hover:text-[#96ff00]'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" className="px-5 py-3">
          Enlist Now
        </Button>
      </div>

      <nav className="mx-auto mt-4 flex max-w-7xl gap-5 overflow-x-auto pb-1 text-[10px] uppercase tracking-wider text-white/70 lg:hidden">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="shrink-0 hover:text-[#96ff00]">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
