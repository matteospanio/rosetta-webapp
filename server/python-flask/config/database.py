from os import environ


class DBConfig:
    """
    This class is used to configure the database.
    """

    def __init__(self, CONFIG_PROFILE) -> None:
        self.CONFIG_PROFILE=CONFIG_PROFILE

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_RECORD_QUERIES = True

    CONFIG_PROFILE = environ.get('FLASK_CONFIG')

    if CONFIG_PROFILE == 'development':
        #SQLALCHEMY_DATABASE_URI = f"postgresql://{environ.get('PG_DB_USER')}:{environ.get('PG_DB_PASSWORD')}@{environ.get('DEV_DATABASE_URL')}"
        SQLALCHEMY_DATABASE_URI = environ.get('DEV_DATABASE_URL')
    elif CONFIG_PROFILE == 'test':
        #SQLALCHEMY_DATABASE_URI = f"postgresql://{environ.get('PG_DB_USER')}:{environ.get('PG_DB_PASSWORD')}@{environ.get('TEST_DATABASE_URL')}"
        SQLALCHEMY_DATABASE_URI = environ.get('TEST_DATABASE_URL')
    else:
        SQLALCHEMY_DATABASE_URI = f"postgresql://{environ.get('PG_DB_USER')}:{environ.get('PG_DB_PASSWORD')}@{environ.get('PRODUCTION_DATABASE_URL')}"
    