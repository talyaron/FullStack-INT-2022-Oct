"use strict";
exports.__esModule = true;
var express_1 = require("express");
var historyControl_1 = require("./historyControl");
var authMiddlware_1 = require("../auth/authMiddlware");
var router = express_1["default"].Router();
router
    .get("/", authMiddlware_1.isConnected, historyControl_1.getHistories);
exports["default"] = router;
