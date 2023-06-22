"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var scoreControl_1 = require("./scoreControl");
router
    .post("/add-Score", scoreControl_1.addScore)
    .put("/update-Score", scoreControl_1.updateScore)
    .get("/get-Scores", scoreControl_1.getScores);
exports["default"] = router;
