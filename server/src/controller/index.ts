import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'
import prismaRandom from 'prisma-extension-random';
import { Webhook } from 'svix';

const prisma = new PrismaClient().$extends(prismaRandom());

const root = (_: Request, res: Response) => {
  try {
    res.status(200);
    res.send('<style> body { background-color: #333; } </style><h1>TT Server</h1>');
  } catch (e) {
    res.status(500);
    res.send('Internal Server Error');
  }
};

const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
}

const getUsersWithDetails = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        progress: true,
        friends: true
      }
    });
    res.json(users)
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

const newUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  })
  res.json(user)
}

const getShortcuts = async (req: Request, res: Response) => {
  try {
    // Fetch 15 random shortcuts from the database
    const shortcuts = await prisma.shortcut.findManyRandom(10, {
      select: { name: true, windows: true, mac: true },
    });
    res.status(200).json(shortcuts);
  } catch (error) {
    console.error('Error fetching shortcuts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const svixHook = async (req: Request, res: Response) => {
  try {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
      throw new Error('Clerk webhook secret is missing');
    }

    const headers = req.headers;
    const payload: any = req.body;

    const svix_id = headers['svix-id'] as string;
    const svix_timestamp = headers['svix-timestamp'] as string;
    const svix_signature = headers['svix-signature'] as string;

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error occured -- no svix headers', {
        status: 400,
      });
    }

    const webhook = new Webhook(WEBHOOK_SECRET);
    let clerkEvent: any;

    try {
      clerkEvent = webhook.verify(payload, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      });
    } catch (e: any) {
      console.log('Error verifying webhook:', e.message);

      return res.status(400).json({
        success: false,
        message: e.message,
      });
    }

    // Do something with the payload
    const { id } = clerkEvent.data;
    const eventType = clerkEvent.type;
    console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
    console.log('Webhook body:', clerkEvent.data);

    if (clerkEvent.type === 'user.created') {
      console.log('userId:', clerkEvent.data.id)
    }

    return res.status(200).json({
      success: true,
      message: 'Webhook received',
    });
  } catch (e) {
    res.status(500);
    res.send('Internal Server Error');
  }
}

export { root, getUsers, newUser, getUsersWithDetails, getShortcuts, svixHook };
