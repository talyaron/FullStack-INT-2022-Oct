"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var coursesControl_1 = require("./coursesControl");
router
    .get('/all', coursesControl_1.getCourses)
    .post("/add", coursesControl_1.addCourse)
    .patch("/update-course-name", coursesControl_1.updateCourse)["delete"]("/delete-course", coursesControl_1.deleteCourse);
exports["default"] = router;
