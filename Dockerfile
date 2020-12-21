FROM node:alpine

WORKDIR '/app'

COPY ./app/package.json ./
RUN npm install
COPY ./app ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html

# docker run -p 8080:80 710a900f6c45