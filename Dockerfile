FROM node:12-slim AS base

WORKDIR /action

COPY package.json package.json

# ---- Production dependencies ----
FROM base AS dependencies
ENV DOCKER=yes NODE_ENV=production
RUN yarn --production
RUN cp -R node_modules prod_node_modules

#
# ---- Build & Test ----
FROM base AS build
ENV DOCKER=yes
COPY . .
COPY --from=dependencies /action/yarn.lock .
RUN yarn
RUN yarn build

#
# ---- Release ----
FROM base AS release
COPY --from=dependencies /action/prod_node_modules ./node_modules
COPY --from=build /action/dist ./dist
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
