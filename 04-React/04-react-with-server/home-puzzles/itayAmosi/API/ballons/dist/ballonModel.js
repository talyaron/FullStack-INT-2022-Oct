"use strict";
exports.__esModule = true;
exports.BallonSchema = void 0;
var mongoose_1 = require("mongoose");
var ballons = [{ src: "https://shorturl.at/bpFL5" },
    { src: "https://shorturl.at/dnOS0" },
    { src: "https://shorturl.at/oLSX5" },
    { src: "https://shorturl.at/ghsO3" },
    { src: "https://shorturl.at/aoEJ5" },
    { src: "https://shorturl.at/prwEI" },
];
exports.BallonSchema = new mongoose_1.Schema({
    src: String
});
var BallonModel = mongoose_1["default"].model("ballons", exports.BallonSchema);
exports["default"] = BallonModel;
