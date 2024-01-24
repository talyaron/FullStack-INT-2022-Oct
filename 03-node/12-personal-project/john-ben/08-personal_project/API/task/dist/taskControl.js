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
exports.deleteTask = exports.updateTask = exports.getTasks = exports.getTask = exports.addTask = void 0;
var taskModel_1 = require("./taskModel");
var historyModel_1 = require("../history/historyModel");
exports.addTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, userId, newTask, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                name = req.body.name;
                userId = req.user.userId;
                return [4 /*yield*/, taskModel_1["default"].create({ name: name, userId: userId })];
            case 1:
                newTask = _a.sent();
                return [4 /*yield*/, historyModel_1["default"].create({
                        type: "add",
                        task: newTask,
                        userId: userId
                    })];
            case 2:
                _a.sent();
                res.status(201).send({ task: newTask });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId, userId, task, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                taskId = req.params.taskId;
                userId = req.user.userId;
                return [4 /*yield*/, taskModel_1["default"].findById({ _id: taskId })];
            case 1:
                task = _b.sent();
                if (((_a = task === null || task === void 0 ? void 0 : task.userId) === null || _a === void 0 ? void 0 : _a.toString()) !== userId) {
                    return [2 /*return*/, res.status(404).send("Task not found for userId: " + userId)];
                }
                res.status(200).send({ task: task });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTasks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, tasks, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.user.userId;
                return [4 /*yield*/, taskModel_1["default"].find({ userId: userId })];
            case 1:
                tasks = _a.sent();
                res.status(200).send({ tasks: tasks });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId, userId, prevTask, newTask, error_4;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 5, , 6]);
                taskId = req.params.taskId;
                userId = req.user.userId;
                return [4 /*yield*/, taskModel_1["default"].findById({ _id: taskId })];
            case 1:
                prevTask = _d.sent();
                if (((_a = prevTask === null || prevTask === void 0 ? void 0 : prevTask.userId) === null || _a === void 0 ? void 0 : _a.toString()) !== userId) {
                    return [2 /*return*/, res.status(404).send("Task not found for userId: " + userId)];
                }
                return [4 /*yield*/, taskModel_1["default"].findOneAndUpdate({ _id: taskId }, {
                        name: ((_b = req.body) === null || _b === void 0 ? void 0 : _b.name) || (prevTask === null || prevTask === void 0 ? void 0 : prevTask.name),
                        status: ((_c = req.body) === null || _c === void 0 ? void 0 : _c.status) || (prevTask === null || prevTask === void 0 ? void 0 : prevTask.status)
                    })];
            case 2:
                _d.sent();
                return [4 /*yield*/, taskModel_1["default"].findById({ _id: taskId })];
            case 3:
                newTask = _d.sent();
                return [4 /*yield*/, historyModel_1["default"].create({
                        type: "update",
                        task: newTask,
                        userId: userId
                    })];
            case 4:
                _d.sent();
                res.status(200).send({ task: newTask, message: "updated" });
                return [3 /*break*/, 6];
            case 5:
                error_4 = _d.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.deleteTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId, userId, task, error_5;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                taskId = req.params.taskId;
                userId = req.user.userId;
                return [4 /*yield*/, taskModel_1["default"].findById({ _id: taskId })];
            case 1:
                task = _b.sent();
                if (((_a = task === null || task === void 0 ? void 0 : task.userId) === null || _a === void 0 ? void 0 : _a.toString()) !== userId) {
                    return [2 /*return*/, res.status(404).send("Task not found for userId: " + userId)];
                }
                return [4 /*yield*/, taskModel_1["default"].deleteOne({ _id: taskId })];
            case 2:
                _b.sent();
                return [4 /*yield*/, historyModel_1["default"].create({
                        type: "delete",
                        task: task,
                        userId: userId
                    })];
            case 3:
                _b.sent();
                res.status(201).send({ message: "deleted" });
                return [3 /*break*/, 5];
            case 4:
                error_5 = _b.sent();
                console.error(error_5);
                res.status(500).send({ error: error_5.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
