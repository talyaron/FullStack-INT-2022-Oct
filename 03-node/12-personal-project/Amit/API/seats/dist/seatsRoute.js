"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var seatsControl_1 = require("./seatsControl");
router
    .get("/get-seats", seatsControl_1.getSeats)
    .post("/pick-one-seat", seatsControl_1.pickOneSeat)
    .get("/get-picked-seats", seatsControl_1.getPickedSeats)
    .post("/get-movie-seats", seatsControl_1.getMovieSeats);
exports["default"] = router;
