FROM node:11.11-alpine

WORKDIR /app

RUN npm config set registry https://registry.npmjs.org \
    && npm install -g nodemon

COPY package*.json .

RUN npm install \
    && npm cache clean --force \
    && mv /app/node_modules /node_modules

ENV NODE_ENV production
ENV PORT 5000
EXPOSE 5000

COPY . .

CMD ["npm", "start"]