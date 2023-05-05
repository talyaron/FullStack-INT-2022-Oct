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
function renderCartItem() {
    try {
    }
    catch (error) {
        console.error(error);
    }
}
function getProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var rootProducts, dataJs, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    rootProducts = document.getElementById('rootProducts');
                    if (!rootProducts)
                        throw new Error("not found root Elements");
                    return [4 /*yield*/, fetch("/api/products/get-products")];
                case 1:
                    dataJs = _a.sent();
                    if (!dataJs)
                        throw new Error("no dataJs");
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    rootProducts.innerHTML = renderCardsShoe(data.products);
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
function renderAdminBtnEdit(id) {
    return "\n        <div id=\"adminBtnEditProduct\">\n        <button onclick=\"handleClickRemoveProduct('" + id + "')\">\n            <i class=\"fa-solid fa-trash-can\"></i>\n        </button>\n        <button  onclick=\"handleClickEditProduct('" + id + "')\">\n        <i class=\"fa-solid fa-pen-to-square\"></i>\n            </button>\n    </div>\n        ";
}
function renderCardsShoe(data) {
    try {
        var html = data.map(function (product) {
            return "     <div class=\"container__main__product\" id=\"" + product._id + "\">\n            " + renderAdminBtnEdit(product._id) + "\n        <img src=\"" + product.src + "\" width=\"150px\">\n        <h4 id=\"pName\">" + product.name + "</h4>\n        <p id=\"pDetail\">" + product.detail + "</p>\n            <form>\n                <label for=\"size\">size : </label>\n                <select name=\"size\" id=\"size\"> \n                    <option value=\"38\">38</option>\n                    <option value=\"40\">40</option>\n                    <option value=\"41\">41</option>\n                    <option value=\"42\">42</option>\n                    <option value=\"43\">43</option>\n                    <option value=\"44\">44</option>\n                    <option value=\"45\">45</option>\n                    <option value=\"46\">46</option>\n                </select>\n                <h4>price: <span id=\"pPrice\">" + product.price + "</span></h4>\n                <button onclick=\"handleAddProductToCart('" + product._id + "')\">ADD CART</button>\n            </form>\n</div>";
        }).join('');
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function createNewItemToCart(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var rootId, size, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    rootId = document.getElementById("" + productId);
                    if (!rootId)
                        throw new Error("not found rootElement");
                    size = rootId.querySelector('#size');
                    if (!size)
                        throw new Error("not size");
                    return [4 /*yield*/, fetch('/api/users/create-product-cart', {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            method: "POST",
                            body: JSON.stringify({
                                productId: productId,
                                size: size.value
                            })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (!data)
                        throw new Error('no get data ');
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
//close container collapse
function handleClickCloseCollapseContainer() {
    try {
        var closeCollapseContainerBtn = document.querySelector('.collapse-container');
        if (!closeCollapseContainerBtn)
            throw new Error("no found BTN element");
        closeCollapseContainerBtn.classList.remove("active");
    }
    catch (error) {
        console.error(error);
    }
}
// btn for menu create product
function handleClickAddNewProduct() {
    try {
        var closeCollapseContainerBtn = document.querySelector('.collapse-container');
        if (!closeCollapseContainerBtn)
            throw new Error("no found BTN element");
        closeCollapseContainerBtn.classList.add("active");
    }
    catch (error) {
        console.error(error);
    }
}
// remove
function handleClickRemoveProduct(__id) {
    return __awaiter(this, void 0, void 0, function () {
        var dataJs, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!confirm("Are You Sure To delete this item ?")) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch('/api/products/delete-product', {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ __id: __id })
                        })];
                case 1:
                    dataJs = _a.sent();
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    window.location.reload();
                    return [3 /*break*/, 4];
                case 3: return [2 /*return*/];
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
//close btn
function handleClickCloseEditProduct(__id) {
    return __awaiter(this, void 0, void 0, function () {
        var rootElementById, pName, pDetail, pPrice, dataJs, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    rootElementById = document.getElementById("" + __id);
                    if (!rootElementById)
                        throw new Error("not found root Element");
                    pName = rootElementById.querySelector('#pName');
                    if (!pName)
                        throw new Error("not found pName");
                    pDetail = rootElementById.querySelector('#pDetail');
                    if (!pDetail)
                        throw new Error("not found pDetail");
                    pPrice = rootElementById.querySelector('#pPrice');
                    if (!pPrice)
                        throw new Error("not found pPrice");
                    pName.setAttribute("contenteditable", "false");
                    pName.style.backgroundColor = "unset";
                    pDetail.setAttribute("contenteditable", "false");
                    pDetail.style.backgroundColor = "unset";
                    pPrice.setAttribute("contenteditable", "false");
                    pPrice.style.backgroundColor = "unset";
                    alert("the changes Done!");
                    return [4 /*yield*/, fetch('/api/products/update-product', {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                __id: __id,
                                pName: pName.textContent,
                                pDetail: pDetail.textContent,
                                pPrice: pPrice.textContent
                            })
                        })];
                case 1:
                    dataJs = _a.sent();
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    window.location.reload();
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
//edit product
function handleClickEditProduct(__id) {
    return __awaiter(this, void 0, void 0, function () {
        var buttonChangeToSave, rootElementById, pName, pDetail, pPrice;
        return __generator(this, function (_a) {
            try {
                if (confirm("Are You Sure To update this item ?")) {
                    buttonChangeToSave = document.getElementById('adminBtnEditProduct');
                    if (!buttonChangeToSave)
                        throw new Error("no button to change");
                    buttonChangeToSave.innerHTML = "      \n              <button onclick=\"handleClickCloseEditProduct('" + __id + "')\">\n              <i class=\"fa-solid fa-floppy-disk\"></i>\n        </button>";
                    rootElementById = document.getElementById("" + __id);
                    if (!rootElementById)
                        throw new Error("not found root Element");
                    pName = rootElementById.querySelector('#pName');
                    if (!pName)
                        throw new Error("not found pName");
                    pDetail = rootElementById.querySelector('#pDetail');
                    if (!pDetail)
                        throw new Error("not found pDetail");
                    pPrice = rootElementById.querySelector('#pPrice');
                    if (!pPrice)
                        throw new Error("not found pPrice");
                    pName.setAttribute("contenteditable", "true");
                    pName.style.backgroundColor = "rgba(0, 0, 46, 0.295)";
                    pDetail.setAttribute("contenteditable", "true");
                    pDetail.style.backgroundColor = "rgba(4, 5, 63, 0.295)";
                    pPrice.setAttribute("contenteditable", "true");
                    pPrice.style.backgroundColor = "rgba(4, 5, 63, 0.295)";
                }
                else {
                    return [2 /*return*/];
                }
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
//add new product
function handleSubmitNewProduct(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, detail, src, price, sendToServer, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = ev.target.elements, name = _a.name, detail = _a.detail, src = _a.src, price = _a.price;
                    return [4 /*yield*/, fetch('/api/products/add-product', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                src: src.value,
                                name: name.value,
                                detail: detail.value,
                                price: Number(price.value)
                            })
                        })
                            .then(function (response) { return response.json(); })["catch"](function (err) { return console.log(err); })];
                case 1:
                    sendToServer = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _b.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddProductToCart(uid) {
    try {
        createNewItemToCart(uid);
    }
    catch (error) {
        console.error(error);
    }
}
