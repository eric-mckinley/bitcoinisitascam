FROM nginx:alpine
RUN addgroup -S www && adduser -S -G www www
RUN mkdir -p /var/www/static/
RUN mkdir -p /var/nginx/client_body_temp

COPY isitascam-swagger-api.yaml /var/www/static/swagger.yaml
COPY nginx-docker-compose.conf /etc/nginx/nginx.conf
COPY mime-types.conf /etc/nginx/conf/mime.types