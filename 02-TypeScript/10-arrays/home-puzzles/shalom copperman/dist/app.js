var products = /** @class */ (function () {
    function products(name, brand, department, price) {
        this.name = name;
        this.brand = brand;
        this.department = department;
        this.price = price;
    }
    return products;
}());
var zaraShirts;
new products("shirt", "zara", "man", 120);
var markPants;
new products('pants', 'mark', 'women', 170);
var sheinCoats;
new products('coat', 'shein', 'unisex', 249);
var mystore = [
    zaraShirts,
    markPants,
    sheinCoats
];
function cheapestProductIndex(items) {
    try {
        if (!Array.isArray(items))
            throw new Error('the array is invalid');
        if (itemns.length === 0)
            throw new Error('the list is empty');
        var minIndex = 0;
        var minprice = items[0];
        for (var i = 0; i < items.length; i++) {
            if (items[i] < minprice) {
                minprice = items[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
var index = cheapestProductIndex(mystore);
if (index) {
    console.log("the cheapest item is " + mystore[index]);
}
else {
    console.log('there was an error during running time');
}
