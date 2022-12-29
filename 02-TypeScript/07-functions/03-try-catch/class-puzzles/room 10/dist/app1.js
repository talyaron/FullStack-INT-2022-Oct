var productPrice = function (productName) {
    try {
        if (!productName) {
            throw new Error("Invalid product name");
        }
        switch (productName) {
            case "ice-cream":
                return 8;
            case "cake":
                return 70;
            case "cookie":
                return 5;
        }
        throw new Error("Invalid product name");
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
var productName = prompt("What is your product?");
var price = productPrice(productName);
if (price === false) {
    alert('You did not enter a valid product');
}
else {
    alert("Your price is " + price);
}
