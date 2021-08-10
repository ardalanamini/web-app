FROM node:14.17.4-alpine AS build

RUN npm i -g npm

RUN mkdir -p /home/node/node_modules && chown -R node:node /home/node

WORKDIR /home/node

COPY --chown=node:node package*.json ./

USER node

RUN npm i

COPY --chown=node:node . .

RUN npm run build

FROM node:14.17.4-alpine

RUN npm i -g npm

RUN mkdir -p /home/node/node_modules && chown -R node:node /home/node

WORKDIR /home/node

COPY --chown=node:node package*.json ./

USER node

RUN npm i --production

COPY --chown=node:node ./public ./public

COPY --chown=node:node ./sentry.*.config.js ./

COPY --from=build --chown=node:node /home/node/.next ./.next

EXPOSE 3000

CMD [ "npm", "start" ]
