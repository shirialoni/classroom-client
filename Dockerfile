FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

ARG VITE_API_SERVER

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]