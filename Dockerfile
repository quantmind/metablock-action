FROM node:22-slim

WORKDIR /action

ENV DOCKER=yes NODE_ENV=production
RUN npm i --global @metablock/cli@0.26.8
