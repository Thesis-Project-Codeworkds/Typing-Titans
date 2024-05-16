import { instrument } from '@socket.io/admin-ui';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';

import { fetchMovies, fetchShortSentence, fetchShortcuts } from './services/api-service';

let readyPlayers: string[] = [];
let userNames: any = {};
let userImages: any = {};
let playerMinimum: number = 2;

const getUserName = (socketId: string) => {
  return userNames[socketId] ? userNames[socketId] : 'Anonymous';
}

const getUserImage = (socketId: string) => {
  return userImages[socketId] ? userImages[socketId] : '';
}

const getReadyPlayers = () => {
  return readyPlayers.map(id => ({
    username: getUserName(id),
    userimage: getUserImage(id),
  }));
}

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

    socket.on('end-competition', (time: number, speed: number, accuracy: number) => {
      const winner = getUserName(socket.id);

      socket.broadcast.emit('winner', winner + ' has won!', time, speed, accuracy);
      socket.emit('winner', 'You won!', time, speed, accuracy);
    });

    socket.on('set username', (username: string) => {
      userNames[socket.id] = username;
    });

    socket.on('set userimage', (userimage: string) => {
      userImages[socket.id] = userimage;
    });

    socket.on('increase minimum', () => {
      playerMinimum++;
      io.emit('minimum', playerMinimum);
    });

    socket.on('decrease minimum', () => {
      playerMinimum = playerMinimum > 1 ? playerMinimum - 1 : playerMinimum;
      io.emit('minimum', playerMinimum);
    });

    socket.on('send-message', (msg: string) => {
      const name = getUserName(socket.id);
      socket.broadcast.emit('receive-message', msg, name + ': ')
    });

    socket.on('get ready players', () => {
      socket.emit('readyPlayers', getReadyPlayers());
    });

    socket.on('get minimum', () => {
      socket.emit('minimum', playerMinimum);
    })

    socket.on('isReady', async () => {
      readyPlayers = readyPlayers.includes(socket.id)
        ? readyPlayers.filter(id => id != socket.id)
        : [...readyPlayers, socket.id];

      io.emit('readyPlayers', getReadyPlayers());

      if (readyPlayers.length >= playerMinimum) {
        io.emit('countdown');
        io.emit('sentence', await fetchShortSentence());
        io.emit('shortcuts', await fetchShortcuts());
        io.emit('movies', await fetchMovies());

        setTimeout(() => {
          readyPlayers = [];
          io.emit('start-competition');
        }, 5000);
      }
    });
  });

  if (process.env.NODE_ENV === 'development') instrument(io, { auth: false });
};

export default socket;
