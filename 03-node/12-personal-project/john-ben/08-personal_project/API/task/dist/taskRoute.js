"use strict";
exports.__esModule = true;
var express_1 = require("express");
var taskControl_1 = require("./taskControl");
var authMiddlware_1 = require("../auth/authMiddlware");
var router = express_1["default"].Router();
router
    .post("/", authMiddlware_1.isConnected, taskControl_1.addTask)
    .get("/:taskId", authMiddlware_1.isConnected, taskControl_1.getTask)
    .get("/", authMiddlware_1.isConnected, taskControl_1.getTasks)
    .patch("/:taskId", authMiddlware_1.isConnected, taskControl_1.updateTask)["delete"]("/:taskId", authMiddlware_1.isConnected, taskControl_1.deleteTask);
exports["default"] = router;
