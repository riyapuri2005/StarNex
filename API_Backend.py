from functools import wraps

from flask import Flask, request
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from randomisedString import Generator as STR_GEN
from pooledMySQL import Manager as SQL_MANAGER

strGen = STR_GEN()
SQLConn = SQL_MANAGER("starnex", "SimplePassword@69", "starnex", "bhindi1.ddns.net")
baseApp = Flask(__name__)
CORS(baseApp, origins=["http://localhost:3000"])



def createNewUser(name, email, username, password):
    while True:
        userID = strGen.AlphaNumeric(50, 50)
        if SQLConn.execute(f"SELECT userID from playerauth where userID=\"{userID}\""): continue
        SQLConn.execute(f"INSERT INTO playerauth values (\"{userID}\", \"{name}\", \"{email}\", \"{username}\", \"{generate_password_hash(password)}\")")
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
        bearer = request.headers.get("Bearer", "")
        userID = None
        deviceID = None
        if bearer:
            received = SQLConn.execute(f"SELECT userID, deviceID from plauerdevices where bearer=\"{bearer}\"")
            if received:
                received = received[0]
                userID = received["userID"].decode()
                deviceID = received["deviceID"].decode()
        if userID and deviceID: return continueFunction(userID, deviceID)
        else:
            return {"STATUS":-1, "REASON":"INVALID AUTH"}
    return wrapper



@baseApp.route("/signup", methods=["POST"])
def signupRoute():
    name = request.get_json()["NAME"]
    email = request.get_json()["EMAIL"]
    username = request.get_json()["UNAME"]
    password = request.get_json()["PASSWORD"]
    if not name:
        response = {"STATUS":-1, "REASON":"NAME INVALID"}
    elif not email:
        response = {"STATUS":-1, "REASON":"EMAIL INVALID"}
    elif not username:
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
    username = request.get_json()["UNAME"]
    password = request.get_json()["PASSWORD"]
    if not username:
        response = {"STATUS":-1, "REASON":"USERNAME INVALID"}
    elif not password:
        response = {"STATUS":-1, "REASON":"PASSWORD INVALID"}
    else:
        received = SQLConn.execute(f"SELECT userID, pwHash from playerauth where username=\"{username}\"")
        if received:
            received = received[0]
            userID = received["userID"].decode()
            bearer = createNewDevice(userID)
            response = {"STATUS":0, "BEARER":bearer}
        else: response = {"STATUS":-1, "REASON":"CREDENTIALS INVALID"}
    print(response)
    return response


baseApp.run("0.0.0.0", 5000)

