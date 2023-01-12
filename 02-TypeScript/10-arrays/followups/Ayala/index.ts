

class Person{
    constructor(private name:string){}
}

const david = new Person("david");
const uri = new Person("uri");

const persons :Person[] =[david,uri]
console.log(persons)
console.log(persons[1])

