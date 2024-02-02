import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllUsers() {
  await prisma.user.deleteMany();
}

async function deleteAllCourses() {
  await prisma.course.deleteMany();
}

async function deleteAllLessons() {
  await prisma.lesson.deleteMany();
}

async function deleteAllMyCourses() {
  await prisma.myCourses.deleteMany();
}

async function main() {
  await deleteAllMyCourses();
  await deleteAllLessons();
  await deleteAllCourses();
  await deleteAllUsers();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
