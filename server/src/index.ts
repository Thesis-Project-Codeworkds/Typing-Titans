import { config } from 'dotenv';

config();

import { server } from './app';

const p = parseInt(process.env.PORT || '');
const PORT = Number.isInteger(p) ? p : 3009;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
