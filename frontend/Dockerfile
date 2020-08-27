FROM node:13.12.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY  . .

RUN npm run build


EXPOSE 8080 

CMD ["node", "server.js"]