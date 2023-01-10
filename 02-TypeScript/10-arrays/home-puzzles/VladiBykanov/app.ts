class Product {
  name: string;
  price: number;
  department: string;
  type: string;
  constructor(price: number, name: string, department: string, type: string) {
    this.price = price;
    this.name = name;
    this.department = department;
    this.type = type;
  }

  getPrice() {
    return this.price;
  }
  getName() {
    return this.name;
  }
  getDepartment() {
    return this.department;
  }
  getType() {
    return this.type;
  }
}

const products: Product[] = [];
const nikeShoes = new Product(100, "Air Jordan 1", "Shoes", "Sneakers");
products.push(nikeShoes);
const adidasShoes = new Product(75, "Stan Smith", "Shoes", "Sneakers");
products.push(adidasShoes);
const drMarten = new Product(150, "1460", "Shoes", "Boots");
products.push(drMarten);
const timberland = new Product(220, "6 Inch Premium", "Shoes", "Boots");
products.push(timberland);
const leviesJeans = new Product(85, "511", "Clothing", "Jeans");
products.push(leviesJeans);
const jackAndJonesJeans = new Product(32, "JJiliam", "Clothing", "Jeans");
products.push(jackAndJonesJeans);
const bershakaJeans = new Product(30, "Vintage", "Clothing", "Jeans");
products.push(bershakaJeans);
const gStarShirt = new Product(40, "Dunda", "Clothing", "Shirt");
products.push(gStarShirt);
const forsbergShirt = new Product(20, "Stoltson", "Clothing", "Shirt");
products.push(forsbergShirt);
const leviesShirt = new Product(22, "Original Tee", "Clothing", "Shirt");
products.push(leviesShirt);
const tommyHilShirt = new Product(60, "Regular", "Clothing", "Shirt");
products.push(tommyHilShirt);


const filteredByType = (type: string): Product[] =>
  products.filter((ele) => ele.getType() == type);

const findCheapestItem = () =>
  products.reduce((prev, current) =>
    prev.price < current.price ? prev : current
  );

const sortProductsByPrice = () =>
  [...products].sort((a, b) => a.price - b.price);

// HW level 1
console.log(filteredByType("Sneakers"));
// HW level 2
console.log(findCheapestItem());
// HW level 3
console.log(sortProductsByPrice());

