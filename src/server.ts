import expressApp from './routes/index.ts';
import dotenv from 'dotenv';

dotenv.config();

expressApp.listen();