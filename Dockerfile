FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "dev"]
