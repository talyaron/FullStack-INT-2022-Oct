function handleAddItem(ev) {
    try {
        ev.preventDefault();
        debugger;
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        var imgLink = ev.target.elements.imgLink.value;
        var serialNumber = ev.target.elements.serialNumber.value;
        products.push(new Product(name, price, imgLink, serialNumber));
        ev.target.reset();
        if (!productRoot)
            throw new Error("productRoot is null");
        productRoot.innerHTML = renderProducts(products);
    }
    catch (error) {
        console.error(error);
    }
}
function renderProducts(products) {
    try {
        if (!products || !Array.isArray(products))
            throw new Error("products is not an array");
        var html = products
            .map(function (product) {
            return "\n      <div class=\"product\">\n        <h3>" + product.name + "</h3>\n        <div>Price: " + product.price + " <button onclick=\"handleUpdatePrice()\">Update</button></div>\n        <div>Img link: " + product.imgLink + "</div>\n        <div>Serial number: " + product.serialNumber + "</div>\n        <button onclick=\"handleDeleteItem('" + product.serialNumber + "')\">Remove</button>\n      </div>\n      ";
        })
            .join(" ");
        console.log(html);
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleDeleteProduct(serialNumber) {
    try {
        var index = products.findIndex(function (product) { return product.serialNumber === serialNumber; });
        if (index === -1)
            throw new Error("product is not found");
        products.splice(index, 1);
        if (!productRoot)
            throw new Error("productRoot is undefined");
        productRoot.innerHTML = renderProducts(products);
    }
    catch (error) {
        console.error(error);
    }
}
