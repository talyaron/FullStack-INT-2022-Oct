class product {
    public constructor(
        public name:string,
        public department:string,
        public type:string,
        public price:number
    ){}
}

const cbr650 = new product("CBR650", "Motorcycle", "Honda", 100);
const cbr500 = new product("CBR650", "Motorcycle", "Honda", 80);
const cbr1000 = new product("CBR650", "Motorcycle", "Honda", 200);
const cbr250 = new product("CBR650", "Motorcycle", "Honda", 30);
const ninja650 = new product("CBR650", "Motorcycle", "kawasaki", 100);
const ninja500 = new product("CBR650", "Motorcycle", "kawasaki", 80);
const ninja1000 = new product("CBR650", "Motorcycle", "kawasaki", 200);
const ninja250 = new product("CBR650", "Motorcycle", "kawasaki", 30);

const PartushMotors:product[] = [
    cbr1000,cbr250,cbr500,cbr650,ninja1000,ninja650,ninja500,ninja250,
];

// Exercise #1
const kawasaki = PartushMotors.filter(product => product.type === "kawasaki");
console.log(kawasaki);

// Exercise #2
const cheapest = PartushMotors.filter((motorcycle) => {
    return motorcycle.price <= 30
});
console.log(cheapest);

// Exercise #3 - I did Type instead of department
const sortedbyprice = PartushMotors.filter(motorcycle => motorcycle.type === "Honda")
    .sort((a, b) => a.price - b.price);
console.log(sortedbyprice);






