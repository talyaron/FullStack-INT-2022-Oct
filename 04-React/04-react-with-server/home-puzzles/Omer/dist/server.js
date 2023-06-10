"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//static file
app.use(express_1["default"].static('./client'));
app.get("/api/get-users", function (req, res) {
    try {
        res.status(200).send({ ok: true });
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
