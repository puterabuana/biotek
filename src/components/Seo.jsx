import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY, SOCIALS } from '../lib/company.js';
import { findProduct } from '../lib/products.js';

const SITE_URL = 'https://biotekfarmasi.com';
const DEFAULT = {
  title: 'Biotek Farmasi Indonesia | Suplemen Herbal BPOM & Halal',
  description:
    'Biotek Farmasi Indonesia menghadirkan suplemen herbal berizin BPOM, halal, dan dibuat dengan standar GMP untuk kebutuhan kesehatan sehari-hari.',
};

const PAGES = {
  '/about': {
    title: 'Tentang Biotek Farmasi Indonesia | Herbal Berstandar GMP',
    description:
      'Kenali Biotek Farmasi Indonesia, perusahaan farmasi herbal dengan riset, pengembangan, dan produksi berstandar GMP.',
  },
  '/news': {
    title: 'Artikel Kesehatan | Biotek Farmasi Indonesia',
    description: 'Artikel dan informasi kesehatan dari Biotek Farmasi Indonesia.',
  },
  '/events': {
    title: 'Kegiatan Biotek Farmasi Indonesia',
    description: 'Kegiatan dan edukasi kesehatan dari Biotek Farmasi Indonesia.',
  },
  '/faq': {
    title: 'FAQ Produk Biotek Farmasi Indonesia',
    description: 'Jawaban seputar produk herbal, keaslian produk, dan layanan Biotek Farmasi Indonesia.',
  },
  '/contact': {
    title: 'Kontak Biotek Farmasi Indonesia',
    description: 'Hubungi Biotek Farmasi Indonesia melalui telepon, email, WhatsApp, atau kunjungi alamat kami di Jakarta Pusat.',
  },
  '/where-to-buy': {
    title: 'Tempat Beli Produk Biotek Farmasi Indonesia',
    description: 'Beli produk Biotek Farmasi Indonesia hanya melalui toko resmi, WhatsApp resmi, dan mitra apotek terpercaya.',
  },
};

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attribute).forEach(([key, item]) => element.setAttribute(key, item));
  element.setAttribute('content', value);
}

function pageSeo(pathname) {
  if (pathname.startsWith('/products/')) {
    const product = findProduct(pathname.split('/').pop());
    if (product) {
      return {
        title: `${product.name} | Produk Herbal Biotek Farmasi Indonesia`,
        description: `${product.name} dari Biotek Farmasi Indonesia. ${product.packaging}. Lihat informasi produk dan toko resmi.`,
        image: product.image,
        product,
      };
    }
  }
  return PAGES[pathname] ?? DEFAULT;
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageSeo(pathname);
    const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
    const image = `${SITE_URL}${meta.image ?? '/img/produk/bundle.webp'}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', { name: 'description' }, meta.description);
    setMeta('meta[property="og:title"]', { property: 'og:title' }, meta.title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, meta.description);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonical);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, image);
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, meta.title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, meta.description);
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, image);

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonical);

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: COMPANY.legalName,
          alternateName: COMPANY.name,
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          email: COMPANY.email,
          telephone: `+62-${COMPANY.phones[2].replace(/^0/, '').replace(/-/g, '')}`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jl. Cempaka Putih Tengah I No. 3A, Cempaka Putih',
            addressLocality: 'Jakarta Pusat',
            addressRegion: 'DKI Jakarta',
            postalCode: '10510',
            addressCountry: 'ID',
          },
          sameAs: SOCIALS.map(({ url }) => url),
        },
        {
          '@type': 'WebPage',
          '@id': canonical,
          url: canonical,
          name: meta.title,
          description: meta.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
        },
      ],
    };

    if (meta.product) {
      schema['@graph'].push({
        '@type': 'Product',
        name: meta.product.name,
        description: meta.product.blurb,
        image,
        brand: { '@type': 'Brand', name: COMPANY.name },
        url: canonical,
      });
    }

    const script = document.getElementById('structured-data');
    if (script) script.textContent = JSON.stringify(schema);
  }, [pathname]);

  return null;
}
