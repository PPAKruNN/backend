FROM node:20.10-alpine

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

ENV NODE_ENV=dev

RUN npm install

EXPOSE 3000

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "dev"]

