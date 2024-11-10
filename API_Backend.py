from gevent.monkey import patch_all
patch_all()

from gevent.pywsgi import WSGIServer
from functools import wraps
from flask import Flask, request
from flask_cors import CORS
from time import sleep
from werkzeug.security import check_password_hash, generate_password_hash
from randomisedString import Generator as STR_GEN
from pooledMySQL import Manager as SQL_MANAGER



strGen = STR_GEN()
SQLConn = SQL_MANAGER("starnex", "12345678", "starnex", logOnTerminal=4)
baseApp = Flask(__name__)
CORS(baseApp, origins=["http://localhost:3000"])



def createNewUser(name, email, username, password):
    while True:
        userID = strGen.AlphaNumeric(50, 50)
        if SQLConn.execute(f"SELECT userID from playerinfo where userID=\"{userID}\""): continue
        SQLConn.execute(f"INSERT INTO playerinfo values (\"{userID}\", \"{name}\", \"{email}\", \"{username}\", \"{generate_password_hash(password)}\", 0)")
        bearer = createNewDevice(userID)
        return userID, bearer



def createNewDevice(userID):
    while True:
        deviceID = strGen.AlphaNumeric(50, 50)
        bearer = strGen.AlphaNumeric(100, 100)
        if SQLConn.execute(f"SELECT deviceID from playerdevices where deviceID=\"{deviceID}\""): continue
        if SQLConn.execute(f"SELECT userID from playerdevices where bearer=\"{bearer}\""): continue
        SQLConn.execute(f"INSERT INTO playerdevices values (\"{userID}\", \"{deviceID}\", \"{bearer}\")")
        return bearer



def loginRequired(continueFunction):
    @wraps(continueFunction)
    def wrapper():
        sleep(3)
        bearer = request.headers.get("Bearer", "")
        userID = None
        deviceID = None
        if bearer:
            received = SQLConn.execute(f"SELECT userID, deviceID from playerdevices where bearer=\"{bearer}\"")
            if received:
                received = received[0]
                userID = received["userID"].decode()
                deviceID = received["deviceID"].decode()
        if userID and deviceID:
            response = continueFunction(userID, deviceID)
            return response
        else:
            return {"STATUS":-1, "REASON":"AUTH REQUIRED"}
    return wrapper



@baseApp.route("/checkauth", methods=["POST"])
@loginRequired
def forceCheckAuth(userID, deviceID):
    received = SQLConn.execute(f"SELECT name, score from playerinfo where userID=\"{userID}\"")
    if received: received = received[0]
    response = {"STATUS":0, "NAME":received.get("name", "-nameless-"), "SCORE":received.get("score", 0)}
    print(response)
    return response



@baseApp.route("/discover", methods=["POST"])
@loginRequired
def discoverRoute(userID, deviceID):
    knownGames = {}
    for item in SQLConn.execute("SELECT * FROM availablegames"):
        if item["category"] not in knownGames: knownGames[item["category"]] = []
        knownGames[item["category"]].append({"TITLE": item["title"], "DESC": item["desc"], "URL": item["url"], "IMG": item["img"]})
    print(knownGames)
    return knownGames



@baseApp.route("/submitscore", methods=["POST"])
@loginRequired
def addScore(userID, deviceID):
    scoreToAdd = int(request.get_json().get("SCORE"))
    print(userID, deviceID, scoreToAdd)
    SQLConn.execute(f"UPDATE playerinfo set score=score+{scoreToAdd} where userID=\"{userID}\"")
    return {"STATUS": "OK"}



@baseApp.route("/signup", methods=["POST"])
def signupRoute():
    name = request.get_json().get("NAME", "")
    email = request.get_json().get("EMAIL", "")
    username = request.get_json().get("UNAME", "")
    password = request.get_json().get("PASSWORD", "")
    if not name:
        response = {"STATUS":-1, "REASON":"NAME INVALID"}
    elif (not email) or SQLConn.execute(f"SELECT email from playerinfo where email=\"{email}\""):
        response = {"STATUS":-1, "REASON":"EMAIL INVALID"}
    elif (not username) or SQLConn.execute(f"SELECT username from playerinfo where username=\"{username}\""):
        response = {"STATUS":-1, "REASON":"USERNAME INVALID"}
    elif not password:
        response = {"STATUS":-1, "REASON":"PASSWORD INVALID"}
    else:
        userID, bearer = createNewUser(name, email, username, password)
        response = {"STATUS": 0, "BEARER": bearer}
    print(response)
    return response



@baseApp.route("/login", methods=["POST"])
def loginRoute():
    username = request.get_json().get("UNAME")
    password = request.get_json().get("PASSWORD")
    if not username:
        response = {"STATUS":-1, "REASON":"USERNAME INVALID"}
    elif not password:
        response = {"STATUS":-1, "REASON":"PASSWORD INVALID"}
    else:
        received = SQLConn.execute(f"SELECT userID, pwHash from playerinfo where username=\"{username}\"")
        if received:
            received = received[0]
            userID = received["userID"].decode()
            pwHash = received["pwHash"].decode()
            if check_password_hash(pwHash, password):
                bearer = createNewDevice(userID)
                response = {"STATUS":0, "BEARER":bearer}
            else:
                response = {"STATUS":-1, "REASON":"PASSWORD INVALID"}
        else: response = {"STATUS":-1, "REASON":"USERNAME INVALID"}
    print(response)
    return response


WSGIServer(('0.0.0.0', 5000,), baseApp, log=None).serve_forever()
