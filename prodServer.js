// ---Dependencys
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { PORT } from './vite.config.js';
import open from 'open';
import history from 'connect-history-api-fallback';

// Obtén la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// -----------------------------------CONFIG-------------------------------
const app = express();
const serveStatic = express.static(path.join(__dirname, 'dist')); // serve static files
const logs = true;

// -----------------------------------MIDDLEWARES-------------------------------
const options = logs ? { verbose: true } : {};
app.use(serveStatic);
app.use(history(options));
app.use(serveStatic);

// -------------------------------------ROUTES---------------------------------
app.get('/', (req, res) => {
  res.render(__dirname + '/dist/index.html');
});

// --------------------------------------SERVER---------------------------------
const port = PORT;
app.listen(port, () => {
  console.log(`Production: Listening ${port} ... `);
  open(`http://localhost:${port}/`);
});
