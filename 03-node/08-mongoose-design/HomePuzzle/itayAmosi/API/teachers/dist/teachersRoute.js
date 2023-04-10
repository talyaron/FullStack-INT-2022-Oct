"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var teachersControle_1 = require("./teachersControle");
router
    .post("/add-mock-teacher", teachersControle_1.addMockTeacher);
exports["default"] = router;
