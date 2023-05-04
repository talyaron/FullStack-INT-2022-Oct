"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRouter = void 0;
const express_1 = __importDefault(require("express"));
const listRouter = express_1.default.Router();
exports.listRouter = listRouter;
const listController_1 = require("../controller/listController");
listRouter.route("/").get(listController_1.getAllLists).post(listController_1.createList);
listRouter
    .route("/:id")
    // .get(getBoardLists)
    .patch(listController_1.updateList)
    .delete(listController_1.deleteList);
