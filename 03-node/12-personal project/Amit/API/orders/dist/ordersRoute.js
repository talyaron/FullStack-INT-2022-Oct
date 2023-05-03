"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var ordersControl_1 = require("./ordersControl");
router
    .post("/create-order", ordersControl_1.createOrder);
exports["default"] = router;
