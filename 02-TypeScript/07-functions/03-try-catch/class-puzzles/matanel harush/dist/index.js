function getPrice(product) {
    try {
        switch (product) {
            case 'ice-cream':
                return 8;
            case 'cake':
                return 70;
            case 'cookie':
                return 5;
            default:
                alert("Sorry, we do not sell " + product);
                throw new Error("Invalid product: " + product);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function showPrice() {
    var product = prompt('Which product do you want to buy?');
    try {
        var price = getPrice(product);
        console.log("It should cost you " + price + " NIS");
        alert("It should cost you " + price + " NIS");
    }
    catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}
showPrice();
