"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var orderControl_1 = require("./orderControl");
router
    .post("/create-order", orderControl_1.createOrder)
    .get("/get-orders", orderControl_1.getOrders)
    .get("/get-order-by-id", orderControl_1.getOrderById)["delete"]("/delete-order", orderControl_1.deleteOrder)
    .patch("/update-order", orderControl_1.updateOrder);
exports["default"] = router;
