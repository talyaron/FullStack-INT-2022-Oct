// 2) get five image URLs from the user and print five images on the DOM.

function add5ImgUrl() {
  try {
    let imgs: HTMLBodyElement | null = document.querySelector(".imgs");
    for (let i = 0; i < 5; i++) {
      let urlUser: string | null = prompt("Enter the link please!");
      if (urlUser && imgs) {
        imgs.innerHTML += `<div> <img src = '${urlUser}'/></div>`;
      }
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

// getImgUrl();

// 3) use the previous puzzle on store items, and show them on the items on the DOM
class Market {
  constructor(
    public name: string,
    public price: number,
    public department: string,
    public imgOfProduct: string
  ) {}
}
const tomato = new Market(
  "tomato",
  1,
  "vegetable department",
  "https://st1.foodsd.co.il/Images/Products/large/hagiSJ2GI3.jpg"
);
const cucumber = new Market(
  "cucumber",
  1.0,
  "vegetable department",
  "https://bit.ly/3VMvRFW"
);
const bread = new Market(
  "bread",
  5.0,
  "pastries department",
  "https://bit.ly/3Mb7fn4"
);
const tuna = new Market(
  "tuna",
  12,
  "fish department",
  "https://bit.ly/3HTmU83"
);

const products: Market[] = [tomato, cucumber, bread, tuna, tomato,cucumber,bread,tuna];

function productsInMarket(p: Market[]) {
  try {
    let imgs: HTMLBodyElement | null = document.querySelector(".imgs");
    if (imgs && products) {
      for (let i = 0; i < p.length; i++) {
        imgs.innerHTML += `<div class='card'><img class='img' src='${p[i].imgOfProduct}'/><p>Name Of Product: ${p[i].name}<br>
                Department:${p[i].department}<br> price:${p[i].price}
    
                </div>`;
      }
    } else throw new Error("The values imgs and products its empty");
  } catch (error) {
    console.error(error);
    return false;
  }
}
productsInMarket(products);
