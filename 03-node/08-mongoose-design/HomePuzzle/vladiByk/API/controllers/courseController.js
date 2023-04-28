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
exports.renderCoursePage = exports.updateCourse = exports.deleteCourse = exports.createCourse = exports.getCourse = exports.getTeacherCourses = exports.getAllCourses = void 0;
const CourseModel_1 = __importDefault(require("../models/CourseModel"));
const TeacherModel_1 = __importDefault(require("../models/TeacherModel"));
const getAllCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield CourseModel_1.default.find({});
        res.status(200).json({ courses });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllCourses = getAllCourses;
const getTeacherCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teacherId } = req.params;
        const teacher = yield TeacherModel_1.default.findById(teacherId);
        const courses = yield CourseModel_1.default.find({ teachers: teacher });
        res.status(200).send({ courses });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getTeacherCourses = getTeacherCourses;
const getCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const course = yield CourseModel_1.default.findById(courseId);
        res.status(200).send({ course });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getCourse = getCourse;
const createCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseName, teacherId } = req.body;
        console.log(courseName, teacherId);
        const teacher = yield TeacherModel_1.default.findById(teacherId);
        const course = yield CourseModel_1.default.create({
            name: courseName,
            teachers: [teacher],
        });
        res.status(200).json({ course });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createCourse = createCourse;
const deleteCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const course = yield CourseModel_1.default.deleteOne({ _id: courseId });
        const courses = yield CourseModel_1.default.find({});
        res.status(200).send({ courses, course });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteCourse = deleteCourse;
const updateCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const data = req.body;
        const courses = yield CourseModel_1.default.find({});
        const course = yield CourseModel_1.default.findById({ _id: courseId });
        res.status(201).json({ msg: "Updating course..." });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateCourse = updateCourse;
const renderCoursePage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("/course path...");
        // res.sendFile(path.join(__dirname, '../public', 'index1.html'));
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
exports.renderCoursePage = renderCoursePage;
