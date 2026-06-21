import SectionTitle from '../components/SectionTitle';

export default function Mission() {
  const risks = [
    ['△', 'Cyber Vulnerability', 'Rapidly rising cyber attacks on critical national infrastructure.'],
    ['⌘', 'Infrastructural Gaps', 'Over-reliance on non-indigenous digital infrastructure.'],
    ['♙', 'Talent Depletion', 'Fragmented talent pipeline in defense engineering.'],
  ];

  return (
    <section id="mission" className="figma-section border-b border-white/10">
      <div className="blueprint-frame blueprint-dots mx-auto grid max-w-7xl gap-8 p-5 md:grid-cols-[1fr_1.05fr] lg:gap-10 lg:p-10">
        <div>
          <SectionTitle title="Mission Critical" />
          <p className="max-w-xl text-sm leading-7 text-zinc-200 sm:text-base">
            Nigeria's digital transformation is accelerating at an unprecedented pace. To safeguard our future, we must build <span className="text-[#96ff00]">sovereign technological capability.</span> The Sovereign Shield is the vanguard of indigenous defence innovation.
          </p>

          <div className="mt-8 space-y-4">
            {risks.map(([icon, title, desc]) => (
              <div key={title} className="terminal-panel border-l-2 border-l-[#ffaaa6] p-4 font-mono">
                <div className="flex gap-4">
                  <span className="text-lg text-[#ffaaa6]">{icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#ffaaa6]">{title}</p>
                    <p className="mt-1 text-[10px] font-black uppercase leading-4 tracking-[0.08em] text-white sm:tracking-[0.18em]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[260px] overflow-hidden border border-[#96ff00]/35 bg-[#101211] sm:min-h-[360px]">
          <img
            src="/assets/mission-monitor.jpg"
            alt="Secure threat monitoring command room"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 right-4 max-w-[calc(100%-2rem)] border border-white/20 bg-[#1f211f] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-white sm:bottom-6 sm:right-6 sm:px-5 sm:py-4 sm:text-xs sm:tracking-[0.12em]">
            Secure_Threat_Monitor_V4.0
          </div>
        </div>
      </div>
    </section>
  );
}
