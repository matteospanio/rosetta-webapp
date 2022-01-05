from os import environ, path
import secrets

basedir = path.abspath(path.dirname(__file__))


class Config:
    SSL_REDIRECT = False
    SECRET_KEY = environ.get('SECRET_KEY') or secrets.token_urlsafe(32)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_TYPE = 'filesystem'
    SQLALCHEMY_RECORD_QUERIES = True
    SESSION_PERMANENT = False

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = environ.get('DEV_DATABASE_URL') or 'sqlite:///' + path.join(basedir, 'data-dev.sqlite')


class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = environ.get('TEST_DATABASE_URL') or 'sqlite:///' + path.join(basedir, 'data-test.sqlite')


class HerokuProdConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = environ.get('HEROKU_DATABASE_URL')
    SSL_REDIRECT = True if environ.get('DYNO') else False


config = {
    'development': DevelopmentConfig,
    'production': HerokuProdConfig,
    'test': TestingConfig,
    'default': DevelopmentConfig
}
