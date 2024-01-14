FROM node:20.10-alpine

WORKDIR /src

COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json

ENV NODE_ENV=production

RUN npm install

EXPOSE 3000

COPY . .

RUN npx prisma generate && npm run build

CMD ["npm", "start"]

