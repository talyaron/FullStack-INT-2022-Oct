"use strict";
exports.__esModule = true;
var express_1 = require("express");
var balloonsControl_1 = require("./balloonsControl");
var BalloonsRouter = express_1.Router();
BalloonsRouter
    .get('/get-balloons', balloonsControl_1.getBalloons)
    .post('/create-balloon', balloonsControl_1.createBalloon)
    .post('/get-score-by-id-and-update-by-one', balloonsControl_1.getScoreByIdAndUpdateByOne)
    .get('/reset-scores', balloonsControl_1.resetScores);
exports["default"] = BalloonsRouter;
