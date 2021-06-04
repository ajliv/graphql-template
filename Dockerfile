### LOCAL DEV PHASE
FROM node:14-alpine AS dev
WORKDIR /home/node/app
RUN set -ex; \
    apk add --no-cache bash procps && \
    chown -R node:node /home/node/app
USER node
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY --chown=node:node . .
EXPOSE 4000 9229
ENV NODE_ENV=development \
    PATH=/home/node/app/node_modules/.bin:$PATH
CMD [ "nodemon", "--inspect=0.0.0.0:9229", "index.ts" ]

### BUILD PHASE
FROM dev AS build
USER node
RUN yarn build && \
    yarn install --production --ignore-optional --ignore-scripts --prefer-offline

### PROD PHASE
FROM node:14-alpine
WORKDIR /home/node/app
RUN chown -R node:node .
USER node
COPY --chown=node:node --from=build /home/node/app/dist dist/
COPY --chown=node:node --from=build /home/node/app/node_modules dist/node_modules/
EXPOSE 4000
ENV NODE_ENV=production
CMD [ "node", "dist/index.js" ]
