from os import getenv, path

class DBConfig:
    """
    This class is used to configure the database.
    """

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_RECORD_QUERIES = True

    #CONFIG_PROFILE = environ.get('FLASK_CONFIG')

    #DB_URI = {
    #    'test': environ.get('TEST_DATABASE_URL'), # or 'sqlite:///' + path.join(basedir, 'data-test.sqlite')),
    #    'development': environ.get('DEV_DATABASE_URL'),
    #    'production': f"postgresql://{environ.get('PG_DB_USER')}:{environ.get('PG_DB_PASSWORD')}@{environ.get('PRODUCTION_DATABASE_URL')}"
    #}
    #print(DB_URI[CONFIG_PROFILE])

    #SQLALCHEMY_DATABASE_URI = DB_URI[CONFIG_PROFILE]
        #SQLALCHEMY_DATABASE_URI = 
        
        #SQLALCHEMY_DATABASE_URI = f"postgresql://{environ.get('PG_DB_USER')}:{environ.get('PG_DB_PASSWORD')}@{environ.get('TEST_DATABASE_URL')}"
        

class TestingConfig(DBConfig):
    basedir = path.abspath(path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + path.join(basedir, 'data-test.sqlite')
    TESTING = True


class DevelopmentConfig(DBConfig):
    SQLALCHEMY_DATABASE_URI = f"postgresql://{getenv('PG_DB_USER')}:{getenv('PG_DB_PASSWORD')}@{getenv('DEV_DATABASE_URL')}"


class ProductionConfig(DBConfig):
    SQLALCHEMY_DATABASE_URI = f"postgresql://{getenv('PG_DB_USER')}:{getenv('PG_DB_PASSWORD')}@{getenv('PRODUCTION_DATABASE_URL')}"


config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'test': TestingConfig,
    'default': DevelopmentConfig
}
