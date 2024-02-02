# ClassroomPSI
Status do Projeto: Em desenvolvimeno

## Tabela de Conteúdo

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Download](#download)
- [Instalação](#instalação)
- [Configurações](#configurações)
- [Execução](#execução)
- [Autor](#autor)

## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:
- Node.js
- React
- Expo
- Prisma

## Download

Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta git. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:

```bash
git clone https://github.com/lucasstefano/ClassroomPSI.git

## Instalação
Para o correto funcionamento do aplicativo, terão que ser feitas as instalações das dependências, tanto da pasta back-end, quanto da pasta front-end. Para isso entre na pasta que foi clonada pelo comando e exclua a pasta .git:

Abra o seu terminal e execute o comando para instalar as dependências da pasta de back-end do projeto denominada back.
bash
cd classroompsi
cd backend
npm install 


Agora, a partir do passo anterior, execute os comandos abaixo para instalar as dependências da pasta de front-end do projeto.

bash
cd ..

cd ClassroomPSI/frontend-mobile
yarn add

cd ClassroomPSI/frontend-web
yarn add

## Configurações
Após a instalação, algumas preparações anteriores devem ser realizadas na pasta back. A partir dos comandos abaixo, será feita a configuração da pasta back-end:

bash
Copy code
cd ..

cd backend

cp .env

npm run keys

npx prisma migrate dev --name init

npx ts-node src/seeds/LessonsSeeds.ts
npx ts-node src/seeds/CourseSeeds.ts
npx ts-node src/seeds/MyCourseSeeds.ts
npx ts-node src/seeds/UserSeeds.ts

## Execução
Ainda na pasta back, execute o seguinte comando para servir o aplicativo em um servidor customizado para posterior execução no front-end:

bash
Copy code
npx ts-node server.ts
Com as configurações feitas, mude a seguir para a pasta front, para a execução do aplicativo utilizando o Expo utilizando os seguintes comandos:

bash
Copy code
cd ..

cd frontend-mobile

npm expo start
Para parar a execução do aplicativo, basta executar o comando CTRL + C no terminal.

Agora para a Aplicação Web
cd frontend-web
npm start

## Autor
Dev - Lucas Stefano  

# última atualização 02/02/2024
Criado por Lucas Stefano em 02/02/2024
