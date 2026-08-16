/* Real products from PT Biotek Farmasi Indonesia. Benefits, dosage,
 * composition and store links come from biotekfarmasiindonesia.co.id and are
 * translated from the Indonesian original — the substance is theirs, only the
 * language is ours. Nothing has been added or rounded up.
 *
 * There is no public price list, so a card carries a store link rather than a
 * figure. */

/* Every photograph was normalised to this exact studio backdrop, so an image
 * block and the card holding it share one colour and the edge disappears.
 * Do not change this without re-running the image pass. */
export const BACKDROP = '#CFD7DA';

export const CATEGORIES = ['All', 'Immunity', 'Blood sugar', 'Kidney', 'Immune system'];

const stores = (tokopedia, shopee, tiktok, blibli) => [
  { name: 'Tokopedia', url: tokopedia, logo: '/img/marketplace/toped.webp' },
  { name: 'Shopee', url: shopee, logo: '/img/marketplace/shopee.webp' },
  { name: 'TikTok Shop', url: tiktok, logo: '/img/marketplace/tiktok.webp' },
  { name: 'Blibli', url: blibli, logo: '/img/marketplace/blibli.webp' },
];

export const PRODUCTS = [
  {
    id: 'viradef',
    name: 'Viradef',
    category: 'Immunity',
    rating: '5.0',
    packaging: '3 blisters × 10 capsules · enteric coated',
    blurb: 'Blocks viral entry and replication while lifting cellular energy.',
    image: '/img/produk/viradef.webp',
    imageSrcSet: '/img/produk/viradef-sm.webp 440w, /img/produk/viradef.webp 880w',
    gallery: ['/img/produk/viradef.webp', '/img/produk/viradef-2.png'],
    benefits: [
      'Prevents viruses from entering the cell',
      'Inhibits viral replication once a virus is already inside the cell',
      'Raises cellular energy (ATP)',
      'A more powerful antioxidant than 10,000 mg of vitamin C',
      'Helps address infection from a range of viruses',
    ],
    dosage: [
      'Prevention: 1 capsule a day',
      'Treatment: adjusted to the case at hand',
    ],
    composition: {
      lead: 'Each enteric-coated capsule contains plant extracts:',
      items: [
        'Malus pumila fructus (apple cider vinegar) 300 mg',
        'Withania somnifera radix (ashwagandha root) 100 mg',
        'Zingiber officinale rhizome (ginger rhizome) 50 mg',
        'Elettaria cardamomum radix (cardamom root) 50 mg',
      ],
    },
    notes: [
      "Indication: helps maintain the body's resistance",
      'Mechanism: inhibits the TMPRSS2 and MPRO enzymes',
    ],
    stores: stores(
      'https://tk.tokopedia.com/ZSSHhWNvU/',
      'https://s.shopee.co.id/7V5xrElJmE',
      'https://vt.tokopedia.com/t/ZSHsLfsGYAGK9-vZMMI/',
      'https://blibli.onelink.me/GNtk/b36empf0'
    ),
  },
  {
    id: 'dialance',
    name: 'Dialance',
    category: 'Blood sugar',
    rating: '5.0',
    packaging: 'Enteric-coated capsules',
    blurb: 'Normalises blood sugar and protects the organs diabetes wears down.',
    image: '/img/produk/dialance.webp',
    imageSrcSet: '/img/produk/dialance-sm.webp 440w, /img/produk/dialance.webp 880w',
    gallery: ['/img/produk/dialance.webp', '/img/produk/dialance-2.jpg'],
    benefits: [
      'Helps normalise blood sugar levels',
      'Eases complications arising from diabetes',
      'Regulates and helps restore liver function',
      'Prevents and repairs damage diabetes does to vital organs — kidneys, liver and pancreas',
      'Regulates IGF-1 and EGF, pathways involved in ovarian, breast, pancreatic, prostate and bowel cancer',
    ],
    dosage: [
      'Per the pack label: 1–2 capsules, 1–2 times a day after meals',
      'The dose may be adjusted to your HbA1c reading',
    ],
    composition: {
      lead: 'Each enteric-coated capsule contains plant extracts:',
      items: [
        'Curcuma xanthorrhiza rhizome (Javanese turmeric rhizome) 300 mg',
        'Citrus limon pericarpium (lemon peel) 100 mg',
        'Malus pumila fructus (apple cider vinegar) 100 mg',
        'Angelica sinensis radix (angelica root) 100 mg',
      ],
    },
    notes: [
      'Suggested dose by HbA1c reading:',
      'HbA1c 5.7 – 6.4% : 1 capsule, twice a day after meals',
      'HbA1c 6.4 – 8% : 2 capsules, twice a day after meals',
      'HbA1c 8.1 – 10% : 2 capsules, three times a day after meals',
      'HbA1c above 10% : 2 capsules, four times a day after meals',
      'Keep checking HbA1c every three months — it matters for confirming the diagnosis and judging whether treatment is working.',
      'Mechanism: inhibits gluconeogenesis with the liver as its point of action, and regulates EGF and IGF-1',
    ],
    stores: stores(
      'https://tk.tokopedia.com/ZSSHhxY5M/',
      'https://s.shopee.co.id/2g0i6NCBNE',
      'https://vt.tokopedia.com/t/ZSHsLf4eU3yfU-QabxU/',
      'https://blibli.onelink.me/GNtk/smfv9icw'
    ),
  },
  {
    id: 'kfix',
    name: 'K-Fix',
    category: 'Kidney',
    rating: '5.0',
    packaging: 'Enteric-coated capsules',
    blurb: 'Supports kidney function and eases urinary tract infection.',
    image: '/img/produk/kfix.webp',
    imageSrcSet: '/img/produk/kfix-sm.webp 440w, /img/produk/kfix.webp 880w',
    gallery: ['/img/produk/kfix.webp', '/img/produk/kfix-2.jpg'],
    benefits: [
      'Helps improve and maintain kidney function',
      'Helps raise ATP in the kidneys',
      'Helps relieve urinary tract infection',
    ],
    dosage: [
      '1 – 2 capsules a day after meals',
      'The dose may be adjusted to need',
    ],
    composition: {
      lead: 'Each enteric-coated capsule contains plant extracts:',
      items: [
        'Aristotelia chilensis fructus (maqui berry) 250 mg',
        'Paenoia lactiflora root (peony root) 200 mg',
        'Sambucus nigra fructus (black elderberry) 100 mg',
        'Vaccinium oxycoccus fructus (cranberry) 50 mg',
      ],
    },
    notes: [
      'Suggested dose by glomerular filtration rate:',
      'GFR above 90 : 1 capsule once a day after meals',
      'GFR 70 – 90 : 1 capsule twice a day after meals',
      'GFR 20 – 69 : 1 capsule three times a day after meals',
      'Mechanism: raises cellular ATP energy in the kidneys',
    ],
    stores: stores(
      'https://tk.tokopedia.com/ZSSHh7Vgt/',
      'https://s.shopee.co.id/4ApVt8wmsS',
      'https://vt.tokopedia.com/t/ZSHsLf4qcFNRD-NToAY/',
      'https://blibli.onelink.me/GNtk/smfv9icw'
    ),
  },
  {
    id: 'regimun',
    name: 'Regimun',
    category: 'Immune system',
    rating: '5.0',
    packaging: '600 mg extract · enteric coated',
    blurb: 'Regulates the immune system rather than suppressing it.',
    image: '/img/produk/regimun.webp',
    imageSrcSet: '/img/produk/regimun-sm.webp 440w, /img/produk/regimun.webp 880w',
    gallery: ['/img/produk/regimun.webp', '/img/produk/regimun-2.jpg'],
    benefits: [
      'Helps limit damage to cells, tissue and organs caused by oxidative stress',
      'Helps with symptoms of immune disorders — autoimmune conditions, rosacea, sleep apnoea, allergy, asthma and migraine among them',
      'Regulates the immune system rather than suppressing it',
      'A strong anti-inflammatory and antioxidant, so it helps with skin complaints and regulates disturbed hair growth',
    ],
    dosage: [
      'Per the BPOM label: 2 – 4 capsules, 1 – 2 times a day after meals',
      'The dose may be adjusted to the condition being treated',
      "Indication: helps maintain the body's resistance",
    ],
    composition: {
      lead: 'Each enteric-coated capsule contains 600 mg of plant extract, made up of:',
      items: [
        'Aristotelia chilensis fructus (maqui berry) 300 mg',
        'Sambuccus nigra fructus (black elderberry) 100 mg',
        'Vaccinium corimbosum fructus (blueberry) 100 mg',
        'Vaccinium myrtillus fructus (bilberry) 100 mg',
      ],
    },
    notes: [
      'Mechanism: helps regulate TNF-α and IL-6 cytokine production by inhibiting NF-κB activation',
      'Drug interactions: none found so far, either with other Biotek products or with pharmaceutical medicines',
      'Side effects: digestive upset, though rarely',
      'Storage: best kept at room temperature (15℃ – 25℃)',
    ],
    stores: stores(
      'https://tk.tokopedia.com/ZSSHhcKLh/',
      'https://s.shopee.co.id/4VSMHle47u',
      'https://vt.tokopedia.com/t/ZSHsLfqfnTacN-NofzU/',
      'https://blibli.onelink.me/GNtk/rd6o054i'
    ),
  },
];

export const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

/* Official store links for the whole range, not a single product. */
export const OFFICIAL_STORES = stores(
  'https://www.tokopedia.com/biotekfarmasi',
  'https://shopee.co.id/biotekfarmasi',
  'https://vt.tiktok.com/ZSSX9emcv/',
  'https://s.blibli.com/GNtk/b80f00yo'
);
