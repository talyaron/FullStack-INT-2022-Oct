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
exports.deleteUserProducts = exports.getUserProducts = exports.addUserProduct = void 0;
var productModel_1 = require("../product/productModel");
var user_productModel_1 = require("./user-productModel");
var secret = process.env.SECRET_TOKEN;
var jwt_simple_1 = require("jwt-simple");
exports.addUserProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, userId, productId, product, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userName = _a.userName, userId = _a.userId, productId = _a.productId;
                return [4 /*yield*/, productModel_1["default"].findById(productId)];
            case 1:
                product = _b.sent();
                if (!product)
                    throw new Error("No product found");
                return [4 /*yield*/, user_productModel_1["default"].create({ userName: userName, userId: userId, product: product, productId: productId })];
            case 2:
                _b.sent();
                res.status(201).send(true);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUserProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, decoded, products_1, pros, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.cookies.userId;
                if (!secret)
                    throw new Error("No token found");
                decoded = jwt_simple_1["default"].decode(userId, secret);
                products_1 = [];
                return [4 /*yield*/, user_productModel_1["default"].find({ userId: decoded })];
            case 1:
                pros = _a.sent();
                pros.forEach(function (userPro) {
                    products_1.push(userPro.product);
                });
                res.status(201).send(products_1);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).send(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUserProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, productId, decoded, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.cookies.userId;
                productId = req.body.productId;
                if (!secret)
                    throw new Error("No token found");
                decoded = jwt_simple_1["default"].decode(userId, secret);
                return [4 /*yield*/, user_productModel_1["default"].deleteOne({ userId: decoded, productId: productId })];
            case 1:
                _a.sent();
                res.status(200).send(true);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
