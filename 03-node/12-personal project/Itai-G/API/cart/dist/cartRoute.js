"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var cartControl_1 = require("./cartControl");
router
    .post("/add-item", cartControl_1.addItem);
exports["default"] = router;
