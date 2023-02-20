var productPrice = function (product) {
    try {
        switch (product) {
            case "ice-cream":
                return 8;
                break;
            case "cake":
                return 20;
                break;
            case "cookie":
                return 5;
                break;
            default: throw new Error('no matching product name');
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
};
var product = prompt(" which item would you like to buy?");
if (isNaN(product)) {
    if (product !== "") {
        var answer = productPrice(product);
        alert("its shouls cost you " + answer + " NIS");
    }
    else {
        alert("you should enter a product");
    }
}
else {
    alert("you sould enter aproduct");
}
