from os import environ
import secrets

class BasicConfig:
    SECRET_KEY = environ.get('SECRET_KEY') or secrets.token_urlsafe(32)
    SESSION_TYPE = 'filesystem'
    SESSION_PERMANENT = False

    DEBUG = False if environ.get('FLASK_CONFIG') == 'production' else True
