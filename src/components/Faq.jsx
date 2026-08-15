import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal.jsx';

const ITEMS = [
  {
    q: 'How long before I notice anything?',
    a: 'Most people report a change between weeks three and six, which matches the timelines in the underlying research. Sleep and digestion tend to shift first; energy and focus take a little longer. We suggest giving any formula a full eight weeks before deciding.',
  },
  {
    q: 'Can I take more than one formula together?',
    a: 'Yes — the range is designed to stack without doubling up on actives. Daily Balance sits comfortably alongside anything else. If you are combining three or more, start them a week apart so you can tell what is doing what.',
  },
  {
    q: 'Where can I see the lab results?',
    a: 'Every bottle carries a batch code on the base. Enter it on the certificates page and you will get the full third-party panel for that exact batch: potency, heavy metals, microbials and solvent residues.',
  },
  {
    q: 'Is it safe during pregnancy or with medication?',
    a: 'Several botanicals in the range interact with common medications, and we do not have pregnancy data for all of them. Please speak with your GP or pharmacist before starting. We would rather lose the sale than guess on your behalf.',
  },
  {
    q: 'How does the subscription work?',
    a: 'You choose a four, eight or twelve week cadence. Orders ship two days before your last bottle runs out, and you can pause, skip or cancel from your account with no phone call and no retention script.',
  },
  {
    q: 'What if it does not work for me?',
    a: 'Return anything within 90 days, opened or not, and we refund the full amount including the original shipping. Keep the bottle — sending half-used supplements back through the post helps nobody.',
  },
];

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-start justify-between gap-6 py-6 text-left lg:py-8"
        >
          <span className="font-dm text-xl font-normal leading-[1.2] tracking-[-0.04em] text-black lg:text-[28px]">
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
          <p className="max-w-[760px] pb-7 pr-10 text-base leading-[1.6] tracking-[-0.02em] text-black/55 lg:pb-9 lg:text-lg">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[#ECEDEC] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Reveal className="mb-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
              Questions
            </p>
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="font-dm text-[36px] font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-[48px] lg:text-[56px]"
          >
            The things
            <span className="text-black/35"> people actually ask.</span>
          </Reveal>

          <Reveal delay={120} className="mt-8">
            <a
              href="#contact"
              className="text-base tracking-[-0.02em] text-black underline underline-offset-4 lg:text-lg"
            >
              Something else? Talk to a nutritionist
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="border-t border-black/10">
            {ITEMS.map((item, i) => (
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
  );
}
