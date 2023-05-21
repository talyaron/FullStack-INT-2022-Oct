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
exports.getSum = exports.getAllOrders = exports.createOrder = void 0;
var productModel_1 = require("../Product/productModel");
var userModel_1 = require("../User/userModel");
var orderModel_1 = require("./orderModel");
var express_async_handler_1 = require("express-async-handler");
//-----Create order (By User)
exports.createOrder = express_async_handler_1["default"](function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, orderItems, shippingAddress, totalPrice, userFound, order, products;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, orderItems = _a.orderItems, shippingAddress = _a.shippingAddress, totalPrice = _a.totalPrice;
                return [4 /*yield*/, userModel_1["default"].findById(req.userAuth._id)];
            case 1:
                userFound = _b.sent();
                if (!userFound) {
                    throw new Error("You should login before placing the order");
                }
                //Check if the user has a shipping address:
                if (!userFound.hasShippingAddress) {
                    throw new Error("Please provide a shipping address");
                }
                //Check if the order is not empty:
                if (orderItems.length <= 0) {
                    throw new Error("There are no items in the shopping cart");
                }
                return [4 /*yield*/, orderModel_1["default"].create({
                        user: userFound._id,
                        orderItems: orderItems,
                        shippingAddress: userFound.shippingAddress,
                        totalPrice: totalPrice
                    })
                    //Updating the quantity of products:
                    /*
                        {_id:{$in:orderItems}}:
                        הפונקציה תבצע חיפוש של המוצרים הרלוונטיים לפי המספר המזהה
                        orderItems המוגדר בתוך
                    */
                ];
            case 2:
                order = _b.sent();
                return [4 /*yield*/, productModel_1["default"].find({ _id: { $in: orderItems } })
                    //map - עבור כל הפריטים שהוזמנו
                ];
            case 3:
                products = _b.sent();
                //map - עבור כל הפריטים שהוזמנו
                orderItems.map(function (order) { return __awaiter(void 0, void 0, void 0, function () {
                    var product;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                product = products.find(function (product) {
                                    /*
                                        השוואה בין מספר מזהה המוצר שנמצא בבסיס הנתונים
                                        לבין מספר מזהה המופיעה בהזמנה שהתקבלה
                                    */
                                    return product._id.toString() === order._id.toString();
                                });
                                if (product) {
                                    //עדכון מספר הפריטים שנמכרו במודל של המוצר בהתאם למספר הפריטים שנמכרו בהזמנה
                                    product.totalSold += order.quantity;
                                }
                                return [4 /*yield*/, product.save()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                //Push order into user:
                userFound.orders.push(order);
                return [4 /*yield*/, userFound.save()];
            case 4:
                _b.sent();
                res.status(201).json({
                    status: "success",
                    message: "The order has successfully created",
                    order: order
                });
                return [2 /*return*/];
        }
    });
}); });
//-------------------------------------------
//-----Get all orders (By Admin)
exports.getAllOrders = express_async_handler_1["default"](function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, orderModel_1["default"].find().populate("user")];
            case 1:
                orders = _a.sent();
                res.status(200).json({
                    status: "success",
                    message: "All the orders fetched succesfully",
                    orders: orders
                });
                return [2 /*return*/];
        }
    });
}); });
//-------------------------------------------
//-----Get sales sum of the orders (By Admin) - סיכום של הזמנות ומכירות
exports.getSum = express_async_handler_1["default"](function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, date, today, soldtoday;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, orderModel_1["default"].aggregate([
                    {
                        $group: {
                            _id: null,
                            minimumSale: {
                                $min: "$totalPrice"
                            },
                            maxSale: {
                                $max: "$totalPrice"
                            },
                            totalSales: {
                                $sum: "$totalPrice"
                            },
                            avgSale: {
                                $avg: "$totalPrice"
                            }
                        }
                    }
                ])];
            case 1:
                orders = _a.sent();
                date = new Date();
                today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                return [4 /*yield*/, orderModel_1["default"].aggregate([
                        {
                            $match: {
                                createdAt: {
                                    $gte: today
                                }
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                totalSales: {
                                    $sum: "$totalPrice"
                                }
                            }
                        },
                    ])];
            case 2:
                soldtoday = _a.sent();
                res.status(200).json({
                    status: "success",
                    orders: orders,
                    soldtoday: soldtoday
                });
                return [2 /*return*/];
        }
    });
}); });
//-------------------------------------------
