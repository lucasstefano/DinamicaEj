import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        username: 'user1',
        email: 'user1@example.com',
        password: 'hashed_password1',
        role: 'ESTUDANTE', // Use string literals representing role names
      },
      {
        username: 'teacher1',
        email: 'teacher1@example.com',
        password: 'hashed_password2',
        role: 'INSTRUTOR',
      },
      {
        username: 'lucasstefano',
        email: 'lucasstefano@gmail.com',
        password: '31415926535',
        role: 'INSTRUTOR',
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
