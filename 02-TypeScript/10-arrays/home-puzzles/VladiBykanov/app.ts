class Product {
  private name: string;
  private price: number;
  private department: string;
  private type: string;
  private imageLink: string;

  constructor(
    price: number,
    name: string,
    department: string,
    type: string,
    imageLink: string
  ) {
    this.price = price;
    this.name = name;
    this.department = department;
    this.type = type;
    this.imageLink = imageLink;
  }

  get getPrice() {
    return this.price;
  }
  get getName() {
    return this.name;
  }
  get getDepartment() {
    return this.department;
  }
  get getType() {
    return this.type;
  }
  get getImg() {
    return this.imageLink;
  }
}

const products: Product[] = [];
const jordanShoes = new Product(
  389,
  "Nike - Air Jordan 1",
  "Shoes",
  "Sneakers",
  "https://media.restocks.net/products/DZ5485-612/jordan-1-retro-high-og-lost-and-found-1-1000.png"
);
const airmaxShoes = new Product(
  125,
  "Nike - Air Max 91",
  "Shoes",
  "Sneakers",
  "https://media.s-bol.com/J6JlELlBz2xl/1200x629.jpg"
);
const adidasShoes = new Product(
  75,
  "Adidas - Stan Smith",
  "Shoes",
  "Sneakers",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Stan_Smith_Schoenen_Wit_FX5501_01_standard.jpg"
);
const drMarten = new Product(
  150,
  "Dr. Martens - 1460",
  "Shoes",
  "Boots",
  "https://i1.adis.ws/i/drmartens/11822006.80.jpg?$medium$"
);
const timberland = new Product(
  220,
  "Timberland - 6 Inch Premium",
  "Shoes",
  "Boots",
  "https://images.timberland.com/is/image/TimberlandEU/10061713-hero?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0"
);
const leviesJeans = new Product(
  85,
  "Levi's - 511",
  "Clothing",
  "Jeans",
  "https://img01.ztat.net/article/spp-media-p1/3dd6fc1c3d263f209ef9d81e2bfb6116/8865a86f997f47729d56c2244b206301.jpg?imwidth=1800&filter=packshot"
);
const jackAndJonesJeans = new Product(
  32,
  "Jack & Jones - JJILIAM JJORIGINAL",
  "Clothing",
  "Jeans",
  "https://img01.ztat.net/article/spp-media-p1/bc5317870cb84632b8db5ba16b6de51b/aefcfeb467fe4200bad48bc31bd585f3.jpg?imwidth=1800&filter=packshot"
);
const bershakaJeans = new Product(
  30,
  "Bershaka - Vintage",
  "Clothing",
  "Jeans",
  "https://img01.ztat.net/article/spp-media-p1/d06e3f7598754a6b92849caf976c11ad/19db75dbf2534f42b5ab879bc65c1d2e.jpg?imwidth=1800&filter=packshot"
);
const gStarShirt = new Product(
  40,
  "G Star - Dunda",
  "Clothing",
  "Shirt",
  "https://img01.ztat.net/article/spp-media-p1/b988173c979739d6a7b56f9baa28a64d/688f149c136746a1b309a6ebe6b81ebc.jpg?imwidth=1800&filter=packshot"
);
const forsbergShirt = new Product(
  20,
  "Forsberg - Stoltson",
  "Clothing",
  "Shirt",
  "https://img01.ztat.net/article/spp-media-p1/ee297c1e0c3f45f5807f5103937b80d8/104f8962e2f44417828e8ff8492227b9.jpg?imwidth=1800&filter=packshot"
);
const leviesShirt = new Product(
  22,
  "Levi's - Original Tee",
  "Clothing",
  "Shirt",
  "https://img01.ztat.net/article/spp-media-p1/01c276157f394da5ab43da3d9256f8e4/b526407ff60e490f8e318812063f6b51.jpg?imwidth=1800&filter=packshot"
);
const tommyHilShirt = new Product(
  60,
  "Tommy Hilfiger - Regular",
  "Clothing",
  "Shirt",
  "https://img01.ztat.net/article/spp-media-p1/25fba27a171632689b1e9b0723884732/7a14e2a8b5c945059d7ae8c2051fae41.jpg?imwidth=1800&filter=packshot"
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
  jordanShoes,
  airmaxShoes
);

const filteredByType = (type: string, arr: Product[]): Product[] | false => {
  try {
    return arr.filter((ele) => ele.getType == type);
  } catch (error) {
    console.log(error);
    return false;
  }
};

const findCheapestItem = (arr: Product[]): Product | false => {
  try {
    return arr.reduce((prev, current) =>
      prev.getPrice < current.getPrice ? prev : current
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};

const sortProductsByPrice = (arr: Product[]): Product[] | false => {
  try {
    return [...arr].sort((a, b) => a.getPrice - b.getPrice);
  } catch (error) {
    console.log(error);
    return false;
  }
};

const findProductName = (input: string, arr: Product[]): Product[] | false => {
  try {
    // I would use peoduct, instead of ele. this will help others to understand easly what is it taht you are passing
    const filteredByString = arr.filter((ele) =>
      ele.getName.toLowerCase().includes(input)
    );
    return filteredByString;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// HW level 1 - filter list by type "Sneakers"
console.log(filteredByType("Sneakers", products));

// HW level 2 - Finding cheapest product on list
console.log(findCheapestItem(products));

// HW level 3 - Sorting all products from cheapest to most exepensive
console.log(sortProductsByPrice(products));

// HW level 4 - Finding product based on String
console.log(findProductName("da", products));
console.log(findProductName("6", products));
console.log(findProductName("bsrge", products));

//Tal: Created search app that displayes related products in real time
const searchInput = document.querySelector("#search") as HTMLInputElement;
const ulEl = document.querySelector(".displayedList") as HTMLUListElement;

window.addEventListener("keyup", () => {
  if (searchInput.value != "") {
    //Tal: I would use ulElement instead of ulEl --> much more easy to undersant.
    ulEl.replaceChildren();
    const listToDisplay: Product[] | boolean = findProductName(
      searchInput.value,
      products
    );
    if (listToDisplay !== false) {
      listToDisplay.forEach((ele) => {
        //Tal: Using innerHTMl gives you better control on the apperance, and it is much more easy to understand
        const li = document.createElement("li") as HTMLElement;
        const img = document.createElement("img") as HTMLImageElement;
        img.src = ele.getImg;
        li.textContent = ele.getName;
        li.append(img);
        ulEl.append(li);
      });
    }
  } else {
    ulEl.replaceChildren();
  }
});
