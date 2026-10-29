import PageIntro from '../components/PageIntro';
import { aboutParagraphs, aboutParagraphsEn } from '../data/content';
import '../styles/about.css';

export default function About({ lang }) {
  const ar = lang === 'ar';

  const values = ar
    ? [
        ['01', 'أصالة التراث', 'منتجات مستوحاة من الطابع العربي الأصيل.'],
        ['02', 'تنوع الخيارات', 'تشكيلة تناسب احتياجات المجالس والرحلات.'],
        ['03', 'تواصل مباشر', 'نتيح لكم الاستفسار عن تفاصيل طلباتكم.'],
      ]
    : [
        ['01', 'Authentic heritage', 'Products inspired by Arab heritage.'],
        ['02', 'Varied selection', 'Choices for gatherings and outdoor trips.'],
        ['03', 'Direct communication', 'Ask us directly about your requirements.'],
      ];

  return (
    <div className="about-page" dir={ar ? 'rtl' : 'ltr'}>
      <PageIntro
        eyebrow={ar ? 'حكايتنا' : 'OUR STORY'}
        title={ar ? 'من نحن' : 'About us'}
        subtitle={ar ? 'مؤسسة شراع العز للخيام' : 'Sharaa Al-Izz Tents'}
        image="/images/approved-hero-landscape.webp"
      />

      <section className="about-layout section-wrap" dir={ar ? 'rtl' : 'ltr'}>
        <article className="about-copy">
          <span className="eyebrow">{ar ? 'مؤسسة شراع العز للخيام' : 'SHARAA AL-IZZ TENTS'}</span>
          <h2>
            {ar
              ? 'وجهتكم للخيام وبيوت الشعر والمجالس العربية'
              : 'Your destination for tents and Arabic majlis'}
          </h2>
          {(ar ? aboutParagraphs : aboutParagraphsEn).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </section>

      <section className="commercial-registration" dir={ar ? 'rtl' : 'ltr'} aria-labelledby="commercial-registration-title">
        <div className="commercial-registration-card">
          <div className="commercial-registration-details">
            <span className="eyebrow">{ar ? 'الوثائق الرسمية' : 'OFFICIAL DOCUMENTS'}</span>
            <h2 id="commercial-registration-title">{ar ? 'السجل التجاري' : 'Commercial Registration'}</h2>
            <p className="commercial-registration-company">{ar ? 'مؤسسة شراع العز للخيام' : 'Sharaa Al-Izz Tents Establishment'}</p>
            <p className="commercial-registration-number">
              <span>{ar ? 'الرقم الوطني الموحد' : 'Unified National Number'}</span>
              <strong>7039219709</strong>
            </p>
            <a
              className="commercial-registration-link"
              href="/images/commercial-registration-certificate.png"
              target="_blank"
              rel="noreferrer"
            >
              {ar ? 'عرض الشهادة كاملة' : 'View full certificate'}
            </a>
          </div>
          <a
            className="commercial-registration-preview"
            href="/images/commercial-registration-certificate.png"
            target="_blank"
            rel="noreferrer"
            aria-label={ar ? 'عرض شهادة السجل التجاري كاملة' : 'View the full commercial registration certificate'}
          >
            <img
              src="/images/commercial-registration-certificate.png"
              alt={ar ? 'شهادة السجل التجاري لمؤسسة شراع العز للخيام' : 'Commercial registration certificate for Sharaa Al-Izz Tents Establishment'}
            />
          </a>
        </div>
      </section>

      <section className="about-values" dir={ar ? 'rtl' : 'ltr'}>
        {values.map(([number, title, description]) => (
          <div className="about-value-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
