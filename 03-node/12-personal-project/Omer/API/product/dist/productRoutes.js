"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Productrouter = express_1["default"].Router();
var productControls_1 = require("./productControls");
Productrouter.post("/add-product", productControls_1.addProduct).get("/get-products", productControls_1.getAllProducts);
exports["default"] = Productrouter;
