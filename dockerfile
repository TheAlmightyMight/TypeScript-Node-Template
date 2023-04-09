FROM node:18.12.1-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN apk add --no-cache bash
RUN npm run setup:prod

EXPOSE 5000

ENTRYPOINT [ "npm run" ]
CMD [ "start" ]