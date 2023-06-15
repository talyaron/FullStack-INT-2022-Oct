"use strict";
exports.__esModule = true;
exports.listRouter = void 0;
var express_1 = require("express");
var listRouter = express_1["default"].Router();
exports.listRouter = listRouter;
var listController_1 = require("../controller/listController");
//יש כאן הכרזה כפולה ומיותרת
listRouter.route("/").get(listController_1.getAllLists).post(listController_1.createList);
listRouter
    .route("/:id")
    .get(listController_1.getBoardLists)
    .patch(listController_1.updateList)["delete"](listController_1.deleteList);
