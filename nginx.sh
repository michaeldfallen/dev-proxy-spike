#!/usr/bin/env sh

while [ ! -f /etc/nginx/conf.d/default.conf ]; do
    echo "*** Waiting to start nginx...";
    sleep 1;
done;

echo "*** Starting nginx...";
nginx