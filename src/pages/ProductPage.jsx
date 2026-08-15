import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import StoreLinks from '../components/StoreLinks.jsx';
import { BACKDROP, PRODUCTS, findProduct } from '../lib/products.js';
import { COMPANY } from '../lib/company.js';

const TABS = [
  { id: 'dosage', label: 'Dosage' },
  { id: 'composition', label: 'Composition' },
  { id: 'notes', label: 'Notes' },
];

export default function ProductPage() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const [tab, setTab] = useState('dosage');
  const [shot, setShot] = useState(0);

  if (!product) return <Navigate to="/not-found" replace />;

  const others = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <>
      <PageHeader
        eyebrow={product.category}
        title={product.name}
        dim={product.blurb}
        crumb={product.name}
      />

      {/* ---- Photograph + buying ---- */}
      <section className="bg-[#FEFDF9] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-4">
            <div
              className="flex items-center justify-center overflow-hidden rounded-2xl"
              style={{ backgroundColor: BACKDROP }}
            >
              <img
                src={product.gallery[shot]}
                alt={`${product.name} — view ${shot + 1}`}
                className="h-full max-h-[520px] w-full object-cover"
              />
            </div>

            {product.gallery.length > 1 && (
              <div className="flex gap-3">
                {product.gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setShot(i)}
                    aria-label={`View ${i + 1}`}
                    aria-pressed={i === shot}
                    className={`h-20 w-20 overflow-hidden rounded-lg p-1 transition-all duration-300 ${
                      i === shot ? 'ring-2 ring-black/70' : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: BACKDROP }}
                  >
                    <img src={src} alt={`${product.name} product thumbnail`} className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </Reveal>

          <div className="flex flex-col gap-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <Star size={15} strokeWidth={1.5} className="fill-black text-black" />
                <span className="text-sm tracking-[-0.02em] text-black">{product.rating}</span>
                <span className="h-1 w-1 rounded-full bg-black/20" />
                <span className="text-sm tracking-[-0.02em] text-black/45">
                  {product.packaging}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mb-5 font-dm text-[26px] font-normal leading-[1.15] tracking-[-0.04em] text-black lg:text-[34px]">
                What it does
              </h2>
              <ul className="flex flex-col gap-3">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3.5 text-base leading-[1.55] tracking-[-0.02em] text-black/70 lg:text-lg"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-black/40" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Dosage / Composition / Notes */}
            <Reveal delay={140}>
              <div className="flex gap-6 border-b border-black/10">
                {TABS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTab(item.id)}
                    aria-pressed={tab === item.id}
                    className={`-mb-px border-b-2 pb-3 text-sm font-medium tracking-[-0.02em] transition-colors lg:text-base ${
                      tab === item.id
                        ? 'border-black text-black'
                        : 'border-transparent text-black/40 hover:text-black/70'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-5">
                {tab === 'composition' ? (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm tracking-[-0.02em] text-black/45 lg:text-base">
                      {product.composition.lead}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {product.composition.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-[1.5] tracking-[-0.02em] text-black/70 lg:text-base"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul className="flex flex-col gap-2">
                    {(tab === 'dosage' ? product.dosage : product.notes).map((line) => (
                      <li
                        key={line}
                        className="text-sm leading-[1.55] tracking-[-0.02em] text-black/65 lg:text-base"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>

            <Reveal delay={200} className="rounded-2xl bg-[#ECEDEC] px-6 py-6 lg:px-8 lg:py-7">
              <p className="mb-4 text-sm tracking-[-0.02em] text-black/50">
                Buy {product.name} from an official store
              </p>
              <StoreLinks stores={product.stores} tone="logo" />

              <a
                href={COMPANY.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-black px-7 py-3.5 text-base font-medium tracking-[-0.03em] text-white transition-transform duration-300 hover:scale-[1.02]"
              >
                Or order on WhatsApp
                <ArrowUpRight size={19} strokeWidth={1.5} />
              </a>
            </Reveal>

            <Reveal delay={240} className="flex items-start gap-3">
              <ShieldCheck size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-black/40" />
              <p className="text-sm leading-[1.55] tracking-[-0.02em] text-black/45">
                BPOM registered, GMP facility, halal certified by MUI. Check the authorisation
                number on the pack against the BPOM Mobile app —{' '}
                <Link to="/where-to-buy#authenticity" className="text-black underline underline-offset-4">
                  here is how
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- The rest of the range ---- */}
      <section className="bg-[#ECEDEC] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
              The rest of the range
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
            {others.map((other, i) => (
              <Reveal key={other.id} delay={i * 80}>
                <Link
                  to={`/products/${other.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#FEFDF9]"
                >
                  <div
                    className="aspect-[4/5] w-full overflow-hidden"
                    style={{ backgroundColor: BACKDROP }}
                  >
                    <img
                      src={other.image}
                      alt={other.name}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-2 px-6 py-6">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
                      {other.category}
                    </p>
                    <h3 className="font-dm text-xl font-medium tracking-[-0.04em] text-black lg:text-2xl">
                      {other.name}
                    </h3>
                    <p className="flex-1 text-sm leading-[1.45] tracking-[-0.02em] text-black/55">
                      {other.blurb}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium tracking-[-0.02em] text-black">
                      Read more
                      <ArrowUpRight size={16} strokeWidth={1.6} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
