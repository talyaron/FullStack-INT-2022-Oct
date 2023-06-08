"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var ballonControl_1 = require("./ballonControl");
router
    .post('/start-game', ballonControl_1.addBallons);
exports["default"] = router;
