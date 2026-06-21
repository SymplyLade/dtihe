export default function Partners() {
  const partners = ['ONDI', 'DEFCOMM', 'ONDI', 'ONDI', 'DEFCOMM'];

  return (
    <section className="bg-black px-4 pb-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black uppercase leading-none text-zinc-100 sm:text-4xl">Partners</h2>
        <p className="micro-label mt-2">Promoting defence innovation</p>
        <div className="mt-14 grid grid-cols-2 items-center gap-10 sm:grid-cols-5">
          {partners.map((partner, index) => (
            <div key={`${partner}-${index}`} className="flex h-14 items-center justify-center text-center text-white">
              {partner === 'ONDI' ? (
                <img
                  src="/assets/ondi-logo.jpg"
                  alt="Office for Nigerian Digital Innovation"
                  className="h-12 w-auto object-contain"
                />
              ) : partner === 'DEFCOMM' ? (
                <img
                  src="/assets/defcomm-logo.jpg"
                  alt="DEFCOMM"
                  className="h-7 w-auto object-contain"
                />
              ) : (
                <div className="text-2xl font-black uppercase tracking-[-0.08em]">{partner}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
