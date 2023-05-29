"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.logout = exports.loggedIn = exports.login = void 0;
var userModel_1 = require("../../models/userModel");
var dotenv = require("dotenv");
dotenv.config();
var jwt_simple_1 = require("jwt-simple");
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var loginCookieName, jwtSecret, _a, username, password, existingUser, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                loginCookieName = process.env.LOGIN_COOKIE_NAME;
                jwtSecret = process.env.JWT_SECRET;
                _a = req.body, username = _a.username, password = _a.password;
                if (!username || !password)
                    throw new Error("Missing username or password");
                return [4 /*yield*/, userModel_1.UserModel.findOne({ username: username, password: password })];
            case 1:
                existingUser = _b.sent();
                if (!jwtSecret)
                    throw new Error("Server Error!");
                if (!existingUser)
                    throw new Error("User dosen't exist!");
                token = jwt_simple_1["default"].encode(existingUser._id, jwtSecret);
                console.log("User", username, "exist, creating cookie!");
                res.cookie(loginCookieName, token, { maxAge: 60000000, httpOnly: true });
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.log(error_1);
                res.status(500).send({ ok: false, error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.loggedIn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var jwtSecret, isLoggedIn, userId, existingUser, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                jwtSecret = process.env.JWT_SECRET;
                isLoggedIn = req.cookies.isLoggedIn;
                if (!jwtSecret)
                    throw new Error("Cookie Error!");
                if (!isLoggedIn) return [3 /*break*/, 2];
                userId = jwt_simple_1["default"].decode(isLoggedIn, jwtSecret);
                return [4 /*yield*/, userModel_1.UserModel.findById(userId)];
            case 1:
                existingUser = _a.sent();
                if (!existingUser)
                    throw new Error("Couldn't find user!");
                res.status(200).send({ ok: true, user: existingUser.username });
                return [3 /*break*/, 3];
            case 2:
                res.send({ ok: false });
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                res.status(500).send({ ok: false, error: error_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var jwtSecret, isLoggedIn, loginCookieName;
    return __generator(this, function (_a) {
        try {
            jwtSecret = process.env.JWT_SECRET;
            isLoggedIn = req.cookies.isLoggedIn;
            if (!jwtSecret)
                throw new Error("Cookie Error!");
            if (isLoggedIn) {
                loginCookieName = process.env.LOGIN_COOKIE_NAME;
                res.cookie(loginCookieName, "deleted", { maxAge: 1, httpOnly: true });
                res.status(200).send({ ok: true });
            }
            else {
                res.send({ ok: false });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).send({ ok: false, error: error.message });
        }
        return [2 /*return*/];
    });
}); };
