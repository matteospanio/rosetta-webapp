from .. import db


class List(db.Model):
    """
    List Model

    Args:
        db (SQLAlchemy): SQLAlchemy object

    Returns:
        List object
    """

    __tablename__ = 'lists'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), nullable=False)
    description = db.Column(db.String(255), default='No description')
    done = db.Column(db.Boolean, default=False)
    items = db.relationship('ListItem', cascade="all,delete", backref='in', lazy='dynamic')

    def __init__(self, title, description):
        self.title = title
        self.description = description

    def __repr__(self):
        return f'List: id = {self.id}, title = {self.title}'

    def to_json(self):
        json_list = {
            'title': self.title,
            'description': self.description,
            'items': [item.serialize() for item in self.items],
            'done': self.done,
            'id': self.id
        }
        return json_list

    def from_json(json_list):
        title = json_list['title']
        description = json_list['description']
        # if title is None or description is None:
        #    raise ValidationError('list is not valid')
        return List(title=title, description=description)


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
