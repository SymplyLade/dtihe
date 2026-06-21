export default function Speakers() {
  const speakersData = [
    { name: 'Nsikak J. Nelson', role: 'CEO / CTO', dept: 'Defcomm Solutions' },
    { name: 'Nsikak J. Nelson', role: 'CEO / CTO', dept: 'Defcomm Solutions' },
    { name: 'Nsikak J. Nelson', role: 'CEO / CTO', dept: 'Defcomm Solutions' },
  ];

  return (
    <section id="speakers" className="relative overflow-hidden border-y border-white/10 bg-[#111714] px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="pointer-events-none absolute inset-y-0 right-[18%] w-56 bg-[#96ff00]/[0.035] [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]"></div>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase leading-none text-zinc-100">Speakers</h2>
          <p className="micro-label mt-2">Promoting defence innovation</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {speakersData.map((speaker, idx) => (
            <article key={`${speaker.name}-${idx}`} className="font-mono">
              <div className="relative aspect-[1.08/1] border-[3px] border-[#2d3c22] bg-black grayscale">
                <img
                  src="/assets/speaker-nsikak.jpg"
                  alt={speaker.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white/80 to-transparent"></div>
              </div>
              <h3 className="mt-3 text-sm font-black uppercase leading-none tracking-wide text-white">{speaker.name}</h3>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#96ff00]">{speaker.role}</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#96ff00]">{speaker.dept}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
