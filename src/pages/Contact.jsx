import PageIntro from '../components/PageIntro';
import { MapPin, Phone, MessageCircle, Clock, MapPinned, ExternalLink, Mail } from 'lucide-react';
import '../styles/contact.css';

const mapsUrl = 'https://maps.app.goo.gl/X39wA8FnsZVidVB77?g_st=iw';

export default function Contact({ lang }) {
  const ar = lang === 'ar';

  return (
    <>
      <PageIntro
        eyebrow={ar ? 'نحن هنا لخدمتكم' : 'WE ARE HERE TO HELP'}
        title={ar ? 'تواصل معنا' : 'Contact us'}
        subtitle={
          ar
            ? 'يسعدنا استقبال استفساراتكم عن المنتجات والطلبات الخاصة'
            : 'Questions about products or custom orders? Get in touch.'
        }
        image="/images/approved-hero-landscape.webp"
      />

      <section className="contact-layout section-wrap">
        <div className="contact-intro">
          <span className="eyebrow">{ar ? 'تواصل مباشر' : 'DIRECT CONTACT'}</span>
          <h2>{ar ? 'يسعدنا تواصلكم' : 'We would love to hear from you'}</h2>
          <p>
            {ar
              ? 'تواصلوا معنا للاستفسار عن المنتجات والمقاسات والتصاميم والأسعار.'
              : 'Contact us about products, sizes, designs and pricing.'}
          </p>
        </div>

        <div className="contact-details">
          <a className="contact-card" href="https://wa.me/966534648751" target="_blank" rel="noreferrer">
            <span className="contact-icon"><MessageCircle /></span>
            <span>
              <small>{ar ? 'واتساب' : 'WhatsApp'}</small>
              <strong>0534648751</strong>
            </span>
            <ExternalLink size={16} />
          </a>
          <a className="contact-card" href="tel:+966575253084">
            <span className="contact-icon"><Phone /></span>
            <span>
              <small>{ar ? 'اتصال مباشر' : 'Phone'}</small>
              <strong>0575253084</strong>
            </span>
            <ExternalLink size={16} />
          </a>
          <a className="contact-card" href="mailto:info@sheraaelezz.com">
            <span className="contact-icon"><Mail /></span>
            <span>
              <small>{ar ? 'البريد الإلكتروني' : 'Email'}</small>
              <strong>info@sheraaelezz.com</strong>
            </span>
            <ExternalLink size={16} />
          </a>
          <div className="contact-card">
            <span className="contact-icon"><Clock /></span>
            <span>
              <small>{ar ? 'ساعات العمل' : 'Business hours'}</small>
              <strong>{ar ? 'يوميًا من 8 صباحًا إلى 10 مساءً' : 'Daily, 8 AM – 10 PM'}</strong>
            </span>
          </div>
          <div className="whatsapp-qr-card">
            <img src="/images/whatsapp-qr.png" alt={ar ? 'رمز QR للتواصل عبر واتساب' : 'WhatsApp contact QR code'} />
            <div>
              <strong>{ar ? 'امسح الرمز للتواصل عبر واتساب' : 'Scan to chat on WhatsApp'}</strong>
              <p>{ar ? 'افتح كاميرا هاتفك ووجّهها إلى الرمز.' : 'Open your phone camera and point it at the code.'}</p>
              <a href="https://wa.me/966534648751" target="_blank" rel="noreferrer">
                {ar ? 'أو افتح المحادثة مباشرة' : 'Or open WhatsApp directly'}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-location">
          <a
            className="map-placeholder"
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={ar ? 'عرض موقع فرع المدينة المنورة على خرائط Google' : 'Open the Madinah branch in Google Maps'}
          >
            <div className="map-grid" />
            <span className="map-pin"><MapPin size={32} /></span>
            <div className="map-label">
              <strong>{ar ? 'فرع المدينة المنورة' : 'Madinah Branch'}</strong>
              <small>{ar ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</small>
            </div>
          </a>
          <div className="address-card">
            <MapPinned size={22} />
            <div>
              <h3>{ar ? 'عنوان الفرع' : 'Branch address'}</h3>
              <p>
                {ar
                  ? 'طريق تبوك، بعد الفحص الدوري، مقابل محطة شمان'
                  : 'Tabuk Road, after the periodic inspection, opposite Shaman Station'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-note">
        <h2>{ar ? 'لديك طلب خاص؟' : 'Have a custom request?'}</h2>
        <p>
          {ar
            ? 'راسلنا على واتساب وسنساعدك في مناقشة التفاصيل المناسبة.'
            : 'Message us on WhatsApp and we will help discuss the details.'}
        </p>
        <a className="btn btn-gold" href="https://wa.me/966534648751" target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          {ar ? 'ابدأ المحادثة' : 'Start a conversation'}
        </a>
      </section>
    </>
  );
}
