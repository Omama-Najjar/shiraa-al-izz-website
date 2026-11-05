import { useEffect } from 'react';
import { pageSeo } from '../data/seo';
import { canonicalFor, SITE_URL } from '../data/site';

const imageUrl = `${SITE_URL}/images/brand-logo.png`;

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function Seo({ path, lang }) {
  useEffect(() => {
    const metadata = pageSeo[path] || pageSeo['/'];
    const localized = metadata[lang];
    const url = canonicalFor(path);

    document.title = localized.title;
    setMeta('name', 'description', localized.description);
    setMeta('property', 'og:title', localized.title);
    setMeta('property', 'og:description', localized.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:locale', lang === 'ar' ? 'ar_SA' : 'en_US');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', localized.title);
    setMeta('name', 'twitter:description', localized.description);
    setMeta('name', 'twitter:image', imageUrl);
    setMeta('name', 'twitter:url', url);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    let structuredData = document.head.querySelector('#structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${canonicalFor('/')}#business`,
          name: 'مؤسسة شراع العز للخيام',
          url: canonicalFor('/'),
          logo: `${SITE_URL}/images/brand-logo.png`,
          image: `${SITE_URL}/images/approved-hero-landscape.webp`,
          telephone: '+966534648751',
          email: 'info@sheraaelezz.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'طريق تبوك، بعد الفحص الدوري، مقابل محطة شمان',
            addressLocality: 'المدينة المنورة',
            addressCountry: 'SA',
          },
          areaServed: {
            '@type': 'City',
            name: 'المدينة المنورة',
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '08:00',
            closes: '22:00',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${canonicalFor('/')}#website`,
          name: 'شراع العز للخيام',
          alternateName: 'مؤسسة شراع العز للخيام',
          url: canonicalFor('/'),
          inLanguage: ['ar', 'en'],
          publisher: {
            '@id': `${canonicalFor('/')}#business`,
          },
        },
      ],
    });
  }, [lang, path]);

  return null;
}
