import About from '../components/About.jsx';
import Assessment from '../components/Assessment.jsx';
import BiotekHero from '../components/BiotekHero.jsx';
import Contact from '../components/Contact.jsx';
import Faq from '../components/Faq.jsx';
import Marquee from '../components/Marquee.jsx';
import Products from '../components/Products.jsx';
import Promotions from '../components/Promotions.jsx';
import Science from '../components/Science.jsx';
import Testimonials from '../components/Testimonials.jsx';

export default function Home() {
  return (
    <>
      <BiotekHero />
      <Marquee />
      <About />
      <Products />
      <Science />
      <Assessment />
      <Promotions />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
