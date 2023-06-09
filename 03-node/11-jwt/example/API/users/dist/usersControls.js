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
exports.getUser = exports.updateUserType = exports.deleteUser = exports.updateUserName = exports.updateUser = exports.login = exports.addUser = exports.getUsers = void 0;
var usersModel_1 = require("./usersModel");
var jwt_simple_1 = require("jwt-simple");
var secret = process.env.JWT_SECRET;
exports.getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, usersModel_1["default"].find({})];
            case 1:
                users = _a.sent();
                res.send({ users: users });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, userDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, password = _a.password;
                console.log(name, password);
                return [4 /*yield*/, usersModel_1["default"].create({ name: name, password: password })];
            case 1:
                userDB = _b.sent();
                console.log(userDB);
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, userDB, token, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, password = _a.password;
                console.log(name, password);
                return [4 /*yield*/, usersModel_1["default"].findOne({ name: name, password: password })];
            case 1:
                userDB = _b.sent();
                if (!userDB)
                    throw new Error("Username or password are inncorect");
                if (!secret)
                    throw new Error("Missing jwt secret");
                token = jwt_simple_1["default"].encode({ userId: userDB._id, role: "public" }, secret);
                console.log(token);
                res.cookie("user", token, { maxAge: 50000000, httpOnly: true });
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = function (req, res) {
    try {
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};
exports.updateUserName = function (req, res) {
    try {
        // const { name, uid } = req.body;
        // if (!name) throw new Error("No name in data");
        // if (!uid) throw new Error("No uid in data");
        // const user = users.find((user) => user.uid === uid);
        // if (!user) throw new Error("No user in array");
        // user.name = name;
        // res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};
exports.deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, deleteUser_1, users, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body._id;
                return [4 /*yield*/, usersModel_1["default"].deleteOne({ _id: _id })];
            case 1:
                deleteUser_1 = _a.sent();
                return [4 /*yield*/, usersModel_1["default"].find({})];
            case 2:
                users = _a.sent();
                res.send({ ok: true, users: users });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateUserType = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, userType, userDB, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, userId = _a.userId, userType = _a.userType;
                return [4 /*yield*/, usersModel_1["default"].findOneAndUpdate({ _id: userId }, { userType: userType })];
            case 1:
                userDB = _b.sent();
                res.send({ ok: true, userDB: userDB });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                console.error(error_5);
                res.status(500).send({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, decoded, userId, role, userDB, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies.user;
                console.log(user);
                if (!secret)
                    throw new Error("No secret");
                decoded = jwt_simple_1["default"].decode(user, secret);
                console.log(decoded);
                userId = decoded.userId, role = decoded.role;
                if (role === 'admin')
                    console.log("Give all avilable data");
                return [4 /*yield*/, usersModel_1["default"].findById(userId)];
            case 1:
                userDB = _a.sent();
                res.send({ ok: true, user: userDB });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.error(error_6);
                res.status(500).send({ error: error_6.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
