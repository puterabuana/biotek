import { useState } from 'react';
import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { COMPANY } from '../lib/company.js';

const DETAILS = [
  {
    Icon: Mail,
    label: COMPANY.email,
    sub: 'For product and company enquiries',
    href: `mailto:${COMPANY.email}`,
  },
  {
    Icon: Phone,
    label: '021-21241300 / 021-21240000',
    sub: 'Official customer service lines',
    href: 'tel:+622121241300',
  },
  {
    Icon: MapPin,
    label: 'Jl. Cempaka Putih Tengah I No. 3A, Jakarta Pusat',
    sub: 'PT Biotek Farmasi Indonesia · 10510',
    href: `https://www.google.com/maps/search/${encodeURIComponent(COMPANY.address)}`,
  },
];

const TOPICS = ['Product advice', 'My order', 'Wholesale', 'Press'];

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event) => {
    event.preventDefault();

    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name';
    if (!isValidEmail(form.email)) next.email = 'That email does not look right';
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us answer';

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const fieldClass = (field) =>
    `w-full rounded-lg border bg-[#FEFDF9] px-5 py-4 text-base tracking-[-0.02em] text-black outline-none transition-colors duration-300 placeholder:text-black/35 focus:border-black ${
      errors[field] ? 'border-red-500' : 'border-black/15'
    }`;

  return (
    <section id="contact" className="bg-[#FEFDF9] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <Reveal className="mb-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
              Contact
            </p>
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="font-dm text-[36px] font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-[48px] lg:text-[64px]"
          >
            Talk to Biotek
            <span className="text-black/35"> — we are here to help.</span>
          </Reveal>

          <Reveal
            delay={120}
            className="mt-8 max-w-[440px] text-base leading-[1.6] tracking-[-0.02em] text-black/55 lg:text-lg"
          >
            For product, order, or company enquiries, reach us through Biotek Farmasi Indonesia's
            official contact channels.
          </Reveal>

          <div className="mt-10 flex flex-col gap-6">
            {DETAILS.map(({ Icon, label, sub, href }, i) => (
              <Reveal key={label} delay={160 + i * 70} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/5">
                  <Icon size={18} strokeWidth={1.5} className="text-black" />
                </span>
                <div>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-base font-medium tracking-[-0.03em] text-black transition-colors hover:text-black/60 lg:text-lg"
                  >
                    {label}
                  </a>
                  <p className="text-sm tracking-[-0.02em] text-black/45">{sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={140} className="rounded-2xl bg-[#ECEDEC] px-6 py-8 sm:px-10 sm:py-10">
          {sent ? (
            <div className="flex min-h-[440px] flex-col items-center justify-center gap-5 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
                <Check size={24} strokeWidth={1.5} className="text-white" />
              </span>
              <h3 className="font-dm text-[28px] font-normal leading-[1.15] tracking-[-0.04em] text-black sm:text-[36px]">
                Message sent
              </h3>
              <p className="max-w-[360px] text-base leading-[1.55] tracking-[-0.02em] text-black/55">
                Thanks {form.name.split(' ')[0]}. We will reply to {form.email} within one working
                day — usually sooner.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm({ name: '', email: '', topic: TOPICS[0], message: '' });
                  setSent(false);
                }}
                className="mt-2 text-sm tracking-[-0.02em] text-black underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm tracking-[-0.02em] text-black/55"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className={fieldClass('name')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm tracking-[-0.02em] text-black/55"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <span className="mb-2 block text-sm tracking-[-0.02em] text-black/55">Topic</span>
                <div className="flex flex-wrap gap-2">
                  {TOPICS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setForm((current) => ({ ...current, topic }))}
                      aria-pressed={form.topic === topic}
                      className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-[-0.02em] transition-colors duration-300 ${
                        form.topic === topic
                          ? 'bg-black text-white'
                          : 'bg-[#FEFDF9] text-black/60 hover:text-black'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm tracking-[-0.02em] text-black/55"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="What would you like to know?"
                  aria-invalid={Boolean(errors.message)}
                  className={`${fieldClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="flex h-14 items-center justify-center gap-2 rounded-md bg-black text-base font-medium tracking-[-0.03em] text-white transition-transform duration-300 hover:scale-[1.02] lg:h-16 lg:text-lg"
              >
                Send message
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
