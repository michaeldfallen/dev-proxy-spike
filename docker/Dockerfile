FROM nginxproxy/nginx-proxy

COPY nginx.sh /app/

COPY reload-nginx.sh /app/

COPY Procfile /app/

COPY proxy.conf /etc/nginx/conf.d/proxy.conf

RUN rm /etc/nginx/conf.d/default.conf