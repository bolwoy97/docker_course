FROM node:alpine

WORKDIR '/app'

#COPY ./app/package.json .
#RUN npm install
#COPY ./app .
#RUN npm run start
COPY ./app/views/index.html .

FROM nginx
#COPY --from=0 /app/build /usr/share/nginx/html
COPY --from=0 /app /usr/share/nginx/html

# docker run -p 8080:80 710a900f6c45