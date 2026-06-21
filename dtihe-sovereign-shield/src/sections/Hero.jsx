import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-28 h-80 w-72 opacity-55 grid-mark"></div>
      <div className="pointer-events-none absolute right-6 top-0 h-28 w-32 opacity-35 grid-mark"></div>
      <div className="pointer-events-none absolute bottom-12 right-10 h-24 w-24 border-b border-r border-white/35"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full max-w-7xl border-x border-white/5"></div>

      <div className="blueprint-frame mx-auto flex min-h-[460px] max-w-7xl flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[560px] sm:px-6">
        <div className="mb-14 inline-flex max-w-full border border-[#96ff00]/35 bg-[#10170c] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#96ff00] sm:mb-20 sm:px-5 sm:text-xs sm:tracking-[0.16em]">
          <span className="mr-3">[]</span> 20th - 22nd August 2026
        </div>

        <p className="text-xl font-black uppercase leading-none tracking-[-0.03em] text-[#96ff00] sm:text-3xl">
          Defence Tech Innovation
        </p>
        <h1 className="mt-1 text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#96ff00] sm:text-7xl lg:text-8xl">
          Hackathon
        </h1>
        <p className="mt-3 text-xl font-black uppercase text-white sm:text-2xl">& Exhibition</p>
        <p className="mt-9 text-lg font-black uppercase tracking-[-0.03em] text-white sm:text-xl">
          The Sovereign Shield
        </p>

        <div className="mt-12 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <Button href="#contact" className="w-full sm:w-auto">Enlist Now</Button>
          <Button variant="outline" href="#mission" className="w-full sm:w-auto">Download Briefing</Button>
        </div>
      </div>
    </section>
  );
}
