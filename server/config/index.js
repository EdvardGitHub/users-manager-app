import { config } from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
config({ path: `${__dirname}/server/config/.env` });

export const MONGO_URL = process.env.MONGO_URL;
export const PORT = process.env.PORT;

// console.log(`${__dirname}/server/config/.env`);
// console.log('MONGO_URL', MONGO_URL);
