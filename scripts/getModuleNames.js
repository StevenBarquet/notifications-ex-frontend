import fs from 'fs';
import path from 'path';

const nodeModulesPath = path.join(process.cwd(), 'node_modules');

fs.readdir(nodeModulesPath, { withFileTypes: true }, (err, entries) => {
  if (err) {
    console.error('Error al leer el directorio node_modules:', err);
    return;
  }

  const folderNames = entries
    .filter(entry => entry.isDirectory())
    .map(entry => `!node_modules/${entry.name}/`);

  console.log('Carpetas en node_modules:');
  console.log(folderNames.join('\n'));
});
