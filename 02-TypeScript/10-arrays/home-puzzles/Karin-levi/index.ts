class Product {
    constructor(public price: number, public name: string, public department: string, public type: string) { }
}
class Shop {
    constructor(public products: Product[]) { }

    getProductByType(type: string): Product[] {
        return products.filter(product => product.type === type);
    }

    cheepestItem(): Product {
        return products.reduce((prev, current) => (prev.price > current.price) ? current : prev)
    }

    sortByPriceAsc(): Product[] {
        return products.sort((a, b) => a.price - b.price);
    }

    findProduct(searchTerm: string): Product[] {
        return products.filter(product => product.name.includes(searchTerm));
    }
}

const shirt = new Product(50, `TShirt`, `men`, `men shirts`);
const skirt = new Product(60, `white`, `female`, `womens skirts`);
const sweater = new Product(70, `blue`, `men`, `men sweaters`);
const womentop = new Product(570, `sport-top`, `female`, `womens tops`);
const underwear = new Product(560, `black`, `men`, `men underwear`);
const pants = new Product(550, `skini`, `female`, `womens pants`);

const products: Product[] = [shirt, skirt, sweater, womentop, underwear, pants];
const shop: Shop = new Shop(products)

console.log(`here are all the products: `, products);
console.log(`cheepest product is: `, shop.cheepestItem());
console.log(`sorted by price ascending: `, shop.sortByPriceAsc());
console.log(`products that contain "rt": `, shop.findProduct("rt"))

