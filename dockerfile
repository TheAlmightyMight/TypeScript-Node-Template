FROM node:alpine
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json, ./dist, ./

RUN "current mode is ${NODE_ENV}" && npm run start