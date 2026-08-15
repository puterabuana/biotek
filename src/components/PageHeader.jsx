import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/* Black band at the top of every inner page. It carries the same headline
 * treatment as the landing sections — one clause solid, the next at 35% — and
 * it also gives the fixed navbar a dark surface to sit on. */
export default function PageHeader({ eyebrow, title, dim, intro, crumb }) {
  return (
    <header className="bg-black px-5 pb-14 pt-[104px] sm:px-8 lg:px-10 lg:pb-20 lg:pt-[150px]">
      <div className="mx-auto max-w-[1400px]">
        <nav
          aria-label="Breadcrumb"
          className="animate-fade-in mb-8 flex items-center gap-2 text-sm tracking-[-0.02em] text-white/40 lg:mb-12"
        >
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight size={14} strokeWidth={1.5} />
          <span className="text-white/70">{crumb ?? title}</span>
        </nav>

        {eyebrow && (
          <p className="animate-fade-in delay-200 mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {eyebrow}
          </p>
        )}

        <h1 className="animate-fade-up delay-300 max-w-[1000px] font-dm text-[38px] font-normal leading-[1.05] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[80px]">
          {title}
          {dim && <span className="text-white/35"> {dim}</span>}
        </h1>

        {intro && (
          <p className="animate-fade-up delay-500 mt-7 max-w-[620px] text-base leading-[1.6] tracking-[-0.02em] text-white/55 lg:text-lg">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
