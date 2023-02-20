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
    const filteredByString = arr.filter((ele) =>
      ele.getName.toLowerCase().includes(input)
    );
    return filteredByString;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Created search app that displayes related products in real time
const searchInput = document.querySelector("#search") as HTMLInputElement;
const ulEl = document.querySelector(".displayedList") as HTMLUListElement;
const openFormBtn = document.querySelector(
  ".addNewItemForm"
) as HTMLButtonElement;

const newItemPrice = document.querySelector(
  ".newItemPrice"
) as HTMLInputElement;
const newItemName = document.querySelector(".newItemName") as HTMLInputElement;
const newItemDepartment = document.querySelector(
  ".newItemDepartment"
) as HTMLInputElement;
const newItemType = document.querySelector(".newItemType") as HTMLInputElement;
const newItemLink = document.querySelector(".newItemLink") as HTMLInputElement;

const urlRegex = new RegExp(
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
);
const addItemForm = document.querySelector(".addItemForm") as HTMLFormElement;

// render items to screen when page is loaded for the first time
displayItems(products);

searchInput.addEventListener("keyup", () => {
  try {
    if (searchInput.value != "") {
      ulEl.replaceChildren();
      const listToDisplay: Product[] | boolean = findProductName(
        searchInput.value,
        products
      );
      if (listToDisplay !== false) {
        displayItems(listToDisplay);
      }
    } else {
      displayItems(products);
    }
  } catch (error) {
    console.log(error);
  }
});

openFormBtn.addEventListener("click", () => {
  try {
    addItemForm.style.transform = "translateY(0)";
  } catch (error) {
    console.log(error);
  }
});

addItemForm.addEventListener("submit", submitForm);

function displayItems(arr: Product[]) {
  try {
    ulEl.replaceChildren();
    arr.forEach((ele) => {
      const li = document.createElement("li") as HTMLElement;
      const img = document.createElement("img") as HTMLImageElement;
      img.src = ele.getImg;
      li.textContent = ele.getName;
      li.append(img);
      ulEl.append(li);
    });
  } catch (error) {
    console.log(error);
  }
}

function submitForm(e: Event) {
  //Preventing page from refrashing affter submiting form
  e.preventDefault();

  const priceValue = parseFloat(newItemPrice.value);
  const nameValue = newItemName.value;
  const departmentValue = newItemDepartment.value;
  const typeValue = newItemType.value;
  const linkValue = newItemLink.value;
  doesImageExist(linkValue)
    .then((res) => {
      if (
        nameValue.length > 6 &&
        res &&
        priceValue &&
        departmentValue &&
        typeValue
      ) {
        const newItem = new Product(
          priceValue,
          nameValue,
          departmentValue,
          typeValue,
          linkValue
        );
        products.unshift(newItem);
        displayItems(products);
        addItemForm.style.transform = "translateY(-100vh)";
        newItemPrice.value = "";
        newItemName.value = "";
        newItemDepartment.value = "";
        newItemType.value = "";
        newItemLink.value = "";
      } else {
        alert("Fill in all the info correctly.");
      }
    })
    .catch(() => console.log('not real img'));
}

// trying something (not working yet)
const doesImageExist = (url: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.src = url;
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
  });
};

// doesImageExist(
//   "https://img01.ztat.net/article/spp-media-p1/d5e1e146adfb350dbd5165d561870b55/b3085171bfa240aba35322de6f8a1e66.jpg?imwidth=1800&filter=packshot"
// );
