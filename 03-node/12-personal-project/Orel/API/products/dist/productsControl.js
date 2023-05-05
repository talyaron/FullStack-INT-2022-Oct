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
exports.updateProducts = exports.removeProducts = exports.addProducts = exports.getProduct = exports.getProducts = void 0;
var productsModel_1 = require("./productsModel");
exports.getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, productsModel_1["default"].find({})];
            case 1:
                products = _a.sent();
                if (!products)
                    throw new Error("no found product in DB");
                res.status(201).send({ ok: true, products: products });
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
exports.getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, product;
    return __generator(this, function (_a) {
        try {
            uid = req.body.uid;
            if (!uid)
                throw new Error("no Found uId");
            product = productsModel_1["default"].findById(uid);
            if (!product)
                throw new Error("no found product DB");
            res.status(201).send({ ok: true, product: product });
        }
        catch (error) {
            console.error(error);
        }
        return [2 /*return*/];
    });
}); };
exports.addProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, src, name, detail, price, newProduct;
    return __generator(this, function (_b) {
        try {
            _a = req.body, src = _a.src, name = _a.name, detail = _a.detail, price = _a.price;
            if (!name)
                throw new Error("no name");
            if (!src)
                throw new Error("no src");
            if (!detail)
                throw new Error("no detail");
            if (!price)
                throw new Error("no price");
            console.log(src);
            newProduct = productsModel_1["default"].create({ src: src, name: name, detail: detail, price: Number(price) });
            res.status(201).send({ ok: true, product: newProduct });
        }
        catch (error) {
            console.error(error);
            res.status(501).send({ ok: false });
        }
        return [2 /*return*/];
    });
}); };
exports.removeProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, deleteProduct, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.body;
                if (!_id)
                    throw new Error("no uid");
                return [4 /*yield*/, productsModel_1["default"].findByIdAndDelete(_id.__id)];
            case 1:
                deleteProduct = _a.sent();
                if (!deleteProduct)
                    throw new Error("no found product");
                console.log(deleteProduct);
                res.status(201).send({ ok: true, product: deleteProduct });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(501).send({ ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, _a, pName, pDetail, pPrice, updateProduct, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _id = req.body;
                _a = req.body, pName = _a.pName, pDetail = _a.pDetail, pPrice = _a.pPrice;
                if (!_id)
                    throw new Error("no uid");
                return [4 /*yield*/, productsModel_1["default"].findByIdAndUpdate(_id.__id, { name: pName, detail: pDetail, price: pPrice })];
            case 1:
                updateProduct = _b.sent();
                console.log(updateProduct);
                if (!updateProduct)
                    throw new Error("no found product");
                res.status(201).send({ ok: true, product: updateProduct });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(501).send({ ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// export const setProduct = async(req:any , res:any) => {
//     try {
//     } catch (error) {
//         console.error(error)
//     }
// } 
