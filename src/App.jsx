import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';

const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const EventsPage = lazy(() => import('./pages/EventsPage.jsx'));
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'));
const NewsPage = lazy(() => import('./pages/NewsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const ProductPage = lazy(() => import('./pages/ProductPage.jsx'));
const WhereToBuyPage = lazy(() => import('./pages/WhereToBuyPage.jsx'));

function PageLoader() {
  return <div className="min-h-screen bg-[#FEFDF9]" aria-label="Memuat halaman" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/where-to-buy" element={<WhereToBuyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
