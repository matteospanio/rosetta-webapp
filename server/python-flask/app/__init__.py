from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from config.base_config import BasicConfig
from config.database import DBConfig

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)

    app.config.from_object(BasicConfig)
    app.config.from_object(DBConfig)
    db.init_app(app)

    from routes import init_routes
    init_routes(app)

    # aggiungo ai comandi di flask quelli creati da me nel file commands.py
    from .commands import create_tables, delete_db, populate_db
    app.cli.add_command(create_tables)
    app.cli.add_command(delete_db)
    app.cli.add_command(populate_db)

    return app
