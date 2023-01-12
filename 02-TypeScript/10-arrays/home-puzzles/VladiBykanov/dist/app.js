var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Product = /** @class */ (function () {
    function Product(price, name, department, type, imageLink) {
        this.price = price;
        this.name = name;
        this.department = department;
        this.type = type;
        this.imageLink = imageLink;
    }
    Object.defineProperty(Product.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getDepartment", {
        get: function () {
            return this.department;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getType", {
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getImg", {
        get: function () {
            return this.imageLink;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var products = [];
var jordanShoes = new Product(389, "Nike - Air Jordan 1", "Shoes", "Sneakers", "https://media.restocks.net/products/DZ5485-612/jordan-1-retro-high-og-lost-and-found-1-1000.png");
var airmaxShoes = new Product(125, "Nike - Air Max 91", "Shoes", "Sneakers", "https://media.s-bol.com/J6JlELlBz2xl/1200x629.jpg");
var adidasShoes = new Product(75, "Adidas - Stan Smith", "Shoes", "Sneakers", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Stan_Smith_Schoenen_Wit_FX5501_01_standard.jpg");
var drMarten = new Product(150, "Dr. Martens - 1460", "Shoes", "Boots", "https://i1.adis.ws/i/drmartens/11822006.80.jpg?$medium$");
var timberland = new Product(220, "Timberland - 6 Inch Premium", "Shoes", "Boots", "https://images.timberland.com/is/image/TimberlandEU/10061713-hero?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0");
var leviesJeans = new Product(85, "Levi's - 511", "Clothing", "Jeans", "https://img01.ztat.net/article/spp-media-p1/3dd6fc1c3d263f209ef9d81e2bfb6116/8865a86f997f47729d56c2244b206301.jpg?imwidth=1800&filter=packshot");
var jackAndJonesJeans = new Product(32, "Jack & Jones - JJILIAM JJORIGINAL", "Clothing", "Jeans", "https://img01.ztat.net/article/spp-media-p1/bc5317870cb84632b8db5ba16b6de51b/aefcfeb467fe4200bad48bc31bd585f3.jpg?imwidth=1800&filter=packshot");
var bershakaJeans = new Product(30, "Bershaka - Vintage", "Clothing", "Jeans", "https://img01.ztat.net/article/spp-media-p1/d06e3f7598754a6b92849caf976c11ad/19db75dbf2534f42b5ab879bc65c1d2e.jpg?imwidth=1800&filter=packshot");
var gStarShirt = new Product(40, "G Star - Dunda", "Clothing", "Shirt", "https://img01.ztat.net/article/spp-media-p1/b988173c979739d6a7b56f9baa28a64d/688f149c136746a1b309a6ebe6b81ebc.jpg?imwidth=1800&filter=packshot");
var forsbergShirt = new Product(20, "Forsberg - Stoltson", "Clothing", "Shirt", "https://img01.ztat.net/article/spp-media-p1/ee297c1e0c3f45f5807f5103937b80d8/104f8962e2f44417828e8ff8492227b9.jpg?imwidth=1800&filter=packshot");
var leviesShirt = new Product(22, "Levi's - Original Tee", "Clothing", "Shirt", "https://img01.ztat.net/article/spp-media-p1/01c276157f394da5ab43da3d9256f8e4/b526407ff60e490f8e318812063f6b51.jpg?imwidth=1800&filter=packshot");
var tommyHilShirt = new Product(60, "Tommy Hilfiger - Regular", "Clothing", "Shirt", "https://img01.ztat.net/article/spp-media-p1/25fba27a171632689b1e9b0723884732/7a14e2a8b5c945059d7ae8c2051fae41.jpg?imwidth=1800&filter=packshot");
products.push(tommyHilShirt, leviesShirt, forsbergShirt, gStarShirt, bershakaJeans, jackAndJonesJeans, leviesJeans, timberland, drMarten, adidasShoes, jordanShoes, airmaxShoes);
var filteredByType = function (type) {
    return products.filter(function (ele) { return ele.getType == type; });
};
var findCheapestItem = function () {
    return products.reduce(function (prev, current) {
        return prev.getPrice < current.getPrice ? prev : current;
    });
};
var sortProductsByPrice = function () {
    return __spreadArrays(products).sort(function (a, b) { return a.getPrice - b.getPrice; });
};
var findProductName = function (input) {
    var filteredByString = products.filter(function (ele) {
        return ele.getName.toLowerCase().includes(input);
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
            var img = document.createElement("img");
            img.src = ele.getImg;
            li.textContent = ele.getName;
            li.append(img);
            ulEl.append(li);
        });
    }
    else {
        ulEl.replaceChildren();
    }
});
