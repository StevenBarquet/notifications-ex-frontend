import fs from 'fs';
import { exec } from 'child_process';


fs.readFile('package.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error al leer el archivo package.json:', err);
    return;
  }

  const packageJson = JSON.parse(data);

  // ---Instala dependencies
  const publicDependencies = packageJson?.publicDependencies;
  
  if (!publicDependencies) {
    console.error('No se encontraron publicDependencies en el archivo package.json');
    return;
  }
  
  const dependenciesToInstall = Object.entries(publicDependencies)
  .map(([dependency, version]) => `${dependency}@${version}`)
  .join(' ');
  
  const installCommand = `npm i -E ${dependenciesToInstall}`;
  console.log('Dependencies:\n', installCommand);
  

  // ---Instala devDependencies
  const publicDevDependencies = packageJson?.publicDevDependencies;

  if (!publicDevDependencies) {
    console.error('No se encontraron publicDevDependencies en el archivo package.json');
    return;
  }

  const devDependenciesToInstall = Object.entries(publicDevDependencies)
  .map(([dependency, version]) => `${dependency}@${version}`)
  .join(' ');

  const installCommand2 = `npm i -D -E ${devDependenciesToInstall}`;
  console.log('\ndevDependencies:\n', installCommand2,'\n');

});



