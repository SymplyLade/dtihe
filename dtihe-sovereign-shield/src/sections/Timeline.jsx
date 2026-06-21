export default function Timeline() {
  const phases = [
    { title: 'Strategic Briefing', day: 'Day 01', desc: 'Launch, team registration, and high-level defense briefings.', side: 'left', marker: '01' },
    { title: 'Innovation Sprint', day: 'Day 02', desc: '24-hour non-stop prototyping and pressure-testing solutions.', side: 'right', marker: '02' },
    { title: 'Prototype Demo', day: 'Day 03', desc: 'Awards, prize ceremony, and live demonstration of tactical tools.', side: 'left', marker: '03' },
    { title: 'Incubation', day: 'Continuous', desc: 'Post-event support, venture scaling, and defense integration.', side: 'right', marker: '++' },
  ];

  return (
    <section id="timeline" className="figma-section border-b border-white/10">
      <div className="blueprint-frame blueprint-dots mx-auto max-w-7xl px-5 py-5 sm:px-10">
        <h2 className="text-center text-[30px] font-black uppercase leading-none text-zinc-100 sm:text-[42px]">Programme Phases</h2>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/15 md:block"></div>
          <div className="space-y-14 md:space-y-20">
            {phases.map((phase) => (
              <div key={phase.title} className="grid items-start gap-5 md:grid-cols-[1fr_76px_1fr]">
                <div className={phase.side === 'left' ? 'md:text-right' : 'hidden pt-7 md:flex md:justify-end'}>
                  {phase.side === 'left' ? <PhaseCopy phase={phase} align="left" /> : <DayLabel day={phase.day} />}
                </div>
                <div className="relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#96ff00] font-mono text-[12px] font-black text-black">
                  {phase.marker}
                </div>
                <div className={phase.side === 'right' ? '' : 'hidden pt-7 md:block'}>
                  {phase.side === 'right' ? <PhaseCopy phase={phase} /> : <DayLabel day={phase.day} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseCopy({ phase, align }) {
  return (
    <div>
      <h3 className="text-[18px] font-black uppercase leading-none text-[#96ff00]">{phase.title}</h3>
      <p className={`mt-3 max-w-[360px] font-mono text-[10px] uppercase leading-5 tracking-[0.03em] text-white/70 ${align === 'left' ? 'md:ml-auto' : ''}`}>
        {phase.desc}
      </p>
      <div className="mt-4 md:hidden"><DayLabel day={phase.day} /></div>
    </div>
  );
}

function DayLabel({ day }) {
  return <span className="inline-block border border-[#96ff00]/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#96ff00]">{day}</span>;
}
