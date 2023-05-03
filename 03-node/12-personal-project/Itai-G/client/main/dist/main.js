function renderProducts(product) {
    try {
        var html = "\n        <div id=\"productId\" class=\"storeItem\">\n        <img src=\"" + product.imgUrl + "\" alt=\"" + product.name + "\">\n        <h3>" + product.name + "</h3>\n        <p>" + product.descreption + "</p>\n        <p>$" + product.price + "</p>\n        <div>\n          <input type=\"number\" id=\"quantityInput" + product._id + "\" value=\"1\" min=\"1\">\n          <button onclick=\"addToCart('" + product._id + "')\">Add to Cart</button>\n        </div>\n        </div>\n      ";
        var containerRoot = document.querySelector("#productsContainer");
        if (!containerRoot)
            throw new Error("containerRoot not found");
        containerRoot.innerHTML += html;
        console.log(product.descreption);
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetProduct() {
    try {
        fetch("/api/products/get-products")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var products = _a.products;
            if (!products)
                throw new Error("didnt find product");
            var html = products
                .map(function (products) {
                return renderProducts(products);
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
function addToCart(_id) {
    try {
        var currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
        if (!currentLocalStorageUser) {
            window.location.href = "/login/index.html";
            return;
        }
        var currentUser = JSON.parse(currentLocalStorageUser);
        fetch("/api/cart/add-item?" +
            new URLSearchParams({ _id: _id, userId: currentUser._id }).toString(), {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(function () {
            var productId = document.getElementById(_id);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
