import os

from flask import Flask, jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy_utils.functions import database_exists

dir_path = os.path.dirname(os.path.realpath(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///{}/tmp/test.db'.format(dir_path)
db = SQLAlchemy(app)
CORS(app)


class CountClicks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    count = db.Column(db.Integer, default=0)


@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        clicks_count = db.session.query(CountClicks.count).filter(CountClicks.id == 1).scalar()
    elif request.method == 'POST':
        counter = CountClicks.query.filter(CountClicks.id == 1).one()
        counter.count += 1
        db.session.commit()
        clicks_count = counter.count
    else:
        abort(500)
    return jsonify(str(clicks_count)), 200


if __name__ == "__main__":
    if not database_exists(app.config["SQLALCHEMY_DATABASE_URI"]):
        db.create_all()
        click = CountClicks()
        db.session.add(click)
        db.session.commit()
    app.run()
