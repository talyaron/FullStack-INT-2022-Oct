class Cars {
    constructor(
    public name: string,
    public price: number,
    public model: string,
    ) {}
}

const tesla_model_s = new Cars("Tesla",170000,"3")
const tesla_model_3 = new Cars("Tesla",370000,"s")
const tesla_model_x = new Cars("Tesla",270000,"x")
const tesla_model_y = new Cars("Tesla",470000,"y")


const items: Cars[] = [tesla_model_s,tesla_model_3,tesla_model_x,tesla_model_y]

function cheapest_price () {
let result = items[0].price;
for (let i=0; i < items.length; i++) {
if (items[i].price < result) {
result = items[i].price;
}
}

console.log("Smallest number is: " + result);
}

cheapest_price();


function rateCars() {
return [...items].sort((a, b) => a.price - b.price);
}

console.log(rateCars());