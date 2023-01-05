class Video {
    name: string;
    price: number;
    yearOfRelease: number;

    constructor (name: string, price: number, yearOfRelease : number = 2000) {
        this.name = name;
        this.price = price;
        this.yearOfRelease = yearOfRelease;
    }

    priceNis () {
        return this.price*3.5;
    }

    age () {
        return new Date().getFullYear() - this.yearOfRelease;
    }
}

const jamesBond = new Video ("james", 5.8, 1985);
const lordOfTheRings = new Video ("lord of the rings", 3.5);
const matrix = new Video ("matrix", 6.2);
console.log (jamesBond.age())
console.log (lordOfTheRings.age());
console.log (matrix.age())