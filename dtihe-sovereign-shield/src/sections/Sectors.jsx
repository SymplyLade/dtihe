export default function Sectors() {
  const SectorIcon = ({ type }) => {
    const iconClass = 'h-[15px] w-[15px] text-[#6ea31f]';
    const strokeProps = {
      fill: 'none',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.15,
    };

    const icons = {
      cyber: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path {...strokeProps} d="M12 3.5 18 6v5.4c0 3.7-2.3 7-6 8.1-3.7-1.1-6-4.4-6-8.1V6l6-2.5Z" />
          <path {...strokeProps} d="M12 7.5v7.2M8.8 9.4 12 7.5l3.2 1.9M8.8 12.8l3.2 1.9 3.2-1.9" />
        </svg>
      ),
      autonomous: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path {...strokeProps} d="M6.5 14.6h11l1.6-3.9-3.3-3.2H8.2l-3.3 3.2 1.6 3.9Z" />
          <path {...strokeProps} d="M9 7.5 12 4l3 3.5M8.8 14.6v2.2M15.2 14.6v2.2M9 10.9h.1M15 10.9h.1M10.4 12.7h3.2" />
        </svg>
      ),
      aerospace: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path {...strokeProps} d="M14.6 4.5c1.8-.8 3.6-.9 4.9-.2.7 1.3.6 3.1-.2 4.9-.8 1.9-2.4 3.9-4.6 5.5l-5.4-5.4c1.6-2.2 3.4-3.9 5.3-4.8Z" />
          <path {...strokeProps} d="m8.8 9.8-3.5.4 2.4 2.4M14.2 15.2l-.4 3.5-2.4-2.4M14.6 8.2h.1M6 18l2.2-2.2M4.5 14.8l1.2-1.2" />
        </svg>
      ),
      soldier: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path {...strokeProps} d="M12 3.7 18 6v5.2c0 3.7-2.4 6.8-6 8.1-3.6-1.3-6-4.4-6-8.1V6l6-2.3Z" />
          <path {...strokeProps} d="M9.3 10.2h5.4M9.3 12.7h5.4M11.1 15.1h1.8" />
        </svg>
      ),
      health: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path {...strokeProps} d="M8 8.5V6.8c0-1 .8-1.8 1.8-1.8h4.4c1 0 1.8.8 1.8 1.8v1.7M6.7 8.5h10.6c1.2 0 2.2 1 2.2 2.2v6.1c0 1.2-1 2.2-2.2 2.2H6.7c-1.2 0-2.2-1-2.2-2.2v-6.1c0-1.2 1-2.2 2.2-2.2Z" />
          <path {...strokeProps} d="M12 11.2v5M9.5 13.7h5" />
        </svg>
      ),
    };

    return icons[type];
  };

  const sectorsData = [
    { icon: 'cyber', title: 'Cybersecurity & Secure Communications', desc: 'Quantum-safe encryption and perimeter defense protocols.' },
    { icon: 'autonomous', title: 'Autonomous Systems & AI Defence', desc: 'Neural networks for threat detection and UAV coordination.' },
    { icon: 'aerospace', title: 'Aerospace & Satellite Security', desc: 'Hardening orbital assets and secure downlinks.' },
    { icon: 'soldier', title: 'Soldier Systems & Tactical Tech', desc: 'HUD systems and biometric field monitoring.' },
    { icon: 'health', title: 'Digital Health for Field Operations', desc: 'Remote trauma care and secure health telemetry.' },
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
            <p>Grid_coordinates: 09.0765 N, 07.3986 E</p>
            <p>Status: System_Active</p>
          </div>
        </div>

        <div className="grid md:grid-cols-5">
          {sectorsData.map((sector, index) => (
            <article
              key={sector.title}
              className={`min-h-[175px] border-r border-white/15 p-6 ${
                index === 0 ? 'bg-[#111b08] shadow-[inset_0_-3px_0_#96ff00]' : 'bg-black'
              }`}
            >
              <div className="mb-5 flex h-5 items-center">
                <SectorIcon type={sector.icon} />
              </div>
              <h3 className="text-[11px] font-black uppercase leading-4 tracking-wide text-white">{sector.title}</h3>
              <p className="mt-3 font-mono text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-white/75">{sector.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
