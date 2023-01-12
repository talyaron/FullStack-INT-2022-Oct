class Product {
    constructor(price, name, department, searchString) {
        this.price = price;
        this.name = name;
        this.department = department;
        this.searchString = searchString;
    }
}
const shirt = new Product(150, "shirt", "man", "test");
const pants = new Product(50, "pants", "woman", "test");
const hat = new Product(70, "hat", "man", "test");
const dress = new Product(125, "dress", "woman", "test");
const products = [shirt, pants, hat, dress];
const filteredProducts = products.filter(checkType);
const sortedArray = products.sort(function (a, b) { return a.price - b.price; });
function checkType(product) {
    return product.department === "man";
}
//console.log(filteredProducts)
// console.log(sortedArray)
//console.log(sortedArray[0])
const filteredProductsTest = products.filter(checkString);
const userInput = prompt("enter your search:");
let i = 0;
while (i <= products.length - 1 && userInput !== null) {
    products[i].searchString = userInput;
    //console.log(products[i].searchString)
    i++;
}
function checkString(input) {
    try {
        while (input.searchString !== null) {
            return input.name.includes(input.searchString);
        }
        return false;
    }
    catch (Error) {
        console.error(Error);
        return false;
    }
}
console.log(filteredProductsTest);