"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const studentRouter = express_1.default.Router();
exports.studentRouter = studentRouter;
const studentController_1 = require("../controllers/studentController");
studentRouter
    .route("/")
    .get(studentController_1.getAllStudents)
    .post(studentController_1.createStudent)
    .delete(studentController_1.emptyCollection);
studentRouter
    .route("/:studentId")
    .get(studentController_1.getStudent)
    .patch(studentController_1.updateStudent)
    .delete(studentController_1.deleteStudent);
studentRouter
    .route("/inCourse/:courseId")
    .get(studentController_1.getStudentsInCourse)
    .delete(studentController_1.deleteAllStudentsInCourse);
