import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

for (const route of ['about', 'services', 'gallery', 'contact']) {
  const directory = join(dist, route);
  await mkdir(directory, { recursive: true });
  await copyFile(join(dist, 'index.html'), join(directory, 'index.html'));
}
