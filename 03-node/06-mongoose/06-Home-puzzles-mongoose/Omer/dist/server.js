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
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var app = express_1["default"]();
var PORT = 3000;
var uri = process.env.MONGOOSE_URI;
var Schema = mongoose_1["default"].Schema;
try {
    if (!uri)
        throw new Error("uri not defined");
    mongoose_1["default"].connect(uri).then(function () {
        console.log('Data base connected');
    })["catch"](function (error) {
        console.error(error);
    });
}
catch (error) {
    console.error(error);
}
var UserSchema = new Schema({
    name: String,
    email: String
});
var UserModel = mongoose_1["default"].model('Users', UserSchema);
app.use(express_1["default"].static('./public'));
app.use(express_1["default"].json());
app.post("/api-add-user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, user, allUsers, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name = _a.name, email = _a.email;
                console.log(name + " " + email);
                return [4 /*yield*/, UserModel.create({ name: name, email: email })];
            case 1:
                user = _b.sent();
                console.log(user);
                return [4 /*yield*/, UserModel.find({})];
            case 2:
                allUsers = _b.sent();
                res.status(201).send(allUsers);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/api-get-users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.find({})];
            case 1:
                allUsers = _a.sent();
                // console.log(allUsers);
                res.status(200).send(allUsers);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/api-delete", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, deleteUser, allUsers, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body;
                return [4 /*yield*/, UserModel.deleteOne({ _id: _id })];
            case 1:
                deleteUser = _a.sent();
                return [4 /*yield*/, UserModel.find({})];
            case 2:
                allUsers = _a.sent();
                res.status(200).send(allUsers);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.patch("/api-update", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, _id, user, allUsers, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                console.log("SUCCESSSSS");
                _a = req.body, name = _a.name, email = _a.email, _id = _a._id;
                return [4 /*yield*/, UserModel.findById(_id)];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new Error("user not found");
                user.name = name;
                user.email = email;
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                return [4 /*yield*/, UserModel.find({})];
            case 3:
                allUsers = _b.sent();
                res.status(200).send(allUsers);
                return [3 /*break*/, 5];
            case 4:
                error_4 = _b.sent();
                console.error(error_4);
                res.status(500).send(error_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, function () { return console.log("server is listening on port " + PORT); });