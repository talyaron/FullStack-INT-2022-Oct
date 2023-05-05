"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productsControl_1 = require("./productsControl");
var routerProduct = express_1.Router();
routerProduct
    .get('/get-products', productsControl_1.getProducts)
    .post('/get-product', productsControl_1.getProduct)
    .post('/add-product', productsControl_1.addProducts)
    .patch('/update-product', productsControl_1.updateProducts)["delete"]('/delete-product', productsControl_1.removeProducts);
exports["default"] = routerProduct;
