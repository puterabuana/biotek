import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { COMPANY, SOCIALS } from '../lib/company.js';
import { OFFICIAL_STORES } from '../lib/products.js';
import { FOOTER_COLUMNS } from '../lib/nav.js';

export default function Footer() {
  return (
    <footer className="bg-black px-5 pb-8 pt-20 sm:px-8 lg:px-10 lg:pt-28">
      <div className="mx-auto max-w-[1400px]">
        {/* ---- Official stores ---- */}
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-2 lg:gap-20 lg:pb-24">
          <Reveal>
            <h2 className="max-w-[520px] font-dm text-[32px] font-normal leading-[1.05] tracking-[-0.05em] text-white sm:text-[44px] lg:text-[56px]">
              Buy from an official store.
              <span className="text-white/35"> Nowhere else.</span>
            </h2>
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-center gap-5">
            <div className="flex flex-wrap gap-3">
              {OFFICIAL_STORES.map(({ name, url, logo }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Official store on ${name}`}
                  className="flex h-14 items-center justify-center rounded-lg bg-white px-6 transition-transform duration-300 hover:scale-[1.04]"
                >
                  <img
                    src={logo}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-5 w-auto max-w-[96px] object-contain"
                  />
                </a>
              ))}
            </div>

            <p className="max-w-[460px] text-sm leading-[1.55] tracking-[-0.02em] text-white/40">
              Also stocked by authorised pharmacies across Indonesia, and available through the
              official WhatsApp line on {COMPANY.whatsapp.label}.
            </p>
          </Reveal>
        </div>

        {/* ---- Link columns ---- */}
        <div className="grid gap-10 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:gap-8 lg:py-20">
          <Reveal className="flex flex-col gap-5">
            <Link
              to="/"
              className="font-dm text-[30px] font-medium leading-none tracking-[-0.05em] text-white"
            >
              Biotek
            </Link>

            <p className="max-w-[300px] text-sm leading-[1.6] tracking-[-0.02em] text-white/40">
              {COMPANY.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-1">
              {SOCIALS.map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-[-0.02em] text-white/60 underline underline-offset-4 transition-colors hover:text-white"
                >
                  {name}
                </a>
              ))}
            </div>
          </Reveal>

          {FOOTER_COLUMNS.map((column, i) => (
            <Reveal key={column.title} delay={80 + i * 60} className="flex flex-col gap-4">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/40">
                {column.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-base tracking-[-0.02em] text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* ---- Contact details ---- */}
        <div className="grid gap-8 border-b border-white/10 py-12 sm:grid-cols-3">
          <Reveal className="flex items-start gap-3.5">
            <MapPin size={17} strokeWidth={1.6} className="mt-1 shrink-0 text-white/40" />
            <p className="max-w-[280px] text-sm leading-[1.6] tracking-[-0.02em] text-white/60">
              {COMPANY.address}
            </p>
          </Reveal>

          <Reveal delay={70} className="flex items-start gap-3.5">
            <Phone size={17} strokeWidth={1.6} className="mt-1 shrink-0 text-white/40" />
            <div className="flex flex-col gap-0.5">
              {COMPANY.phones.map((phone) => (
                <span key={phone} className="text-sm tracking-[-0.02em] text-white/60">
                  {phone}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140} className="flex items-start gap-3.5">
            <Mail size={17} strokeWidth={1.6} className="mt-1 shrink-0 text-white/40" />
            <div className="flex flex-col gap-0.5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="break-all text-sm tracking-[-0.02em] text-white/60 transition-colors hover:text-white"
              >
                {COMPANY.email}
              </a>
              <span className="text-sm tracking-[-0.02em] text-white/40">{COMPANY.site}</span>
            </div>
          </Reveal>
        </div>

        {/* ---- Legal ---- */}
        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm tracking-[-0.02em] text-white/35">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/faq"
              className="text-sm tracking-[-0.02em] text-white/35 transition-colors hover:text-white"
            >
              Questions
            </Link>
            <Link
              to="/where-to-buy"
              className="text-sm tracking-[-0.02em] text-white/35 transition-colors hover:text-white"
            >
              Where to buy
            </Link>
            <Link
              to="/contact"
              className="text-sm tracking-[-0.02em] text-white/35 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <p className="mt-8 max-w-[900px] text-xs leading-[1.65] tracking-[-0.01em] text-white/25">
          Biotek products are herbal medicines holding BPOM marketing authorisation, certified halal
          by MUI and produced in a GMP-standard facility. Speak to a doctor or pharmacist before
          adjusting a dose against your own lab results, and before taking anything if you are
          pregnant, breastfeeding or already on prescribed medication.
        </p>
      </div>
    </footer>
  );
}
