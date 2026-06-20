export default function Partners() {
  const partners = ['ONDI', 'DEFCOMM', 'ONDI', 'ONDI', 'DEFCOMM'];

  return (
    <section className="bg-black px-4 pb-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black uppercase leading-none text-zinc-100 sm:text-4xl">Partners</h2>
        <p className="micro-label mt-2">Promoting defence innovation</p>
        <div className="mt-14 grid grid-cols-2 items-center gap-10 sm:grid-cols-5">
          {partners.map((partner, index) => (
            <div key={`${partner}-${index}`} className="text-center text-white">
              <div className="text-3xl font-black tracking-[-0.08em]">{partner}</div>
              {partner === 'ONDI' && <p className="mt-1 text-[10px] font-black uppercase leading-3">Office for<br />Nigerian Digital<br />Innovation</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
