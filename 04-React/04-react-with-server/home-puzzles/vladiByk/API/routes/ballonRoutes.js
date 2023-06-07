"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ballonRouter = void 0;
const express_1 = __importDefault(require("express"));
const ballonRouter = express_1.default.Router();
exports.ballonRouter = ballonRouter;
const ballonController_1 = require("../controller/ballonController");
ballonRouter.route("/").get(ballonController_1.getAllBallons).post(ballonController_1.createBallon);
ballonRouter.route("/deleteAll").delete(ballonController_1.deleteAll);
ballonRouter.route("/:id").delete(ballonController_1.deleteBallon);
