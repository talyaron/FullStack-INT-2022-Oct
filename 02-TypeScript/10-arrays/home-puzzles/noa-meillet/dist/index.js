/*
Create an array of products in a shop (for instance, a clothes shop).
In the array, put several items. Each item has price, name, and department (for example, "women's tops," "man underwear," etc.), and type (for example, "shirt," "trousers").


1. get all the items in a type (all "shirts")
2. find the cheapest item.
3. sort all items in a department by price. Show the cheapest on the top of the array.
4. find an item in the array by its name, using part of the name. for instance, the user will search for "je" and will get "Dizzle jeans.", "Levies Jeans", etc.
*/
var Item = /** @class */ (function () {
    function Item(name, department, type, price) {
        this.name = name;
        this.department = department;
        this.type = type;
        this.price = price;
    }
    return Item;
}());
var shirtLevisW = new Item("shirt-Levis-white", "women", "shirt", 19.9);
var shirtLevisM = new Item("shirt-Levis-blue", "men", "shirt", 19.9);
var skirtW = new Item("skirt-black", "women", "skirt", 29.9);
var jeansDizzleM = new Item("jeans-Dizzle-deepBlue", "men", "pants", 59.9);
var shirtPackB = new Item("shirts-pack-grey", "baby", "shirt", 9.9);
var blouseW = new Item("blouse-black", "women", "shirt", 15.9);
var sweatshirtNikeK = new Item("sweatshirt-Nike-white", "kids", "sweatshirt", 49.9);
var dressW = new Item("dress-pink", "women", "dress", 39.9);
var denimJacketM = new Item("denimJacket-Levis", "men", "outwear", 79.9);
var activeSetNikeW = new Item("activeSet-Nike", "women", "pants", 19.9);
var coatGapB = new Item("coat-Gap-purple", "baby", "outwear", 49.9);
var clothesShopArr = [
    shirtLevisW,
    shirtLevisM,
    skirtW,
    jeansDizzleM,
    shirtPackB,
    blouseW,
    sweatshirtNikeK,
    dressW,
    sweatshirtNikeK,
    denimJacketM,
    activeSetNikeW,
    coatGapB,
];
console.log(getAllItemInType(clothesShopArr));
var sortedArr = sortArrByPrice(clothesShopArr);
if (sortedArr)
    console.log(getTheCheapestItem(sortedArr));
function getAllItemInType(clothesArr) {
    try {
        if (clothesArr.length == 0)
            throw new Error("there is no item in the store");
        var typeGetFromUser_1;
        while (!typeGetFromUser_1) {
            typeGetFromUser_1 = prompt("Enter the type of item you will want to buy:");
        }
        var chosenItemsArr = clothesArr.filter(function (item) { return item.type == typeGetFromUser_1; });
        if (chosenItemsArr.length == 0)
            throw new Error("items from type " + typeGetFromUser_1 + " is availble in our store");
        return chosenItemsArr;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function sortArrByPrice(clothesArr) {
    try {
        if (clothesArr.length == 0)
            throw new Error("there is no item in the store");
        var sortedArr_1 = clothesArr.sort(function (a, b) { return a.price - b.price; });
        return sortedArr_1;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function getTheCheapestItem(sortedArr) {
    try {
        var chosenItemsArr = clothesShopArr.filter(function (item) { return item.price == sortedArr[0].price; });
        return sortedArr;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
