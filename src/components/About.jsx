import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { BACKDROP, PRODUCTS } from '../lib/products.js';

const STATS = [
  { value: '+14K', label: 'People on a Biotek routine' },
  { value: '98%', label: 'Report a difference within 8 weeks' },
  { value: '31', label: 'Whole-food actives across the range' },
  { value: '0', label: 'Synthetic fillers, ever' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FEFDF9] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-10 flex items-center gap-3 lg:mb-16">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
            About Biotek
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal
              as="h2"
              className="font-dm text-[36px] font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-[52px] lg:text-[72px]"
            >
              We put the whole plant
              <span className="text-black/35"> into a capsule you can trust.</span>
            </Reveal>

            <Reveal
              delay={120}
              className="mt-8 max-w-[560px] space-y-5 text-base leading-[1.6] tracking-[-0.02em] text-black/60 lg:text-lg"
            >
              <p>
                Biotek started in a small lab outside Utrecht with one stubborn question: why do
                most supplements list impressive botanicals but dose them at a fraction of what the
                research actually used?
              </p>
              <p>
                So we built the range backwards. Every formula begins with a published clinical
                dose, then we source the extract that matches it, and only then do we decide what
                fits in the capsule. Nothing is added to pad a label.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              <a
                href="#science"
                className="inline-flex h-14 items-center gap-2 rounded-md bg-black px-8 text-base font-medium tracking-[-0.03em] text-white transition-transform duration-300 hover:scale-[1.03] lg:text-lg"
              >
                How we formulate
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>

          {/* Biotek's own K-Fix photograph, so the capsules on screen are the
              capsules in the bottle. */}
          <Reveal
            delay={160}
            className="relative flex min-h-[320px] items-end overflow-hidden rounded-2xl p-8 lg:min-h-[460px]"
            style={{ backgroundColor: BACKDROP }}
          >
            <img
              src={PRODUCTS[2].image}
              alt="K-Fix capsules"
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
            <p className="relative z-10 max-w-[300px] rounded-xl bg-black/70 px-5 py-4 font-dm text-lg leading-[1.2] tracking-[-0.04em] text-white backdrop-blur-sm lg:text-xl">
              Four formulas. One standard: dosed to the study, or it does not ship.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/10 lg:mt-24 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="bg-[#FEFDF9] px-6 py-8 lg:px-8 lg:py-10"
            >
              <p className="font-dm text-[36px] font-normal leading-none tracking-[-0.05em] text-black lg:text-[56px]">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[200px] text-sm leading-[1.35] tracking-[-0.02em] text-black/50 lg:text-base">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
