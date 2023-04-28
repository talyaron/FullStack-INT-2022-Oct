"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRouter = void 0;
const express_1 = __importDefault(require("express"));
const courseRouter = express_1.default.Router();
exports.courseRouter = courseRouter;
const courseController_1 = require("../controllers/courseController");
courseRouter.route("/").get(courseController_1.getAllCourses).post(courseController_1.createCourse);
courseRouter.route("/teacher/:teacherId").get(courseController_1.getTeacherCourses);
courseRouter
    .route("/:courseId")
    .get(courseController_1.getCourse)
    .patch(courseController_1.updateCourse)
    .delete(courseController_1.deleteCourse);
