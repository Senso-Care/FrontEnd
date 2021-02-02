FROM --platform=$BUILDPLATFORM node:15.7.0-alpine3.12 AS builder
ARG BUILDPLATFORM
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --prod


FROM --platform=$TARGETPLATFORM nginx:1.19.6
ARG TARGETPLATFORM
COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
