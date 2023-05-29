"use strict";
exports.__esModule = true;
exports.UserPostModel = exports.PostModel = exports.UserPostSchema = exports.PostSchema = void 0;
var mongoose_1 = require("mongoose");
var userModel_1 = require("../users/userModel");
exports.PostSchema = new mongoose_1.Schema({
    title: { require: true, type: String },
    description: { require: true, type: String },
    mainPicture: { require: true, type: String },
    mainText: { require: true, type: String },
    metaAuthorId: { require: true, type: String },
    metaDate: { require: true, type: Date }
});
exports.UserPostSchema = new mongoose_1.Schema({
    user: userModel_1.UserSchema,
    post: exports.PostSchema
});
exports.PostModel = mongoose_1["default"].model("posts", exports.PostSchema);
exports.UserPostModel = mongoose_1["default"].model("user-post", exports.UserPostSchema);
exports["default"] = exports.PostModel;
