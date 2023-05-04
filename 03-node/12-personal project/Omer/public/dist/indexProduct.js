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
function addProducts(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, type, price, img, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    type = ev.target.elements.type.value;
                    price = ev.target.elements.price.value;
                    img = ev.target.elements.img.value;
                    return [4 /*yield*/, fetch("/api/product/add-product", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ name: name, type: type, price: price, img: img })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log("Success:", result);
                    ev.target.reset();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function showProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var respons, jsonDat, products, main, html, html, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/product/get-products")];
                case 1:
                    respons = _a.sent();
                    return [4 /*yield*/, respons.json()];
                case 2:
                    jsonDat = _a.sent();
                    products = jsonDat;
                    console.log(products);
                    main = document.getElementById("main");
                    if (!main)
                        throw new Error("No div found");
                    if (!products) {
                        html = "\n                <h2>No items in shop</h2>\n            ";
                        main.innerHTML = html;
                    }
                    else {
                        html = products.map(function (product) {
                            return "\n                    <img src=\"" + product.img + "\" alt=\"\">\n                    <h3>" + product.name + "</h3>\n                    <h4>" + product.price + "$</h4>\n                    <button onclick=\"addToWish('" + product._id + "')\">Add to cart</button>\n                ";
                        }).join(" ");
                        main.innerHTML = html;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function addToWish(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonData, user, userId, respons, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/user/getUser-for-logIn")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    user = jsonData;
                    userId = user._id;
                    return [4 /*yield*/, fetch("/api/product/add-to-wish", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ productId: productId, userId: userId })
                        })];
                case 3:
                    respons = _a.sent();
                    return [4 /*yield*/, respons.json()];
                case 4:
                    result = _a.sent();
                    console.log("Success:", result);
                    return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function showWish() {
    return __awaiter(this, void 0, void 0, function () {
        var display, respons, jsonDat, html, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    display = document.getElementById("wishMain");
                    if (!display)
                        throw new Error("No div found");
                    return [4 /*yield*/, fetch("api/product/get-user-wish")];
                case 1:
                    respons = _a.sent();
                    return [4 /*yield*/, respons.json()];
                case 2:
                    jsonDat = _a.sent();
                    console.log(jsonDat);
                    if (jsonDat) {
                        html = jsonDat.map(function (product) {
                            return "\n                    <img src=\"" + product.img + "\" alt=\"\">\n                    <h3>" + product.name + "</h3>\n                    <h4>" + product.price + "$</h4>\n                ";
                        }).join(" ");
                        display.innerHTML = html;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
