import { PRODUCTS } from './products.js';

/* `/#products` works from any page: the router lands on Home, then the layout
 * scrolls to the section. */
export const NAV_LINKS = [
  { label: 'Products', to: '/#products' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
];

/* Every entry below goes somewhere real — no placeholder links. */
export const FOOTER_COLUMNS = [
  {
    title: 'Products',
    links: PRODUCTS.map((p) => ({ label: p.name, to: `/products/${p.id}` })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Philosophy', to: '/about#philosophy' },
      { label: 'Vision & mission', to: '/about#vision' },
      { label: 'News', to: '/news' },
      { label: 'Events', to: '/events' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Questions', to: '/faq' },
      { label: 'Contact us', to: '/contact' },
      { label: 'Where to buy', to: '/where-to-buy' },
      { label: 'Spotting a fake', to: '/where-to-buy#authenticity' },
    ],
  },
];
