import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black px-4 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-28 h-80 w-72 opacity-55 grid-mark"></div>
      <div className="pointer-events-none absolute right-6 top-0 h-28 w-32 opacity-35 grid-mark"></div>
      <div className="pointer-events-none absolute bottom-12 right-10 h-24 w-24 border-b border-r border-white/35"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full max-w-7xl border-x border-white/5"></div>

      <div className="blueprint-frame mx-auto flex min-h-[560px] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-20 inline-flex border border-[#96ff00]/35 bg-[#10170c] px-5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#96ff00]">
          <span className="mr-3">▱</span> 20th - 22nd August 2026
        </div>

        <p className="text-2xl font-black uppercase leading-none tracking-[-0.05em] text-[#96ff00] sm:text-3xl">
          Defence Tech Innovation
        </p>
        <h1 className="mt-1 text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#96ff00] sm:text-7xl lg:text-8xl">
          Hackathon
        </h1>
        <p className="mt-3 text-xl font-black uppercase text-white sm:text-2xl">& Exhibition</p>
        <p className="mt-9 text-lg font-black uppercase tracking-[-0.03em] text-white sm:text-xl">
          The Sovereign Shield
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button href="#contact">Enlist Now</Button>
          <Button variant="outline" href="#mission">Download Briefing</Button>
        </div>
      </div>
    </section>
  );
}
