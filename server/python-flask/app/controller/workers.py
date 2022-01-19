from ..models.List import List

class DatabaseWorker:


    def get_todo_lists(self):
        return List.query.all()


    def get_todo_list_by_id(self, list_id):
        return List.query.filter_by(id=list_id).first()
