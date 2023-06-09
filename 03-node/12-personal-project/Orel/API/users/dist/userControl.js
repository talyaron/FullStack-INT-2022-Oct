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
exports.logout = exports.login = exports.getUser = exports.changeNameUser = exports.createUser = exports.getUsers = exports.createCartList = exports.deleteProductFromCart = exports.getCartUser = void 0;
var productsModel_1 = require("../products/productsModel");
var userModel_1 = require("./userModel");
var userModel_2 = require("./userModel");
var jwt_simple_1 = require("jwt-simple");
var secret = "a45das64d65asd4";
exports.getCartUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, decodedUserID, getCart, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies.user;
                if (!user)
                    throw new Error("no user Cookie");
                if (!secret)
                    throw new Error("No secret");
                decodedUserID = jwt_simple_1["default"].decode(user, secret);
                if (!decodedUserID)
                    throw new Error("no found cookie");
                console.log(decodedUserID);
                return [4 /*yield*/, userModel_1.UsersProductModel.find({ 'user._id': decodedUserID })];
            case 1:
                getCart = _a.sent();
                if (!getCart)
                    return [2 /*return*/, res.status(401).send("not founded")];
                res.status(201).send({ ok: true, cart: getCart });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(501).send({ ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteProductFromCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, deleteProduct, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                uid = req.body.uid;
                if (!uid)
                    throw new Error("no user Cookie");
                return [4 /*yield*/, userModel_1.UsersProductModel.findByIdAndDelete(uid)];
            case 1:
                deleteProduct = _a.sent();
                if (!deleteProduct)
                    throw new Error("no product founded");
                console.log("DELETE SUCCEED");
                res.status(201).send({ ok: true, product: deleteProduct });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send({ ok: false });
                console.error(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createCartList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, decodedUserID, _a, productId, size, getUser_1, getProduct, newProductCart, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                user = req.cookies.user;
                if (!user)
                    throw new Error("no user Cookie");
                if (!secret)
                    throw new Error("No secret");
                decodedUserID = jwt_simple_1["default"].decode(user, secret);
                if (!decodedUserID)
                    throw new Error("no found user Cookie");
                _a = req.body, productId = _a.productId, size = _a.size;
                return [4 /*yield*/, userModel_2["default"].findById(decodedUserID)];
            case 1:
                getUser_1 = _b.sent();
                if (!getUser_1)
                    throw new Error("no user");
                return [4 /*yield*/, productsModel_1["default"].findById(productId)];
            case 2:
                getProduct = _b.sent();
                if (!getProduct)
                    throw new Error("no product");
                return [4 /*yield*/, userModel_1.UsersProductModel.create({ user: getUser_1, product: getProduct, size: size })];
            case 3:
                newProductCart = _b.sent();
                res.status(201).send({ ok: true, productCart: newProductCart });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                console.error(error_3);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_2["default"].find({})];
            case 1:
                users = _a.sent();
                if (!users)
                    throw new Error("not founded users db");
                res.status(201).send({ ok: true, users: users });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, users, userID, token, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                if (!name)
                    throw new Error("not found name");
                if (!email)
                    throw new Error("not found email");
                if (!password)
                    throw new Error("not found password");
                return [4 /*yield*/, userModel_2["default"].create({ name: name, email: email, password: password })];
            case 1:
                users = _b.sent();
                return [4 /*yield*/, users];
            case 2:
                userID = (_b.sent())._id;
                if (!secret)
                    throw new Error("no found secret");
                token = jwt_simple_1["default"].encode(userID, secret);
                res.cookie("user", token, { maxAge: 900000, httpOnly: true });
                res.status(201).send({ ok: true, users: users });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _b.sent();
                console.error(error_5);
                res.status(500).send({ ok: false });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.changeNameUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, userId, user;
    return __generator(this, function (_b) {
        try {
            _a = req.body, name = _a.name, userId = _a.userId;
            if (!name)
                throw new Error("no found name");
            if (!userId)
                throw new Error("no found user Id");
            user = userModel_2["default"].findById(userId);
            if (!user)
                throw new Error("not founded users db");
            console.log(user);
            res.status(201).send({ ok: true, users: user });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ ok: false });
        }
        return [2 /*return*/];
    });
}); };
exports.getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, decodedUserID, userDB, userInfo, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies.user;
                if (!user)
                    throw new Error("no user Cookie");
                if (!secret)
                    throw new Error("No secret");
                decodedUserID = jwt_simple_1["default"].decode(user, secret);
                return [4 /*yield*/, userModel_2["default"].findById(decodedUserID)];
            case 1:
                userDB = _a.sent();
                userInfo = { name: userDB.name, email: userDB.email, src: userDB === null || userDB === void 0 ? void 0 : userDB.userType };
                res.send(JSON.stringify(userInfo));
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
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, findUser, token, error_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email)
                    throw new Error("no email");
                if (!password)
                    throw new Error("no password");
                console.log(email, password);
                return [4 /*yield*/, userModel_2["default"].findOne({ email: email, password: password })];
            case 1:
                findUser = _b.sent();
                console.log(findUser);
                if (!findUser)
                    throw new Error("The password and email do not match ");
                if (findUser.email === email && findUser.password === password) {
                    if (!secret)
                        throw new Error("no found secret");
                    token = jwt_simple_1["default"].encode(findUser._id, secret);
                    res.cookie("user", token, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true });
                    res.status(201).send({ ok: true });
                }
                return [3 /*break*/, 3];
            case 2:
                error_7 = _b.sent();
                console.error(error_7);
                res.status(500).send({ error: error_7.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            res.clearCookie("user");
            res.send({ logout: true });
        }
        catch (error) {
            console.error(error);
        }
        return [2 /*return*/];
    });
}); };
