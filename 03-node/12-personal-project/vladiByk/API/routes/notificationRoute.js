"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRouter = void 0;
const express_1 = __importDefault(require("express"));
const notificationRouter = express_1.default.Router();
exports.notificationRouter = notificationRouter;
const notificationController_1 = require("../controller/notificationController");
notificationRouter.route("/").get(notificationController_1.getAllNotifications).post(notificationController_1.createNotification);
notificationRouter.route("/:id");
