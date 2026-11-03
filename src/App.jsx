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
import { pageSeo } from './data/seo';
import './styles/header.css';

function updateMeta(selector, attribute, value, createTag) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(createTag).forEach(([key, tagValue]) => element.setAttribute(key, tagValue));
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

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
    const metadata = pageSeo[path] || pageSeo['/'];
    const localizedMetadata = metadata[lang];
    const canonicalUrl = `https://sheraaelezz.com${path === '/' ? '/' : path}`;

    document.title = localizedMetadata.title;
    updateMeta('meta[name="description"]', 'content', localizedMetadata.description, { name: 'description' });
    updateMeta('meta[property="og:title"]', 'content', localizedMetadata.title, { property: 'og:title' });
    updateMeta('meta[property="og:description"]', 'content', localizedMetadata.description, { property: 'og:description' });
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl, { property: 'og:url' });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [lang, path]);

  return (
    <div className="app-shell">
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
