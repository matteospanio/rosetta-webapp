"""
Il seguente modulo contiene dei comandi personalizzati eseguibili da flask
tramite CLI:
per richiamare un comando basterà digitare
    flask `nome_comando`
ciò semplifica alcune funzioni come la creazione delle tabelle del DB
o il popolamento di queste.
Il vantaggio è che non è necessario importare i moduli o le librerie al di
fuori di flask, in quanto i comandi di questo modulo vengono eseguiti nel contesto
dell'applicazione flask.
"""

import click
from flask.cli import with_appcontext
from . import db
from .models.List import List


@click.command(name='create_tables')
@with_appcontext
def create_tables():
    """create_tables è un wrapper per la creazione delle tabelle del DB"""
    db.create_all()
    print("Your DB has been created")


@click.command(name='delete_db')
@with_appcontext
def delete_db():
    """drop all tables of the database"""
    db.drop_all()
    print("DB Deleted")


@click.command(name='populate_db')
@with_appcontext
def populate_db():
    """generates test data in the database"""
    for i in range(10):
        new_list = List(f'hi {i}', f'description {i}')
        db.session.add(new_list)
    try:
        db.session.commit()
        print("DB populated")
    except:
        print("something went wrong while generating test data")
        db.session.rollback()
