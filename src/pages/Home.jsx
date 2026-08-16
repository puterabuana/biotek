import { lazy, Suspense } from 'react';
import BiotekHero from '../components/BiotekHero.jsx';

const About = lazy(() => import('../components/About.jsx'));
const Assessment = lazy(() => import('../components/Assessment.jsx'));
const Contact = lazy(() => import('../components/Contact.jsx'));
const Faq = lazy(() => import('../components/Faq.jsx'));
const Marquee = lazy(() => import('../components/Marquee.jsx'));
const Products = lazy(() => import('../components/Products.jsx'));
const Promotions = lazy(() => import('../components/Promotions.jsx'));
const Science = lazy(() => import('../components/Science.jsx'));
const Testimonials = lazy(() => import('../components/Testimonials.jsx'));

function Deferred({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function Home() {
  return (
    <>
      <BiotekHero />
      <Deferred><Marquee /></Deferred>
      <Deferred><About /></Deferred>
      <Deferred><Products /></Deferred>
      <Deferred><Science /></Deferred>
      <Deferred><Assessment /></Deferred>
      <Deferred><Promotions /></Deferred>
      <Deferred><Testimonials /></Deferred>
      <Deferred><Faq /></Deferred>
      <Deferred><Contact /></Deferred>
    </>
  );
}
