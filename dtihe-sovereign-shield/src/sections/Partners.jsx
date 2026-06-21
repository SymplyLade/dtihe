export default function Partners() {
  const partners = ['ONDI', 'DEFCOMM', 'ONDI', 'ONDI', 'DEFCOMM'];

  return (
    <section className="bg-black px-4 pb-16 sm:px-8 sm:pb-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black uppercase leading-none text-zinc-100 sm:text-4xl">Partners</h2>
        <p className="micro-label mt-2">Promoting defence innovation</p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:mt-14 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
          {partners.map((partner, index) => (
            <div key={`${partner}-${index}`} className="flex h-14 min-w-0 items-center justify-center text-center text-white">
              {partner === 'ONDI' ? (
                <img
                  src="/assets/ondi-logo.jpg"
                  alt="Office for Nigerian Digital Innovation"
                  className="h-10 max-w-full object-contain sm:h-12"
                />
              ) : partner === 'DEFCOMM' ? (
                <img
                  src="/assets/defcomm-logo.jpg"
                  alt="DEFCOMM"
                  className="h-6 max-w-full object-contain sm:h-7"
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
