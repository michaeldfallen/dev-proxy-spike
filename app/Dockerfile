FROM python:latest
WORKDIR /usr/src/app

ENV HTTP_PROXY="http://nginx-proxy"

COPY app.py .

RUN pip3 install requests flask

EXPOSE 5000
ENV FLASK_APP app
CMD python -m flask run --host 0.0.0.0