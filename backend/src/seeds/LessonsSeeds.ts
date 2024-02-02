import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.lesson.createMany({
    data: [
        {
            title: 'Aula de React Native',
            description: 'Explicar o que é React Native, suas características e funcionalidades. Introduzir Jsx e Tsx. Explicar a diferença entre ReactJS e React Native. Falar sobre Virtual DOM e suas vantagens',
            color: '#FFF48E',
            courseId: 16, 
            videoUrl: '909079121',
          },
          {
            title: 'Aula de ReactJs',
            description: 'ReactJS é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook, que facilita a criação de interfaces de usuário interativas e eficientes. Durante a aula, exploramos os conceitos fundamentais para entender e começar a trabalhar com ReactJS.',
            color: '#60A5D7',
            courseId: 16,
            videoUrl: '909127452',
          },
          {
            title: 'Aula de Prisma',
            description: 'Prisma ORM é uma ferramenta de mapeamento objeto-relacional (ORM) moderna e poderosa para bancos de dados em Node.js e TypeScript. Durante a aula, foram abordados os principais conceitos e funcionalidades do Prisma ORM.',
            color: '#60A5D7',
            courseId: 17,
            videoUrl: '909126895',
          },
          {
            title: 'Aula de Figma I',
            description: 'Nesta aula, exploraremos as funcionalidades essenciais do Figma, uma poderosa ferramenta de design colaborativo. O Figma é amplamente utilizado para prototipagem, design de interfaces e colaboração em equipe.',
            color: '#FB8864',
            courseId: 18,
            videoUrl: '909130329',
          },
          {
            title: 'Aula de Wordpress I',
            description: 'Nesta aula introdutória sobre WordPress, exploraremos os fundamentos dessa popular plataforma de gerenciamento de conteúdo (CMS).',
            color: '#FFBFAB',
            courseId: 17,
            videoUrl: '909129855',
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
