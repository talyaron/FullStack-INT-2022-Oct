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
exports.deleteItemFromCart = exports.getCartItems = exports.addItemToCart = void 0;
var jwt_simple_1 = require("jwt-simple");
var cartModel_1 = require("../../models/cartModel");
var starshipModel_1 = require("../../models/starshipModel");
exports.addItemToCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, isLoggedIn, jwtSecret, userId, existingItemCart, starship, createdCart, quantity, addingItem, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                itemId = req.body.itemId;
                isLoggedIn = req.cookies.isLoggedIn;
                jwtSecret = process.env.JWT_SECRET;
                if (!jwtSecret)
                    throw new Error("Server Error!");
                userId = jwt_simple_1["default"].decode(isLoggedIn, jwtSecret);
                if (!userId)
                    throw new Error("Couldn't find user!");
                return [4 /*yield*/, cartModel_1.CartModel.findOne({ "product._id": itemId, "cart.user": userId })];
            case 1:
                existingItemCart = _a.sent();
                if (!!existingItemCart) return [3 /*break*/, 4];
                return [4 /*yield*/, starshipModel_1["default"].findOne({ _id: itemId })];
            case 2:
                starship = _a.sent();
                return [4 /*yield*/, cartModel_1.CartModel.create({ product: starship, "cart.user": userId })];
            case 3:
                createdCart = _a.sent();
                if (!createdCart)
                    throw new Error("Coudnl't create cart!");
                return [3 /*break*/, 6];
            case 4:
                quantity = existingItemCart.quantity;
                return [4 /*yield*/, cartModel_1.CartModel.findOneAndUpdate({ "cart.user": userId, "product._id": itemId }, { quantity: quantity + 1 })];
            case 5:
                addingItem = _a.sent();
                _a.label = 6;
            case 6:
                res.status(201).send({ ok: true });
                return [3 /*break*/, 8];
            case 7:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).send({ ok: false, error: error_1.message });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.getCartItems = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var isLoggedIn, jwtSecret, userId, cartItemsArray, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                isLoggedIn = req.cookies.isLoggedIn;
                jwtSecret = process.env.JWT_SECRET;
                if (!jwtSecret)
                    throw new Error("Server Error!");
                userId = jwt_simple_1["default"].decode(isLoggedIn, jwtSecret);
                if (!userId)
                    throw new Error("Couldn't find user!");
                return [4 /*yield*/, cartModel_1.CartModel.find({ "cart.user": userId })];
            case 1:
                cartItemsArray = _a.sent();
                res.status(201).send({ ok: true, cartItemsArray: cartItemsArray });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                res.status(500).send({ ok: false, error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteItemFromCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var isLoggedIn, cartItemId, jwtSecret, userId, cartItemsArray, deleteCartItemsArray, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                isLoggedIn = req.cookies.isLoggedIn;
                cartItemId = req.body._id;
                jwtSecret = process.env.JWT_SECRET;
                if (!jwtSecret)
                    throw new Error("Server Error!");
                userId = jwt_simple_1["default"].decode(isLoggedIn, jwtSecret);
                if (!userId)
                    throw new Error("Couldn't find user!");
                return [4 /*yield*/, cartModel_1.CartModel.findOne({ "cart.user": userId, _id: cartItemId })];
            case 1:
                cartItemsArray = _a.sent();
                if (!cartItemsArray)
                    throw new Error("Item Error!");
                return [4 /*yield*/, cartModel_1.CartModel.deleteOne({ "cart.user": userId, _id: cartItemId })];
            case 2:
                deleteCartItemsArray = _a.sent();
                res.status(201).send({ ok: true, cartItemsArray: cartItemsArray });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(500).send({ ok: false, error: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
