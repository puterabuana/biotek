import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Seo from './Seo.jsx';

/* Anything here means the reader has taken over from the deep-link scroll. */
const INPUT_EVENTS = ['wheel', 'touchstart', 'keydown', 'pointerdown'];

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    /* No hash: a route change should start at the top, the way a page load
     * would. */
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const jump = () => {
      /* getElementById rather than querySelector — a hash from the address bar
       * is not necessarily a valid selector. */
      const target = document.getElementById(hash.slice(1));
      /* Explicitly instant: `auto` inherits the smooth scroll-behaviour on
       * <html> and would animate all the way down from the top. */
      if (target) target.scrollIntoView({ behavior: 'instant' });
    };

    /* Images load late and keep pushing the target down, so re-land on it for
     * a couple of seconds. The reader's first real input ends that. */
    const ticker = setInterval(jump, 100);
    const stop = () => {
      clearInterval(ticker);
      clearTimeout(timer);
      INPUT_EVENTS.forEach((type) => window.removeEventListener(type, stop));
    };
    const timer = setTimeout(stop, 2000);

    INPUT_EVENTS.forEach((type) => window.addEventListener(type, stop, { passive: true }));
    jump();

    return stop;
  }, [pathname, hash]);

  return (
    <>
      <Seo />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
