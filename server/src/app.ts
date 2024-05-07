import cors from 'cors';
import express, { Express } from 'express';

import router from './router';

const app: Express = express();

app.use(cors())
  .use(express.json())
  .use(router);

export default app;
