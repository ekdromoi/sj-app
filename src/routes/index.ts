import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use('/assets', express.static(path.join(__dirname, '../views/assets')));

app.use(express.json());

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.get('/app', (_req: Request, res: Response) => {
  res.render('home');
});

const listen = () => {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default { listen };