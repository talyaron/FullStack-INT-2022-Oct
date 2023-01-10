/*
Create an array of products in a shop (for instance, a clothes shop).
In the array, put several items. Each item has price, name, and department (for example, "women's tops," "man underwear," etc.), and type (for example, "shirt," "trousers").


1. get all the items in a type (all "shirts")
2. find the cheapest item.
3. sort all items in a department by price. Show the cheapest on the top of the array.
4. find an item in the array by its name, using part of the name. for instance, the user will search for "je" and will get "Dizzle jeans.", "Levies Jeans", etc.
*/

class Item {
  public constructor(
    public name: string,
    public department: string,
    public type: string,
    public price: number
  ) {}
}

const shirtLevisW = new Item("shirt-Levis-white", "women", "shirt", 19.9);
const shirtLevisM = new Item("shirt-Levis-blue", "men", "shirt", 19.9);
const skirtW = new Item("skirt-black", "women", "skirt", 29.9);
const jeansDizzleM = new Item("jeans-Dizzle-deepBlue", "men", "pants", 59.9);
const shirtPackB = new Item("shirts-pack-grey", "baby", "shirt", 9.9);
const blouseW = new Item("blouse-black", "women", "shirt", 15.9);
const sweatshirtNikeK = new Item("sweatshirt-Nike-white", "kids", "sweatshirt", 49.9);
const dressW = new Item("dress-pink", "women", "dress", 39.9);
const denimJacketM = new Item("denimJacket-Levis", "men", "outwear", 79.9);
const activeSetNikeW = new Item("activeSet-Nike", "women", "pants", 19.9);
const coatGapB = new Item("coat-Gap-purple", "baby", "outwear", 49.9);

const clothesShopArr: Item[] = [
  shirtLevisW,
  shirtLevisM,
  skirtW,
  jeansDizzleM,
  shirtPackB,
  blouseW,
  sweatshirtNikeK,
  dressW,
  sweatshirtNikeK,
  denimJacketM,
  activeSetNikeW,
  coatGapB,
];

console.log (getAllItemInType(clothesShopArr));
const sortedArr= sortArrByPrice(clothesShopArr);
if (sortedArr)
    console.log (getTheCheapestItem(sortedArr));

function getAllItemInType(clothesArr:Item[]):Item[] | false{
  try {
    if (clothesArr.length==0)
        throw new Error(`there is no item in the store`);
    let typeGetFromUser;
    while (!typeGetFromUser){
      typeGetFromUser = prompt (`Enter the type of item you will want to buy:`)
    }
    const chosenItemsArr = clothesArr.filter(item => item.type== typeGetFromUser)
    if (chosenItemsArr.length==0)
      throw new Error(`items from type ${typeGetFromUser} is availble in our store`);
    return chosenItemsArr;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function sortArrByPrice (clothesArr:Item[]): Item[] | false{
  try {
    if (clothesArr.length==0)
        throw new Error(`there is no item in the store`);
    const sortedArr = clothesArr.sort((a, b) => a.price - b.price);
    return sortedArr;
  } catch (error) {
    console.error(error);
    return false;
  }
}


function getTheCheapestItem (sortedArr:Item[]): Item[] | false{
  try {
    const chosenItemsArr = clothesShopArr.filter(item => item.price== sortedArr[0].price);
    return sortedArr;
  } catch (error) {
    console.error(error);
    return false;
  }
}
