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
exports.getOrderById = exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrders = void 0;
var orderModel_1 = require("./orderModel");
var productsModel_1 = require("../products/productsModel");
var usersModel_1 = require("../users/usersModel");
exports.getOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel_1["default"].find({})];
            case 1:
                orders = _a.sent();
                res.send({ orders: orders });
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
exports.createOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, productId, quantity, user, product, orderDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, userId = _a.userId, productId = _a.productId, quantity = _a.quantity;
                return [4 /*yield*/, usersModel_1["default"].findById(userId)];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new Error("User not found");
                return [4 /*yield*/, productsModel_1["default"].findById(productId)];
            case 2:
                product = _b.sent();
                if (!product)
                    throw new Error("Product not found");
                return [4 /*yield*/, orderModel_1["default"].create({
                        userId: userId,
                        productId: productId,
                        quantity: quantity
                    })];
            case 3:
                orderDB = _b.sent();
                res.status(201).send({ order: orderDB });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, orderId, quantity, orderDB, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, orderId = _a.orderId, quantity = _a.quantity;
                return [4 /*yield*/, orderModel_1["default"].findOneAndUpdate({ _id: orderId }, { quantity: quantity }, { "new": true })];
            case 1:
                orderDB = _b.sent();
                if (!orderDB)
                    throw new Error("Could not find order");
                res.send({ order: orderDB });
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
exports.deleteOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderId, orderDB, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orderId = req.body.orderId;
                return [4 /*yield*/, orderModel_1["default"].findOneAndDelete({ _id: orderId })];
            case 1:
                orderDB = _a.sent();
                if (!orderDB)
                    throw new Error("Could not find order");
                res.send({ order: orderDB });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOrderById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderId, orderDB, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orderId = req.body.orderId;
                return [4 /*yield*/, orderModel_1["default"].findById({ _id: orderId })];
            case 1:
                orderDB = _a.sent();
                if (!orderDB)
                    throw new Error('Order not found');
                res.send({ order: orderDB });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                res.status(500).send({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
