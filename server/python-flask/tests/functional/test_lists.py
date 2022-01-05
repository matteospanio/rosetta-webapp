def test_get_page(client):
    """
    GIVEN a Flask application configured for testing
    WHEN the '/lists' page is requested (GET)
    THEN check that the response is valid
    """
    response = client.get('/lists/')
    assert isinstance(response.json, dict)
    assert response.status_code == 200


def test_post_list(client):
    """
    GIVEN a Flask application configured for testing
    WHEN the '/lists' page is requested (POST)
    THEN check that the response is valid
    """
    response = client.post('/lists/', json={'title': 'titolo', 'description': 'descrizione'})
    assert response.status_code == 201


def test_lists_no_json_body(client):
    """
    GIVEN a Flask application configured for testing
    WHEN the '/lists' page is requested (POST) with wrong body request
    THEN check that the response is valid
    """
    resp = client.post('/lists/', data='something')
    assert resp.status_code == 400
    assert not resp.json.get('success')
