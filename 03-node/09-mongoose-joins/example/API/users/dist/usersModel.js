"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
UserType;
{
    STUDENT = "student",
        TEACHER = "teacher",
        ADMIN = "admin",
    ;
}
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    src: String,
    // courses:[String] //[courseId] slow but accurate
    userType: {
        type: String,
        "enum": UserType,
        "default": UserType.STUDENT
    }
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;
