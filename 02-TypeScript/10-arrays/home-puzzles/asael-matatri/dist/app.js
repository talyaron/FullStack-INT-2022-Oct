// Create an array of products in a shop (for instance, a clothes shop).
// In the array, put several items. Each item has price, name, and department (for example, "women's tops,"
//  "man underwear," etc.), and type (for example, "shirt," "trousers").
var product = /** @class */ (function () {
    function product(name, price, department, type) {
        this.name = name;
        this.price = price;
        this.department = department;
        this.type = type;
    }
    return product;
}());
var tomato = new product("tomato", 1.9, "vegetable department", "vegetable");
var cucumber = new product("cucumber", 1.0, "vegetable department", "vegetable");
var bread = new product("bread", 5.0, "pastries department", "pastries");
var tuna = new product("tuna", 1.9, "fish department", "fish");
// 1. get all the items in a type (all "shirts")
var market = [tomato, cucumber, bread, tuna];
var getByType = market.filter(function (product) { return product.type === "vegetable"; });
// console.log(getByType);
// 2. find the cheapest item.
// 3. sort all items in a department by price. Show the cheapest on the top of the array.
var getChepest = market.sort(function (a, b) { return a.price - b.price; });
// console.log(getChepest);
// console.log(getChepest[0]);
///////////////////////////////////////////////////////////////////// OR
var minPrice = 2;
var getChepes = market.filter(function (product) { return product.price < minPrice; });
// console.log(getChepes);
// 4. find an item in the array by its name, using part of the name. for instance, the user will search for "je" and
//  will get "Dizzle jeans.", "Levies Jeans", etc.
