# ClassroomPSI

**Status do Projeto** : Em desenvolvimento 

*Deixe um ou dois badges com as frameworks ou linguagens utilizadas*

![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
 
 
## Tabela de Conteúdo

*Faça um índice com links internos para todos os tópicos seguintes.*

 1. [Tecnologias utilizadas](#tecnologias-utilizadas)
 2. [Instalação](#instalação)
 3. [Configuração](#configuração)
 4. [Uso](#uso)
 5. [Autores](#autores)
 
## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

 - Node.js
 - React
 - Expo
 - Prisma

## Instalação 

Para o correto funcionamento do aplicativo, terão que ser feitas as instalações das dependências, tanto da pasta back-end, quanto da pasta front-end. Para isso entre na pasta que foi clonada pelo comando e exclua a pasta .git:

Abra o seu terminal e execute o comando para instalar as dependências da pasta de back-end do projeto denominada back.
bash

``` bash
$ cd classroompsi
$ cd backend
$ npm install
```
Agora, a partir do passo anterior, execute os comandos abaixo para instalar as dependências da pasta de front-end do projeto.

``` bash
$ ..
$ cd frontend-mobile
$ yarn add

$ ..
$ cd frontend-web
$ yarn add

```

## Configuração

Após a instalação, algumas preparações anteriores devem ser realizadas na pasta back. A partir dos comandos abaixo, será feita a configuração da pasta back-end:

``` bash
$ cd ..
$ cd backend
$ npx prisma migrate dev --name init
```
 
## Uso

Na pasta backend, execute o seguinte comando para servir o aplicativo em um servidor customizado para posterior execução no front-end:

``` bash
$ npm run dev ou npm start
```

Com as configurações feitas, mude a seguir para a pasta frontend-mobile, para a execução do aplicativo utilizando o Expo utilizando os seguintes comandos:

``` bash
$ ..
$ frontend-mobile
$ npx expo start
```
Caso deseje executar a aplicação web, utilize os seguintes comandos:

``` bash
$ ..
$ frontend-web
$ npm start
```


## Autores

* Dev - Lucas Stefano

## Última atualização: 29/02/2024
## Criado por Lucas Stefano em: 02/02/2024
