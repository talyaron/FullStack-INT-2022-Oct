while (true) {
    var userInputProduct = prompt('enter product i.e ice-cream, cake, cookie');
    alert("price is " + productPrice(userInputProduct));
}
function productPrice(product) {
    var cookiePrice = 5;
    var iceCreamPrice = 8;
    var cakePrice = 70;
    try {
        switch (product) {
            case "ice-cream":
                return iceCreamPrice;
            case "cake":
                return cakePrice;
            case "cookie":
                return cookiePrice;
            default:
                throw new Error('no matching product name');
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
