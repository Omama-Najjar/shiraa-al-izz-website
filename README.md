# Sheraa Al-Ezz Tents

A bilingual website for **مؤسسة شراع العز للخيام**, a Saudi business serving customers in Madinah with tents, traditional Bedouin houses, Arabic majlis furnishings, canopies, and related services.

## Business introduction

مؤسسة شراع العز للخيام provides tents and بيت الشعر, Arabic majlis and seating, carpets and furnishings, canopies and privacy screens, and related products and services. The website presents the business, its products and services, project photos, and ways to get in touch.

## Website features

- Arabic and English language switching, with right-to-left layout for Arabic.
- Home, About, Products, Services, Gallery, and Contact pages.
- Product category listings and service cards.
- Photo gallery with a shuffled slideshow, thumbnails, keyboard and swipe navigation, and an enlarged lightbox.
- Contact options including WhatsApp, phone, email, business hours, branch address, and Google Maps.
- Responsive layouts for desktop and mobile.
- Shared black-and-gold visual styling and Arabic typography.

## Technologies

- React and React DOM
- Vite with the React plugin
- Lucide React icons
- CSS
- Google Fonts: Cairo and Manrope

Runtime package dependencies are listed in `package.json`; `package-lock.json` records the installed dependency versions.

## Project structure

```text
.
├── public/
│   └── images/           # Logo, business photos, gallery, QR code, and other site images
├── src/
│   ├── components/       # Shared header, footer, and page intro
│   ├── data/             # Navigation, products, services, and gallery image list
│   ├── pages/            # Home, About, Products, Services, Gallery, Contact
│   ├── styles/           # Shared and page-specific CSS
│   ├── App.jsx           # Routing and language state
│   └── main.jsx          # React entry point
├── firebase.json         # Firebase Hosting configuration
├── index.html
├── package.json
└── package-lock.json
```

## Prerequisites

- Node.js 20.19 or newer, or Node.js 22.12 or newer.
- npm (included with Node.js).

## Install and run locally

From the project root:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Production build and preview

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. The preview command serves that build locally.

## Deploy to Firebase Hosting

Firebase Hosting is configured in `firebase.json` to publish `dist/` and route application paths to `index.html`. The repository does not include a Firebase project selection file, so select the intended Firebase project before deploying.

Install the Firebase CLI if needed, authenticate, select the project, build, and deploy:

```bash
npm install --global firebase-tools
firebase login
firebase use --add
npm run build
firebase deploy --only hosting
```

`firebase use --add` prompts you to select a Firebase project and creates a local `.firebaserc` file. That file is ignored by Git; do not publish account credentials or service-account keys.

## Project screenshots

No separate project screenshot files are currently included. The images in `public/images/` are website content and business photography.

## Contact

- Email: [info@sheraaelezz.com](mailto:info@sheraaelezz.com)
- WhatsApp: 0534648751
- Phone: 0575253084

## Ownership

This website belongs to **مؤسسة شراع العز للخيام**.
