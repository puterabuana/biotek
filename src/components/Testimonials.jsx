import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { TESTIMONIALS } from '../lib/company.js';

const INTERVAL = 8000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % TESTIMONIALS.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const go = (delta) =>
    setActive((i) => (i + delta + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="reviews"
      className="bg-[#FEFDF9] px-5 py-20 sm:px-8 lg:px-10 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
                What they say
              </p>
            </Reveal>

            <Reveal
              as="h2"
              delay={60}
              className="max-w-[820px] font-dm text-[36px] font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-[52px] lg:text-[64px]"
            >
              Clinicians, professors and public figures
              <span className="text-black/35"> who take it themselves.</span>
            </Reveal>
          </div>

          <Reveal delay={120} className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </Reveal>
        </div>

        <Reveal className="relative min-h-[400px] overflow-hidden rounded-2xl bg-[#ECEDEC] px-7 py-10 sm:px-12 sm:py-14 lg:min-h-[380px] lg:px-16 lg:py-16">
          {TESTIMONIALS.map((item, i) => (
            <figure
              key={item.name}
              aria-hidden={i !== active}
              className={`flex flex-col gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex-row lg:items-center lg:gap-14 ${
                i === active
                  ? 'relative translate-y-0 opacity-100'
                  : 'pointer-events-none absolute inset-0 translate-y-6 px-7 py-10 opacity-0 sm:px-12 sm:py-14 lg:px-16 lg:py-16'
              }`}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="h-28 w-28 shrink-0 rounded-2xl object-cover lg:h-44 lg:w-44"
              />

              <div className="flex flex-col gap-6">
                <Quote size={26} strokeWidth={1.5} className="text-black/25" />

                <blockquote className="max-w-[860px] font-dm text-[19px] font-normal leading-[1.35] tracking-[-0.035em] text-black sm:text-[24px] lg:text-[30px]">
                  {item.quote}
                </blockquote>

                <figcaption>
                  <p className="text-base font-medium tracking-[-0.03em] text-black lg:text-lg">
                    {item.name}
                  </p>
                  <p className="mt-0.5 max-w-[520px] text-sm leading-[1.45] tracking-[-0.02em] text-black/45">
                    {item.role}
                  </p>
                  <p className="mt-2.5 inline-block rounded-full bg-black/5 px-3 py-1 text-xs font-medium tracking-[-0.01em] text-black/60">
                    {item.product}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </Reveal>

        <div className="mt-6 flex gap-2">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show review ${i + 1}`}
              className="h-3 flex-1"
            >
              <span
                className={`block h-0.5 w-full rounded-full transition-colors duration-500 ${
                  i === active ? 'bg-black' : 'bg-black/15'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
