FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

ARG VITE_API_SERVER

RUN npm i

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html/shiri

COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]