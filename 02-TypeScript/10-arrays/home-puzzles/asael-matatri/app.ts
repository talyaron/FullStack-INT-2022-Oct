// Create an array of products in a shop (for instance, a clothes shop).
// In the array, put several items. Each item has price, name, and department (for example, "women's tops,"
//  "man underwear," etc.), and type (for example, "shirt," "trousers").

class product {
  constructor(
    public name: string,
    public price: number,
    public department: string,
    public type: string
  ) {}
}
const tomato = new product("tomato", 1.9, "vegetable department", "vegetable");
const cucumber = new product(
  "cucumber",
  1.0,
  "vegetable department",
  "vegetable"
);
const bread = new product("bread", 5.0, "pastries department", "pastries");
const tuna = new product("tuna", 1.9, "fish department", "fish");

// 1. get all the items in a type (all "shirts")
const market: product[] = [tomato, cucumber, bread, tuna];
const getByType: product[] = market.filter(
  (product) => product.type === "vegetable");
// console.log(getByType);

// 2. find the cheapest item.
// 3. sort all items in a department by price. Show the cheapest on the top of the array.

const getChepest: product[] = market.sort((a, b) => a.price - b.price);
// console.log(getChepest);
// console.log(getChepest[0]);
///////////////////////////////////////////////////////////////////// OR
const minPrice:number= 2
const getChepes: product[] = market.filter((product) =>product.price<minPrice);
// console.log(getChepes);

// 4. find an item in the array by its name, using part of the name. for instance, the user will search for "je" and
//  will get "Dizzle jeans.", "Levies Jeans", etc.
