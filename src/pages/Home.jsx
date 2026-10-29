import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Coffee, Flame, MessageCircle, Phone, Sofa, Tent, Umbrella } from 'lucide-react';
import { assetPath } from '../utils/paths';
import '../styles/home.css';

export default function Home({ lang }) {
  const ar = lang === 'ar';
  const [sparks, setSparks] = useState([]);
  const lastSparkAt = useRef(0);
  const sparkClearTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(sparkClearTimer.current), []);

  const handleTitlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;

    const title = event.currentTarget;
    const bounds = title.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    title.style.setProperty('--mouse-x', `${x}px`);
    title.style.setProperty('--mouse-y', `${y}px`);
    window.clearTimeout(sparkClearTimer.current);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const now = performance.now();
    if (now - lastSparkAt.current < 65) return;
    lastSparkAt.current = now;

    const newSparks = Array.from({ length: 2 }, () => ({
      id: `${now}-${Math.random()}`,
      x: x + (Math.random() - 0.5) * 22,
      y: y + (Math.random() - 0.5) * 18,
      size: 4 + Math.random() * 4,
      duration: 450 + Math.random() * 350,
      driftX: `${(Math.random() - 0.5) * 24}px`,
      driftY: `${-10 - Math.random() * 24}px`,
    }));

    setSparks((current) => [...current, ...newSparks].slice(-28));
  };

  const resetTitleEffect = (event) => {
    if (event.currentTarget.matches(':focus-visible')) {
      centerTitleEffect(event);
      return;
    }

    event.currentTarget.style.setProperty('--mouse-x', '-100px');
    event.currentTarget.style.setProperty('--mouse-y', '-100px');
    sparkClearTimer.current = window.setTimeout(() => setSparks([]), 800);
  };

  const centerTitleEffect = (event) => {
    const title = event.currentTarget;
    if (!title.matches(':focus-visible')) return;
    title.style.setProperty('--mouse-x', `${title.clientWidth / 2}px`);
    title.style.setProperty('--mouse-y', `${title.clientHeight / 2}px`);
  };

  const heroItems = ar
    ? [
        { label: 'خيام وبيوت شعر', Icon: Tent },
        { label: 'مجالس عربية وسجاد ومفارش', Icon: Sofa },
        { label: 'مظلات وسواتر', Icon: Umbrella },
        { label: 'مناقل ومشبات', Icon: Flame },
        { label: 'دلال ونحاسيات', Icon: Coffee },
      ]
    : [
        { label: 'Tents & traditional houses', Icon: Tent },
        { label: 'Arabic majlis, rugs & furnishings', Icon: Sofa },
        { label: 'Canopies & shade structures', Icon: Umbrella },
        { label: 'Braziers & fire pits', Icon: Flame },
        { label: 'Copperware & lanterns', Icon: Coffee },
      ];

  const reasons = ar
    ? [
        { title: 'جودة عالية', text: 'مواد متينة ومعالجة بعناية لضمان متانة وجمال طويل الأمد.' },
        { title: 'توصيل شامل لجميع مناطق المملكة', text: 'خدمة توصيل موثوقة إلى جميع المدن والمناطق داخل المملكة.' },
        { title: 'تركيب احترافي', text: 'فريق متخصص يضمن التنفيذ الدقيق وسرعة الإنجاز بلمسة احترافية.' },
        { title: 'خبرة طويلة', text: 'رؤية عملية عميقة وخبرة في تجهيز المجالس والرحلات والفعاليات.' },
      ]
    : [
        { title: 'Premium quality', text: 'Durable materials and careful craftsmanship for lasting beauty and strength.' },
        { title: 'Delivery across Saudi Arabia', text: 'Reliable shipping to cities and regions across the entire Kingdom.' },
        { title: 'Professional installation', text: 'A specialized team ensures precise execution and smooth project completion.' },
        { title: 'Long experience', text: 'Deep field knowledge and proven expertise in majlis and travel setups.' },
      ];

  const reasonIcons = [Tent, Sofa, Umbrella, Flame];

  return (
    <>
      <section className="home-hero" aria-label={ar ? 'الرئيسية' : 'Home'}>
        <img className="hero-image" src={assetPath('/images/approved-hero-landscape.webp')} alt={ar ? 'خيمة ومجالس عربية' : 'Traditional tent and Arabic majlis'} />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span aria-hidden="true" />
              {ar ? 'تراث أصيل .. لمجالس أرقى' : 'Authentic heritage for refined gatherings'}
              <span aria-hidden="true" />
            </p>

            <h1
              className="hero-title"
              data-title={ar ? 'مؤسسة شراع العز للخيام' : 'Sharaa Al-Izz Tents'}
              tabIndex={0}
              onPointerMove={handleTitlePointerMove}
              onPointerLeave={resetTitleEffect}
              onFocus={centerTitleEffect}
              onBlur={resetTitleEffect}
            >
              {ar ? 'مؤسسة شراع العز للخيام' : 'Sharaa Al-Izz Tents'}
              <span className="hero-title-sparks" aria-hidden="true">
                {sparks.map((spark) => (
                  <span
                    className="hero-title-spark"
                    key={spark.id}
                    style={{
                      left: `${spark.x}px`,
                      top: `${spark.y}px`,
                      '--spark-size': `${spark.size}px`,
                      '--spark-duration': `${spark.duration}ms`,
                      '--spark-drift-x': spark.driftX,
                      '--spark-drift-y': spark.driftY,
                    }}
                  />
                ))}
              </span>
            </h1>
            <p className="hero-subtitle">
              {ar ? 'خيام وبيوت الشعر والتراثيات وسجاد ومجالس عربية' : 'Traditional tents, heritage homes, rugs and Arabic majlis essentials'}
            </p>

            <div className="hero-feature-list" aria-label={ar ? 'فئات المنتجات' : 'Product categories'}>
              {heroItems.map(({ label, Icon }) => (
                <div key={label} className="feature-chip hero-feature">
                  <Icon size={22} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a className="btn btn-gold" href="https://wa.me/966534648751" target="_blank" rel="noreferrer" aria-label={ar ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}>
                <MessageCircle size={18} />
                <span>{ar ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
                <ArrowLeft size={16} />
              </a>

              <a className="btn btn-outline" href="tel:+966575253084" aria-label={ar ? 'اتصال مباشر' : 'Direct call'}>
                <Phone size={18} />
                <span>{ar ? 'اتصال مباشر' : 'Call us'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-why" aria-labelledby="why-choose-us-title">
        <div className="home-ornament" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="section-heading compact-heading">
          <h2 id="why-choose-us-title">{ar ? 'لماذا تختارنا؟' : 'Why choose us?'}</h2>
        </div>

        <div className="feature-grid">
          {reasons.map(({ title, text }, index) => {
            const Icon = reasonIcons[index] || Tent;
            return (
              <article className="feature-card" key={title}>
                <div className="feature-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
