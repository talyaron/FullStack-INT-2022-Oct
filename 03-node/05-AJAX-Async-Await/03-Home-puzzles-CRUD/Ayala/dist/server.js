"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
//כדי לקבל נתונים מהלקוח הוסף שורה זו
app.use(express_1["default"].json());
//data
var User = /** @class */ (function () {
    function User(name, src) {
        this.name = name;
        this.src = src;
        this.uid = uuidv4_1.uuid();
    }
    User.prototype.getSimpleUser = function () {
        return { uid: this.uid, name: this.name, src: this.src };
    };
    return User;
}());
var users = [
    new User("Joke", "https://prod-progsite-s3.s3.eu-central-1.wasabisys.com/data/attachments/712/712140-89103713854801d8c2114901648649b6.jpg"),
    new User("Joke", "https://funny.yo-yoo.co.il/pics/images/uploads/94a688.jpg"),
];
//data rout
//לקבלget(from server)
app.get("/api/get-user", function (rqe, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.messag });
    }
});
//add-להוסיף
app.post("/api/add-user", function (rqe, res) {
    try {
        var _a = rqe.body, name = _a.name, src = _a.src;
        console.log(name, src);
        users.push(new User(name, src));
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.messag });
    }
});
//update
// update whole entity- להחליף את הכל -מעדכן את הכל
app.put("/api/update-user", function (rqe, res) {
    try {
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.messag });
    }
});
//תיקון חלקי
app.patch("/api/update-user-name", function (rqe, res) {
    try {
        var _a = rqe.body, name = _a.name, uid_1 = _a.uid;
        if (!name)
            throw new Error("No name in data");
        if (!uid_1)
            throw new Error("No uid in data");
        var user = users.find(function (user) { return user.uid === uid_1; });
        if (!user)
            throw new Error("No user in data");
        user.name = name;
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.messag });
    }
});
app["delete"]("/api/delete-user", function (rqe, res) {
    try {
        var uid_2 = rqe.body.uid;
        if (!uid_2)
            throw new Error("no uid in data");
        var index = users.findIndex(function (user) { return user.uid === uid_2; });
        if (index === -1)
            throw new Error('couldnt find user in users, with ID ${uid}');
        users.splice(index, 1);
        var _users = users.map(function (user) { return user.getSimpleUser(); });
        res.send({ ok: true, users: _users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.messag });
    }
});
app.use(express_1["default"].static("./client"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
