import pytest

from app import create_app, db
from app.models.lista import *


@pytest.fixture
def client():
    app = create_app('test')

    with app.test_client() as client:
        with app.app_context():
            db.create_all()

            yield client # this is where the testing happens!

            db.drop_all()
        

