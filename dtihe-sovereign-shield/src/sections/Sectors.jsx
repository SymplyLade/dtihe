export default function Sectors() {
  const sectorsData = [
    { icon: '♙', title: 'Cybersecurity & Secure Communications', desc: 'Quantum-safe encryption and perimeter defense protocols.' },
    { icon: '⌂', title: 'Autonomous Systems & AI Defence', desc: 'Neural networks for threat detection and UAV coordination.' },
    { icon: '⌁', title: 'Aerospace & Satellite Security', desc: 'Hardening orbital assets and secure downlinks.' },
    { icon: '⬡', title: 'Soldier Systems & Tactical Tech', desc: 'HUD systems and biometric field monitoring.' },
    { icon: '✚', title: 'Digital Health for Field Operations', desc: 'Remote trauma care and secure health telemetry.' },
  ];

  return (
    <section id="sectors" className="figma-section pb-12">
      <div className="blueprint-frame mx-auto max-w-6xl">
        <div className="grid border-b border-white/10 lg:grid-cols-[1fr_1fr]">
          <div className="p-8">
            <h2 className="text-3xl font-black uppercase leading-none text-zinc-100 sm:text-4xl">Operational Sectors</h2>
            <p className="micro-label mt-2">Primary innovation focus areas</p>
          </div>
          <div className="p-8 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-white/70">
            <p>Grid_coordinates: 09.0765° N, 07.3986° E</p>
            <p>Status: System_Active</p>
          </div>
        </div>

        <div className="grid md:grid-cols-5">
          {sectorsData.map((sector, index) => (
            <article key={sector.title} className={`min-h-[175px] border-r border-white/15 p-6 ${index === 0 ? 'bg-[#111b08] shadow-[inset_0_-3px_0_#96ff00]' : 'bg-black'}`}>
              <div className="mb-5 text-xl text-[#96ff00]">{sector.icon}</div>
              <h3 className="text-[11px] font-black uppercase leading-4 tracking-wide text-white">{sector.title}</h3>
              <p className="mt-3 font-mono text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-white/75">{sector.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
