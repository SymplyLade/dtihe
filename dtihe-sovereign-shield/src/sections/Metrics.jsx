export default function Metrics() {
  const metricsData = [
    { val: '500', label: 'Innovators Nationwide' },
    { val: '120', label: 'Prototype Solutions', featured: true },
    { val: '10', label: 'Startups Identified', sub: 'Ready_for_deployment' },
  ];

  return (
    <section id="metrics" className="bg-black px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="micro-label mb-10 max-w-xs">Projecting national technological capability</p>
        <div className="blueprint-frame grid md:grid-cols-3">
          {metricsData.map((metric) => (
            <div key={metric.label} className={`flex min-h-[220px] items-center justify-center p-8 text-center ${metric.featured ? 'bg-[#96ff00] text-black' : 'bg-[#2b2d2c] text-[#96ff00]'}`}>
              <div>
                <div className={`${metric.featured ? 'text-8xl' : 'text-5xl'} font-black leading-none tracking-[-0.08em]`}>{metric.val}</div>
                <p className={`mt-4 font-mono text-[10px] uppercase tracking-[0.12em] ${metric.featured ? 'text-black' : 'text-white/70'}`}>{metric.label}</p>
                {metric.sub && <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/45">{metric.sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
