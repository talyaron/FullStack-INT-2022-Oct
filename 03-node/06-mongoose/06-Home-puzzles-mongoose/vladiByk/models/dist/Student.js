"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var StudentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    grades: [Number]
}, {
    versionKey: false
});
exports["default"] = mongoose_1["default"].model("Student", StudentSchema);
