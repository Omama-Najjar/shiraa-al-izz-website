import { assetPath } from '../utils/paths';

const galleryImages = [
  {
    src: '/images/gallery/0bc2f68b-ade4-4a2b-8568-2502e374ceb5.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/123cf333-78fa-413b-a544-e402ed4c595a.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/13c2c6c5-0927-4ff1-b5c5-41b2b43309be.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/1ac3dd33-3aab-47ec-9e31-6d6aade76497.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/1babf33b-8fcf-4cc9-ba2f-c1816781e0c8.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/2f4ac9dc-b8d4-4eb0-95f8-c1cdf374f549.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/307d574b-48ef-4d51-9dad-40e4f9563ad9.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/75c4a26c-eeb0-4d17-96b1-76b95abcc287.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/7bdf2d65-350d-47f3-9359-856ed99c51b1.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/8d20fe6e-7925-4f62-9e3d-c82d8a42d933.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/9c27e0d6-3730-4b4b-bf6b-c862161782f2.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/b70c4044-5321-4d21-8ae4-64c9eac91399.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/d746f69e-5ca7-4e97-8f49-c9e15839b6be.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/d8bff4a5-f6e9-4763-967d-259762219afb.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/1213f251-2da1-4790-a837-4d9279a90ca4.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/61eabeaf-e34f-4eaf-9ee0-48591beb0eec.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/6d48e350-3634-45fd-92b4-0dd3190266bf.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/a557694f-6466-4427-8eaa-d82b3e04b99c.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/b8dcc923-cb44-42a6-a4e2-367772a0b679.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/ba632668-d064-4294-a55f-2761f53ecb32.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/04b5606b-5797-4d3b-9c67-cb8ce85e4c20.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/3062720c-5090-4208-a1d6-2ad807c206a3.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/335bc580-85eb-478b-ac45-9909120683ac.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/5d2fca31-1d89-4e8f-a9a3-104e4799e911.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/684a7f44-2ee5-42bd-9124-ee64710db135.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/9116398d-f59f-4ca0-b8ce-d3c79d4015ea.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/b538fdb4-961a-416a-918e-9316511b58da.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/cb1b4c17-23bd-458f-b608-a09cf9466af2.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/ea6a9af0-aa5d-46ca-97e1-d724329bee70.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/f1f8aafa-d768-4e3f-b8ac-e2c54fde2e3d.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/f83a3b97-d500-4109-b398-9ad2ab3e4a59.jpg',
    ar: 'صورة من أعمال الخيام وبيوت الشعر',
    en: 'Tents and Bedouin houses',
  },
  {
    src: '/images/gallery/4eceb71a-10c8-4786-b4a1-7949a0880d02.jpg',
    ar: 'خيمة شعر سوداء على سطح مبنى',
    en: 'Black Bedouin tent on a rooftop',
  },
  {
    src: '/images/gallery/6f9f4744-f381-42ce-ae6a-dcea6b97b080.jpg',
    ar: 'خيمة شعر في موقع صحراوي',
    en: 'Bedouin tent at a desert site',
  },
  {
    src: '/images/gallery/b2ff3488-e4db-47ac-869a-5cac311efbc5.jpg',
    ar: 'خيمة شعر في الليل',
    en: 'Bedouin tent at night',
  },
  {
    src: '/images/gallery/c03558f1-e841-4cdf-95aa-304f4457fc76.jpg',
    ar: 'بيت شعر أبيض في الصحراء',
    en: 'White Bedouin tent in the desert',
  },
  {
    src: '/images/gallery/e59aa36c-03a8-4058-9363-ea36ba560fdf.jpg',
    ar: 'خيمة شعر في فناء',
    en: 'Bedouin tent in a courtyard',
  },
  {
    src: '/images/gallery/ec1974a4-a453-43e4-ac8c-c819411849c5.jpg',
    ar: 'خيمة شعر سوداء في الصحراء',
    en: 'Black Bedouin tent in the desert',
  },
  {
    src: '/images/gallery/efb4cf86-edef-495f-a20c-1081f647c1ed.jpg',
    ar: 'خيمة تراثية فاتحة اللون',
    en: 'Light-colored traditional tent',
  },
  {
    src: '/images/gallery/real-tent-black.webp',
    ar: 'خيمة شعر سوداء',
    en: 'Black Bedouin tent',
  },
  {
    src: '/images/gallery/real-tent-side.webp',
    ar: 'خيمة بخطوط تراثية',
    en: 'Striped traditional tent',
  },
  {
    src: '/images/gallery/real-tent-white.webp',
    ar: 'خيمة بيضاء',
    en: 'White tent',
  },
  {
    src: '/images/gallery/real-patterned-tent.webp',
    ar: 'خيمة تراثية مزخرفة',
    en: 'Patterned heritage tent',
  },
  {
    src: '/images/gallery/real-majlis-red.webp',
    ar: 'مجلس عربي تراثي',
    en: 'Traditional Arabic majlis',
  },
  {
    src: '/images/gallery/product-carpet-reference.png',
    ar: 'السجاد التراثي',
    en: 'Heritage carpets',
  },
  {
    src: '/images/gallery/real-livestock-shade.webp',
    ar: 'مظلة لمستلزمات الإبل',
    en: 'Livestock shade',
  },
  {
    src: '/images/gallery/real-canopy.webp',
    ar: 'مظلة قماشية',
    en: 'Fabric canopy',
  },
  {
    src: '/images/gallery/real-tent-field.webp',
    ar: 'خيمة في الموقع',
    en: 'Tent at site',
  },
].map((image) => ({ ...image, src: assetPath(image.src) }));

export default galleryImages;
