"use strict";
exports.__esModule = true;
var express_1 = require("express");
var coursesRoute = express_1["default"].Router();
var coursesControl_1 = require("./coursesControl");
coursesRoute
    .post("/add-course", coursesControl_1.addCourse)
    .put("/update-course", coursesControl_1.updateCourse)
    .get("/get-courses", coursesControl_1.getCourse)
    .patch("/update-course-name", coursesControl_1.updateCourseName)["delete"]("/delete-course", coursesControl_1.deleteCourse);
exports["default"] = coursesRoute;
