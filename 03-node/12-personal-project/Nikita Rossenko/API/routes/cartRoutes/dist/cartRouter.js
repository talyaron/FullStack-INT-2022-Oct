"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var cartController_1 = require("../../controller/cartController/cartController");
router
    .post("/add-item-to-cart", cartController_1.addItemToCart)
    .post("/delete-item-from-cart", cartController_1.deleteItemFromCart)
    .get("/get-cart-items", cartController_1.getCartItems);
exports["default"] = router;
