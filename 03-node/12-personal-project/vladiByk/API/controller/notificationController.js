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
exports.createNotification = exports.getAllNotifications = void 0;
const notificationModel_1 = __importDefault(require("../model/notificationModel"));
const UserModel_1 = __importDefault(require("../model/UserModel"));
const secret = process.env.JWT_SECRET;
const getAllNotifications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notifications = yield notificationModel_1.default.find({});
        res.status(200).json({ notifications });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllNotifications = getAllNotifications;
const createNotification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message, userId } = req.body;
        const notification = yield notificationModel_1.default.create({ message });
        yield UserModel_1.default.findByIdAndUpdate(userId, {
            $push: { notifications: notification._id },
        });
        res.status(200).send({ success: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createNotification = createNotification;
