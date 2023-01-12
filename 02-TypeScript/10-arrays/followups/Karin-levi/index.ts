class Person{
    constructor(private name:string){}
}


const noam = new Person("noam");
const ruth = new Person("Ruth");
const dan = new Person("Dan");


const persons:Person[] = [noam,ruth,dan];
console.log(persons)
console.log(persons[-1])
