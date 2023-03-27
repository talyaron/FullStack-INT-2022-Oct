"use strict";
exports.__esModule = true;
exports.Article = void 0;
var mongoose_1 = require("mongoose");
var ArticleSchema = new mongoose_1["default"].Schema({
    title: {
        type: String,
        required: [true, "must provide title"],
        trim: true
    },
    body: {
        type: String,
        required: [true, "must provide body"],
        trim: true
    },
    imgURL: {
        type: String,
        required: true
    },
    posted: {
        type: Boolean,
        "default": false
    }
});
exports.Article = mongoose_1["default"].model("Article", ArticleSchema);
