import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import StoreLinks from './StoreLinks.jsx';
import { BACKDROP } from '../lib/products.js';

const TABS = [
  { id: 'dosage', label: 'Dosage' },
  { id: 'composition', label: 'Composition' },
  { id: 'notes', label: 'Notes' },
];

export default function ProductDetail({ product, onClose }) {
  const [tab, setTab] = useState('dosage');
  const [shot, setShot] = useState(0);

  /* Back to the top of the sheet whenever a different product opens. */
  useEffect(() => {
    setTab('dosage');
    setShot(0);
  }, [product]);

  useEffect(() => {
    if (!product) return undefined;
    const onKey = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <div onClick={onClose} aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        className="relative flex max-h-[92vh] w-full max-w-[1060px] flex-col overflow-hidden rounded-t-2xl bg-[#FEFDF9] sm:rounded-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition-colors hover:bg-white"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="overflow-y-auto">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* Gallery — same backdrop as the card, so the sheet feels like a
                continuation of it rather than a new surface. */}
            <div
              className="flex flex-col gap-4 p-6 lg:p-8"
              style={{ backgroundColor: BACKDROP }}
            >
              <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={product.gallery[shot]}
                  alt={`${product.name} — view ${shot + 1}`}
                  className="max-h-[300px] w-auto object-contain lg:max-h-[400px]"
                />
              </div>

              {product.gallery.length > 1 && (
                <div className="flex gap-3">
                  {product.gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setShot(i)}
                      aria-label={`View ${i + 1}`}
                      aria-pressed={i === shot}
                      className={`h-16 w-16 overflow-hidden rounded-lg bg-white/50 p-1 transition-all duration-300 ${
                        i === shot ? 'ring-2 ring-black/70' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={src} alt={`${product.name} product thumbnail`} className="h-full w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detail */}
            <div className="flex flex-col gap-5 p-6 lg:p-10">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                  {product.category}
                </p>
                <h2 className="font-dm text-[34px] font-normal leading-[1.02] tracking-[-0.05em] text-black lg:text-[46px]">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm tracking-[-0.02em] text-black/45">
                  {product.packaging}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 border-y border-black/10 py-5">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 text-sm leading-[1.5] tracking-[-0.02em] text-black/70 lg:text-base"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-black/40" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div>
                <div className="flex gap-6 border-b border-black/10">
                  {TABS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTab(item.id)}
                      aria-pressed={tab === item.id}
                      className={`-mb-px border-b-2 pb-3 text-sm font-medium tracking-[-0.02em] transition-colors lg:text-base ${
                        tab === item.id
                          ? 'border-black text-black'
                          : 'border-transparent text-black/40 hover:text-black/70'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="pt-5">
                  {tab === 'composition' ? (
                    <div className="flex flex-col gap-2">
                      <p className="text-sm tracking-[-0.02em] text-black/45 lg:text-base">
                        {product.composition.lead}
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {product.composition.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm leading-[1.5] tracking-[-0.02em] text-black/70 lg:text-base"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <ul className="flex flex-col gap-2">
                      {(tab === 'dosage' ? product.dosage : product.notes).map((line) => (
                        <li
                          key={line}
                          className="text-sm leading-[1.55] tracking-[-0.02em] text-black/65 lg:text-base"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-1">
                <p className="mb-3 text-sm tracking-[-0.02em] text-black/45">
                  Buy from an official store
                </p>
                <StoreLinks stores={product.stores} tone="logo" />

                {/* This sheet is the quick look; the page carries the rest. */}
                <Link
                  to={`/products/${product.id}`}
                  onClick={onClose}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm tracking-[-0.02em] text-black underline underline-offset-4"
                >
                  Open the full {product.name} page
                  <ArrowUpRight size={15} strokeWidth={1.6} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
