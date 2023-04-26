"use strict";
exports.__esModule = true;
var express_1 = require("express");
var coursesControl_1 = require("./coursesControl");
var router = express_1["default"].Router();
router
    .post('/createCourse', coursesControl_1.createCourse)
    .post('/add-course', coursesControl_1.addCourse)
    .put('/update-course', coursesControl_1.updateCourse)["delete"]('./delete', coursesControl_1.deleteCourse);
exports["default"] = router;
