var CartStatus;
(function (CartStatus) {
    CartStatus["Open"] = "open";
    CartStatus["Closed"] = "closed";
})(CartStatus || (CartStatus = {}));
function renderCartItems(product) {
    try {
        var html = "\n    <div id=\"" + product._id + "\" class=\"cart-row\">\n    <div class=\"cart-item cart-column\">\n        <img class=\"cart-item-image\" src=\"" + product.src + "\" height=\"100\">\n        <span class=\"cart-item-title\">" + product.name + "</span>\n    </div>\n    <span class=\"cart-price cart-column\">" + product.price + "$</span>\n    <div class=\"cart-quantity cart-column\">\n        <input class=\"cart-quantity-input\" type=\"number\" value=\"1\">\n        <button class=\"btn btn-danger\" type=\"button\" onclick=\"removeItemsFromCart('" + product._id + "')\">REMOVE</button>\n    </div>\n</div>\n";
        var cartItemsRoot = document.querySelector("#cartItems");
        if (!cartItemsRoot)
            throw new Error("cartItemsRoot not found");
        cartItemsRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetCart() {
    try {
        var currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
        if (!currentLocalStorageUser) {
            window.location.href = "/login/index.html";
            return;
        }
        var currentUser = JSON.parse(currentLocalStorageUser);
        fetch("/api/cart/get-cart?" +
            new URLSearchParams({ userId: currentUser._id }).toString(), {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var cart = _a.cart;
            GetCartItems(cart.productIds).then(function (products) {
                products.forEach(function (product) {
                    renderCartItems(product);
                });
            });
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function GetCartItems(productIds) {
    try {
        return fetch("/api/collections/get-products-by-id?" +
            new URLSearchParams({ productIds: productIds.join(",") }).toString(), {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            return data.products;
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function removeItemsFromCart(productId) {
    try {
        var currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
        if (!currentLocalStorageUser) {
            window.location.href = "/login/index.html";
            return;
        }
        var currentUser = JSON.parse(currentLocalStorageUser);
        return fetch("/api/cart/remove-item-from-cart?" +
            new URLSearchParams({ userId: currentUser._id, productId: productId }).toString(), {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("hiii");
            var product = document.getElementById(productId);
            if (!product) {
                throw new Error("product delete form HTML");
            }
            product.remove();
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handelPurchase() {
    try {
        var currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
        if (!currentLocalStorageUser) {
            window.location.href = "/login/index.html";
            return;
        }
        var currentUser = JSON.parse(currentLocalStorageUser);
        return fetch("/api/cart/add-purchase?" +
            new URLSearchParams({ userId: currentUser._id }).toString(), {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            alert("Thank you for purchasing the receipt that will be sent to your email, The products are on their way to you");
            window.location.href = "/main/index.html";
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
