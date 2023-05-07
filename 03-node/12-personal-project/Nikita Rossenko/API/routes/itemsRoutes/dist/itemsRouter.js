"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var itemsController_1 = require("../../controller/itemsController/itemsController");
router
    .post("/add-starship", itemsController_1.addStarship)
    .get("/get-starship", itemsController_1.getStarships);
exports["default"] = router;
