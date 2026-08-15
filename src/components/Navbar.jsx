import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CornerUpLeft, Menu, Search, X } from 'lucide-react';
import { NAV_LINKS } from '../lib/nav.js';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  /* Only the landing page opens on a dark photograph, so only there can the
   * bar afford to be transparent. Inner pages start under a black header but
   * scroll into light sections, so they keep the solid bar throughout. */
  const onHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const solid = (!onHome || scrolled) && !menuOpen;

  return (
    <>
      <nav
        className={`animate-fade-in fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-colors duration-500 sm:px-8 lg:px-10 lg:py-5 ${
          solid ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <Link
          to="/"
          className="animate-slide-left delay-200 font-dm text-[30px] font-medium leading-none tracking-[-0.05em] text-white"
        >
          Biotek
        </Link>

        <div className="animate-fade-in delay-400 absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-5 md:flex lg:gap-10">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="font-dm text-[18px] font-medium tracking-[-0.02em] text-white/90 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="animate-slide-right delay-300 flex items-center gap-3 sm:gap-4 lg:gap-6">
          <Link
            to="/#products"
            aria-label="Search products"
            className="text-white/90 transition-colors hover:text-white"
          >
            <Search size={20} strokeWidth={1.5} />
          </Link>

          <Link
            to="/faq"
            aria-label="Questions and answers"
            className="hidden text-white/90 transition-colors hover:text-white sm:block"
          >
            <CornerUpLeft size={20} strokeWidth={1.5} />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative z-50 text-white md:hidden"
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 md:hidden">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="font-dm text-3xl font-medium tracking-[-0.03em] text-white"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/faq"
            onClick={() => setMenuOpen(false)}
            className="font-dm text-3xl font-medium tracking-[-0.03em] text-white/60"
          >
            Questions
          </Link>
        </div>
      )}
    </>
  );
}
