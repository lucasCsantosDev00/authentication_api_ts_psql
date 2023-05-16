FROM node:19-alpine
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn global add ts-node
WORKDIR /app
