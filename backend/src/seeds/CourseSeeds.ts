import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      {
        title: 'Front-end',
        color: '#C1FF97 ',
        teacherId: 17,
        description: 'HTML, CSS, React, Js...',
      },
      {
        title: 'Back-end',
        color: '#FB8864',
        teacherId: 17,
        description: 'SQL, Prisma, Models...',
      },
      {
        title: 'UX & Design',
        color: '#FFBFAB',
        teacherId: 18,
        description: '3D, UX, Scrum, Figma...',
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
