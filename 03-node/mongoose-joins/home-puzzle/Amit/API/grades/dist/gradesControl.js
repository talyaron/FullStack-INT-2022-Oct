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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteGrade = exports.updateGrade = exports.addGrade = void 0;
exports.addGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // const { courseId, studentId } = req.body;
            // if (!courseId) throw new Error("No course Id in data");
            // if (!studentId) throw new Error("No student Id in data");
            // const student = await StudentModel.findById(studentId);
            // if(!student) throw new Error("no student found");
            // const course = await CourseModel.findById(courseId);
            // if(!course) throw new Error("no course found"); 
            // const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
            // if(courseIndex !==0) throw new Error("no course index found");
            // const gradeDB = await GradeModel.create({grade: undefined});
            // student.courses[courseIndex].grades.push(gradeDB);
            // await student.save();
            // const students = await StudentModel.find({})
            // res.status(201).send({ ok: true, students });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.updateGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // const { courseId, studentId, gradeId, updatedGrade } = req.body;
            // if (!courseId) throw new Error("No course Id in data");
            // if (!studentId) throw new Error("No student Id in data");
            // if (!updatedGrade) throw new Error("No updated Course in data");
            // const student = await StudentModel.findById(studentId);
            // if(!student) throw new Error("no student found");
            // const course = await CourseModel.findById(courseId);
            // if(!course) throw new Error("no course found");
            // const updatedGradeDB = await GradeModel.updateOne({gradeId}, {name: updatedGrade});
            // const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
            // if((!courseIndex) && (courseIndex!==0)) throw new Error ("course Index not found");
            // const grade = student.courses[courseIndex].grades.find((grade)=> grade._id?.toString() === gradeId.toString());
            // if(!grade) throw new Error ("grade not found");
            // grade.grade = parseInt(updatedGrade);
            // await student.save();
            // const students = await StudentModel.find({});
            // res.status(201).send({ ok: true, students });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.deleteGrade = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            // const {courseId , studentId , gradeId} = req.body;
            // console.log("studentId", studentId)
            // const student = await StudentModel.findById(studentId);
            // if(!student) throw new Error("no student found");
            // const course = await CourseModel.findById(courseId);
            // if(!course) throw new Error("no course found");
            // const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
            // if((!courseIndex) && (courseIndex!==0)) throw new Error ("course Index not found");
            // const gradeIndex = student.courses[courseIndex].grades.findIndex((grade) => grade._id?.toString() === gradeId.toString());
            // if((!gradeIndex) && (gradeIndex!==0)) throw new Error ("grade Index not found");
            // student.courses[courseIndex].grades.splice(gradeIndex, 1);
            // const deletedGrade = await GradeModel.findOneAndDelete(gradeId);
            // await student.save();
            // const students = await StudentModel.find({})
            // res.send({ ok: true, students });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
