export default function PageIntro({ eyebrow, title, subtitle, image = '/images/approved-hero-landscape.webp' }) {
  return (
    <section
      className="page-intro"
      style={{ '--intro-image': `url("${image}")` }}
    >
      <div className="page-intro-inner">
        <span className="eyebrow">{eyebrow}</span>
        <div className="page-intro-title">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          <div className="gold-rule" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
