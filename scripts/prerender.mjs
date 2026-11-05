import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';
import { routePaths } from '../src/data/routes.js';
import { pageSeo } from '../src/data/seo.js';
import { canonicalFor } from '../src/data/site.js';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = resolve(projectRoot, 'dist');
const pageHeadings = {
  '/': 'مؤسسة شراع العز للخيام',
  '/about': 'عن مؤسسة شراع العز في المدينة المنورة',
  '/products': 'منتجاتنا: خيام وبيوت شعر ومظلات في المدينة المنورة',
  '/services': 'خدمات تفصيل وتركيب الخيام والمظلات في المدينة المنورة',
  '/gallery': 'أعمال الخيام والمنتجات في المدينة المنورة',
  '/contact': 'تواصل مع شراع العز في المدينة المنورة',
};

for (const route of routePaths) {
  if (!pageSeo[route]) throw new Error(`Missing SEO metadata for route ${route}`);
  if (!pageHeadings[route]) throw new Error(`Missing expected H1 for route ${route}`);
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const previewServer = await preview({
  configFile: resolve(projectRoot, 'vite.config.js'),
  logLevel: 'error',
  preview: {
    host: '127.0.0.1',
    port: 0,
    strictPort: false,
  },
});

let browser;

try {
  const address = previewServer.httpServer.address();
  if (!address || typeof address === 'string') {
    throw new Error('Could not determine the Vite preview server address');
  }

  browser = await puppeteer.launch({
    headless: true,
    args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
  });
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'ar-SA,ar;q=0.9' });
  const cdpSession = await page.createCDPSession();
  await cdpSession.send('Emulation.setLocaleOverride', { locale: 'ar-SA' });
  await page.evaluateOnNewDocument(() => {
    if (window.location.origin !== 'null') {
      window.localStorage.clear();
      window.sessionStorage.clear();
    }
  });
  await page.setViewport({ width: 1365, height: 900 });
  page.setDefaultNavigationTimeout(60000);

  const titles = new Set();
  const descriptions = new Set();
  const renderRoute = async (route) => {
    const url = `http://127.0.0.1:${address.port}${route === '/' ? '/' : `${route}/`}`;
    const response = await page.goto(url, { waitUntil: 'networkidle0' });
    if (!response?.ok()) throw new Error(`Prerender request failed for ${route}`);

    await page.waitForSelector('#root h1');
    await page.waitForFunction(() => (
      document.documentElement.lang === 'ar'
      && document.documentElement.dir === 'rtl'
      && document.querySelector('link[rel="canonical"]')
    ));

    const expectedTitle = pageSeo[route].ar.title;
    const expectedCanonical = canonicalFor(route);
    const arabicData = await page.evaluate(() => ({
      language: document.documentElement.lang,
      direction: document.documentElement.dir,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      ogTitle: document.querySelector('meta[property="og:title"]')?.content,
      ogDescription: document.querySelector('meta[property="og:description"]')?.content,
      ogUrl: document.querySelector('meta[property="og:url"]')?.content,
      twitterUrl: document.querySelector('meta[name="twitter:url"]')?.content,
      heading: document.querySelector('#root h1')?.textContent.trim(),
      headingCount: document.querySelectorAll('#root h1').length,
      bodyText: document.querySelector('#root')?.innerText,
      storedLanguage: localStorage.getItem('lang') || sessionStorage.getItem('lang'),
    }));

    if (arabicData.language !== 'ar' || arabicData.direction !== 'rtl') {
      throw new Error(`Arabic/RTL is not the prerender default for ${route}`);
    }
    if (
      arabicData.title !== expectedTitle
      || arabicData.canonical !== expectedCanonical
      || arabicData.ogTitle !== expectedTitle
      || arabicData.ogDescription !== arabicData.description
      || arabicData.ogUrl !== expectedCanonical
      || arabicData.twitterUrl !== expectedCanonical
    ) {
      throw new Error(`Metadata or canonical mismatch while prerendering ${route}`);
    }
    if (
      !arabicData.description
      || arabicData.heading !== pageHeadings[route]
      || arabicData.headingCount !== 1
      || !/[ء-ي]/u.test(arabicData.bodyText)
      || arabicData.storedLanguage
    ) {
      throw new Error(`Description or H1 validation failed for ${route}`);
    }
    if (titles.has(arabicData.title) || descriptions.has(arabicData.description)) {
      throw new Error(`Duplicate Arabic metadata found for ${route}`);
    }
    titles.add(arabicData.title);
    descriptions.add(arabicData.description);

    await page.evaluate(() => {
      [...document.querySelectorAll('.language-switch button')]
        .find((button) => button.textContent.trim() === 'EN')
        ?.click();
    });
    await page.waitForFunction(
      (title) => document.documentElement.lang === 'en' && document.title === title,
      {},
      pageSeo[route].en.title,
    );
    await page.evaluate(() => {
      [...document.querySelectorAll('.language-switch button')]
        .find((button) => button.textContent.trim() === 'عربي')
        ?.click();
    });
    await page.waitForFunction(
      (title) => document.documentElement.lang === 'ar' && document.title === title,
      {},
      expectedTitle,
    );

    const html = await page.content();
    const routeIndex = route === '/'
      ? resolve(distRoot, 'index.html')
      : resolve(distRoot, route.slice(1), 'index.html');
    await mkdir(dirname(routeIndex), { recursive: true });
    await writeFile(routeIndex, html);
    console.log(`Prerendered ${route} (${Buffer.byteLength(html)} bytes; ${expectedCanonical})`);
  };

  for (const route of routePaths.filter((route) => route !== '/')) {
    await renderRoute(route);
  }
  await renderRoute('/');

  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routePaths.map((route) => {
    const loc = escapeXml(canonicalFor(route));
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  });
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
  await writeFile(resolve(distRoot, 'sitemap.xml'), sitemap);
} finally {
  await browser?.close();
  await new Promise((resolveClose, rejectClose) => {
    previewServer.httpServer.close((error) => {
      if (error) rejectClose(error);
      else resolveClose();
    });
  });
}
