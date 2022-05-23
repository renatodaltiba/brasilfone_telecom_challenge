FROM node:alpine as production

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build
