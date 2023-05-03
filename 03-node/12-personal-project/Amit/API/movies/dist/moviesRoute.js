"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var moviesControl_1 = require("./moviesControl");
router
    .get("/get-one-movie", moviesControl_1.getOneMovie)
    .get("/get-movies", moviesControl_1.getMovies)
    .post("/enter-movie", moviesControl_1.enterMovie);
exports["default"] = router;
