class product {
    constructor(
        public name: string,
        public category: string,
        public price: number
    ) {}
}

const spongeBobShirt:product = new product('spongeBobShirt','shirts',30);
const spongeBob2Shirt:product = new product('spongeBob2Shirt','shirts',10);
const patrickPants:product = new product('patrickPants','pants',25);
const squidwardUnderware:product = new product('squidwardUnderware',"Men's underware",20);

const products:Array<product> = [spongeBobShirt,spongeBob2Shirt,patrickPants,squidwardUnderware];

// 1)
function getItemOfCategory(arr:Array<product>){
    const shirts:Array<product> = [];
    for (const product in arr){
        if(arr[product].category == 'shirts'){
            shirts.push(arr[product]);
        }
    }
    return shirts;
}

console.log(getItemOfCategory(products));

// 2)
function cheapestOffAll(arr:Array<product>){
    let cheapest:number = arr[0].price;
    for (const product in arr){
        if (arr[product].price < cheapest)
        cheapest = arr[product].price;
    }
    return cheapest;
}

console.log(cheapestOffAll(products));

// 3)
function sortByPrice(arr:Array<product>){
    return arr.sort((a:product,b:product) => {
        return a.price - b.price;
    })
}

console.log(sortByPrice(products));

// 4)
function searchProduct(arr:Array<product>,keyword:string){
    let newArr:Array<product>=[];
    for (let product in arr){
        if (arr[product].name.indexOf(keyword) != -1){
            newArr.push(arr[product])
        }
    }
    return newArr;
}

console.log(searchProduct(products,'Bob'));

