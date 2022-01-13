from flask import Blueprint, jsonify, request, current_app
from app import db

auth = Blueprint('auth', __name__, url_prefix='/auth')


@auth.get('/')
def login():
    return 'ciao'
