import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import {
  COMPANY,
  PHILOSOPHY,
  PROFILE,
  STATS,
  STRENGTHS,
  VISION_MISSION,
} from '../lib/company.js';
import { BACKDROP, PRODUCTS } from '../lib/products.js';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="An integrated pharmaceutical company"
        dim="that keeps its own research and its own factory."
        intro={COMPANY.motto}
        crumb="About"
      />

      {/* ---- Profile + stats ---- */}
      <section className="bg-[#FEFDF9] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
            <Reveal className="space-y-5 text-base leading-[1.65] tracking-[-0.02em] text-black/60 lg:text-lg">
              {PROFILE.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal
              delay={140}
              className="relative flex min-h-[320px] items-end overflow-hidden rounded-2xl lg:min-h-[420px]"
              style={{ backgroundColor: BACKDROP }}
            >
              <img
                src={PRODUCTS[0].image}
                alt="The Biotek range"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/10 lg:mt-24 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 80}
                className="bg-[#FEFDF9] px-6 py-8 lg:px-8 lg:py-10"
              >
                <p className="font-dm text-[36px] font-normal leading-none tracking-[-0.05em] text-black lg:text-[54px]">
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

      {/* ---- Three strengths ---- */}
      <section className="bg-[#ECEDEC] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10 flex items-center gap-3 lg:mb-14">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
              What sets it apart
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            {STRENGTHS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="flex flex-col gap-4 rounded-2xl bg-[#FEFDF9] px-7 py-8 lg:px-9 lg:py-10"
              >
                <span className="font-dm text-4xl font-normal leading-none tracking-[-0.05em] text-black/15">
                  0{i + 1}
                </span>
                <h3 className="font-dm text-xl font-medium tracking-[-0.03em] text-black lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.6] tracking-[-0.02em] text-black/55 lg:text-base">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Philosophy ---- */}
      <section id="philosophy" className="bg-black px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/50">
              Philosophy
            </p>
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="max-w-[900px] font-dm text-[34px] font-normal leading-[1.05] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[64px]"
          >
            Four principles
            <span className="text-white/35"> that decide what gets into the capsule.</span>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 lg:mt-20 lg:grid-cols-2">
            {PHILOSOPHY.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 100}
                className="flex flex-col gap-5 bg-black px-7 py-9 lg:px-10 lg:py-12"
              >
                <div className="flex items-center justify-between">
                  <span className="h-px w-12 bg-white/30" />
                  <span className="font-dm text-5xl font-normal leading-none tracking-[-0.05em] text-white/15">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-dm text-2xl font-normal leading-[1.15] tracking-[-0.04em] text-white lg:text-[30px]">
                  {item.title}
                </h3>

                <p className="max-w-[460px] text-sm leading-[1.65] tracking-[-0.02em] text-white/50 lg:text-base">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Vision & mission ---- */}
      <section id="vision" className="bg-[#FEFDF9] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <Reveal className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
                  Vision & mission
                </p>
              </Reveal>

              <Reveal
                as="h2"
                delay={60}
                className="font-dm text-[32px] font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-[44px] lg:text-[54px]"
              >
                {VISION_MISSION.vision}
              </Reveal>
            </div>

            <div className="flex flex-col gap-5">
              {VISION_MISSION.mission.map((mission, i) => (
                <Reveal
                  key={mission.slice(0, 20)}
                  delay={i * 90}
                  className="flex gap-5 rounded-2xl bg-[#ECEDEC] px-7 py-7 lg:px-9"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                  <p className="text-base leading-[1.6] tracking-[-0.02em] text-black/65 lg:text-lg">
                    {mission}
                  </p>
                </Reveal>
              ))}

              <Reveal delay={200} className="mt-3">
                <Link
                  to="/#products"
                  className="inline-flex h-14 items-center gap-2 rounded-md bg-black px-8 text-base font-medium tracking-[-0.03em] text-white transition-transform duration-300 hover:scale-[1.03] lg:text-lg"
                >
                  See the range
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
