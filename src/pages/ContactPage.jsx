import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { COMPANY, SOCIALS } from '../lib/company.js';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Ask us anything"
        dim="— a person will read it."
        intro="Head office is in Central Jakarta. For anything clinical, the WhatsApp line reaches someone who can answer it properly."
        crumb="Contact"
      />

      <section className="bg-[#FEFDF9] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            <Reveal className="flex flex-col gap-5 rounded-2xl bg-[#ECEDEC] px-7 py-8 lg:px-9 lg:py-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Phone size={19} strokeWidth={1.6} className="text-white" />
              </span>
              <h2 className="font-dm text-xl font-medium tracking-[-0.03em] text-black lg:text-2xl">
                Call the office
              </h2>
              <div className="flex flex-col gap-1">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/-/g, '')}`}
                    className="text-base tracking-[-0.02em] text-black/70 transition-colors hover:text-black"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={90}
              className="flex flex-col gap-5 rounded-2xl bg-[#ECEDEC] px-7 py-8 lg:px-9 lg:py-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <Mail size={19} strokeWidth={1.6} className="text-white" />
              </span>
              <h2 className="font-dm text-xl font-medium tracking-[-0.03em] text-black lg:text-2xl">
                Write to us
              </h2>
              <div className="flex flex-col gap-1">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all text-base tracking-[-0.02em] text-black/70 transition-colors hover:text-black"
                >
                  {COMPANY.email}
                </a>
                <span className="flex items-center gap-1.5 text-sm tracking-[-0.02em] text-black/40">
                  <Globe size={13} strokeWidth={1.7} />
                  {COMPANY.site}
                </span>
              </div>
            </Reveal>

            <Reveal
              delay={180}
              className="flex flex-col gap-5 rounded-2xl bg-black px-7 py-8 lg:px-9 lg:py-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <MessageCircle size={19} strokeWidth={1.6} className="text-black" />
              </span>
              <h2 className="font-dm text-xl font-medium tracking-[-0.03em] text-white lg:text-2xl">
                Official WhatsApp
              </h2>
              <p className="text-sm leading-[1.55] tracking-[-0.02em] text-white/50">
                For product advice, orders, and checking that a seller is genuine.
              </p>
              <a
                href={COMPANY.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 self-start rounded-md bg-white px-6 py-3.5 text-base font-medium tracking-[-0.03em] text-black transition-transform duration-300 hover:scale-[1.03]"
              >
                {COMPANY.whatsapp.label}
                <ArrowUpRight size={18} strokeWidth={1.6} />
              </a>
            </Reveal>
          </div>

          {/* Address */}
          <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-[1.3fr_1fr] lg:gap-6">
            <Reveal className="flex flex-col justify-center gap-5 rounded-2xl bg-[#ECEDEC] px-7 py-10 sm:px-12 lg:px-14">
              <span className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.16em] text-black/40">
                <MapPin size={15} strokeWidth={1.7} />
                Head office
              </span>

              <h2 className="max-w-[520px] font-dm text-[26px] font-normal leading-[1.15] tracking-[-0.045em] text-black lg:text-[36px]">
                {COMPANY.address}
              </h2>

              <p className="text-base tracking-[-0.02em] text-black/50">{COMPANY.legalName}</p>

              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(COMPANY.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start text-base tracking-[-0.02em] text-black underline underline-offset-4"
              >
                Open in Maps
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>
            </Reveal>

            <Reveal delay={90} className="flex flex-col gap-5 rounded-2xl bg-[#ECEDEC] px-7 py-8 lg:px-9 lg:py-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-black/40">
                Social
              </p>
              <div className="flex flex-col gap-3">
                {SOCIALS.map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-black/10 pb-3 text-base tracking-[-0.02em] text-black/70 transition-colors hover:text-black"
                  >
                    {name}
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="opacity-30 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>

              <Link
                to="/faq"
                className="mt-auto text-sm tracking-[-0.02em] text-black underline underline-offset-4"
              >
                Check the questions page first
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
