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
function renderCartItems() {
    return __awaiter(this, void 0, void 0, function () {
        var itemsCardHtml, itemsQuantityNumber, cartItems, itemsQuantity, response, data, cartItemsArray, i, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    itemsCardHtml = "";
                    itemsQuantityNumber = 0;
                    cartItems = document.querySelector(".cartItems");
                    itemsQuantity = document.querySelector(".itemsQuantity");
                    if (!cartItems)
                        throw new Error("Can't catch cart!");
                    if (!itemsQuantity)
                        throw new Error("Can't catch quantity!");
                    return [4 /*yield*/, fetch("/api/v1.0/cart/get-cart-items")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    cartItemsArray = data.cartItemsArray;
                    for (i = 0; i < cartItemsArray.length; i++) {
                        itemsQuantityNumber += cartItemsArray[i].quantity;
                        itemsCardHtml += "<div class=\"item\">\n            <p>Name: " + cartItemsArray[i].product.starshipName + "</p>\n            <p>Price: " + cartItemsArray[i].product.starshipPrice + "$</p>\n            <p>Quantity: " + cartItemsArray[i].quantity + "</p>\n            <p>Type: " + cartItemsArray[i].product.itemType + "</p>\n            <button id=\"" + cartItemsArray[i]._id + "\" onclick=\"deleteItemFromCart(this)\">Delete</button>\n        </div>";
                    }
                    itemsQuantity.innerText = "" + itemsQuantityNumber;
                    cartItems.innerHTML = itemsCardHtml;
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
function openShop() {
    try {
        var videoContainer = document.querySelector(".video_container");
        var sliderContainer = document.querySelector(".sliderContainer");
        if (videoContainer && sliderContainer) {
            renderStarships();
            videoContainer.remove();
            sliderContainer.style.display = "flex";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function openAddDialog() {
    try {
        var body = document.querySelector('body');
        if (!body)
            throw new Error("body Error!");
        body.insertAdjacentHTML("beforeend", '<div class="addStarshipContainer"><div class="addStarshipSubContainer"><form onsubmit=addStarship(event)><input class="input" required type="text" name="itemName" placeholder="Starship Name"><input class="input" required type="text" name="itemModel" placeholder="Starship Model"><input class="input" required type="number" name="itemPrice" placeholder="Starship Price"><input class="input" required type="text" name="starshipDescription" placeholder="Starship Description"><input type="submit" value="Add"></form></div></div>');
    }
    catch (error) {
        console.error(error);
    }
}
function addStarship(e) {
    try {
        e.preventDefault();
        var starshipName = e.target.elements.itemName.value;
        var starshipModel = e.target.elements.itemModel.value;
        var starshipPrice = e.target.elements.itemPrice.value;
        var starshipDescription = e.target.elements.starshipDescription.value;
        var carouselInner = document.querySelector(".carousel-inner");
        if (!carouselInner)
            throw new Error("Carousel Error!");
        if (!starshipName || !starshipModel || !starshipPrice || !starshipDescription)
            throw new Error("Please fill all the feilds!");
        var newStarship = { starshipName: starshipName, starshipModel: starshipModel, starshipPrice: starshipPrice, starshipDescription: starshipDescription };
        fetch("/api/v1.0/items/add-starship", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStarship)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.ok === true) {
                var addStarshipContainer = document.querySelector(".addStarshipContainer");
                if (!addStarshipContainer)
                    throw new Error("addStarshipContainer Error!");
                addStarshipContainer.remove();
                renderStarships();
            }
            else {
                console.error("Couldn't add item");
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderStarships() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, starshipsArray, carouselInner, itemClass, i, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/v1.0/items/get-starship")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (data.ok === true) {
                        starshipsArray = data.starships;
                        carouselInner = document.querySelector(".carousel-inner");
                        itemClass = "item active";
                        if (!carouselInner)
                            throw new Error("Corousel Error!");
                        if (starshipsArray.length > 0) {
                            for (i = 0; i < starshipsArray.length; i++) {
                                if (i != 0) {
                                    itemClass = "item";
                                }
                                carouselInner.insertAdjacentHTML("beforeend", "<div class=\"" + itemClass + "\">\n                    <video class=\"spaceshipVideo\" onmouseover=\"this.play()\" onmouseout=\"this.pause()\" loop src=\"" + starshipsArray[i].starshipModel + "\" ></video>\n                    <div class=\"carousel-caption\">\n                        <h3>" + starshipsArray[i].starshipName + "</h3>\n                        <p>" + starshipsArray[i].starshipDescription + "</p>\n                        <p>Price: " + starshipsArray[i].starshipPrice + "$</p>\n                        <button id=\"" + starshipsArray[i]._id + "\" onclick=\"addItemToCart(this)\" class=\"spaceshipBtn\">Add to cart</button>\n                    </div>\n                </div>");
                            }
                        }
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
function addItemToCart(item) {
    return __awaiter(this, void 0, void 0, function () {
        var itemId, response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    itemId = { itemId: item.id };
                    return [4 /*yield*/, fetch("/api/v1.0/cart/add-item-to-cart", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(itemId)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    renderCartItems();
                    if (data.ok === false)
                        throw new Error("Couldn't add item to cart!");
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
function deleteItemFromCart(cartItem) {
    return __awaiter(this, void 0, void 0, function () {
        var cartItemId, response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    cartItemId = { _id: cartItem.id };
                    return [4 /*yield*/, fetch("/api/v1.0/cart/delete-item-from-cart", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(cartItemId)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    renderCartItems();
                    if (data.ok === false)
                        throw new Error("Couldn't add item to cart!");
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
renderCartItems();
