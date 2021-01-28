FROM node:14.15.3-alpine3.12 AS builder


WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
