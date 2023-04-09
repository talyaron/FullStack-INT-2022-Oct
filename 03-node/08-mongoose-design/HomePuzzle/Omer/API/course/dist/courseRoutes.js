"use strict";
exports.__esModule = true;
var express_1 = require("express");
var courseRouter = express_1["default"].Router();
var courseControl_1 = require("./courseControl");
courseRouter.post("/add-course", courseControl_1.addCourse);
exports["default"] = courseRouter;
