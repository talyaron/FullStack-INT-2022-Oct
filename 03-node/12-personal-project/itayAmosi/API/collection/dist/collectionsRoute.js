"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var collectionsControls_1 = require("./collectionsControls");
router
    .post("/add-collections", collectionsControls_1.addCollections)
    .get("/get-collections", collectionsControls_1.getCollection);
exports["default"] = router;
