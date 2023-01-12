class Clothes{
    private name:string;
    private price:number;
    private department:string;
    private type:string;
    constructor(name:string, price:number, department:string, type:string) {
        this.department = department;
        this.name = name;
        this.price = price;
        this.type = type;
    }

    getName():string {
        return this.name;
    }

    getPrice():number {
        return this.price;
    }

    getDepartment():string {
        return this.department;
    }

    getType():string {
        return this.type;
    }
}

const shirt1 = new Clothes("shirt", 10, "man's shirt", "shirt");
const shirt2 = new Clothes("shirt", 20, "man's shirt", "shirt");
const shirt3 = new Clothes("shirt", 30, "man's shirt", "shirt");
const shirt4 = new Clothes("shirt", 70, "man's shirt", "shirt");
const shirt5 = new Clothes("shirt", 25, "man's shirt", "shirt");
const shirt6 = new Clothes("shirt", 4, "man's shirt", "shirt");
const pants1 = new Clothes("pants", 50, "man's pants", "pants");

const arr1:Clothes[] = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, pants1];


//Only shirts
const allShirts:Clothes[] = arr1.filter((person)=> {
    return person.getType() == "shirt";
})


//Cheapest item
arr1.sort((person1, person2)=> {
    return person1.getPrice() - person2.getPrice();
})

console.log(`Cheapest item is ${arr1[0].getName()} and it costs ${arr1[0].getPrice()}$`);