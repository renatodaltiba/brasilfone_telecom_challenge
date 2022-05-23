<h1 align="center">
  DESÁFIO BRASIL FONE TELECOM - FRONT-END/FULL-STACK
</h1>

<p align="center">
 <a href="#sobre-o-projeto">Sobre o Projeto</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#configurações-necessárias">Configurações necessárias</a> •
</p>

## Sobre o projeto

O projeto tem como objetivo o teste de abstração de uma aplicação ReactJS.

O sistema tem como objetivo executar um registro e uma autenticação seguindo os esquemas de validações impostos no desafio

## Tecnologias

Abaixo as tecnologias utilizadas para construção da aplicação.

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [NestJS](https://nestjs.com/)
- [Jwt](https://jwt.io/))

## Configurações necessárias

## **Requisitos Opção 01 - Docker**

Necessário realizar as instalações.

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

### **Clonando o projeto**

```bash
  # Execute o comando git clone para realizar o clone do repositório
  $ git clone https://github.com/renatodaltiba/brasilfone_telecom_challenge
  # Entre na pasta do repositório clonado
```

### **Iniciando o Banco de Dados**
```bash
 # Abra o terminal e execute o seguinte comando
 $ docker-compose up -d
```

### **Iniciando o Backend**

```bash
  # Execute o comando para entrar na pasta API
  $ cd ./api/
  # Instale as dependencias necessárias
  $ yarn install ou yarn
  # Execute a migração das tabelas para o banco de dados
  $ yarn prisma migrate deploy
  # Execute o build do backend
  $ yarn build
  # Depois inicie o servidor do backend utilizando o comando
  $ yarn start:prod
  # Obs: Todos os modelos de Request estão dentro da pasta ./api/http.http
```

### **Iniciando o Frot-end**

```bash
  # Volte para o arquivo raiz do projeto
  $ cd ..
  # Entre na pasta Client
  $ cd ./client/
  # Instale as dependencias para produção
  $ yarn install
  # Rode o build do projeto
  $ yarn build
  # Depois inicie o servidor do frontend utlizando o comando 
  $ yarn start
```
