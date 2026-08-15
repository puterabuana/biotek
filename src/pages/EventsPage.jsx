import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { EVENTS, SOCIALS } from '../lib/company.js';

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Where we turn up"
        dim="in front of the people who prescribe."
        intro="Congresses, clinical meetings and public health days — the room where a formula has to hold up to questioning."
        crumb="Events"
      />

      <section className="bg-[#ECEDEC] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-5 lg:gap-6">
            {EVENTS.map((event, i) => (
              <Reveal
                key={event.title}
                delay={i * 90}
                className="group grid overflow-hidden rounded-2xl bg-[#FEFDF9] lg:grid-cols-[1.15fr_1fr]"
              >
                <div className="h-[260px] overflow-hidden lg:h-full lg:min-h-[360px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col justify-center gap-5 px-7 py-10 sm:px-12">
                  <span className="flex items-center gap-2 text-sm tracking-[-0.02em] text-black/40">
                    <Calendar size={14} strokeWidth={1.6} />
                    {event.date}
                  </span>

                  <h2 className="font-dm text-[28px] font-normal leading-[1.1] tracking-[-0.045em] text-black sm:text-[36px] lg:text-[42px]">
                    {event.title}
                  </h2>

                  <span className="font-dm text-6xl font-normal leading-none tracking-[-0.05em] text-black/10">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Follow along */}
          <Reveal className="mt-16 flex flex-col gap-8 rounded-2xl bg-black px-7 py-10 sm:px-12 lg:mt-24 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-14">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/50">
                Follow along
              </p>
              <h2 className="max-w-[560px] font-dm text-[28px] font-normal leading-[1.08] tracking-[-0.045em] text-white lg:text-[42px]">
                Upcoming dates go out on our social accounts
                <span className="text-white/35"> before they go anywhere else.</span>
              </h2>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              {SOCIALS.map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3.5 text-sm font-medium tracking-[-0.02em] text-white transition-colors hover:bg-white/20"
                >
                  {name}
                  <ArrowUpRight size={15} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-10 flex justify-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-base tracking-[-0.02em] text-black underline underline-offset-4 lg:text-lg"
            >
              Read the news instead
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
