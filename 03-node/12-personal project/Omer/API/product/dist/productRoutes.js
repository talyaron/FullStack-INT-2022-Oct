"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productRouter = express_1["default"].Router();
var productControls_1 = require("./productControls");
productRouter.post("/add-product", productControls_1.addProductToStorage).get("/get-products", productControls_1.getProducts).post("/add-to-wish", productControls_1.addProductToWish).get("/get-user-wish", productControls_1.getUserWish);
exports["default"] = productRouter;
