"use strict";
exports.__esModule = true;
exports.getUser = exports.getUserSchema = exports.UserSchema = exports.UserType = void 0;
var mongoose_1 = require("mongoose");
var CartModel_1 = require("../cart/CartModel");
var UserType;
(function (UserType) {
    UserType["PUBLIC"] = "public";
    UserType["ADMIN"] = "admin";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    userType: {
        type: String,
        "enum": UserType,
        "default": UserType.PUBLIC,
        cart: CartModel_1.CartSchema
    }
});
exports.getUserSchema = new mongoose_1.Schema({
    cart: CartModel_1.CartSchema
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports.getUser = mongoose_1["default"].model("getUser", exports.getUserSchema);
exports["default"] = UserModel;
