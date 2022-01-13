from flask import Blueprint, jsonify, request, current_app

from app.models.lista import List, ListItem
from app import db

lists = Blueprint('lists', __name__, url_prefix='/lists')


@lists.get('/')
def get_lists():
    _lists = List.query.all()
    response = jsonify({'lists': [_list.to_json() for _list in _lists]})
    return response


@lists.post('/')
def create_list():
    if request.json:
        _list = List.from_json(request.json)
        db.session.add(_list)
        db.session.commit()
        response = jsonify(_list.to_json())
        response.status_code = 201
    else:
        response = jsonify({'error': 'wrong request format'})
        response.status_code = 400
    return response


@lists.get('/<list_id>')
def get_list(list_id):
    single_list = List.query.filter_by(id=list_id).first()
    return jsonify(single_list.to_json())


@lists.delete('/<list_id>')
def delete_list(list_id):
    single_list = List.query.filter_by(id=list_id).first()
    try:
        db.session.delete(single_list)
        db.session.commit()
        response = jsonify({'success': f'list n:{list_id} deleted with success'})
        response.status_code = 204
    except:
        current_app.logger.error(f'Error while deleting list with id {list_id}')
        response = jsonify({'error': f'list with id {list_id} not found'})
        response.status_code = 404
    return response


@lists.put('/<list_id>')
def update_list(list_id):
    single_list = List.query.filter_by(id=list_id).first()
    datas = request.json

    try:
        if datas['title']:
            single_list.title = datas['title']
        if datas['description']:
            single_list.description = datas['description']
            db.session.commit()
            response = jsonify({'success': f'list n:{list_id} successfully updated'})
    except:
        response = jsonify({'error': f'list n:{list_id} not updated'})
        response.status_code = 400
    return response


