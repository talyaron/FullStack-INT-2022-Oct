"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userControl_1 = require("./userControl");
var routerUsers = express_1["default"].Router();
routerUsers
    .get('/logout', userControl_1.logout)
    .get('/get-user', userControl_1.getUser)
    .get("/get-users", userControl_1.getUsers)
    .get("/get-cart-user", userControl_1.getCartUser)
    .post("/create-user", userControl_1.createUser)
    .post("/create-product-cart", userControl_1.createCartList)
    .post('/login', userControl_1.login)
    .put("/change-user-name", userControl_1.changeNameUser)["delete"]("/delete-product-from-cart", userControl_1.deleteProductFromCart);
exports["default"] = routerUsers;
