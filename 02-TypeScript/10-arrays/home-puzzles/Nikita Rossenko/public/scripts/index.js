var product = /** @class */ (function () {
    function product(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return product;
}());
var spongeBobShirt = new product('spongeBobShirt', 'shirts', 30);
var spongeBob2Shirt = new product('spongeBob2Shirt', 'shirts', 10);
var patrickPants = new product('patrickPants', 'pants', 25);
var squidwardUnderware = new product('squidwardUnderware', "Men's underware", 20);
var products = [spongeBobShirt, spongeBob2Shirt, patrickPants, squidwardUnderware];
// 1)
function getItemOfCategory(arr) {
    var shirts = [];
    for (var product_1 in arr) {
        if (arr[product_1].category == 'shirts') {
            shirts.push(arr[product_1]);
        }
    }
    return shirts;
}
console.log(getItemOfCategory(products));
// 2)
function cheapestOffAll(arr) {
    var cheapest = arr[0].price;
    for (var product_2 in arr) {
        if (arr[product_2].price < cheapest)
            cheapest = arr[product_2].price;
    }
    return cheapest;
}
console.log(cheapestOffAll(products));
// 3)
function sortByPrice(arr) {
    return arr.sort(function (a, b) {
        return a.price - b.price;
    });
}
console.log(sortByPrice(products));
// 4)
function searchProduct(arr, keyword) {
    var newArr = [];
    for (var product_3 in arr) {
        if (arr[product_3].name.indexOf(keyword) != -1) {
            newArr.push(arr[product_3]);
        }
    }
    return newArr;
}
console.log(searchProduct(products, 'Bob'));
