class Product {
    constructor(price, name, department) {
        this.price = price;
        this.name = name;
        this.department = department;
    }
}
const shirt = new Product(150, "shirt", "man");
const pants = new Product(50, "pants", "woman");
const hat = new Product(70, "hat", "man");
const dress = new Product(125, "dress", "woman");
const products = [shirt, pants, hat, dress];
const filteredProducts = products.filter(checkType);
const sortedArray = products.sort(function (a, b) { return a.price - b.price; });
function checkType(product) {
    return product.department === "man";
}
console.log(filteredProducts);
console.log(sortedArray);
console.log(sortedArray[0]);
const filteredProductsTest = products.filter(checkString);
const userInput = prompt("enter your search:");
function checkString(product) {
    while (userInput !== null) {
        //console.log(product.name.includes("t"))
        return product.name.includes(userInput);
    }
    return false;
}
console.log(filteredProductsTest);
