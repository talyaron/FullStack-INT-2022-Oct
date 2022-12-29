let productPrice: Function = (productName: string): number | false => {
  try {
    if (!productName) {
      throw new Error("Invalid product name");
    }
    switch (productName) {
      case "ice-cream":
        return 8;
      case "cake":
        return 70;
      case "cookie":
        return 5;
    }
    throw new Error("Invalid product name");
  } catch (error) {
    console.error(error);
    return false;
  }
};

const productName = prompt("What is your product?");
const price = productPrice(productName);
if (price === false) {
    alert ('You did not enter a valid product')
} else {
    alert (`Your price is ${price}`);
}
