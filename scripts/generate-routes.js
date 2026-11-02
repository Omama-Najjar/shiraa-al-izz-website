import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes } from '../src/data/routes.js';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const builtIndex = resolve(projectRoot, 'dist', 'index.html');

for (const route of Object.keys(routes)) {
  if (route === '/') continue;

  const routeIndex = resolve(projectRoot, 'dist', route.slice(1), 'index.html');
  await mkdir(dirname(routeIndex), { recursive: true });
  await copyFile(builtIndex, routeIndex);
}
