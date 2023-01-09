class Person{
    constructor(private name:string){}
}


const moshe = new Person("Moshe");
const david = new Person("David");
const yoda = new Person("Yoda");

const people:Person[] = [moshe,david,yoda];
console.log(people);
console.log(people[1]);