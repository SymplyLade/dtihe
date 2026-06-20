export default function SectionTitle({ numeral, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 ${isCenter ? 'mx-auto text-center' : ''}`}>
      {numeral && (
        <p className={`micro-label mb-2 ${isCenter ? 'text-center' : ''}`}>
          {numeral}
        </p>
      )}
      <h2 className={`max-w-4xl text-3xl font-black uppercase leading-none tracking-[-0.03em] text-zinc-100 sm:text-5xl ${isCenter ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      <div className={`mt-2 h-px w-72 max-w-full bg-[#96ff00] ${isCenter ? 'mx-auto' : ''}`}></div>
      {subtitle && (
        <p className={`micro-label mt-3 max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
