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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black px-4 py-4 font-mono sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-start justify-between gap-4">
        <a href="#" className="block shrink-0" aria-label="DTIHE home">
          <img src="/assets/dtihe-logo.png" alt="DTIHE" className="h-6 w-auto sm:h-7" />
        </a>

        <Button href="#contact" className="hidden min-w-[138px] px-7 py-4 sm:inline-flex lg:min-w-[184px] lg:py-5">
          Enlist Now
        </Button>
        </div>

      <nav className="mt-5 flex gap-6 overflow-x-auto pb-1 text-[10px] uppercase tracking-wider text-white/70 sm:gap-8 lg:gap-9">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="shrink-0 hover:text-[#96ff00]">
            {link.label}
          </a>
        ))}
      </nav>
      </div>
    </header>
  );
}
