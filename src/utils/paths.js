const baseUrl = import.meta.env.BASE_URL;

export function assetPath(path) {
  return `${baseUrl}${path.replace(/^\/+/, '')}`;
}

export function routePath(path) {
  const route = path.replace(/^\/+|\/+$/g, '');
  return route ? `${baseUrl}${route}` : baseUrl;
}

export function resolveRoutePath(pathname) {
  const basePath = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  if (pathname === basePath || pathname === baseUrl) return '/';
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length);
  return pathname;
}
