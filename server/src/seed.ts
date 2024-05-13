import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const userData = [
    {
      email: 'alice@example.com',
      password: 'password123',
      username: 'Alice',
      chapter: 0,
      progress: {
        create: [
          {
            date: new Date(),
            speed: 0.75,
            accuracy: 0.85,
          },
        ],
      },
    },
    {
      email: 'charlie@example.com',
      password: 'password456',
      username: 'Charlie',
      chapter: 0,
      progress: {
        create: [
          {
            date: new Date(),
            speed: 0.85,
            accuracy: 0.90,
          },
        ],
      },
    },
    {
      email: 'eve@example.com',
      password: 'password789',
      username: 'Eve',
      chapter: 0,
      progress: {
        create: [
          {
            date: new Date(),
            speed: 0.80,
            accuracy: 0.88,
          },
        ],
      },
    },
  ];

  const createdUsers = [];
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    createdUsers.push(user);
    console.log(`Created user with id: ${user.id}`);
  }

  for (const user of createdUsers) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        friends: {
          connect: createdUsers
            .filter((friend) => friend.id !== user.id)
            .map((friend) => ({ id: friend.id })),
        },
      },
    });
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
