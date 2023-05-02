function renderProduct(product) {
    try {
        var html = "\n      <div id=\"" + product._id + "\" class=\"tour-row\">\n      <button class=\"tour-item tour-date\"><img src=\"" + product.src + "\"></button>\n      <span class=\"tour-item tour-price\">" + product.price + "$</span>\n      <span class=\"tour-item tour-name\">" + product.name + "</span>\n      <span class=\"tour-item tour-descriptions\">" + product.description + "</span>\n      <button type=\"button\" class=\"tour-item tour-btn btn btn-primary\" onclick=\"handleAddToCart('" + product._id + "')\">Add to Cart</button>\n  </div>\n";
        var itemsRoot = document.querySelector("#items");
        if (!itemsRoot)
            throw new Error("itemsRoot not found");
        itemsRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetProduct() {
    try {
        fetch("/api/collections/get-products")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var products = _a.products;
            if (!products)
                throw new Error("didnt found product");
            var html = products
                .map(function (product) {
                return renderProduct(product);
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddToCart(_id) {
    try {
        var currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
        if (!currentLocalStorageUser) {
            window.location.href = "/login/index.html";
            return;
        }
        var currentUser = JSON.parse(currentLocalStorageUser);
        fetch("/api/cart/add-cart?" +
            new URLSearchParams({ _id: _id, userId: currentUser._id }).toString(), {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function () {
            var productId = document.getElementById(_id);
            if (!productId) {
                throw new Error("productId not found");
            }
            // return renderCartItems(product)
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// appointment
