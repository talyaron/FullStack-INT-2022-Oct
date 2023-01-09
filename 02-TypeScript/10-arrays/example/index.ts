class Person{
    constructor(private name:string){}
}

const noam = new Person("noam");
const ruth = new Person("Ruth");
const dan = new Person("Dan");
/// we use lists to hold togther many elements
const persons:Person[] = [noam,ruth,dan];
console.log(persons)
console.log(persons[1])

