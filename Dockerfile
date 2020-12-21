FROM node:alpine

WORKDIR '/app'

COPY ./app/package.json .
RUN npm install
COPY ./app .

#COPY ./app/index.html .

FROM nginx
#COPY --from=0 /app/build /usr/share/nginx/html
COPY --from=0 /app /usr/share/nginx/html
#RUN npm run start

# docker run -p 8080:80 fd557cfc7855