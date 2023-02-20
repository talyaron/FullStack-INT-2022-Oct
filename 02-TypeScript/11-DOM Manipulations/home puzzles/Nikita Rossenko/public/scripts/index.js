// 2)
function addImages() {
    var imageArr = [];
    while (imageArr.length < 5) {
        var userImage = prompt("Please enter 5 URL's of an image one by one: " + imageArr.length + "/5");
        if (userImage) {
            imageArr.push("<img class=\"image" + (imageArr.length + 1) + "\" src=\"" + userImage + "\">\n");
        }
    }
    var imageContainer = document.querySelector(".imageContainer__imageGallery");
    if (imageContainer != null) {
        imageContainer.innerHTML = imageArr.join("");
    }
}
addImages();
// 3)
var product = /** @class */ (function () {
    function product(name, category, price, image) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
    }
    return product;
}());
var spongeBobShirt = new product("SpongeBob's Shirt", "T-Shirt", 30, "https://www.pngkey.com/png/full/612-6120757_spongebob-man-graphic-t-shirt-bft4044-1-.png");
var spongeBob2Shirt = new product("SpongeBob's Shirt", "T-Shirt", 10, "https://www.seekpng.com/png/full/280-2809911_shocked-spongebob-t-shirt-maglietta-gucci-bugs-bunny.png");
var patrickPants = new product("Spongebob's Hat", "Hats", 25, "https://cdn.shopify.com/s/files/1/0197/1303/2254/products/12711550_SPONGEBOB_A_400x.png?v=1620726871");
var squidwardUnderware = new product("SpongeBob's Hoodie", "Hoodies", 20, "https://cdn.shopify.com/s/files/1/0150/0643/3380/products/SB-OICM_Viacom_Spongebob_Delta97200_HeatherOatmeal_1024x1024.png?v=1588254646");
var products = [
    spongeBobShirt,
    spongeBob2Shirt,
    patrickPants,
    squidwardUnderware,
];
function addProductsToDOM(arr) {
    var productsContainer = document.querySelector(".productsContainer__productsGrid");
    var productsStore = "";
    for (var product_1 in products) {
        productsStore = productsStore +
            ("<div class=\"product" + product_1 + "\"\n>\n            <h1>" + products[product_1].name + "</h1>\n\n            <p>Product Category: " + products[product_1].category + "</p>\n\n            <p>Product price: " + products[product_1].price + "$</p>\n\n            <img src=\"" + products[product_1].image + "\">\n\n            <button>Buy Now!</button>\n            </div>\n");
    }
    if (productsContainer != null) {
        productsContainer.innerHTML = productsStore;
    }
}
addProductsToDOM(products);
