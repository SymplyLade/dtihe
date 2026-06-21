import Header from './sections/Header';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Sectors from './sections/Sectors';
import Partners from './sections/Partners';
import Speakers from './sections/Speakers';
import Timeline from './sections/Timeline';
import Metrics from './sections/Metrics';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-[#96ff00] selection:text-black">
      <Header />
      <main className="w-full">
        <Hero />
        <Mission />
        <Sectors />
        <Partners />
        <Speakers />
        <Timeline />
        <Metrics />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#0d0f0e] px-4 py-7 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55 sm:px-6 sm:tracking-[0.22em] lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span className="text-[#96ff00]">The Sovereign Shield</span>
          <span className="flex gap-6 underline underline-offset-4 sm:gap-8">
            <a href="#contact">Privacy</a>
            <a href="#contact">Contact</a>
          </span>
          <span>(C) 2026 Defcomm Solutions and Company</span>
        </div>
      </footer>
    </div>
  );
}
