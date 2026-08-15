import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, FlaskConical, Leaf, ShieldCheck } from 'lucide-react';
import { HERO_BG, HERO_BUNDLE } from '../lib/assets.js';
import { STATS } from '../lib/company.js';

/* ------------------------------------------------------------------ *
 * Content
 * ------------------------------------------------------------------ */

/* Words are laid out line by line; `dim` renders them at 45% white.
 * Reveal delays run 0.3s → 0.9s in reading order. */
const HEADLINE_LINES = [
  [
    { text: 'The' },
    { text: 'Power' },
    { text: 'of', dim: true },
  ],
  [
    { text: 'Nature', dim: true },
    { text: 'in', dim: true },
    { text: 'Every' },
  ],
  [{ text: 'Capsule' }],
];

const CAROUSEL_CARDS = [
  {
    Icon: BadgeCheck,
    circle: 'bg-black',
    text: 'Every product holds a BPOM marketing authorisation',
  },
  {
    Icon: ShieldCheck,
    circle: 'bg-emerald-800',
    text: 'Produced in a GMP-standard facility',
  },
  {
    Icon: Leaf,
    circle: 'bg-cyan-800',
    text: 'Halal certified by MUI',
  },
  {
    Icon: FlaskConical,
    circle: 'bg-amber-700',
    text: 'Processed with advanced biotechnology',
  },
];

const CAROUSEL_INTERVAL = 3500;

/* ------------------------------------------------------------------ *
 * Word — masked container + animated inner span
 * ------------------------------------------------------------------ */

function Word({ children, dim, delayClass }) {
  return (
    <span className="animate-word-reveal mr-[0.22em] inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span
        className={`inline-block ${delayClass} ${dim ? 'text-white/45' : 'text-white'}`}
      >
        {children}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Panel 2 — auto-rotating card carousel
 * ------------------------------------------------------------------ */

function CardCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % CAROUSEL_CARDS.length),
      CAROUSEL_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-full flex-col justify-between gap-6 px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="relative flex-1">
        {CAROUSEL_CARDS.map(({ Icon, circle, text }, i) => (
          <div
            key={text}
            aria-hidden={i !== active}
            className={`flex items-start gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:gap-4 ${
              i === active
                ? 'relative translate-y-0 opacity-100'
                : 'absolute inset-0 translate-y-4 opacity-0'
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${circle}`}
            >
              <Icon size={18} strokeWidth={1.5} className="text-white sm:h-5 sm:w-5" />
            </span>
            <p className="max-w-[260px] text-sm leading-[1.2] tracking-[-0.03em] text-black/80 sm:text-base lg:text-lg">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full items-center gap-1.5 sm:gap-2">
        {CAROUSEL_CARDS.map((card, i) => (
          <button
            key={card.text}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show card ${i + 1}`}
            className="group h-3 flex-1"
          >
            <span
              className={`block h-0.5 w-full rounded-full transition-colors duration-500 ${
                i === active ? 'bg-black' : 'bg-black/20'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Hero
 * ------------------------------------------------------------------ */

export default function BiotekHero() {
  const customers = STATS[0];

  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden pt-[68px] lg:pt-[80px]"
      style={{
        backgroundImage: `url("${HERO_BG}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ---------------------------------------------------------- *
       * Hero content
       * ---------------------------------------------------------- */}
      <section className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-16 lg:pt-10">
        <h1 className="font-dm text-[48px] font-normal leading-[50px] tracking-[-0.05em] text-white sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
          {HEADLINE_LINES.map((line, lineIndex) => {
            /* running index across all lines → 0.3s, 0.4s, … 0.9s */
            const offset = HEADLINE_LINES.slice(0, lineIndex).reduce(
              (n, l) => n + l.length,
              0
            );

            return (
              <span key={lineIndex} className="block">
                {line.map((word, i) => (
                  <Word
                    key={word.text}
                    dim={word.dim}
                    delayClass={`delay-${300 + (offset + i) * 100}`}
                  >
                    {word.text}
                  </Word>
                ))}
              </span>
            );
          })}
        </h1>

        {/* CTA */}
        <div className="animate-fade-up delay-600 mt-8 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-8 lg:mt-[75px] lg:gap-[50px]">
          <Link
            to="/#products"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-black text-base font-medium tracking-[-0.03em] text-white transition-transform duration-300 hover:scale-[1.02] sm:h-16 sm:w-[240px] sm:text-lg md:w-[280px] md:text-xl lg:h-[72px] lg:w-[310px] lg:text-2xl"
          >
            Explore Now
            <ArrowUpRight size={22} strokeWidth={1.5} />
          </Link>

          <p className="max-w-[330px] text-sm font-normal leading-[1.45] tracking-[-0.03em] text-white sm:text-base lg:text-lg">
            High-grade herbal medicine, made with advanced biotechnology and registered with BPOM.
          </p>
        </div>

        {/* ------------------------------------------------------------ *
         * Pack shot — desktop.
         *
         * It lives inside this section, not in the hero wrapper: the panel
         * row below is opaque and would clip anything that reached past the
         * section's bottom edge. Bottom-anchored and sized by height so it
         * grows into the space the headline leaves — the widest headline
         * line runs to about 935px, so the carton stays right of that.
         * ------------------------------------------------------------ */}
        {/* Sized and offset with clamps rather than breakpoint steps: the two
            things it must clear — the headline's right edge and the CTA
            paragraph's — both move continuously with the viewport, so a ramp
            fits where fixed steps left gaps. Width tops out at 780px; below
            roughly 1100px the CTA paragraph leaves room for little more than
            240px, hence the steep ramp. */}
        <img
          src={HERO_BUNDLE}
          alt="Biotek Farmasi Indonesia herbal supplement range: Viradef, Dialance, K-Fix and Regimun"
          style={{
            width: 'clamp(240px, calc(50vw - 272px), 780px)',
            bottom: 'clamp(24px, calc(9vw - 80px), 150px)',
          }}
          className="animate-scale-in delay-700 pointer-events-none absolute right-[30px] hidden h-auto drop-shadow-2xl lg:block"
        />
      </section>

      {/* ---------------------------------------------------------- *
       * Pack shot — mobile and tablet
       * ---------------------------------------------------------- */}
      <div className="pointer-events-none relative z-[5] px-5 pb-6 pt-2 sm:px-8 lg:hidden">
        <img
          src={HERO_BUNDLE}
          alt="The Biotek range: Viradef, Dialance, K-Fix and Regimun"
          className="animate-scale-in delay-800 mx-auto w-full max-w-[520px] object-contain drop-shadow-2xl"
        />
      </div>

      {/* ---------------------------------------------------------- *
       * Bottom 3-panel grid
       * ---------------------------------------------------------- */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]">
        {/* Panel 1 */}
        <div className="animate-fade-up delay-900 relative flex min-h-[180px] flex-col justify-between gap-6 overflow-hidden bg-[#ECEDEC] px-6 py-8 sm:px-8 md:min-h-[200px] lg:min-h-[200px] lg:px-10 lg:py-7">
          <p className="relative z-10 max-w-[350px] font-dm text-2xl font-normal leading-[1.1] tracking-[-0.05em] text-black sm:text-[28px] lg:text-[35px]">
            Not sure which formula to start with?
          </p>

          <Link
            to="/#assessment"
            className="relative z-10 self-start text-base font-normal tracking-[-0.03em] text-black underline underline-offset-4 lg:text-lg"
          >
            Personal Assessment
          </Link>
        </div>

        {/* Panel 2 */}
        <div className="animate-fade-up delay-1000 min-h-[180px] bg-[#FEFDF9] md:min-h-[200px] lg:min-h-[200px]">
          <CardCarousel />
        </div>

        {/* Panel 3 */}
        <div className="animate-fade-up delay-1100 flex min-h-[180px] items-center justify-center bg-black px-6 py-8 sm:px-8 md:min-h-[200px] lg:min-h-[200px] lg:px-10 lg:py-7">
          <div className="w-fit -translate-y-3">
            <p className="mb-1 text-sm font-medium uppercase tracking-[0.14em] text-white/45 lg:mb-2 lg:text-base">
              Trusted by customers
            </p>
            <div className="flex items-end gap-4 lg:gap-5">
              <p className="font-dm text-[52px] font-normal leading-none tracking-[-0.07em] text-white sm:text-[60px] lg:text-[72px]">
                {customers.value}
              </p>
              <p className="max-w-[210px] pb-1 text-sm font-normal leading-[1.25] tracking-[-0.03em] text-white/60 sm:text-base lg:max-w-[230px] lg:pb-2 lg:text-lg">
                {customers.label} have chosen a Biotek formula.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
