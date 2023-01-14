function getPrice(product) {
    switch (priceList) {
        case "cookie":
            return "8 Shekels";
        case "cake":
            return "80 shekels";
        default:
            return ("I am sorry, we do not sell " + product);
    }
}
var product = prompt("what would you like to buy");
try {
    var price = getPrice(product);
    alert("it should cost you " + price);
}
finally {
}
