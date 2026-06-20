export default function Button({ children, variant = 'primary', onClick, href, className = '', type = 'button' }) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 border px-7 py-3 font-mono text-[10px] font-black uppercase tracking-[0.24em] transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#96ff00]';

  const variants = {
    primary: 'border-[#96ff00] bg-[#96ff00] text-black hover:bg-[#c7ff4c]',
    outline: 'border-white/20 bg-black text-white hover:border-[#96ff00] hover:text-[#96ff00]',
    ghost: 'border-transparent text-white/70 hover:text-[#96ff00]',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
