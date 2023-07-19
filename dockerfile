FROM node:18.12.1-alpine
ENV NODE_ENV=production

USER node

WORKDIR /app

COPY . .

RUN apk add --no-cache bash
RUN npm run setup:prod

EXPOSE 5000
