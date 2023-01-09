class Person {
  constructor(public name: string, public age: number, public gender: string) {}
}

const noam = new Person("noam", 33, "male");
const ruth = new Person("Ruth", 27, "female");
const dan = new Person("Dan", 41, "male");
/// we use lists to hold togther many elements
const persons: Person[] = [noam, ruth, dan];
console.log(persons);
console.log(persons[1]);

console.log(persons.length);
//sort
persons.sort((a, b) => a.age - b.age);

console.log(persons);
//filter
const personsAbove30: Person[] = persons.filter((person) => person.age > 30);
console.log(personsAbove30);

//callback
function logPerson(person: Person) {
  console.log(person.name, person.age);
}

persons.forEach(logPerson);

persons.forEach(function (person: Person) {
  console.log(person.name, person.age);
});

console.log(persons.filter((person) => person.gender === "female"));
