"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(express_1["default"].static("./client"));
var users = [
    {
        name: "simon",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Meeting_between_PM_Peres_with_newly_elected_PM_Nethanyahu%2C_1996_Dan_Hadani_Archive_II.jpg/220px-Meeting_between_PM_Peres_with_newly_elected_PM_Nethanyahu%2C_1996_Dan_Hadani_Archive_II.jpg"
    },
    {
        name: "dudu",
        src: "https://www.kipa.co.il/userFiles/735-415/334694_2032d904f16f8df9a896995cc981aedf.jpg"
    }
];
app.get("/api/getUsers", function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.post("/api/add-userdetils", function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        users.push(data);
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
