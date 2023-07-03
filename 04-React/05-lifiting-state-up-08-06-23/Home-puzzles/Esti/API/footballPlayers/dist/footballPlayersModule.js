"use strict";
exports.__esModule = true;
exports.footballPlayerSchmea = void 0;
var mongoose_1 = require("mongoose");
exports.footballPlayerSchmea = new mongoose_1.Schema({
    image: String
});
var footballPlayerModel = mongoose_1.model("footballPlayer", exports.footballPlayerSchmea);
exports["default"] = footballPlayerModel;
