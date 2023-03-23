"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
// app.get('/file1', function (req: any, res: any) {
//     return res.redirect('/project-1/instagram.html');
// })
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
// 3) use dog api, to get random image of a dog, from a selected bread (use select, to select the breed <select>)
