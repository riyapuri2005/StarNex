from flask import Flask, request
from pooledMySQL import Manager as SQLManager
from randomisedString import Generator as StringGenerator


baseApp = Flask(__name__)



class Player:
    def __init__(self):
        self.userID = ""
        self.username = ""
        self.bearer = ""



playersActive = {}



@baseApp.route("/auth", methods=["POST"]):
def authRoute():
    if request.is_json:
        received = request.get_json()
    received = request.get_data()
    received = request.form.to_dict()



