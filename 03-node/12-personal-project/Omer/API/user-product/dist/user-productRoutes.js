"use strict";
exports.__esModule = true;
var express_1 = require("express");
var UserProducttrouter = express_1["default"].Router();
var user_productControls_1 = require("./user-productControls");
UserProducttrouter.post("/add-user-product", user_productControls_1.addUserProduct).get("/get-user-product", user_productControls_1.getUserProducts)["delete"]("/delete-user-product", user_productControls_1.deleteUserProducts);
exports["default"] = UserProducttrouter;
