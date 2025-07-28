FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

ENV VITE_API_SERVER=http://localhost:3000

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]