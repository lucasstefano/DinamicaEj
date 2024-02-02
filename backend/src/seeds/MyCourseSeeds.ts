import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.myCourses.createMany({
    data: [
        {
            userId: 16, 
            lessonId: 26, 
          },
          
          {
            userId: 17, 
            lessonId: 26, 
          },
          {
            userId: 17, 
            lessonId: 27, 
          },
          {
            userId: 18, 
            lessonId: 26, 
          },
          {
            userId: 18, 
            lessonId: 27, 
          },
          {
            userId: 18, 
            lessonId: 28, 
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
