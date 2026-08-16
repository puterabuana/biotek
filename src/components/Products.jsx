import { useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import Reveal from './Reveal.jsx';
import ProductDetail from './ProductDetail.jsx';
import StoreLinks from './StoreLinks.jsx';
import { BACKDROP, CATEGORIES, PRODUCTS } from '../lib/products.js';

export default function Products() {
  const [category, setCategory] = useState('All');
  const [opened, setOpened] = useState(null);

  const visible =
    category === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <section id="products" className="bg-[#ECEDEC] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
                The range
              </p>
            </Reveal>

            <Reveal
              as="h2"
              delay={60}
              className="max-w-[720px] font-dm text-[36px] font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-[52px] lg:text-[72px]"
            >
              Pick the formula
              <span className="text-black/35"> your week actually needs.</span>
            </Reveal>
          </div>

          <Reveal delay={120} className="flex flex-wrap gap-2">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-[-0.02em] transition-colors duration-300 lg:text-base ${
                  category === item
                    ? 'bg-black text-white'
                    : 'bg-black/5 text-black/60 hover:bg-black/10 hover:text-black'
                }`}
              >
                {item}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {visible.map((product, i) => (
            <Reveal
              key={product.id}
              delay={(i % 4) * 80}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#FEFDF9]"
            >
              {/* The photograph's studio backdrop and this block share one
                  colour, so the image has no visible edge. */}
              <button
                type="button"
                onClick={() => setOpened(product)}
                aria-label={`View ${product.name}`}
                className="relative block aspect-[4/5] w-full overflow-hidden"
                style={{ backgroundColor: BACKDROP }}
              >
                <img
                  src={product.image}
                  srcSet={product.imageSrcSet}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  alt={product.name}
                  width="880"
                  height="1100"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />

                <span className="absolute left-4 top-4 rounded-full bg-black/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  {product.category}
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-1 items-center justify-center rounded-full bg-black text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </span>
              </button>

              <div className="flex flex-1 flex-col gap-3 px-6 py-6 lg:px-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-dm text-xl font-medium tracking-[-0.04em] text-black lg:text-2xl">
                    {product.name}
                  </h3>
                  <span className="flex items-center gap-1.5">
                    <Star size={13} strokeWidth={1.5} className="fill-black text-black" />
                    <span className="text-sm tracking-[-0.02em] text-black">{product.rating}</span>
                  </span>
                </div>

                <p className="flex-1 text-sm leading-[1.45] tracking-[-0.02em] text-black/55">
                  {product.blurb}
                </p>

                <button
                  type="button"
                  onClick={() => setOpened(product)}
                  className="mt-1 flex h-12 items-center justify-center gap-2 rounded-md bg-black text-sm font-medium tracking-[-0.02em] text-white transition-transform duration-300 hover:scale-[1.02] lg:text-base"
                >
                  Buy now
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </button>

                <StoreLinks stores={product.stores} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProductDetail product={opened} onClose={() => setOpened(null)} />
    </section>
  );
}
