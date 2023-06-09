"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var PORT = 3000;
var app = express_1["default"]();
app.use(express_1["default"].static('public'));
// app.use('/imagesGallery', express.static('public'))
// app.use('/dist', express.static('public'))
app.get("/", function (req, res) {
    res.sendFile(path_1["default"].resolve(__dirname, "index.html"));
});
// app.get("/imageGallery/St_protret.png", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "St_protret.png"));
// });
// app.get("/dist/style.css", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "dist/style.css"));
// });
app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT);
});
