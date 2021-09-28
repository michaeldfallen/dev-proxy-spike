from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def whoishe():
    r = requests.get('http://foo.dev.coffeepowered.xyz')
    return f'He says he is {r.text}'