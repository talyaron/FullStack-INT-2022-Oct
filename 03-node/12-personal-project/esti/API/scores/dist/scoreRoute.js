"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var ScoreControl_1 = require("./ScoreControl");
router
    .post("/add-Score", ScoreControl_1.addScore)
    .put("/update-Score", ScoreControl_1.updateScore)
    .get("/get-Scores", ScoreControl_1.getScores);
exports["default"] = router;
