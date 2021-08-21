FROM node:14.17.5 as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .

RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
# serve react app statically through nginx (no express, no tomcat, no jetty, no nothin')
COPY --from=build /app/build /usr/share/nginx/html