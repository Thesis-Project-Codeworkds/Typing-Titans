import cors from 'cors';
import express from 'express';

import router from './router';

const app = express();

app.use(cors())
  .use(express.json())
  .use(router);

export default app;
