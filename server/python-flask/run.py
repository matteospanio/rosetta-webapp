import os
from dotenv import load_dotenv
from app import create_app, db
from flask_migrate import Migrate
from flask_cors import CORS

load_dotenv()

app = create_app(os.getenv('FLASK_CONFIG'))

# This will enable CORS for all routes
cors = CORS(app)
migrate = Migrate(app, db)

# make_shell_context dà la possibilità di interfacciarsi con l'applicazione da CLI con il comando flask shell
# gli oggetti importati nel dizionario saranno visibili nella shell senza dover fare alcun import
@app.shell_context_processor
def make_shell_context():
    return dict(db=db)

if __name__ == "__main__":
    app.run()