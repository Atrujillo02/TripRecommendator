FROM node:16-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/ ./src/
COPY public/ ./public/

RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "src/app.js"]
