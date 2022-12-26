function chooseFood(productName) {
    try {
        if (!productName) {
            throw new Error("You must choose Product Name");
        }
        switch (productName) {
            case "ice cream":
                return 8;
            case "cake":
                return 70;
            case "cookie":
                return 5;
        }
        throw new Error("Invalid Product Name");
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
var productsNAME = prompt("Choose Product Name");
var price = productPrice(productName);
if (price === false) {
    alert("You did not enter a correct product name");
}
else {
    alert("your price is " + price);
}
