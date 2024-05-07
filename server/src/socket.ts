import { instrument } from '@socket.io/admin-ui';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';

let readyPlayers: string[] = [];

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

    socket.on('isReady', () => {
      readyPlayers = readyPlayers.includes(socket.id)
        ? readyPlayers.filter(id => id != socket.id)
        : [ ...readyPlayers, socket.id ];

      if (readyPlayers.length > 1) {
        io.emit('countdown');
      }
    });
  });

  if (process.env.NODE_ENV === 'development') instrument(io, { auth: false });
};

export default socket;
