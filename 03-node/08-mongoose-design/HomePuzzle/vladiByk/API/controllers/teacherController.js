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
exports.updateTeacher = exports.deleteTeacher = exports.createTeacher = exports.getTeacher = exports.getAllTeachers = void 0;
const TeacherModel_1 = __importDefault(require("../models/TeacherModel"));
const getAllTeachers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teachers = yield TeacherModel_1.default.find({});
        res.status(200).json({ teachers });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllTeachers = getAllTeachers;
const getTeacher = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: teacherId } = req.params;
        const teacher = yield TeacherModel_1.default.findById(teacherId);
        res.status(200).json({ teacher });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getTeacher = getTeacher;
const createTeacher = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const teacher = yield TeacherModel_1.default.create({ name });
        // await teacher.save();
        res.status(200).json({ msg: `Teacher ${teacher} is created...` });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createTeacher = createTeacher;
const deleteTeacher = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: teacherId } = req.params;
        const teacher = yield TeacherModel_1.default.deleteOne({ _id: teacherId });
        const teachers = yield TeacherModel_1.default.find({});
        res.status(200).send({ teachers });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteTeacher = deleteTeacher;
const updateTeacher = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: teacherId } = req.params;
        const data = req.body;
        const teachers = yield TeacherModel_1.default.find({});
        const teacher = yield TeacherModel_1.default.findById({ _id: teacherId });
        res.status(201).json({ teachers });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateTeacher = updateTeacher;
