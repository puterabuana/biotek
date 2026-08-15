/* All imagery is served from public/img — nothing is hot-linked from another
 * host, and nothing carries another brand's name. */

/* Abstract foliage bokeh behind the hero. */
export const HERO_BG = '/img/hero-bg.jpg';

/* The whole range in one shot, cut out of its dark studio backdrop so it can
 * float straight over the hero.
 *
 * The matte was built by estimating the backdrop — a smooth glow whose
 * brightness overlaps the bottles' own shading, so no single threshold
 * separates them — and keying on the difference from that estimate. */
export const HERO_BUNDLE = '/img/produk/bundle.webp';
