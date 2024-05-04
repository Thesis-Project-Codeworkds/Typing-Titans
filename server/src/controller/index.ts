import { Request, Response } from 'express';

const root = (_: Request, res: Response) => {
  try {
    res.status(200);
    res.send('<style> body { background-color: #333; } </style><h1>TT Server</h1>');
  } catch (e) {
    res.status(500);
    res.send('Internal Server Error');
  }
};

export { root };
