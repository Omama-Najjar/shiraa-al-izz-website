import { assetPath } from '../utils/paths';

export const navItems = [
  { key: 'home', path: '/', ar: 'الرئيسية', en: 'Home' },
  { key: 'about', path: '/about', ar: 'من نحن', en: 'About us' },
  { key: 'products', path: '/products', ar: 'منتجاتنا', en: 'Products' },
  { key: 'services', path: '/services', ar: 'خدماتنا', en: 'Services' },
  { key: 'gallery', path: '/gallery', ar: 'معرض الصور', en: 'Gallery' },
  { key: 'contact', path: '/contact', ar: 'تواصل معنا', en: 'Contact' },
];
export const categories = [
 { id:'tents', ar:'الخيام وبيوت الشعر', en:'Tents & traditional Bedouin houses', image:assetPath('/images/tents-bedouin-houses.png') },
 { id:'majlis', ar:'المجالس العربية والجلسات', en:'Arabic majlis & seating', image:assetPath('/images/real-majlis-red.webp') },
 { id:'carpets', ar:'السجاد والمفروشات والمراتب', en:'Carpets, furnishings & mattresses', image:assetPath('/images/carpets-rugs.png') },
 { id:'truck', ar:'أشرعة التريلات والقلابات والدينات', en:'Truck, trailer & dumper covers', image:assetPath('/images/trailer-cover.jpg') },
 { id:'shade', ar:'المظلات والسواتر', en:'Canopies & privacy screens', image:assetPath('/images/real-canopy.webp') },
 { id:'heritage', ar:'مستلزمات الرحلات والتراثيات', en:'Camping & heritage essentials', image:assetPath('/images/camping-heritage-essentials.png') },
 { id:'livestock', ar:'لوازم الإبل والغنم والخيل', en:'Camel, sheep & horse supplies', image:assetPath('/images/real-livestock-shade.webp') },
 { id:'fences', ar:'الشبوك', en:'Fencing & enclosures', image:assetPath('/images/products-fence-reference.png') },
];
export const services = [
 {id:'custom-tents',ar:'تفصيل وتجهيز الخيام وبيوت الشعر',en:'Custom tents and traditional Bedouin houses',image:assetPath('/images/real-tent-field.webp')},
 {id:'shade-install',ar:'تفصيل وتركيب المظلات والسواتر',en:'Custom canopies and privacy screens',image:assetPath('/images/services-canopy-reference.png')},
 {id:'tent-install',ar:'تركيب الخيام',en:'Tent installation',image:assetPath('/images/real-tent-side.webp')},
 {id:'truck-covers',ar:'تفصيل أشرعة التريلات والقلابات والدينات',en:'Custom truck and trailer covers',image:assetPath('/images/services-trailer-cover-reference.png')},
 {id:'majlis',ar:'تجهيز المجالس والجلسات العربية',en:'Arabic majlis and seating setup',image:assetPath('/images/real-majlis-red.webp')},
 {id:'fencing',ar:'تجهيز الشبوك',en:'Fence and enclosure installation',image:assetPath('/images/services-fencing-reference.png')},
 {id:'delivery',ar:'التوصيل إلى جميع أنحاء المملكة',en:'Delivery throughout Saudi Arabia',image:assetPath('/images/services-delivery-reference.png')},
 {id:'repair',ar:'الصيانة والإصلاح',en:'Maintenance and repairs',image:assetPath('/images/services-repair-reference.png')},
];
export const aboutParagraphs = [
 'وجهتكم للخيام وبيوت الشعر والمجالس العربية ومستلزمات التراث والرحلات في المدينة المنورة.',
 'نحرص على توفير مجموعة متنوعة من المنتجات التي تجمع بين أصالة التراث العربي واحتياجات الحياة العصرية، لتناسب مختلف الأذواق والاستخدامات، سواء لتجهيز المجالس والجلسات العربية أو لاختيار مستلزمات الرحلات والتخييم.',
 'يضم نشاطنا تشكيلة من الخيام وبيوت الشعر، والمجالس العربية، والسجاد والمفروشات، والمظلات والسواتر، إضافة إلى مستلزمات الرحلات ولوازم الإبل والغنم والخيل، والمناقل والمشبات والدلال والنحاسيات وغيرها من المنتجات.',
 'هدفنا هو تسهيل وصول عملائنا إلى المنتجات التي يحتاجونها، من خلال تنوع الخيارات، وتوضيح تفاصيل المنتجات، وتوفير قنوات تواصل مباشرة للاستفسار عن المقاسات والتصاميم والأسعار والطلبات الخاصة.',
 'نسعد بخدمتكم في فرعنا بالمدينة المنورة، ونتطلع إلى مساعدتكم في اختيار ما يناسب احتياجاتكم.'
];
export const aboutParagraphsEn = [
 'Your destination in Madinah for tents, traditional Bedouin houses, Arabic majlis seating, heritage goods and camping essentials.',
 'We offer a diverse range of products that bring together the authenticity of Arab heritage and the needs of modern life. Our selection suits different tastes and uses, whether you are furnishing an Arabic gathering space or choosing essentials for travel and camping.',
 'Our range includes tents and traditional Bedouin houses, Arabic majlis seating, carpets and furnishings, canopies and privacy screens, camping supplies, camel, sheep and horse essentials, as well as fire pits, traditional coffee pots, copperware and more.',
 'Our goal is to make it easy for customers to find what they need through varied options, clear product information and direct communication for questions about sizes, designs, prices and special requests.',
 'We are pleased to serve you at our Madinah branch and look forward to helping you choose what best suits your needs.'
];
