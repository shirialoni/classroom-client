FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

ARG VITE_API_SERVER

RUN chown -R node /app

USER node

RUN npm i

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html/shiri

COPY /nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]