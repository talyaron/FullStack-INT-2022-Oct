"use strict";

class Product {
  constructor(
    private department: string,
    private name: string,
    public price: number,
    private type: string
  ) {}
}

const pants = new Product("mans bottoms", "blue pants", 30, "clothes");
const shirt = new Product("womans tops", "black top", 25, "clothes");
const neckless = new Product(
  "womans jewelry",
  "pearl neckless",
  50,
  "accessories"
);
const underwear = new Product(
  "mans underwear",
  "gray underwear",
  13,
  "clothes"
);
const shoes = new Product("womans shoes", "high hills", 50, "shoes");
const bracelet = new Product(
  "mans jewelry",
  "nice bracelet",
  27,
  "accessories"
);
const hat = new Product("mans hat", "green hat", 17, "accessories");

const products: Product[] = [
  pants,
  shirt,
  neckless,
  underwear,
  shoes,
  bracelet,
  hat,
];
console.log(products);

// 1. get all the items in a type (all "shirts")

console.log(products.filter((Product) => Product.type === "accessories"));

// 2. find the cheapest item.

const products: Product[] = [
  pants.price,
  shirt.price,
  neckless.price,
  underwear.price,
  shoes.price,
  bracelet.price,
  hat.price,
];
console.log(products);
var cheapest = products[0];
// console.log(cheapest);

for (var i = 0; i < products.length; i++) {
  if (cheapest > products[i]) {
    cheapest = products[i];
  }
}
console.log(`The cheapest price is: ${cheapest}`);
