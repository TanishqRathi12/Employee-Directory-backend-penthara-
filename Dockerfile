FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]