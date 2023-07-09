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
exports.register = exports.login = void 0;
var userModel_1 = require("../user/userModel");
var jwt_simple_1 = require("jwt-simple");
var bcryptjs_1 = require("bcryptjs");
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, isCorrectPassword, secret, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, userModel_1["default"].findOne({ username: username })];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new Error("Username or password are incorrect");
                isCorrectPassword = bcryptjs_1["default"].compareSync(password, user.password);
                console.log(password, user.password, isCorrectPassword);
                if (!isCorrectPassword)
                    throw new Error("Username or password are incorrect");
                secret = process.env.JWT_SECRET;
                if (!secret)
                    throw new Error("Missing jwt secret");
                token = jwt_simple_1["default"].encode({ userId: user._id, username: user.username }, secret);
                res.cookie("user", token, { maxAge: 50000000, httpOnly: true });
                res.status(200).send({ ok: true, message: "connected" });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _b.sent();
                res.status(500).send({ err: err_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, salt, hashPassword, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, username = _a.username, password = _a.password;
                salt = bcryptjs_1["default"].genSaltSync(10);
                hashPassword = bcryptjs_1["default"].hashSync(password, salt);
                console.log({ password: password, salt: salt, hashPassword: hashPassword });
                return [4 /*yield*/, userModel_1["default"].create({ username: username, password: hashPassword })];
            case 1:
                newUser = _b.sent();
                res.status(201).send({ user: newUser });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
