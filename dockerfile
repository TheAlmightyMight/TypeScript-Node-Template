FROM node:18.12.1-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY . .

RUN npm run setup:prod