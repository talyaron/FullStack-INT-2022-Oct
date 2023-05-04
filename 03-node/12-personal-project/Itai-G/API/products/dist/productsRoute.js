"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var productsControl_1 = require("./productsControl");
router
    .post("/create-product", productsControl_1.createProduct)
    .get("/get-products", productsControl_1.getProducts)
    .get("/get-product-by-id", productsControl_1.getProductById)["delete"]("/delete-product", productsControl_1.deleteProduct)
    .patch("/update-product", productsControl_1.updateProduct);
exports["default"] = router;
