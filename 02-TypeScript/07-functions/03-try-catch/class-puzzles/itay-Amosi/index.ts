let chooseFood: Function = (productName: string): number | false => {
  try {
    if (!productName) {
      throw new Error(`You must choose Product Name`)
    }
    switch (productName) {
      case `ice cream`:
        return 8
      case `cake`:
        return 70
      case `cookie`:
        return 5
    }
    throw new Error(`Invalid Product Name`)
  } catch (error) {
    console.error(error)
    return false
  }
}
const productName = prompt('Choose Product Name')
const price = chooseFood(productName)
if (price === false) {
  alert('You did not enter a correct product name')
} else {
  alert(`Your price is ${price}`)
}
