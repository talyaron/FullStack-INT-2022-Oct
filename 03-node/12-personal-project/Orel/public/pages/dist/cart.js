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
exports.getCartDetails = void 0;
function getCartDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var cartRoot, sumPriceResult, dataJs, data_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    cartRoot = document.querySelector('.cart__details-container__lists');
                    sumPriceResult = document.querySelectorAll('.sumPriceResult');
                    if (!sumPriceResult)
                        throw new Error('no SumPriceResult elements');
                    return [4 /*yield*/, fetch('/api/users/get-cart-user')];
                case 1:
                    dataJs = _a.sent();
                    if (!dataJs)
                        throw new Error('no found dataJs');
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data_1 = _a.sent();
                    if (data_1.cart.length !== 0)
                        cartRoot.innerHTML = renderCartProducts(data_1.cart);
                    sumPriceResult.forEach(function (e) {
                        var element = e;
                        element.innerHTML = calTotalPrice(data_1.cart);
                    });
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
exports.getCartDetails = getCartDetails;
function renderCartProducts(data) {
    try {
        var html = data.map(function (product) {
            return "\n        <li class=\"cart__details-container__link\">\n        <div>\n            <h4>Name: </h4><span id=\"cartItemName\">" + product.product.name + "</span>\n        </div>\n        <div>\n            <h4>Detail: </h4><span id=\"cartItemDetail\">" + product.product.detail + "</span>\n        </div>\n        <div>\n            <h4>Size: </h4><span id=\"cartItemSize\">" + product.size + " Europe</span>\n        </div>\n        <div>\n            <h4>Price: </h4><span id=\"cartItemPrice\">" + product.product.price + "$</span>\n        </div>\n        <div class=\"container-edit-product-cart\">\n            <button>      <i class=\"fa-solid fa-trash-can\" onclick=\"handleClickRemoveFromTheCart('" + product._id + "')\"></i></button>\n        </div>\n    </li>\n        ";
        }).join('');
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function calTotalPrice(data) {
    try {
        var totalPrice = data.reduce(function (acc, product) { return acc + product.product.price; }, 0);
        console.log(totalPrice);
        return totalPrice.toString();
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function handleClickRemoveFromTheCart(uid) {
    return __awaiter(this, void 0, void 0, function () {
        var dataJs, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!confirm("Are You Sure?")) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch('/api/users//delete-product-from-cart', {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ uid: uid })
                        }).then(function (data) { return console.log(data); })["catch"](function (err) { return console.error(err); })];
                case 1:
                    dataJs = _a.sent();
                    alert("DELETE SUCCEED");
                    location.reload();
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
