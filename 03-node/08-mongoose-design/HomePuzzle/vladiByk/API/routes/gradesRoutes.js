"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeRouter = void 0;
const express_1 = __importDefault(require("express"));
const gradeRouter = express_1.default.Router();
exports.gradeRouter = gradeRouter;
const gradeController_1 = require("../controllers/gradeController");
gradeRouter
    .route("/")
    .get(gradeController_1.getAllGrades)
    .post(gradeController_1.createGrade)
    .delete(gradeController_1.emptyCollection);
gradeRouter
    .route("/:id")
    .get(gradeController_1.getStudentGradesInCourse)
    .patch(gradeController_1.updateGrade)
    .delete(gradeController_1.deleteGrade);
gradeRouter
    .route("/inCourse/:courseId").delete(gradeController_1.deleteAllGradesInCourse);
