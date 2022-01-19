import pytest

from app import create_app, db
from app.models.List import *


@pytest.fixture
def client():

    app = create_app('test')

    with app.test_client() as client:
        with app.app_context():
            db.create_all()

            yield client

            db.drop_all()
