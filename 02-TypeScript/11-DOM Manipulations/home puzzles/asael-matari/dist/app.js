// 2) get five image URLs from the user and print five images on the DOM.
function add5ImgUrl() {
    try {
        var imgs = document.querySelector(".imgs");
        for (var i = 0; i < 5; i++) {
            var urlUser = prompt("Enter the link please!");
            if (urlUser && imgs) {
                imgs.innerHTML += "<div> <img src = '" + urlUser + "'/></div>";
            }
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
// getImgUrl();
// 3) use the previous puzzle on store items, and show them on the items on the DOM
var Market = /** @class */ (function () {
    function Market(name, price, department, imgOfProduct) {
        this.name = name;
        this.price = price;
        this.department = department;
        this.imgOfProduct = imgOfProduct;
    }
    return Market;
}());
var tomato = new Market("tomato", 1, "vegetable department", "https://st1.foodsd.co.il/Images/Products/large/hagiSJ2GI3.jpg");
var cucumber = new Market("cucumber", 1.0, "vegetable department", "https://bit.ly/3VMvRFW");
var bread = new Market("bread", 5.0, "pastries department", "https://bit.ly/3Mb7fn4");
var tuna = new Market("tuna", 12, "fish department", "https://bit.ly/3HTmU83");
var products = [tomato, cucumber, bread, tuna, tomato, cucumber, bread, tuna];
function productsInMarket(p) {
    try {
        var imgs = document.querySelector(".imgs");
        if (imgs && products) {
            for (var i = 0; i < p.length; i++) {
                imgs.innerHTML += "<div class='card'><img class='img' src='" + p[i].imgOfProduct + "'/><p>Name Of Product: " + p[i].name + "<br>\n                Department:" + p[i].department + "<br> price:" + p[i].price + "\n    \n                </div>";
            }
        }
        else
            throw new Error("The values imgs and products its empty");
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
productsInMarket(products);
