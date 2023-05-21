"use strict";
exports.__esModule = true;
var express_1 = require("express");
var orderRouter = express_1["default"].Router();
var isUserLogin_1 = require("../../middlewares/isUserLogin");
var isAdminLogin_1 = require("../../middlewares/isAdminLogin");
var isAdmin_1 = require("../../middlewares/isAdmin");
var orderCtrl_1 = require("./orderCtrl");
orderRouter
    .post("/create-order", isUserLogin_1["default"], orderCtrl_1.createOrder)
    .get("/get-all-orders", isAdminLogin_1["default"], isAdmin_1["default"], orderCtrl_1.getAllOrders)
    .get("/get-sum", isAdminLogin_1["default"], isAdmin_1["default"], orderCtrl_1.getSum);
exports["default"] = orderRouter;
