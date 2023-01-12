class Cars {
  constructor(
    public name: string,
    public price: number,
    public model: string
  ) {}
}

const tesla_model_s = new Cars("Tesla", 170000, "3");
const tesla_model_3 = new Cars("Tesla", 370000, "s");
const tesla_model_x = new Cars("Tesla", 270000, "x");
const tesla_model_y = new Cars("Tesla", 470000, "y");

const myCars: Cars[] = [
  tesla_model_s,
  tesla_model_3,
  tesla_model_x,
  tesla_model_y,
];

const companyCars: Cars[] = [];

function cheapest_price(items: Cars[]): Cars | false {
  try {
    if (!Array.isArray(items)) throw new Error("Items is not an array");
    if (items.length === 0) throw new Error("array is empty");

    let minPrice = items[0].price;
    let minIndex = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].price < minPrice) {
        minPrice = items[i].price;
        minIndex = i;
      }
    }
    return items[minIndex];
  }
  catch (error) {
    console.error(error);
    return false;
  }
}

const cheapestCar = cheapest_price(myCars);
console.log(cheapestCar)
console.log('hi')

// function rateCars() {
//   return [...items].sort((a, b) => a.price - b.price);
// }

// console.log(rateCars());
