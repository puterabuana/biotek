import { FlaskConical, Leaf, Microscope, Truck } from 'lucide-react';
import Reveal from './Reveal.jsx';

const STEPS = [
  {
    Icon: Leaf,
    title: 'Sourced whole',
    body: 'Single-origin botanicals from growers we visit, harvested at the point the actives peak rather than when the calendar says.',
  },
  {
    Icon: Microscope,
    title: 'Standardised',
    body: 'Each batch is assayed for its active marker. If a lot lands under spec it goes back, not into a blend that hides it.',
  },
  {
    Icon: FlaskConical,
    title: 'Dosed to the study',
    body: 'We match the amount used in published trials. No proprietary blends, no pixie dust, the label lists exact milligrams.',
  },
  {
    Icon: Truck,
    title: 'Tested, then shipped',
    body: 'Independent labs check every batch for heavy metals, microbes and potency. Certificates are public, keyed by batch code.',
  },
];

export default function Science() {
  return (
    <section id="science" className="relative overflow-hidden bg-black px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal className="mb-6 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/50">
            How we formulate
          </p>
        </Reveal>

        <Reveal
          as="h2"
          delay={60}
          className="max-w-[900px] font-dm text-[36px] font-normal leading-[1.05] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[72px]"
        >
          Four steps between a field
          <span className="text-white/35"> and your morning glass of water.</span>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 lg:mt-24 lg:grid-cols-2">
          {STEPS.map(({ Icon, title, body }, i) => (
            <Reveal
              key={title}
              delay={(i % 2) * 100}
              className="flex flex-col gap-5 bg-black px-7 py-9 lg:px-10 lg:py-12"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Icon size={20} strokeWidth={1.5} className="text-white" />
                </span>
                <span className="font-dm text-5xl font-normal leading-none tracking-[-0.05em] text-white/15">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-dm text-2xl font-normal tracking-[-0.04em] text-white lg:text-[32px]">
                {title}
              </h3>

              <p className="max-w-[440px] text-sm leading-[1.6] tracking-[-0.02em] text-white/50 lg:text-base">
                {body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
