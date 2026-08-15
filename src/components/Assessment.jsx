import { useState } from 'react';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import Reveal from './Reveal.jsx';
import StoreLinks from './StoreLinks.jsx';
import { BACKDROP, PRODUCTS, findProduct } from '../lib/products.js';

/* Each answer points at a product id; the id picked most often wins.
 * Questions ask what you want to look after, not what is wrong with you —
 * this points at a product, it does not diagnose. */
const QUESTIONS = [
  {
    id: 'goal',
    prompt: 'What would you like to look after first?',
    options: [
      { label: 'Staying well through the season', value: 'viradef' },
      { label: 'Keeping blood sugar in range', value: 'dialance' },
      { label: 'Kidney function', value: 'kfix' },
      { label: 'An immune system that overreacts', value: 'regimun' },
    ],
  },
  {
    id: 'tracking',
    prompt: 'Anything you are already tracking with your doctor?',
    options: [
      { label: 'Nothing specific, general upkeep', value: 'viradef' },
      { label: 'HbA1c or blood glucose', value: 'dialance' },
      { label: 'eGFR, LFG or creatinine', value: 'kfix' },
      { label: 'Inflammation or an autoimmune condition', value: 'regimun' },
    ],
  },
  {
    id: 'fit',
    prompt: 'And how should it fit into your day?',
    options: [
      { label: 'One capsule a day, nothing to think about', value: 'viradef' },
      { label: 'Dose adjusted to my latest lab results', value: 'dialance' },
      { label: 'Focused on a single organ', value: 'kfix' },
      { label: 'Regulating the immune system, not suppressing it', value: 'regimun' },
    ],
  },
];

function pickResult(answers) {
  const tally = {};
  Object.values(answers).forEach((id) => {
    tally[id] = (tally[id] || 0) + 1;
  });

  const best = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
  return findProduct(best[0]) ?? PRODUCTS[0];
}

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const done = step >= QUESTIONS.length;
  const question = QUESTIONS[step];
  const result = done ? pickResult(answers) : null;

  const choose = (value) => {
    setAnswers((current) => ({ ...current, [question.id]: value }));
    setStep((n) => n + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <section id="assessment" className="bg-[#FEFDF9] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal className="mb-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/50">
              Personal assessment
            </p>
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="font-dm text-[36px] font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-[52px] lg:text-[64px]"
          >
            Three questions,
            <span className="text-black/35"> one honest recommendation.</span>
          </Reveal>

          <Reveal
            delay={120}
            className="mt-8 max-w-[440px] text-base leading-[1.6] tracking-[-0.02em] text-black/55 lg:text-lg"
          >
            No email gate, no thirty-step funnel. Tell us what you want to look after and we will
            point at the single formula worth starting with.
          </Reveal>

          <Reveal delay={180} className="mt-6 max-w-[440px] border-l-2 border-black/15 pl-5">
            <p className="text-sm leading-[1.55] tracking-[-0.02em] text-black/45">
              This suggests a product from the answers you pick — it is not a diagnosis. For dosing
              against your own lab results, or if you take prescribed medication, speak to your
              doctor first.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={140}
          className="flex min-h-[420px] flex-col justify-between rounded-2xl bg-[#ECEDEC] px-6 py-8 sm:px-10 sm:py-10"
        >
          {!done ? (
            <>
              <div>
                <div className="mb-8 flex items-center gap-2">
                  {QUESTIONS.map((q, i) => (
                    <span
                      key={q.id}
                      className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
                        i <= step ? 'bg-black' : 'bg-black/15'
                      }`}
                    />
                  ))}
                </div>

                <p className="mb-2 text-sm tracking-[-0.02em] text-black/45">
                  Question {step + 1} of {QUESTIONS.length}
                </p>

                <h3 className="font-dm text-[26px] font-normal leading-[1.15] tracking-[-0.04em] text-black sm:text-[32px]">
                  {question.prompt}
                </h3>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {question.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => choose(option.value)}
                    className="flex items-center justify-between gap-4 rounded-lg bg-[#FEFDF9] px-5 py-4 text-left text-sm leading-[1.4] tracking-[-0.02em] text-black transition-colors duration-300 hover:bg-black hover:text-white lg:text-base"
                  >
                    {option.label}
                    <ArrowUpRight size={18} strokeWidth={1.5} className="shrink-0 opacity-40" />
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((n) => n - 1)}
                  className="mt-6 self-start text-sm tracking-[-0.02em] text-black/45 underline underline-offset-4 transition-colors hover:text-black"
                >
                  Back
                </button>
              )}
            </>
          ) : (
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="mb-6 text-sm tracking-[-0.02em] text-black/45">
                  Based on your answers
                </p>

                <div className="flex items-center gap-5">
                  <span
                    className="h-28 w-24 shrink-0 overflow-hidden rounded-xl"
                    style={{ backgroundColor: BACKDROP }}
                  >
                    <img
                      src={result.image}
                      alt={`${result.name} herbal supplement`}
                      className="h-full w-full object-cover"
                    />
                  </span>

                  <div>
                    <h3 className="font-dm text-[28px] font-normal leading-[1.1] tracking-[-0.04em] text-black sm:text-[36px]">
                      {result.name}
                    </h3>
                    <p className="mt-1 text-sm tracking-[-0.02em] text-black/45">
                      {result.category} · {result.packaging}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-[420px] text-base leading-[1.55] tracking-[-0.02em] text-black/60">
                  {result.benefits[0]}. {result.dosage[0]}.
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-sm tracking-[-0.02em] text-black/45">
                    Available from an official store
                  </p>
                  <StoreLinks stores={result.stores} tone="logo" />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#products"
                  className="flex h-14 flex-1 items-center justify-center gap-2 rounded-md bg-black text-base font-medium tracking-[-0.03em] text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  See the full details
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </a>

                <button
                  type="button"
                  onClick={restart}
                  className="flex h-14 items-center justify-center gap-2 rounded-md border border-black/15 px-6 text-base font-medium tracking-[-0.03em] text-black transition-colors duration-300 hover:bg-black/5"
                >
                  <RotateCcw size={18} strokeWidth={1.5} />
                  Start over
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
