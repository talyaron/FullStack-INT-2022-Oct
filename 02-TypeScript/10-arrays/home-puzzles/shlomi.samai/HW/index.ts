class Product {
  public constructor(
    public price: number,
    public name: string,
    public department: string,
  ) { }
}

const shirt = new Product(150, "shirt", "man")
const pants = new Product(50, "pants", "woman")
const hat = new Product(70, "hat", "man")
const dress = new Product(125, "dress", "woman")


const products: Product[] = [shirt, pants, hat, dress]

const filteredProducts: Product[] = products.filter(checkType);
const sortedArray: Product[] = products.sort(function (a, b) { return a.price - b.price })

function checkType(product: Product) {
  return product.department === "man"
}

console.log(filteredProducts)
console.log(sortedArray)
console.log(sortedArray[0])

function checkString(input: Product[], text: string) {

  try {
      let i = 0
      let filteredProductsByText: Product[] = []
      for (i = 0; i <= input.length-1; i++) {
        if (input[i].name.includes(text)) {
          filteredProductsByText.push(input[i])
        }
        }
        return filteredProductsByText       
    }
  catch (Error) {
    console.error(Error);
    return false;
  }
}

let userInput = prompt("enter your search:")
if (userInput!==null) {
  console.log(checkString(products,userInput))
  }
// while (userInput!==null) {
//   console.log(checkString(products,userInput))
//   }