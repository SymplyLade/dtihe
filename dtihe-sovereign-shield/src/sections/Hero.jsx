import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black px-4 py-14 sm:px-8 sm:py-20 lg:px-2 lg:py-0">
      <div className="pointer-events-none absolute left-5 top-20 h-80 w-72 opacity-55 grid-mark lg:left-0 lg:top-24 lg:h-[420px] lg:w-[380px]"></div>
      <div className="pointer-events-none absolute right-6 top-0 h-28 w-32 opacity-35 grid-mark lg:right-4 lg:h-40 lg:w-52"></div>
      <div className="pointer-events-none absolute bottom-12 right-10 h-24 w-24 border-b border-r border-white/35 lg:bottom-16 lg:right-16 lg:h-28 lg:w-28"></div>
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full max-w-[1360px] border-x border-white/5"></div>

      <div className="blueprint-frame mx-auto flex min-h-[460px] max-w-[1360px] flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[560px] sm:px-6 lg:min-h-[642px] lg:justify-start lg:pt-[118px]">
        <div className="mb-14 inline-flex max-w-full border border-[#96ff00]/35 bg-[#10170c] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#96ff00] sm:mb-20 sm:px-5 sm:text-xs sm:tracking-[0.16em] lg:mb-[126px]">
          <span className="mr-3">[]</span> 20th - 22nd August 2026
        </div>

        <div className="mx-auto w-full max-w-[760px]">
          <p className="text-left text-xl font-black uppercase leading-none tracking-[-0.02em] text-[#96ff00] sm:text-3xl lg:text-[32px]">
            Defence Tech Innovation
          </p>
          <div className="mt-1 flex flex-col items-center justify-center sm:flex-row sm:items-end sm:gap-3">
            <h1 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.04em] text-[#96ff00] sm:text-7xl lg:text-[86px]">
              Hackathon
            </h1>
            <p className="mt-3 text-xl font-black uppercase leading-none text-white sm:mb-1 sm:mt-0 sm:text-2xl lg:mb-2">
              & Exhibition
            </p>
          </div>
          <p className="mt-9 text-lg font-black uppercase tracking-[-0.01em] text-white sm:text-xl lg:mt-12 lg:text-2xl">
            The Sovereign Shield
          </p>
        </div>

        <div className="mt-12 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row lg:mt-16">
          <Button href="#contact" className="w-full sm:w-auto">Enlist Now</Button>
          <Button variant="outline" href="#mission" className="w-full sm:w-auto">Download Briefing</Button>
        </div>
      </div>
    </section>
  );
}
