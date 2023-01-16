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


