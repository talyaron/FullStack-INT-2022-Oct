"use strict";
exports.__esModule = true;
exports.SubjetSchema = void 0;
var mongoose_1 = require("mongoose");
// import { TeacherSchema } from '../teachers/teachersModel';
var Schema = mongoose_1["default"].Schema;
//Scheme
exports.SubjetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teacher: [
        {
            type: Schema.Types.ObjectId,
            ref: "Teacher"
        },
    ]
});
var SubjetModel = mongoose_1["default"].model('subjet', exports.SubjetSchema);
exports["default"] = SubjetModel;
