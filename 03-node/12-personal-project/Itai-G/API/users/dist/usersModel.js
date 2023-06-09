"use strict";
exports.__esModule = true;
exports.UserSchema = exports.UserType = void 0;
var mongoose_1 = require("mongoose");
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "admin";
    UserType["PUBLIC"] = "public";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.UserSchema = new mongoose_1.Schema({
    name: { require: true, type: String },
    password: { require: true, type: String },
    email: { type: String },
    userType: {
        type: String,
        "enum": UserType,
        "default": UserType.PUBLIC
    }
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;
