function prices(product) {
    try {
        if (typeof product !== 'string') {
            throw new Error('Argument should be a string');
        }
        else if (product === "ice-cream") {
            return 8;
        }
        else if (product === "cake") {
            return 70;
        }
        else if (product === "cookie") {
            return 5;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var price = prompt("which item do you want to buy?");
console.log(prices(price));
