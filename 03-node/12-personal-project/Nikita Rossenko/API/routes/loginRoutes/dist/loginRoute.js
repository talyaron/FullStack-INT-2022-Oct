"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var loginController_1 = require("../../controller/loginController/loginController");
router
    .post("/login", loginController_1.login)
    .get("/check-logged-in", loginController_1.loggedIn)
    .get("/logout", loginController_1.logout);
exports["default"] = router;
