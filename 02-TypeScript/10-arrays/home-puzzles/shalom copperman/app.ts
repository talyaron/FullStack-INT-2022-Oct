class products {
    constructor (
        public name:string,
        public brand: string,
        public department: string,
        public price: number
    ){}

    }

const zaraShirts new products ("shirt","zara","man",120);
const markPants new products ('pants','mark','women',170);
const sheinCoats new products ('coat', 'shein','unisex',249);

const mystore: products [] = [
    zaraShirts,
    markPants,
    sheinCoats
];

function cheapestProductIndex (items: products[]) : number | false {
    try {
        if (!Array.isArray(items)) throw new Error('the array is invalid');
        if (itemns.length===0) throw new Error ('the list is empty');
        let minIndex = 0;
        let minprice = items[0];
        for (let i=0; i < items.length; i++) {
            if (items[i]< minprice) {
                minprice=items[i];
                minIndex=i;
            }
        }
        return minIndex;
        
    } catch (error) {
       console.log (error) ;
       return false;
    }
}

const index = cheapestProductIndex(mystore);
if (index) {
    console.log(`the cheapest item is ${mystore[index]}`)
} else {
    console.log ('there was an error during running time')
}

