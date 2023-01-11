var tomershop = /** @class */ (function () {
    function tomershop(name, department, type, price) {
        this.name = name;
        this.department = department;
        this.type = type;
        this.price = price;
    }
    return tomershop;
}());
var airPods3 = new tomershop("airpods3", "headphone", "apple", 199);
var airPodsPro = new tomershop("airpods pro", "headphone", "apple", 299);
var airPodsMax = new tomershop("airpods max", "headphone", "apple", 499);
var iphone12 = new tomershop("iphone 12", "phones", "apple", 599);
var iphone13 = new tomershop("iphone 13", "phones", "apple", 699);
var iphone14 = new tomershop("iphone 14", "phones", "apple", 799);
var S21 = new tomershop("S21", "phones", "samsung", 399);
var S22 = new tomershop("S22", "phones", "samsung", 799);
var S20 = new tomershop("S20", "phones", "samsung", 299);
var products = [
    airPods3,
    airPodsPro,
    airPodsMax,
    iphone12,
    iphone13,
    iphone14,
    S20,
    S21,
    S22
];
console.log(getAllItemInType(products));
var sortedArr = sortArrByPrice(products);
if (sortedArr)
    console.log(cheapestItem(sortedArr));
function getAllItemInType(productsArr) {
    try {
        if (productsArr.length == 0)
            throw new Error("there is no item in the store");
        var typeGetFromUser_1;
        while (!typeGetFromUser_1) {
            typeGetFromUser_1 = prompt("Enter the type of item you will want to buy:");
        }
        var selectproductarry = productsArr.filter(function (item) { return item.type == typeGetFromUser_1; });
        if (selectproductarry.length == 0)
            throw new Error("items from type " + typeGetFromUser_1 + " is availble in our store");
        return selectproductarry;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function sortArrByPrice(productsArr) {
    try {
        if (productsArr.length == 0)
            throw new Error("there is no item in the store");
        var sortedArr_1 = productsArr.sort(function (a, b) { return a.price - b.price; });
        return sortedArr_1;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function cheapestItem(sortedArr) {
    try {
        var lowItem = products.filter(function (tomershop) { return tomershop.price == sortedArr[0]; });
        return sortedArr;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
