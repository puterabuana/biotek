import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, MessageCircle, ScanLine, ShieldCheck, Store } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { COMPANY } from '../lib/company.js';
import { OFFICIAL_STORES, PRODUCTS, BACKDROP } from '../lib/products.js';

const CHANNELS = [
  {
    Icon: Store,
    title: 'Official marketplace stores',
    body: 'Shopee, Tokopedia, Blibli and TikTok Shop — each one an official Biotek Farmasi Indonesia store, not a reseller.',
  },
  {
    Icon: MessageCircle,
    title: 'Official WhatsApp',
    body: `Order or ask directly on ${COMPANY.whatsapp.label}. It is the only WhatsApp number we use.`,
  },
  {
    Icon: MapPin,
    title: 'Pharmacies and offline stores',
    body: 'Authorised pharmacies and offline stores working with Biotek, across Indonesia.',
  },
];

const CHECKS = [
  {
    Icon: ScanLine,
    title: 'Check the authorisation number',
    body: 'Every pack carries a BPOM marketing authorisation number. Read it off the box before you open anything.',
  },
  {
    Icon: ShieldCheck,
    title: 'Scan the barcode in BPOM Mobile',
    body: "Use BPOM's own app. If the scan does not resolve to the product in your hand, stop there.",
  },
  {
    Icon: Store,
    title: 'Buy from the official store only',
    body: 'Online, order from an official store or the official WhatsApp line. Offline, from a pharmacy that works with Biotek.',
  },
];

export default function WhereToBuyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where to buy"
        title="Official stores only"
        dim="— so what arrives is what we made."
        intro="Biotek does not sell from this website. Every buying route below is one we operate or authorise ourselves."
        crumb="Where to buy"
      />

      {/* ---- Stores ---- */}
      <section className="bg-[#FEFDF9] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {OFFICIAL_STORES.map(({ name, url, logo }, i) => (
              <Reveal key={name} delay={i * 80}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-8 rounded-2xl bg-[#ECEDEC] px-7 py-8 transition-colors duration-300 hover:bg-black"
                >
                  <img
                    src={logo}
                    alt={name}
                    className="h-7 w-auto max-w-[120px] self-start object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-dm text-lg font-medium tracking-[-0.03em] text-black transition-colors group-hover:text-white lg:text-xl">
                      Official store
                    </span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-black/30 transition-colors group-hover:text-white"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Channels */}
          <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-3 lg:gap-6">
            {CHANNELS.map(({ Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="flex flex-col gap-4 rounded-2xl border border-black/10 px-7 py-8 lg:px-9"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
                  <Icon size={19} strokeWidth={1.6} className="text-black" />
                </span>
                <h2 className="font-dm text-xl font-medium tracking-[-0.03em] text-black lg:text-2xl">
                  {title}
                </h2>
                <p className="text-sm leading-[1.6] tracking-[-0.02em] text-black/55 lg:text-base">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Spotting a fake ---- */}
      <section id="authenticity" className="bg-black px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/50">
              Spotting a fake
            </p>
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="max-w-[860px] font-dm text-[32px] font-normal leading-[1.05] tracking-[-0.05em] text-white sm:text-[46px] lg:text-[60px]"
          >
            Three checks,
            <span className="text-white/35"> before you swallow anything.</span>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 lg:mt-20 lg:grid-cols-3">
            {CHECKS.map(({ Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="flex flex-col gap-5 bg-black px-7 py-9 lg:px-9 lg:py-11"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Icon size={19} strokeWidth={1.6} className="text-white" />
                  </span>
                  <span className="font-dm text-5xl font-normal leading-none tracking-[-0.05em] text-white/15">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-dm text-xl font-normal leading-[1.2] tracking-[-0.04em] text-white lg:text-[26px]">
                  {title}
                </h3>

                <p className="text-sm leading-[1.65] tracking-[-0.02em] text-white/50 lg:text-base">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={COMPANY.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-white px-7 text-base font-medium tracking-[-0.03em] text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Verify a seller with us
              <ArrowUpRight size={19} strokeWidth={1.5} />
            </a>
            <p className="text-sm tracking-[-0.02em] text-white/40">
              Our only WhatsApp number is {COMPANY.whatsapp.label}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- The range ---- */}
      <section className="bg-[#ECEDEC] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
              Pick a product
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <Link
                  to={`/products/${product.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#FEFDF9]"
                >
                  <div
                    className="aspect-[4/5] w-full overflow-hidden"
                    style={{ backgroundColor: BACKDROP }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-6 py-5">
                    <h3 className="font-dm text-lg font-medium tracking-[-0.04em] text-black lg:text-xl">
                      {product.name}
                    </h3>
                    <ArrowUpRight size={18} strokeWidth={1.6} className="text-black/30" />
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
