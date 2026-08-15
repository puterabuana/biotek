/* Biotek sells through marketplaces, not from this page, so every buy path
 * leaves the site. Two tones: `text` keeps a card monochrome, `logo` shows
 * the real marks and is used where colour has room to breathe. */
export default function StoreLinks({ stores, tone = 'text' }) {
  if (tone === 'logo') {
    return (
      <div className="flex flex-wrap gap-2.5">
        {stores.map(({ name, url, logo }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buy on ${name}`}
            className="flex h-12 items-center justify-center rounded-lg bg-white px-4 shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.04]"
          >
            <img src={logo} alt={name} className="h-5 w-auto max-w-[88px] object-contain" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      {stores.map(({ name, url }, i) => (
        <span key={name} className="flex items-center gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[-0.01em] text-black/45 underline decoration-black/20 underline-offset-4 transition-colors hover:text-black hover:decoration-black"
          >
            {name}
          </a>
          {i < stores.length - 1 && <span className="h-1 w-1 rounded-full bg-black/15" />}
        </span>
      ))}
    </div>
  );
}
