from .. import db
from . import List

class ListItem(db.Model):
    """
    ListItem Model

    Args:
        db (SQLAlchemy): SQLAlchemy object

    Returns:
        ListItem object
    """

    __tablename__ = 'list_items'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    description = db.Column(db.String(255), default='No description')
    list_id = db.Column(db.Integer, db.ForeignKey('lists.id', ondelete="CASCADE"))

    def __init__(self, name: str, description: str):
        self.name = name
        self.description = description

    def __repr__(self):
        return f'List item: id = {self.id}, name = {self.name}'
