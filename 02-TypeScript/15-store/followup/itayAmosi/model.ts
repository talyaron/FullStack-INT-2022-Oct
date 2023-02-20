class Product {
  uid: string;
  
  constructor(
    public name: string,
    public price: number,
    public type: string,
    public size: number,
    public serial: string
  ) {
    this.uid = uid();
  }
}
const products:Product[] = [];

// products.push(new Product('Zara-pants',350,"pants",38,"54dfg545963sa"))
// console.log(products)
