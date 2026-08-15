import { useEffect, useRef, useState } from 'react';

/* Fires once when the element scrolls into view. Falls back to "always
 * visible" where IntersectionObserver is unavailable so content is never
 * left stranded at opacity 0. */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -12% 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inViewport = () => {
      const { top, bottom } = el.getBoundingClientRect();
      return top < window.innerHeight && bottom > 0;
    };

    /* Anything already on screen at mount reveals straight away rather than
     * waiting for the observer's first callback. */
    if (inViewport()) {
      setVisible(true);
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);

    /* A deep link scrolls the page after this effect has already run, so
     * re-check once the images have settled and the jump has landed. */
    const onLoad = () => inViewport() && setVisible(true);
    window.addEventListener('load', onLoad, { once: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('load', onLoad);
    };
  }, [threshold, rootMargin]);

  return [ref, visible];
}
