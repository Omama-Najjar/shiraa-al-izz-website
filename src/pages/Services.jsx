import { services } from '../data/content';
import PageIntro from '../components/PageIntro';
import { ArrowLeft, MessageCircle, Truck } from 'lucide-react';
import { assetPath } from '../utils/paths';
import '../styles/services.css';

export default function Services({ lang }) {
  const ar = lang === 'ar';

  return (
    <div
      className="services-page"
      style={{ '--delivery-background': `url("${assetPath('/images/tent-brown.webp')}")` }}
    >
      <PageIntro
        eyebrow={ar ? 'ما نقدمه لكم' : 'WHAT WE DO'}
        title={ar ? 'خدماتنا' : 'Our services'}
        subtitle={ar ? 'خدمات متنوعة لتجهيز الخيام والمجالس والمظلات' : 'Custom tents, majlis, canopies and more'}
        image="/images/approved-hero-landscape.webp"
      />
      <section className="services-section section-wrap">
        <div className="section-heading">
          <span className="eyebrow">{ar ? 'خدمات المؤسسة' : 'OUR SERVICES'}</span>
          <h2>{ar ? 'من التفصيل إلى الصيانة' : 'From fabrication to maintenance'}</h2>
          <p>
            {ar
              ? 'نقدم مجموعة من الخدمات لتلبية احتياجات عملائنا في تجهيز الخيام والمجالس والمظلات وأشرعة المركبات.'
              : 'A range of services for tents, majlis seating, canopies and vehicle covers.'}
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id}>
              <div className="service-image">
                <img
                  src={service.image}
                  alt={ar ? service.ar : service.en}
                  loading="lazy"
                />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="service-card-copy">
                <h3>{ar ? service.ar : service.en}</h3>
                <a
                  href={`https://wa.me/966534648751?text=${encodeURIComponent(
                    ar
                      ? `السلام عليكم، أستفسر عن خدمة ${service.ar}`
                      : `Hello, I would like to ask about ${service.en}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ar ? 'استفسر عن الخدمة' : 'Ask about this service'} <ArrowLeft size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="delivery-banner">
        <div className="delivery-icon"><Truck size={38} /></div>
        <div>
          <span className="eyebrow">{ar ? 'خدمة التوصيل' : 'DELIVERY SERVICE'}</span>
          <h2>{ar ? 'توصيل إلى جميع أنحاء المملكة' : 'Delivery throughout Saudi Arabia'}</h2>
          <p>
            {ar
              ? 'تواصلوا معنا للاستفسار عن خيارات التوصيل وتفاصيل الطلب.'
              : 'Contact us to discuss delivery options and order details.'}
          </p>
        </div>
        <a className="btn btn-gold" href="https://wa.me/966534648751" target="_blank" rel="noreferrer">
          <MessageCircle size={18} />{ar ? 'استفسر الآن' : 'Ask now'}
        </a>
      </section>
    </div>
  );
}
