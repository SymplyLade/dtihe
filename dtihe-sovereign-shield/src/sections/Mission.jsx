import SectionTitle from '../components/SectionTitle';

export default function Mission() {
  const risks = [
    ['△', 'Cyber Vulnerability', 'Rapidly rising cyber attacks on critical national infrastructure.'],
    ['⌘', 'Infrastructural Gaps', 'Over-reliance on non-indigenous digital infrastructure.'],
    ['♙', 'Talent Depletion', 'Fragmented talent pipeline in defense engineering.'],
  ];

  return (
    <section id="mission" className="figma-section border-b border-white/10">
      <div className="blueprint-frame blueprint-dots mx-auto grid max-w-7xl gap-10 p-6 md:grid-cols-[1fr_1.05fr] lg:p-10">
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
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border border-[#96ff00]/35 bg-[#101211]">
          <img
            src="/assets/mission-monitor.jpg"
            alt="Secure threat monitoring command room"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-6 right-6 border border-white/20 bg-[#1f211f] px-5 py-4 font-mono text-xs uppercase tracking-[0.12em] text-white">
            Secure_Threat_Monitor_V4.0
          </div>
        </div>
      </div>
    </section>
  );
}
