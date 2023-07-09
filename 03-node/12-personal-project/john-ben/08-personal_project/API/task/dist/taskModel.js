"use strict";
exports.__esModule = true;
exports.TaskSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TaskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        "enum": ["in progress", "finished"],
        "default": "in progress"
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
}, { timestamps: true });
var TaskModel = mongoose_1["default"].model("tasks", exports.TaskSchema);
exports["default"] = TaskModel;
