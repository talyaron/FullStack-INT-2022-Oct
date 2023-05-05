"use strict";
exports.__esModule = true;
exports.UsersProductModel = exports.UsersProductSchema = exports.UserSchema = exports.UserType = void 0;
var mongoose_1 = require("mongoose");
var productsModel_1 = require("../products/productsModel");
var UserType;
(function (UserType) {
    UserType["USER"] = "user";
    UserType["ADMIN"] = "admin";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    userType: {
        type: String,
        "enum": UserType,
        "default": UserType.USER
    }
});
exports.UsersProductSchema = new mongoose_1.Schema({
    user: {
        type: exports.UserSchema,
        require: true
    },
    product: {
        type: productsModel_1.ProductSchema,
        require: true
    },
    size: String
});
exports.UsersProductModel = mongoose_1["default"].model("userProduct", exports.UsersProductSchema);
var UserModel = mongoose_1["default"].model("user", exports.UserSchema);
exports["default"] = UserModel;
