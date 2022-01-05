from app.models.lista import List
import pytest


@pytest.fixture(scope='module')
def new_list() -> List:
    lista = List('test_list', 'test_description')
    return lista


def test_list(new_list: List):
    """
    GIVEN a List model
    WHEN a new list is created
    THEN check fields: title, description, done
    """
    assert new_list.title == 'test_list'
    assert new_list.description == 'test_description'
