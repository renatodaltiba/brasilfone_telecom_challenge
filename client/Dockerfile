FROM node:alpine As development

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN yarn --only=development

COPY . .

