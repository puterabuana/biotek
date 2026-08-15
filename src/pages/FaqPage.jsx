import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { COMPANY, FAQ } from '../lib/company.js';

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-start justify-between gap-6 py-6 text-left lg:py-7"
        >
          <span className="font-dm text-lg font-normal leading-[1.25] tracking-[-0.04em] text-black lg:text-[26px]">
            {item.q}
          </span>
          <span
            className={`mt-1 shrink-0 text-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            <Plus size={22} strokeWidth={1.5} />
          </span>
        </button>
      </h3>

      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] pb-7 pr-10 text-base leading-[1.65] tracking-[-0.02em] text-black/55 lg:pb-9 lg:text-lg">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHeader
        eyebrow="Questions"
        title="The things people"
        dim="actually ask."
        intro="Ten answers, taken from the questions our support team fields most often."
        crumb="Questions"
      />

      <section className="bg-[#FEFDF9] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <h2 className="font-dm text-[28px] font-normal leading-[1.1] tracking-[-0.045em] text-black lg:text-[36px]">
                Still not answered?
              </h2>
              <p className="mt-4 max-w-[340px] text-base leading-[1.6] tracking-[-0.02em] text-black/55">
                Our support line includes people who can talk through a clinical question rather
                than read from a script.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-7 flex flex-col items-start gap-4">
              <a
                href={COMPANY.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-md bg-black px-7 text-base font-medium tracking-[-0.03em] text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                {COMPANY.whatsapp.label}
                <ArrowUpRight size={19} strokeWidth={1.5} />
              </a>

              <Link
                to="/contact"
                className="text-base tracking-[-0.02em] text-black underline underline-offset-4"
              >
                Or send a message instead
              </Link>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="border-t border-black/10">
              {FAQ.map((item, i) => (
                <Item
                  key={item.q}
                  item={item}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
