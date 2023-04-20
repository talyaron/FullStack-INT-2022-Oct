"use strict";
exports.__esModule = true;
exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
// import { TeacherSchema } from '../teachers/teachersModel';
var Schema = mongoose_1["default"].Schema;
//Scheme
exports.CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        "default": function () {
            try {
                return (this.name
                    .split(" ") //splits a string into an new array of substrings.
                    .map(function (name) { return name[0]; }) //creates a new array from calling a function for every array element.
                    .join("") //returns an array as a string.
                    .toUpperCase() +
                    Math.floor(10 + Math.random() * 90) +
                    Math.floor(10 + Math.random() * 90));
            }
            catch (error) {
                console.error(error);
            }
        }
    },
    teachers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Teacher"
        },
    ],
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student",
            "default": []
        },
    ],
    subjects: [
        {
            type: Schema.Types.ObjectId,
            ref: "Subject",
            "default": []
        },
    ]
});
var CourseModel = mongoose_1["default"].model('courses', exports.CourseSchema);
exports["default"] = CourseModel;
