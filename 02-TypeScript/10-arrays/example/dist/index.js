var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
var noam = new Person("noam", 33, "male");
var ruth = new Person("Ruth", 27, "female");
var dan = new Person("Dan", 14, "male");
/// we use lists to hold togther many elements
var persons = [noam, ruth, dan];
console.log(persons);
console.log(persons[1]);
// console.log(persons.length);
//sort
// persons.sort((a, b) => a.age - b.age);
console.log(persons);
//filter
var personsAbove30 = persons.filter(function (person) { return person.age; });
console.log(personsAbove30);
// //callback
// function logPerson(person: Person) {
//   console.log(person.name, person.age);
// }
// persons.forEach(logPerson);
// persons.forEach(function (person: Person) {
//   console.log(person.name, person.age);
// });
// console.log(persons.filter((person) => person.gender === "female"));
