import { CERTIFICATIONS } from '../lib/company.js';

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black py-5 lg:py-6">
      {/* Two identical copies with no gap between them, so the -50%
       * translate lands exactly on the seam. */}
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-10 pr-10 lg:gap-16 lg:pr-16"
          >
            {CERTIFICATIONS.map((claim) => (
              <span
                key={claim}
                className="flex items-center gap-10 whitespace-nowrap font-dm text-lg font-normal tracking-[-0.03em] text-white/70 lg:gap-16 lg:text-2xl"
              >
                {claim}
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
