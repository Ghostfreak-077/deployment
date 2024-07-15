# Set the working directory
FROM node:lts-alpine

EXPOSE 3000

RUN npm install -g serve

WORKDIR /app/files

COPY . .

RUN npm install && npm run build && cp -r ./dist ../dist && rm -rf ./files

WORKDIR /app

CMD ["serve", "-s", "dist"]