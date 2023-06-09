"use strict";
exports.__esModule = true;
exports.UserSchema = exports.UserType = void 0;
var mongoose_1 = require("mongoose");
var UserType;
(function (UserType) {
    UserType["STUDENT"] = "student";
    UserType["TEACHER"] = "teacher";
    UserType["ADMIN"] = "admin";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.UserSchema = new mongoose_1.Schema({
    Fname: String,
    Lname: String,
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    userType: {
        require: true,
        type: String,
        "enum": UserType,
        "default": UserType.STUDENT
    }
});
var userModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = userModel;
