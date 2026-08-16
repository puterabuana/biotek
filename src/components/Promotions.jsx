import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal.jsx';
import StoreLinks from './StoreLinks.jsx';
import { BACKDROP, OFFICIAL_STORES, findProduct } from '../lib/products.js';

/* Pairs that people already take together, not a discounted package —
 * there is no official bundle and no price list to build one from. */
const PAIRS = [
  {
    id: 'metabolic',
    name: 'Sugar & kidney',
    items: ['dialance', 'kfix'],
    note: 'The pairing that turns up most often in our reviews.',
  },
  {
    id: 'defence',
    name: 'Everyday defence',
    items: ['viradef', 'regimun'],
    note: 'One holds the line, the other keeps the response measured.',
  },
];

export default function Promotions() {
  return (
    <section id="promotions" className="bg-[#ECEDEC] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* ---- Where to buy ---- */}
        <Reveal className="mb-14 flex flex-col gap-10 overflow-hidden rounded-2xl bg-black px-7 py-10 sm:px-10 lg:mb-20 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-16">
          <div className="max-w-[640px]">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-white/50">
              Where to buy
            </p>

            <h2 className="font-dm text-[34px] font-normal leading-[1.05] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[62px]">
              Official stores only
              <span className="text-white/35"> — so what arrives is what we made.</span>
            </h2>

            <p className="mt-5 max-w-[440px] text-base leading-[1.55] tracking-[-0.02em] text-white/50 lg:text-lg">
              Check the registration number printed on the box and scan its barcode in the BPOM
              Mobile app. If it does not match, it did not come from us.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="grid grid-cols-2 gap-3">
              {OFFICIAL_STORES.map(({ name, url, logo }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Official store on ${name}`}
                  className="flex h-[72px] w-[150px] items-center justify-center rounded-xl bg-white px-5 transition-transform duration-300 hover:scale-[1.04] lg:w-[172px]"
                >
                  <img
                    src={logo}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-6 w-auto max-w-full object-contain"
                  />
                </a>
              ))}
            </div>

            <p className="flex items-center gap-2 text-sm tracking-[-0.02em] text-white/40">
              <ShieldCheck size={16} strokeWidth={1.6} />
              BPOM registered · GMP facility · Halal MUI
            </p>
          </div>
        </Reveal>

        {/* ---- Pairs ---- */}
        <Reveal className="mb-10 flex items-center gap-3 lg:mb-14">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
            Taken together
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {PAIRS.map((pair, i) => {
            const products = pair.items.map(findProduct).filter(Boolean);

            return (
              <Reveal
                key={pair.id}
                delay={i * 90}
                className="group flex flex-col overflow-hidden rounded-2xl bg-[#FEFDF9] sm:flex-row"
              >
                {/* Two photographs butted together; they share one backdrop
                    colour, so the seam between them reads as a single shot. */}
                <div
                  className="flex shrink-0 sm:w-[46%]"
                  style={{ backgroundColor: BACKDROP }}
                >
                  {products.map((product) => (
                    <div key={product.id} className="aspect-[4/5] w-1/2 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-1 flex-col justify-center gap-4 px-7 py-8 lg:px-9">
                  <div>
                    <h3 className="font-dm text-2xl font-medium tracking-[-0.04em] text-black lg:text-[30px]">
                      {pair.name}
                    </h3>
                    <p className="mt-1.5 text-sm tracking-[-0.02em] text-black/45">{pair.note}</p>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        className="flex items-start gap-2.5 text-sm tracking-[-0.02em] text-black/65"
                      >
                        <Check size={15} strokeWidth={2} className="mt-0.5 shrink-0 opacity-40" />
                        <span>
                          <span className="text-black">{product.name}</span> — {product.blurb}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#products"
                    className="mt-1 flex h-12 items-center justify-center gap-2 rounded-md bg-black text-sm font-medium tracking-[-0.02em] text-white transition-transform duration-300 hover:scale-[1.02] lg:text-base"
                  >
                    See both
                    <ArrowUpRight size={17} strokeWidth={1.6} />
                  </a>

                  <StoreLinks stores={OFFICIAL_STORES} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
