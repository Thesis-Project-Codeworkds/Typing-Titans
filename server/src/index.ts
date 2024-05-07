import { config } from 'dotenv';

import app from './app';

config();

// const HOST = process.env.HOST || 'localhost';
const p = parseInt(process.env.PORT || '');
const PORT = Number.isInteger(p) ? p : 3009;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
