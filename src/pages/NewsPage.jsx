import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { NEWS } from '../lib/company.js';

const TAGS = ['Lungs', 'Kidney', 'Antiviral', 'Diabetes', 'Immunity', 'Autoimmune', 'Herbal'];

export default function NewsPage() {
  const [lead, ...rest] = NEWS;

  return (
    <>
      <PageHeader
        eyebrow="News"
        title="What we write about"
        dim="when we are not writing about ourselves."
        intro="Notes on the conditions our formulas are aimed at, drawn from the literature rather than from marketing."
        crumb="News"
      />

      <section className="bg-[#FEFDF9] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          {/* Lead article */}
          <Reveal className="group grid overflow-hidden rounded-2xl bg-[#ECEDEC] lg:grid-cols-2">
            <div className="h-[260px] overflow-hidden lg:h-full lg:min-h-[400px]">
              <img
                src={lead.image}
                alt={lead.title}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 px-7 py-10 sm:px-12 lg:px-14">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-black px-3 py-1 text-xs font-medium tracking-[-0.01em] text-white">
                  {lead.tag}
                </span>
                <span className="flex items-center gap-1.5 text-sm tracking-[-0.02em] text-black/40">
                  <Calendar size={13} strokeWidth={1.6} />
                  {lead.date}
                </span>
              </div>

              <h2 className="font-dm text-[28px] font-normal leading-[1.1] tracking-[-0.045em] text-black sm:text-[38px] lg:text-[46px]">
                {lead.title}
              </h2>

              <p className="max-w-[480px] text-base leading-[1.6] tracking-[-0.02em] text-black/55 lg:text-lg">
                {lead.excerpt}
              </p>

              <p className="text-sm tracking-[-0.02em] text-black/35">
                Full article on biotekfarmasiindonesia.co.id
              </p>
            </div>
          </Reveal>

          {/* The rest */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-6 lg:gap-6">
            {rest.map((item, i) => (
              <Reveal
                key={item.slug}
                delay={i * 90}
                className="group flex flex-col overflow-hidden rounded-2xl bg-[#ECEDEC]"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 px-7 py-7">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-black/85 px-3 py-1 text-xs font-medium text-white">
                      {item.tag}
                    </span>
                    <span className="text-sm tracking-[-0.02em] text-black/40">{item.date}</span>
                  </div>

                  <h3 className="font-dm text-xl font-medium leading-[1.2] tracking-[-0.04em] text-black lg:text-2xl">
                    {item.title}
                  </h3>

                  <p className="flex-1 text-sm leading-[1.55] tracking-[-0.02em] text-black/55">
                    {item.excerpt}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Topics + onward links */}
          <div className="mt-16 grid gap-10 border-t border-black/10 pt-12 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-black/40">
                Topics we cover
              </p>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#ECEDEC] px-4 py-2 text-sm tracking-[-0.02em] text-black/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="flex flex-col items-start gap-5">
              <h2 className="max-w-[420px] font-dm text-[26px] font-normal leading-[1.15] tracking-[-0.045em] text-black lg:text-[34px]">
                Wondering which formula a condition points to?
              </h2>
              <Link
                to="/#assessment"
                className="inline-flex h-14 items-center gap-2 rounded-md bg-black px-8 text-base font-medium tracking-[-0.03em] text-white transition-transform duration-300 hover:scale-[1.03] lg:text-lg"
              >
                Take the assessment
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
