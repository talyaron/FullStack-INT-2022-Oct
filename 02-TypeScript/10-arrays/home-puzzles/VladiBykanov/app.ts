class Product {
  private name: string;
  private price: number;
  private department: string;
  private type: string;
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
const nikeShoes = new Product(100, "Nike - Air Jordan 1", "Shoes", "Sneakers");
const adidasShoes = new Product(75, "Adidas - Stan Smith", "Shoes", "Sneakers");
const drMarten = new Product(150, "Dr. Martens - 1460", "Shoes", "Boots");
const timberland = new Product(
  220,
  "Timberland - 6 Inch Premium",
  "Shoes",
  "Boots"
);
const leviesJeans = new Product(85, "Levi's - 511", "Clothing", "Jeans");
const jackAndJonesJeans = new Product(
  32,
  "Jack & Jones - JJiliam",
  "Clothing",
  "Jeans"
);
const bershakaJeans = new Product(
  30,
  "Bershaka - Vintage",
  "Clothing",
  "Jeans"
);
const gStarShirt = new Product(40, "G Star - Dunda", "Clothing", "Shirt");
const forsbergShirt = new Product(
  20,
  "Forsberg - Stoltson",
  "Clothing",
  "Shirt"
);
const leviesShirt = new Product(
  22,
  "Levi's - Original Tee",
  "Clothing",
  "Shirt"
);
const tommyHilShirt = new Product(
  60,
  "Tommy Hilfiger - Regular",
  "Clothing",
  "Shirt"
);

products.push(
  tommyHilShirt,
  leviesShirt,
  forsbergShirt,
  gStarShirt,
  bershakaJeans,
  jackAndJonesJeans,
  leviesJeans,
  timberland,
  drMarten,
  adidasShoes,
  nikeShoes
);

const filteredByType = (type: string): Product[] =>
  products.filter((ele) => ele.getType() == type);

const findCheapestItem = () =>
  products.reduce((prev, current) =>
    prev.getPrice() < current.getPrice() ? prev : current
  );

const sortProductsByPrice = () =>
  [...products].sort((a, b) => a.getPrice() - b.getPrice());

const findProductName = (input: string) => {
  const filteredByString = products.filter((ele) =>
    ele.getName().toLowerCase().includes(input)
  );
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
const searchInput = document.querySelector("#search") as HTMLInputElement;
const ulEl = document.querySelector(".displayedList") as HTMLUListElement;

window.addEventListener("keyup", () => {
  if (searchInput.value != "") {
    ulEl.replaceChildren();
    const listToDisplay = findProductName(searchInput.value);
    listToDisplay.forEach((ele) => {
      const li = document.createElement("li") as HTMLElement;
      li.textContent = ele.getName();
      ulEl.append(li);
    });
  } else {
    ulEl.replaceChildren();
  }
});
