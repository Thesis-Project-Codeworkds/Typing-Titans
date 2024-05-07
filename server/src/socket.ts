import { instrument } from '@socket.io/admin-ui';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';

const socket = (server: HttpServer) => {

  const io = new SocketIOServer(server, {
    connectionStateRecovery: {},
    cors: {
      origin: [
        process.env.CLIENT_DOMAIN || 'http://localhost:5173',
        'https://admin.socket.io',
      ],
      credentials: true,
    },
  });

  io.on('connection', (socket: Socket) => {
    socket.broadcast.emit('connected');

    socket.on('enter', () => {
      console.log('enter key');
    });

    socket.on('input', (value) => {
      console.log('input: ', value);
    });
  });

  if (process.env.NODE_ENV === 'development') instrument(io, { auth: false });
};

export default socket;
