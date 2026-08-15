import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FOOTER_COLUMNS } from '../lib/nav.js';

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-black px-5 pb-16 pt-[120px] sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="animate-fade-in delay-200 mb-6 text-sm font-medium uppercase tracking-[0.18em] text-white/50">
          404
        </p>

        <h1 className="animate-fade-up delay-300 max-w-[900px] font-dm text-[40px] font-normal leading-[1.05] tracking-[-0.05em] text-white sm:text-[60px] lg:text-[84px]">
          This page does not exist.
          <span className="text-white/35"> These do.</span>
        </h1>

        <div className="animate-fade-up delay-500 mt-14 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-3 lg:gap-8">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
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
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="animate-fade-up delay-700 mt-14 inline-flex h-14 items-center gap-2 rounded-md bg-white px-8 text-base font-medium tracking-[-0.03em] text-black transition-transform duration-300 hover:scale-[1.03] lg:text-lg"
        >
          Back to the homepage
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
