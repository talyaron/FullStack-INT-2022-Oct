"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
// app.get("/", mainRoute);
// function mainRoute(req:any, res:any){
//     return res.redirect("/portfolio.html");
// }
app.get('/file1', function (req, res) {
    return res.redirect('/project-1/instagram.html');
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
