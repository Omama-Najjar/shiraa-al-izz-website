import { categories } from '../data/content';
import PageIntro from '../components/PageIntro';
import { MessageCircle } from 'lucide-react';
import '../styles/products.css';

export default function Products({ lang }) {
  const ar = lang === 'ar';

  return (
    <div className="products-page" dir={ar ? 'rtl' : 'ltr'}>
      <PageIntro
        eyebrow={ar ? 'تشكيلة متنوعة' : 'OUR COLLECTION'}
        title={ar ? 'منتجات الخيام والمجالس في المدينة المنورة' : 'Tents and majlis products in Madinah'}
        subtitle={ar ? 'مؤسسة شراع العز للخيام' : 'Sharaa Al-Izz Tents'}
        image="/images/approved-hero-landscape.webp"
      />

      <section className="products-section section-wrap" aria-label={ar ? 'فئات المنتجات' : 'Product categories'}>
        <div className="product-grid">
          {categories.map((category, index) => (
            <article className="product-card" key={category.id}>
              <div className="product-image">
                <img
                  src={category.image}
                  alt={category.ar}
                  width={category.width}
                  height={category.height}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : undefined}
                />
              </div>
              <div className="product-card-bottom">
                <h2>{ar ? category.ar : category.en}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="products-cta">
        <div>
          <span className="eyebrow">{ar ? 'طلب خاص؟' : 'A special request?'}</span>
          <h2>{ar ? 'تواصل معنا لتفاصيل طلبك' : 'Tell us what you need'}</h2>
          <p>
            {ar
              ? 'يسعدنا مساعدتكم في اختيار المقاس والتصميم المناسب.'
              : 'We can help you discuss the right size and design.'}
          </p>
        </div>
        <a className="btn btn-gold" href="https://wa.me/966534648751" target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          {ar ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
        </a>
      </section>
    </div>
  );
}
