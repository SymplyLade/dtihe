import { useState } from 'react';
import Button from '../components/Button';

export default function Contact() {
  const [form, setForm] = useState({ organization: '', email: '', subject: '', message: '' });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Partnership inquiry submitted:', form);
  };

  const fieldClass = 'w-full border border-white/10 bg-[#070807] px-4 py-4 font-mono text-xs text-white outline-none transition placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-white/30 focus:border-[#96ff00]';
  const labelClass = 'font-mono text-[11px] uppercase tracking-[0.08em] text-white/60';

  return (
    <section id="contact" className="bg-[#111312] px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="blueprint-frame blueprint-dots mx-auto grid max-w-7xl gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-12">
        <div>
          <h2 className="max-w-lg text-3xl font-black uppercase leading-none text-white sm:text-5xl">
            Secure Programme <span className="block text-[#96ff00]">Partnership</span>
          </h2>
          <ul className="mt-8 space-y-5 text-base font-black text-white sm:mt-10 sm:space-y-6 sm:text-xl">
            {['Formalize Strategic Partnership', 'Secure Programme Implementation Support', 'Co-create Challenge Areas'].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="font-mono text-[#96ff00]">-&gt;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="border border-[#96ff00]/45 bg-[#1b1d1b] p-5 sm:p-8">
          <p className="border-b border-white/10 pb-4 font-mono text-[11px] font-black uppercase tracking-[0.12em] text-white">Initiate_Contact_Sequence</p>

          <div className="mt-7 space-y-5">
            <div className="space-y-2">
              <label className={labelClass} htmlFor="organization">Identify (Organization/Rank)</label>
              <input id="organization" type="text" name="organization" value={form.organization} onChange={handleInput} className={fieldClass} required />
            </div>
            <div className="space-y-2">
              <label className={labelClass} htmlFor="email">Communication Channel (Email)</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleInput} className={fieldClass} placeholder="business@defcomm.ng" required />
            </div>
            <div className="space-y-2">
              <label className={labelClass} htmlFor="subject">Subject of Inquiry</label>
              <input id="subject" type="text" name="subject" value={form.subject} onChange={handleInput} className={fieldClass} placeholder="Subject of inquiry" />
            </div>
            <div className="space-y-2">
              <label className={labelClass} htmlFor="message">Encrypted Message</label>
              <textarea id="message" rows="5" name="message" value={form.message} onChange={handleInput} className={`${fieldClass} resize-none`} required></textarea>
            </div>
          </div>

          <Button type="submit" className="mt-6 w-full">
            Send Transmission
          </Button>
        </form>
      </div>
    </section>
  );
}
