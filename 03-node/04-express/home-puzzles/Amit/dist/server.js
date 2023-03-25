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
app.get('/file2', function (req, res) {
    return res.redirect('/project-2/bbc.html');
});
app.get('/file3', function (req, res) {
    return res.redirect('/project-3/pacman.html');
});
app.get('/file4', function (req, res) {
    return res.redirect('/project-4/Netflix.html');
});
app.get('/file5', function (req, res) {
    return res.redirect('/project-5/bookshook.html');
});
app.get('/file6', function (req, res) {
    return res.redirect('/project-6');
});
app.get('/file7', function (req, res) {
    return res.redirect('/project-7/log-in.html');
});
app.get('/file8', function (req, res) {
    return res.redirect('/project-8/Bite-Away-group2-orel-amit-dor/intro/intro.html');
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});