import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes } from '../src/data/routes.js';
import { businessStructuredData, pageSeo } from '../src/data/seo.js';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const builtIndex = resolve(projectRoot, 'dist', 'index.html');
const sourceHtml = await readFile(builtIndex, 'utf8');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function updateTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Missing expected metadata tag: ${pattern}`);
  return html.replace(pattern, replacement);
}

function createRouteHtml(route) {
  const { ar } = pageSeo[route];
  const canonicalUrl = `https://sheraaelezz.com${route === '/' ? '/' : route}`;
  let html = sourceHtml;

  html = updateTag(html, /<title>[^<]*<\/title>/, `<title>${escapeHtml(ar.title)}</title>`);
  html = updateTag(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(ar.description)}" />`);
  html = updateTag(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  html = updateTag(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(ar.title)}" />`);
  html = updateTag(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(ar.description)}" />`);
  html = updateTag(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

  const structuredData = `<script type="application/ld+json">${JSON.stringify(businessStructuredData)}</script>`;
  return html.replace('</head>', `${structuredData}\n  </head>`);
}

for (const route of Object.keys(routes)) {
  const routeHtml = createRouteHtml(route);
  const routeIndex = route === '/'
    ? builtIndex
    : resolve(projectRoot, 'dist', route.slice(1), 'index.html');

  await mkdir(dirname(routeIndex), { recursive: true });
  await writeFile(routeIndex, routeHtml);
}
