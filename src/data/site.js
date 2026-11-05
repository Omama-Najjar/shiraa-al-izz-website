export const SITE_URL = 'https://sheraaelezz.com';

export function canonicalFor(path) {
  const route = path.replace(/^\/+|\/+$/g, '');
  return route ? `${SITE_URL}/${route}/` : `${SITE_URL}/`;
}
