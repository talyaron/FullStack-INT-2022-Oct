"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var coursesControle_1 = require("./coursesControle");
router
    .post("/add-mock-course", coursesControle_1.addMockCourse)
    .get("/get-cousre", coursesControle_1.getCourse);
exports["default"] = router;
