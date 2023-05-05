"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var registerController_1 = require("../../controller/registerController/registerController");
router.post("/register", registerController_1.register);
exports["default"] = router;
