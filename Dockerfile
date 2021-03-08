FROM node:14
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn global add @nestjs/cli
RUN yarn && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["yarn", "start:dev"]
