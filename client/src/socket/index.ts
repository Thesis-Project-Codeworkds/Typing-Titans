import { io } from 'socket.io-client';

const SERVER_DOMAIN = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_SERVER_DOMAIN || 'http://localhost:3000'
  : import.meta.env.VITE_PROD_SERVER_DOMAIN;

const socket = io(SERVER_DOMAIN);

export default socket;
