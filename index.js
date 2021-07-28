import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'colors';

import './server/config/index.js';
import connectDB from './server/config/db.js';
import { PORT } from './server/config/index.js';
import usersRoutes from './server/routes/users.js';

const app = express();
const port = PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/users', usersRoutes);

async function start() {
  try {
    connectDB();
    app.listen(port, () =>
      console.log(
        `Server is running on port: http://localhost:${port}`.bgMagenta
      )
    );
  } catch (error) {
    console.error('Server Error ', error.message);
    process.exit(1);
  }
}

start();
