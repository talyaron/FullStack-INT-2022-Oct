"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var CartControls_1 = require("./CartControls");
router
    .post("/add-cart", CartControls_1.addCrat)
    .post("/add-purchase", CartControls_1.successfulPurchase)
    .get("/get-cart", CartControls_1.getCartByFilter)
    .patch("/remove-item-from-cart", CartControls_1.removeProductFromCart);
exports["default"] = router;
