var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Product = /** @class */ (function () {
    function Product(price, name, department, type) {
        this.price = price;
        this.name = name;
        this.department = department;
        this.type = type;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getDepartment = function () {
        return this.department;
    };
    Product.prototype.getType = function () {
        return this.type;
    };
    return Product;
}());
var products = [];
var nikeShoes = new Product(100, "Nike - Air Jordan 1", "Shoes", "Sneakers");
var adidasShoes = new Product(75, "Adidas - Stan Smith", "Shoes", "Sneakers");
var drMarten = new Product(150, "Dr. Martens - 1460", "Shoes", "Boots");
var timberland = new Product(220, "Timberland - 6 Inch Premium", "Shoes", "Boots");
var leviesJeans = new Product(85, "Levi's - 511", "Clothing", "Jeans");
var jackAndJonesJeans = new Product(32, "Jack & Jones - JJiliam", "Clothing", "Jeans");
var bershakaJeans = new Product(30, "Bershaka - Vintage", "Clothing", "Jeans");
var gStarShirt = new Product(40, "G Star - Dunda", "Clothing", "Shirt");
var forsbergShirt = new Product(20, "Forsberg - Stoltson", "Clothing", "Shirt");
var leviesShirt = new Product(22, "Levi's - Original Tee", "Clothing", "Shirt");
var tommyHilShirt = new Product(60, "Tommy Hilfiger - Regular", "Clothing", "Shirt");
products.push(tommyHilShirt, leviesShirt, forsbergShirt, gStarShirt, bershakaJeans, jackAndJonesJeans, leviesJeans, timberland, drMarten, adidasShoes, nikeShoes);
var filteredByType = function (type) {
    return products.filter(function (ele) { return ele.getType() == type; });
};
var findCheapestItem = function () {
    return products.reduce(function (prev, current) {
        return prev.getPrice() < current.getPrice() ? prev : current;
    });
};
var sortProductsByPrice = function () {
    return __spreadArrays(products).sort(function (a, b) { return a.getPrice() - b.getPrice(); });
};
var findProductName = function (input) {
    var filteredByString = products.filter(function (ele) {
        return ele.getName().toLowerCase().includes(input);
    });
    // filteredByString.forEach(ele => document.write(ele.name))
    return filteredByString;
};
// HW level 1 - filter list by type "Sneakers"
console.log(filteredByType("Sneakers"));
// HW level 2 - Finding cheapest product on list
console.log(findCheapestItem());
// HW level 3 - Sorting all products from cheapest to most exepensive
console.log(sortProductsByPrice());
// HW level 4 - Finding product based on String
console.log(findProductName("da"));
console.log(findProductName("6"));
console.log(findProductName("bsrge"));
// Created search app that displayes related products in real time
var searchInput = document.querySelector("#search");
var ulEl = document.querySelector(".displayedList");
window.addEventListener("keyup", function () {
    if (searchInput.value != "") {
        ulEl.replaceChildren();
        var listToDisplay = findProductName(searchInput.value);
        listToDisplay.forEach(function (ele) {
            var li = document.createElement("li");
            li.textContent = ele.getName();
            ulEl.append(li);
        });
    }
    else {
        ulEl.replaceChildren();
    }
});
