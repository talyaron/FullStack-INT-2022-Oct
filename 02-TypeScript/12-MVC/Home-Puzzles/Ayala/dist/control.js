// להזין את את המוצרים מהיוזר
//תמונה,שם,כמות ,מחיר
function getProductFromUser() {
    try {
        var imgUrl = prompt("Enter product imgUrl:");
        var name = prompt("Enter product name:");
        var quantity = prompt("Enter product quantity:");
        var _price = prompt("Enter product price:");
        if (!imgUrl || !name || !quantity || !_price)
            throw new Error("All fields are required");
        var price = parseInt(_price);
        if (typeof price !== "number")
            throw new Error("price is not a number");
        product.push(new Product(imgUrl, name, quantity, price));
    }
    catch (error) {
        console.error(error);
    }
}
function renderProducts(product, rootProducts) {
    try {
        if (!rootProducts)
            throw new Error("no dom elrment to render the product to");
        var html_1 = "";
        product.forEach(function (product) {
            html_1 += "<div class =\"card\">\n          \n             <img src=\"" + product.imgUrl + "\">\n             <h3>" + product.name + "<h3>\n             <p> quantity:" + product.quantity + "<p>\n             <p> Price: " + product.price + "$<p>\n        </div>";
        });
        console.log(html_1);
        // if (!rootProducts) throw new Error("");
        rootProducts.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
