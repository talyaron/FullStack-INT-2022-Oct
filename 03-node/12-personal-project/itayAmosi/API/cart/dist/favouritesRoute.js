"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var favouritesControls_1 = require("./favouritesControls");
router
    .post("/add-favourite", favouritesControls_1.addFavourite);
exports["default"] = router;
