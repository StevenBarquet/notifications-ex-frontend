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

  await exec(installCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error en la salida del comando: ${stderr}`);
      return;
    }
    console.log(`Dependencias instaladas correctamente:\n${stdout}`);
  });

   // ---Instala devDependencies
   const publicDevDependencies = packageJson?.publicDevDependencies;

   if (!publicDevDependencies) {
     console.error('No se encontraron publicDevDependencies en el archivo package.json');
     return;
   }
 
   const devDependenciesToInstall = Object.entries(publicDevDependencies)
     .map(([dependency, version]) => `${dependency}@${version}`)
     .join(' ');
 
   const installCommand2 = `npm i -E ${devDependenciesToInstall}`;
 
   await exec(installCommand2, (error, stdout, stderr) => {
     if (error) {
       console.error(`Error al ejecutar el comando: ${error.message}`);
       return;
     }
     if (stderr) {
       console.error(`Error en la salida del comando: ${stderr}`);
       return;
     }
     console.log(`Dependencias instaladas correctamente:\n${stdout}`);
   });
});
