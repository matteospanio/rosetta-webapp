from flask import Flask
from . import lists, auth


def init_routes(app: Flask):
    app.register_blueprint(lists.lists, url_prefix='/lists')
    app.register_blueprint(auth.auth, url_prefix='/auth')
