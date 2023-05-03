"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var cartControl_1 = require("./cartControl");
router
    .post("/add-item", cartControl_1.addItem)
    .get("/get-cart", cartControl_1.getCartByUserId)
    .patch("/remove-item-from-cart", cartControl_1.removeProductFromCart)
    .post("/add-purchase", cartControl_1.successfulPurchase);
exports["default"] = router;
