"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var CartControls_1 = require("./CartControls");
router
    .post("/add-cart", CartControls_1.addCrat)
    .get("/get-cart", CartControls_1.getCartByFilter);
exports["default"] = router;
