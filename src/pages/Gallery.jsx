import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import galleryImages from '../data/galleryImages';
import '../styles/gallery.css';

export default function Gallery({ lang }) {
  const ar = lang === 'ar';
  const [photos] = useState(() => {
    const shuffled = [...galleryImages];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
  });
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef(null);
  const wheelCooldown = useRef(0);

  const showPrevious = useCallback(() => {
    setActive((current) => (current - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const showNext = useCallback(() => {
    setActive((current) => (current + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'Escape' && lightboxOpen) setLightboxOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, showNext, showPrevious]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 50) return;
    if (distance < 0) showNext();
    else showPrevious();
  };

  const handleWheel = (event) => {
    if (Math.abs(event.deltaX) < 30 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
    event.preventDefault();
    const now = Date.now();
    if (now - wheelCooldown.current < 450) return;
    wheelCooldown.current = now;
    if (event.deltaX > 0) showNext();
    else showPrevious();
  };

  const photo = photos[active];
  const photoTitle = ar ? photo.ar : photo.en;
  const previousLabel = ar ? 'الصورة السابقة' : 'Previous photo';
  const nextLabel = ar ? 'الصورة التالية' : 'Next photo';
  const closeLabel = ar ? 'إغلاق العرض المكبّر' : 'Close enlarged view';

  const controls = (
    <>
      <button
        className="gallery-arrow gallery-previous"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          showPrevious();
        }}
        aria-label={previousLabel}
      >
        <ChevronRight aria-hidden="true" />
      </button>
      <button
        className="gallery-arrow gallery-next"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          showNext();
        }}
        aria-label={nextLabel}
      >
        <ChevronLeft aria-hidden="true" />
      </button>
    </>
  );

  return (
    <>
      <PageIntro
        eyebrow={ar ? 'من أعمالنا' : 'OUR WORK'}
        title={ar ? 'معرض الصور' : 'Gallery'}
        subtitle={ar ? 'صور من الخيام والمنتجات والأعمال' : 'Tents, products and completed work'}
        image="/images/approved-hero-landscape.webp"
      />

      <section className="gallery-section section-wrap" aria-label={ar ? 'معرض الصور' : 'Photo gallery'}>
        <div className="gallery-toolbar">
          <div>
            <span className="eyebrow">{ar ? 'معرض شراع العز' : 'SHARAA AL-IZZ COLLECTION'}</span>
            <h2>{ar ? 'التفاصيل تصنع الفرق' : 'Details make the difference'}</h2>
          </div>
          <span className="gallery-counter" aria-live="polite">
            {active + 1} / {photos.length}
          </span>
        </div>

        <div
          className="gallery-viewer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <button
            className="gallery-main"
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={ar ? `تكبير الصورة: ${photoTitle}` : `Enlarge photo: ${photoTitle}`}
          >
            <img key={photo.src} src={photo.src} alt={photoTitle} fetchPriority="high" />
          </button>
          {controls}
        </div>

        <div className="gallery-caption" aria-live="polite">
          <span>{photoTitle}</span>
          <span>{active + 1} / {photos.length}</span>
        </div>

        <div className="gallery-thumbnails" aria-label={ar ? 'اختيار صورة' : 'Choose a photo'}>
          {photos.map((item, index) => (
            <button
              className={`gallery-thumbnail${index === active ? ' active' : ''}`}
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={ar ? `عرض الصورة ${index + 1}: ${item.ar}` : `Show photo ${index + 1}: ${item.en}`}
              aria-current={index === active ? 'true' : undefined}
            >
              <img src={item.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={ar ? `عرض مكبّر: ${photoTitle}` : `Enlarged view: ${photoTitle}`}
          onClick={() => setLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <button
            className="gallery-lightbox-close"
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label={closeLabel}
          >
            <X aria-hidden="true" />
          </button>
          {controls}
          <img
            key={`lightbox-${photo.src}`}
            className="gallery-lightbox-image"
            src={photo.src}
            alt={photoTitle}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
