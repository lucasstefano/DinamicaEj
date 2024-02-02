import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function queryData() {
  const users = await prisma.user.findMany();
  const courses = await prisma.course.findMany();
  const lessons = await prisma.lesson.findMany();
  const myCourses = await prisma.myCourses.findMany();

  console.log('Users:', users);
  console.log('Courses:', courses);
  console.log('Lessons:', lessons);
  console.log('MyCourses:', myCourses);
}

queryData()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
