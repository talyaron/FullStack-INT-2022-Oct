function renderCartItem(product) {
    try {
        var html = "\n        <div class=\"cartItem\" id=\"" + product._id + "\">\n          <img src=\"" + product.imgUrl + "\" alt=\"" + product.name + "\">\n          <h3>" + product.name + "</h3>\n          <p>" + product.descreption + "</p>\n          <p>$" + product.price + "</p>\n          <input type=\"number\" id=\"quantityInput" + product._id + "\" value=\"1\" min=\"1\">\n          <button id=\"removeBtn" + product._id + "\" class=\"removeBtn\" onclick=\"removeItemsFromCart('" + product._id + "')\">Remove</button>\n        </div>\n      ";
        var containerRoot = document.querySelector("#cartContainer");
        if (!containerRoot)
            throw new Error("containerRoot not found");
        containerRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderCartItems(cart, products) {
    try {
        var cartProducts = products.filter(function (product) { return cart.productIds.includes(product._id); });
        if (cartProducts.length === 0) {
            var html = "\n          <p>Your cart is empty</p>\n        ";
            var containerRoot = document.querySelector("#cartContainer");
            if (!containerRoot)
                throw new Error("containerRoot not found");
            containerRoot.innerHTML += html;
        }
        else {
            cartProducts.forEach(function (product) {
                renderCartItem(product);
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function getCart() {
    try {
        var currentLocalStorageUser = localStorage.getItem("currentUser");
        if (!currentLocalStorageUser) {
            window.location.href = "/login/login.html";
            return;
        }
        var currentUser = JSON.parse(currentLocalStorageUser);
        fetch("/api/cart/get-cart?userId=" + currentUser._id)
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var cart = _a.cart;
            if (!cart)
                throw new Error("Cart not found");
            fetch("/api/products/get-products")
                .then(function (res) { return res.json(); })
                .then(function (_a) {
                var products = _a.products;
                if (!products)
                    throw new Error("Products not found");
                renderCartItems(cart, products);
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
getCart();
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
            var product = document.getElementById(productId);
            console.log(product);
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
function confirmOrder() {
    try {
        var currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
        if (!currentLocalStorageUser) {
            window.location.href = "/login/login.html";
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
            alert("Thank you for your purchase");
            window.location.href = "/main/main.html";
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
