export const pageSeo = {
  '/': {
    ar: {
      title: 'مؤسسة شراع العز للخيام | خيام المدينة المنورة',
      description: 'مؤسسة شراع العز للخيام في المدينة المنورة؛ نوفر الخيام وبيوت الشعر والمجالس العربية والمظلات والسواتر ومستلزمات الرحلات والتراث.',
    },
    en: {
      title: 'Sharaa Al-Izz Tents | Tents in Madinah',
      description: 'Discover tents, traditional Bedouin houses, Arabic majlis seating, canopies and camping essentials from Sharaa Al-Izz Tents in Madinah.',
    },
  },
  '/about': {
    ar: {
      title: 'من نحن | مؤسسة شراع العز للخيام في المدينة المنورة',
      description: 'تعرفوا على مؤسسة شراع العز للخيام في المدينة المنورة، وجهتكم للخيام وبيوت الشعر والمجالس العربية ومستلزمات التراث والرحلات.',
    },
    en: {
      title: 'About Us | Sharaa Al-Izz Tents in Madinah',
      description: 'Learn about Sharaa Al-Izz Tents, serving Madinah with tents, traditional Bedouin houses, Arabic majlis furnishings and heritage essentials.',
    },
  },
  '/products': {
    ar: {
      title: 'خيام وبيوت شعر ومستلزمات المخيمات | شراع العز',
      description: 'استكشفوا منتجات شراع العز في المدينة المنورة: الخيام وبيوت الشعر، المجالس العربية، السجاد والمفروشات، المظلات والسواتر ومستلزمات الرحلات.',
    },
    en: {
      title: 'Tents, Bedouin Houses & Camping Essentials | Sharaa Al-Izz',
      description: 'Browse tents, traditional Bedouin houses, Arabic majlis seating, carpets, canopies and camping essentials from Sharaa Al-Izz in Madinah.',
    },
  },
  '/services': {
    ar: {
      title: 'تفصيل وتأجير الخيام وتركيب المظلات والسواتر | المدينة المنورة',
      description: 'خدمات مؤسسة شراع العز في المدينة المنورة تشمل تفصيل الخيام وبيوت الشعر، تأجير الخيام، تركيب مظلات السيارات ومظلات الغنم والسواتر، وتجهيز المجالس العربية.',
    },
    en: {
      title: 'Tent Tailoring & Rental, Canopies and Screens | Madinah',
      description: 'Explore Sharaa Al-Izz services in Madinah, including custom tents and Bedouin houses, tent rental, canopies, privacy screens and Arabic majlis setup.',
    },
  },
  '/gallery': {
    ar: {
      title: 'أعمال الخيام وبيوت الشعر والمجالس العربية | شراع العز',
      description: 'شاهدوا صور الخيام وبيوت الشعر والمجالس العربية والمظلات والمنتجات التي تقدمها مؤسسة شراع العز للخيام في المدينة المنورة.',
    },
    en: {
      title: 'Tents, Bedouin Houses & Arabic Majlis Gallery | Sharaa Al-Izz',
      description: 'View photos of tents, traditional Bedouin houses, Arabic majlis seating, canopies and products from Sharaa Al-Izz Tents in Madinah.',
    },
  },
  '/contact': {
    ar: {
      title: 'تواصل مع مؤسسة شراع العز للخيام | المدينة المنورة',
      description: 'تواصلوا مع مؤسسة شراع العز للخيام في المدينة المنورة للاستفسار عن الخيام وبيوت الشعر والمجالس العربية والمنتجات والطلبات الخاصة.',
    },
    en: {
      title: 'Contact Sharaa Al-Izz Tents | Madinah',
      description: 'Contact Sharaa Al-Izz Tents in Madinah with questions about tents, traditional Bedouin houses, Arabic majlis furnishings and custom orders.',
    },
  },
};

const businessId = 'https://sheraaelezz.com/#business';

export const businessStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Store',
      '@id': businessId,
      name: 'مؤسسة شراع العز للخيام',
      url: 'https://sheraaelezz.com/',
      telephone: '+966534648751',
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
    },
    ...[
      'خيام المدينة المنورة',
      'تفصيل بيوت شعر',
      'تأجير الخيام',
      'تركيب مظلات السيارات',
      'مظلات الغنم',
      'تركيب السواتر',
      'تجهيز المجالس العربية',
      'مستلزمات الرحلات والمخيمات',
    ].map((name, index) => ({
      '@type': 'Service',
      '@id': `https://sheraaelezz.com/#service-${index + 1}`,
      name,
      provider: { '@id': businessId },
      areaServed: {
        '@type': 'City',
        name: 'المدينة المنورة',
      },
    })),
  ],
};
