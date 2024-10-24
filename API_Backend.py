from functools import wraps
from flask import Flask, request
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from randomisedString import Generator as STR_GEN
from pooledMySQL import Manager as SQL_MANAGER

strGen = STR_GEN()
SQLConn = SQL_MANAGER("starnex", "12345678", "starnex", "bhindi1.ddns.net", 3308)
baseApp = Flask(__name__)
CORS(baseApp, origins=["http://localhost:3000"])


knownGames = {
    "grid_recent":[
        {
            "TITLE": "Angry Man",
            "DESC": "Angry Man Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/angryman/play",
        },
        {
            "TITLE": "Car Rush",
            "DESC": "Car Rush Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/carrush/play",
        },
        {
            "TITLE": "Space Ship",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/spaceship/play",
        },
        {
            "TITLE": "Space Rocks",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/spacerocks/play",
        },
    ],

    "grid_recommended": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_beauty": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_car": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_bike": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_action": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_adventure": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_card": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_controller": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_sports": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_shooting": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_puzzle": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_io": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_horror": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

    "grid_escape": [
        {
            "TITLE": "Game 1",
            "DESC": "Game 1 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game1/play",
        },
        {
            "TITLE": "Game 2",
            "DESC": "Game 2 Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game2/play",
        },
        {
            "TITLE": "Game 3",
            "DESC": "Space Ship Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game3/play",
        },
        {
            "TITLE": "Game 4",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game4/play",
        },
        {
            "TITLE": "Game 5",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game5/play",
        },
        {
            "TITLE": "Game 6",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game6/play",
        },
        {
            "TITLE": "Game 7",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game7/play",
        },
        {
            "TITLE": "Game 8",
            "DESC": "Space Rocks Description",
            "IMG": "/image/favicon.ico",
            "URL": "/games/game8/play",
        },
    ],

}


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
            received = SQLConn.execute(f"SELECT userID, deviceID from playerdevices where bearer=\"{bearer}\"")
            if received:
                received = received[0]
                userID = received["userID"].decode()
                deviceID = received["deviceID"].decode()
        if userID and deviceID:
            response = continueFunction(userID, deviceID)
            print(response)
            return response
        else:
            return {"STATUS":-1, "REASON":"AUTH REQUIRED"}
    return wrapper



@baseApp.route("/checkauth", methods=["POST"])
@loginRequired
def forceCheckAuth(userID, deviceID):
    response = {"STATUS":0}
    print(response)
    return response


@baseApp.route("/discover", methods=["POST"])
def discoverRoute():
    print(knownGames)
    return knownGames


@baseApp.route("/signup", methods=["POST"])
def signupRoute():
    name = request.get_json()["NAME"]
    email = request.get_json()["EMAIL"]
    username = request.get_json()["UNAME"]
    password = request.get_json()["PASSWORD"]
    if not name:
        response = {"STATUS":-1, "REASON":"NAME INVALID"}
    elif (not email) or SQLConn.execute(f"SELECT email from playerauth where email=\"{email}\""):
        response = {"STATUS":-1, "REASON":"EMAIL INVALID"}
    elif (not username) or SQLConn.execute(f"SELECT username from playerauth where username=\"{username}\""):
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
            pwHash = received["pwHash"].decode()
            if check_password_hash(pwHash, password):
                bearer = createNewDevice(userID)
                response = {"STATUS":0, "BEARER":bearer}
            else:
                response = {"STATUS":-1, "BEARER":"PASSWORD INVALID"}
        else: response = {"STATUS":-1, "REASON":"CREDENTIALS INVALID"}
    print(response)
    return response



baseApp.run("0.0.0.0", 5000)

