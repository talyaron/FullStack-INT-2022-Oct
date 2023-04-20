"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var coursesControle_1 = require("./coursesControle");
router
    .post("/add-mock-course", coursesControle_1.addMockCourse)
    .get("/get-courses-by-ids", coursesControle_1.getCoursesByIds);
exports["default"] = router;