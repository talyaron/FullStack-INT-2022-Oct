"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyCollection = exports.updateGrade = exports.deleteGrade = exports.createGrade = exports.deleteAllGradesInCourse = exports.getStudentGradesInCourse = exports.getAllGrades = void 0;
const GradeModel_1 = __importDefault(require("../models/GradeModel"));
const StudentModel_1 = __importDefault(require("../models/StudentModel"));
const CourseModel_1 = __importDefault(require("../models/CourseModel"));
const getAllGrades = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const grades = yield GradeModel_1.default.find({});
        res.status(200).json({ grades });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllGrades = getAllGrades;
const getStudentGradesInCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.query;
        const { id: studentId } = req.params;
        const course = yield CourseModel_1.default.findById(courseId);
        const student = yield StudentModel_1.default.findById(studentId);
        const grades = yield GradeModel_1.default.find({ course, student });
        res.status(200).send({ grades });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getStudentGradesInCourse = getStudentGradesInCourse;
const deleteAllGradesInCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const course = yield CourseModel_1.default.findById(courseId);
        const grades = yield GradeModel_1.default.deleteMany({ course });
        res.status(200).send({ grades });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.deleteAllGradesInCourse = deleteAllGradesInCourse;
const createGrade = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { score, courseId, studentId } = req.body;
        const student = yield StudentModel_1.default.findById(studentId);
        const course = yield CourseModel_1.default.findById(courseId);
        if (student || course) {
            const grade = yield GradeModel_1.default.create({
                score,
                course: course,
                student: student,
            });
            res.status(200).json({ grade });
        }
        else {
            const grades = yield GradeModel_1.default.find({});
            res.status(200).json({ grades });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createGrade = createGrade;
const deleteGrade = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: gradeId } = req.params;
        const grade = yield GradeModel_1.default.findByIdAndDelete(gradeId);
        const grades = yield GradeModel_1.default.find({});
        res.status(200).send({ grade });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteGrade = deleteGrade;
const updateGrade = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: gradeId } = req.params;
        const { newScore } = req.body;
        yield GradeModel_1.default.findByIdAndUpdate(gradeId, { score: newScore });
        const grade = yield GradeModel_1.default.findById(gradeId);
        res.status(200).json({ grade });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateGrade = updateGrade;
const emptyCollection = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const grades = yield GradeModel_1.default.deleteMany({});
        res.status(201).json({ grades });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.emptyCollection = emptyCollection;
