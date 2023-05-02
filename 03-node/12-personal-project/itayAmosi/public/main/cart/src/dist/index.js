function renderCartItems(cart) {
    try {
        var html = "\n    <div class=\"cart-row\">\n    <div class=\"cart-item cart-column\">\n        <img class=\"cart-item-image\" src=\"" + cart. + "\" height=\"100\">\n        <span class=\"cart-item-title\">Album 3</span>\n    </div>\n    <span class=\"cart-price cart-column\">$9.99</span>\n    <div class=\"cart-quantity cart-column\">\n        <input class=\"cart-quantity-input\" type=\"number\" value=\"1\">\n        <button class=\"btn btn-danger\" type=\"button\">REMOVE</button>\n    </div>\n</div>\n";
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
            console.log(cart);
            var html = cart
                .map(function (cart) {
                return renderCartItems(cart);
            });
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function GetCartItems() {
    try {
        var currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
        if (!currentLocalStorageUser) {
            window.location.href = "/login/index.html";
            return;
        }
        var currentUser = JSON.parse(currentLocalStorageUser);
        fetch("/api/cart/get-products-by-id?" +
            new URLSearchParams({ userId: currentUser._id }).toString(), {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
