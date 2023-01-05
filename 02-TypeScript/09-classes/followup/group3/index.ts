class movie {
    name: string;
    price: number;

    constructor  (name: string, price: number) {
        this.name = name;
        this.price = price;
    }

     priceToNIS() {
         return this.price*3.5;
    }
}

const shrek = new movie('shrek', 10)
const ironMan = new movie ('Iron Man' , 7)
const tired = new movie ('tired', 666)

console.log(shrek.priceToNIS())
console.log(ironMan.priceToNIS())
console.log(tired.priceToNIS())
