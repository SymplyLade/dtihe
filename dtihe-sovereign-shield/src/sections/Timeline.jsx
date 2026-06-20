export default function Timeline() {
  const phases = [
    { title: 'Strategic Briefing', day: 'Day 01', desc: 'Launch, team registration, and high-level defense briefings.', side: 'left', marker: '01' },
    { title: 'Innovation Sprint', day: 'Day 02', desc: '24-hour non-stop prototyping and pressure-testing solutions.', side: 'right', marker: '02' },
    { title: 'Prototype Demo', day: 'Day 03', desc: 'Awards, prize ceremony, and live demonstration of tactical tools.', side: 'left', marker: '03' },
    { title: 'Incubation', day: 'Continuous', desc: 'Post-event support, venture scaling, and defense integration.', side: 'right', marker: '++' },
  ];

  return (
    <section id="timeline" className="figma-section border-b border-white/10">
      <div className="blueprint-frame blueprint-dots mx-auto max-w-7xl px-5 py-10 sm:px-10">
        <h2 className="text-center text-4xl font-black uppercase leading-none text-zinc-100 sm:text-5xl">Programme Phases</h2>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/15 sm:block"></div>
          <div className="space-y-12">
            {phases.map((phase) => (
              <div key={phase.title} className="grid items-center gap-6 sm:grid-cols-[1fr_72px_1fr]">
                <div className={phase.side === 'left' ? 'text-right' : 'hidden sm:block'}>{phase.side === 'left' && <PhaseCopy phase={phase} />}</div>
                <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#96ff00] font-black text-black">{phase.marker}</div>
                <div>{phase.side === 'right' ? <PhaseCopy phase={phase} /> : <DayLabel day={phase.day} />}</div>
                {phase.side === 'right' && <div className="sm:hidden"><DayLabel day={phase.day} /></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseCopy({ phase }) {
  return (
    <div>
      <h3 className="text-xl font-black uppercase text-[#96ff00]">{phase.title}</h3>
      <p className="mt-2 font-mono text-[11px] uppercase leading-5 tracking-[0.08em] text-white/70">{phase.desc}</p>
      <div className="mt-5"><DayLabel day={phase.day} /></div>
    </div>
  );
}

function DayLabel({ day }) {
  return <span className="inline-block border border-[#96ff00]/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#96ff00]">{day}</span>;
}
