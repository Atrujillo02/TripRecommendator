FROM node:20.18.0

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]