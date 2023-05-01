function renderProduct(products) {
    try {
        var html = "\n      <div class=\"tour-row\">\n      <button class=\"tour-item tour-date\"><img src=\"" + products.src + "\"></button>\n      <span class=\"tour-item tour-price\">" + products.price + "</span>\n      <span class=\"tour-item tour-name\">" + products.name + "</span>\n      <span class=\"tour-item tour-descriptions\">" + products.descriptions + "</span>\n      <button type=\"button\" class=\"tour-item tour-btn btn btn-primary\">Add to Favourites</button>\n  </div>\n";
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
            console.log(products);
            if (!products)
                throw new Error("didnt find product");
            var html = products
                .map(function (products) {
                return renderProduct(products);
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
