from app.models.List import List, ListItem
import pytest


@pytest.fixture(scope='module')
def new_list() -> List:
    lista = List('test_list', 'test_description')
    return lista


@pytest.fixture(scope='module')
def new_list_item() -> ListItem:
    item = ListItem('test_list_item', 'test_description')
    return item


def test_list(new_list: List):
    """
    GIVEN a List model
    WHEN a new list is created
    THEN check fields: title, description, done
    """
    assert new_list.title == 'test_list'
    assert new_list.description == 'test_description'


def test_listItem(new_list_item: ListItem):
    """
    GIVEN a ListItem model
    WHEN a new item is created
    THEN check fields: name, description, done
    """
    assert new_list_item.name == 'test_list_item'
    assert new_list_item.description == 'test_description'
