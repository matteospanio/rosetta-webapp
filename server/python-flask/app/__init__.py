from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config
from flask_cors import CORS

db = SQLAlchemy()


def create_app(config_name):
    app = Flask(__name__)
    # configuro l'applicazione basandomi sulle classi costruite in config.py
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    CORS(app)  # This will enable CORS for all routes

    # collegamento del database all'app
    db.init_app(app)

    # nelle seguenti linee stiamo creando le blueprint per dividere il progetto in più file
    from .routes import lists
    app.register_blueprint(lists.lists, url_prefix='/lists')

    # aggiungo ai comandi di flask quelli creati da me nel file commands.py
    from .commands import create_tables, delete_db
    app.cli.add_command(create_tables)
    app.cli.add_command(delete_db)

    return app
