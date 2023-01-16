function getProductFromUser() {
    try {
        var name = prompt("what is the name of the product?");
        var _price = prompt("What is the price of the produc?");
        var imageUrl = prompt("Product image url");
        var date = new Date().getTime();
        if (!name || !_price || !imageUrl)
            throw new Error("Some data is missing");
        var price = parseInt(_price);
        if (typeof price !== "number")
            throw new Error("price is not a number");
        products.push(new Product(imageUrl, name, price, date));
    }
    catch (error) {
        console.error(error);
    }
}
function renderProducts(products, someElement) {
    try {
        if (!someElement)
            throw new Error("no dom element to render the products to");
        var html_1 = "";
        products.forEach(function (product) {
            html_1 += "<div class=\"card\">\n                <img src=\"" + product.imgUrl + "\">\n                <h3>" + product.name + "</h3>\n                <p>Price: " + product.price + "$</p>\n                </div>";
        });
        console.log(html_1);
        someElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function sortProducts(products, sortBy) {
    try {
        var _products = products.sort(function (a, b) { return a[sortBy] - b[sortBy]; });
        return _products;
    }
    catch (error) {
        console.error(error);
        return products;
    }
}
