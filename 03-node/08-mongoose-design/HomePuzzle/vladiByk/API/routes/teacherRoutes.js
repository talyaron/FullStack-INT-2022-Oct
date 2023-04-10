"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherRouter = void 0;
const express_1 = __importDefault(require("express"));
const teacherRouter = express_1.default.Router();
exports.teacherRouter = teacherRouter;
const teacherController_1 = require("../controllers/teacherController");
teacherRouter.route("/").get(teacherController_1.getAllTeachers).post(teacherController_1.createTeacher);
teacherRouter.route("/:id").get(teacherController_1.getTeacherCourses).patch(teacherController_1.updateTeacher).delete(teacherController_1.deleteTeacher);
