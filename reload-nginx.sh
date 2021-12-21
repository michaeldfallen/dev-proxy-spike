#!/usr/bin/env sh

if [ -e /var/run/nginx.pid ]; then
    nginx -s reload
fi