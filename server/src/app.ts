import cors from 'cors';
import express, { Express } from 'express';
import { createServer } from 'http';

import socket from './socket';
import router from './router';

const app: Express = express();
const server = createServer(app);
socket(server);

app.use(cors())
  .use(express.json())
  .use(router);

export default app;
export { server };
