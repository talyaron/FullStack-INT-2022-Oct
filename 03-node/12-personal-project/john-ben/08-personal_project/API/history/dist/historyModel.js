"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var taskModel_1 = require("../task/taskModel");
var HistorySchema = new mongoose_1.Schema({
    type: {
        type: String,
        "enum": ["add", "update", "delete"],
        required: true
    },
    task: taskModel_1.TaskSchema,
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
}, { timestamps: true });
var HistoryModel = mongoose_1["default"].model("history", HistorySchema);
exports["default"] = HistoryModel;
