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
// const PORT = 3000;
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
//schema
var UserSchema = new mongoose_1.Schema({
    name: String,
    src: String
});
var UserModel = mongoose_1["default"].model("users", UserSchema);
//to be able to get data from client add this line
app.use(express_1["default"].json());
//connect to DB;
var users = [
    { name: "joke",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iFZSv4HuC6P5wuSSKHbQUVQK8B4dGLBDPg&usqp=CAU" },
];
//data route
//get (from server)
app.get("/api/get-users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.find({})];
            case 1:
                users_1 = _a.sent();
                res.send({ users: users_1 });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//add
app.post("/api/add-user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, src, userDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, src = _a.src;
                console.log(name, src);
                return [4 /*yield*/, UserModel.create({ name: name, src: src })];
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
}); });
//update
//update whole entity
app.put("/api/update-user", function (req, res) {
    try {
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
// transodrm enetiy
app.patch("/api/update-user-name", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, src, updateuserDB, users_2, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name = _a.name, src = _a.src;
                console.log(name, src);
                return [4 /*yield*/, UserModel.updateOne({ name: name, src: src })];
            case 1:
                updateuserDB = _b.sent();
                return [4 /*yield*/, UserModel.find({})];
            case 2:
                users_2 = _b.sent();
                res.send({ ok: true });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/api/delete-user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, deltedUser, users_3, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body._id;
                return [4 /*yield*/, UserModel.deleteOne({ _id: _id })];
            case 1:
                deltedUser = _a.sent();
                return [4 /*yield*/, UserModel.find({})];
            case 2:
                users_3 = _a.sent();
                res.send({ ok: true, users: users_3 });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//static file
app.use(express_1["default"].static("./client"));
app.listen(3002, function () {
    console.log("server listen on port 3002");
});
