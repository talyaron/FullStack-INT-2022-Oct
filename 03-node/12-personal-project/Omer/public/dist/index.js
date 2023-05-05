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
function showPassword() {
    var checkbox = document.getElementById("checkbox");
    var password = document.getElementById("password");
    if (checkbox.checked) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}
function signUp(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, password, role, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    password = ev.target.elements.password.value;
                    role = ev.target.elements.role.value;
                    return [4 /*yield*/, fetch("/api/user/add-user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ name: name, password: password, role: role })
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
function logIn(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, password, response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    password = ev.target.elements.password.value;
                    return [4 /*yield*/, fetch("/api/user/log-in", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ name: name, password: password })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log("Success:", result);
                    if (!result) {
                        alert("Name or password are inccorect");
                    }
                    else if (result.role == "Admin") {
                        window.location.href = "./product.html";
                    }
                    else {
                        window.location.href = "./store.html";
                    }
                    ev.target.reset();
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
function welcome() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonData, user, display, html, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/user/user-from-cookie")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    user = jsonData;
                    display = document.getElementById("name");
                    if (!display)
                        throw new Error("No div found");
                    html = "\n            <h2>Welcome " + user.name + "</h2>\n        ";
                    display.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function addProduct(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, type, price, img, response, result, error_4;
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
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonData, products, display, html, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/product/get-products")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    products = jsonData;
                    display = document.getElementById("allProducts");
                    if (!display)
                        throw new Error("No div found");
                    html = products.map(function (pro) {
                        return "\n                <div class=\"card\">\n                    <img src=\"" + pro.img + "\" alt=\"" + pro.type + "\">\n                    <h3>" + pro.name + "</h3>\n                    <h4>" + pro.price + "$</h4>\n                </div>\n            ";
                    }).join(" ");
                    display.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderProductsForCustomers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonData, products, display, html, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/product/get-products")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    products = jsonData;
                    display = document.getElementById("allProducts");
                    if (!display)
                        throw new Error("No div found");
                    html = products.map(function (pro) {
                        return "\n                <div class=\"card\">\n                    <img src=\"" + pro.img + "\" alt=\"" + pro.type + "\">\n                    <h3>" + pro.name + "</h3>\n                    <h4>" + pro.price + "$</h4>\n                    <button onclick=\"addProductToCustomer('" + pro._id + "')\">Add</button>\n                </div>\n            ";
                    }).join(" ");
                    display.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function addProductToCustomer(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonData, user, userId, userName, response1, result, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/api/user/user-from-cookie")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    user = jsonData;
                    userId = user._id;
                    userName = user.name;
                    return [4 /*yield*/, fetch("/api/user-product/add-user-product", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ userName: userName, userId: userId, productId: productId })
                        })];
                case 3:
                    response1 = _a.sent();
                    return [4 /*yield*/, response1.json()];
                case 4:
                    result = _a.sent();
                    console.log("Success:", result);
                    if (!result) {
                        alert("Item has already been added");
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function renderWish() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonData, products, display, html, html, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/user-product/get-user-product")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    console.log(jsonData);
                    products = jsonData;
                    display = document.getElementById("wishMain");
                    if (!display)
                        throw new Error("No div found");
                    if (products) {
                        html = products.map(function (pro) {
                            return "\n                    <div class=\"card\">\n                        <img src=\"" + pro.img + "\" alt=\"" + pro.type + "\">\n                        <h3>" + pro.name + "</h3>\n                        <h4>" + pro.price + "$</h4>\n                        <button onclick=\"deleteProductToCustomer('" + pro._id + "')\">Delete</button>\n                    </div>\n                ";
                        }).join(" ");
                        display.innerHTML = html;
                    }
                    else {
                        html = "<h2>No items added</h2>";
                        display.innerHTML = html;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteProductToCustomer(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/user-product/delete-user-product", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ productId: productId })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log("Success:", result);
                    renderWish();
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
