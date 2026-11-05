import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { resolveRoutePath } from './utils/paths';
import { routes } from './data/routes';
import Seo from './components/Seo';
import './styles/header.css';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [path, setPath] = useState(() => resolveRoutePath(window.location.pathname));
  const [contactCtaVisible, setContactCtaVisible] = useState(false);

  useEffect(() => {
    const contactCtas = document.querySelectorAll('.btn-gold[href*="wa.me"]');
    const visibleCtas = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleCtas.add(entry.target);
        else visibleCtas.delete(entry.target);
      });
      setContactCtaVisible(visibleCtas.size > 0);
    }, { threshold: 0.01 });

    contactCtas.forEach((cta) => observer.observe(cta));
    if (contactCtas.length === 0) setContactCtaVisible(false);

    return () => observer.disconnect();
  }, [path, lang]);

  useEffect(() => {
    const updatePath = () => {
      setPath(resolveRoutePath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    const handleClick = (event) => {
      const link = event.target.closest('a');
      if (!link || link.target === '_blank' || link.origin !== window.location.origin) return;

      const route = resolveRoutePath(link.pathname);
      if (!(route in routes)) return;

      event.preventDefault();
      window.history.pushState({}, '', link.pathname);
      setPath(route);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', updatePath);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', updatePath);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const active = routes[path] || 'home';
  const pages = {
    home: <Home lang={lang} />,
    about: <About lang={lang} />,
    products: <Products lang={lang} />,
    services: <Services lang={lang} />,
    gallery: <Gallery lang={lang} />,
    contact: <Contact lang={lang} />,
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className="app-shell">
      <Seo path={path} lang={lang} />
      <Header lang={lang} setLang={setLang} active={active} />
      <main key={path}>{pages[active] || pages.home}</main>
      <Footer lang={lang} />
      <a
        className={`floating-whatsapp${contactCtaVisible ? ' contact-cta-visible' : ''}`}
        href="https://wa.me/966534648751"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <span className="whatsapp-dot" />
        <span>{lang === 'ar' ? 'تواصل معنا' : 'WhatsApp'}</span>
      </a>
    </div>
  );
}
