"use strict";
exports.__esModule = true;
exports.UserSchema = exports.UserType = void 0;
var mongoose_1 = require("mongoose");
//typescript
var UserType;
(function (UserType) {
    UserType["STUDENT"] = "student";
    UserType["TEACHER"] = "teacher";
    UserType["ADMIN"] = "admin";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.UserSchema = new mongoose_1.Schema({
    name: { require: true, type: String },
    src: String,
    password: { require: true, type: String },
    // courses:[String] //[courseId] slow but accurate
    userType: {
        type: String,
        "enum": UserType,
        "default": UserType.STUDENT
    }
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;
