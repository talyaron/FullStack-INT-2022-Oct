"use strict";
exports.__esModule = true;
exports.Role = void 0;
var mongoose_1 = require("mongoose");
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["SIMPLE"] = "simple";
})(Role = exports.Role || (exports.Role = {}));
var UserSchema = new mongoose_1.Schema({
    name: String,
    src: String,
    role: {
        type: String,
        "enum": [Role],
        "default": Role.SIMPLE
    }
});
var UserModel = mongoose_1["default"].model("users", UserSchema);
exports["default"] = UserModel;
