"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var collectionsControls_1 = require("./collectionsControls");
router
    .post("/add-products", collectionsControls_1.addProducts)
    .get("/get-products", collectionsControls_1.getProducts);
exports["default"] = router;
