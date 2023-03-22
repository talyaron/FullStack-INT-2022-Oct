"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//data route
// app.get("/random-number3333", (req: any, res: any) => {
//   setTimeout(() => {
//     res.send({ number: Math.round(Math.random() * 100) });
//     // res.send({ number: 0 });
//   }, 200);
// });
//static file
app.use(express_1["default"].static("./public"));
app.listen(8000, function () {
    console.log("server listen on port 8000");
});
