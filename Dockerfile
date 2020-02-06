FROM nginx:alpine

RUN mkdir usr/share/nginx/html/3dnavigation
COPY /dist/ usr/share/nginx/html/3dnavigation

EXPOSE 80