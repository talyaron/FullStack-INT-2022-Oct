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
var dan = new Person("Dan", 41, "male");
/// we use lists to hold togther many elements
var persons = [noam, ruth, dan];
console.log(persons);
console.log(persons[1]);
console.log(persons.length);
//sort
persons.sort(function (a, b) { return a.age - b.age; });
console.log(persons);
//filter
var personsAbove30 = persons.filter(function (person) { return person.age > 30; });
console.log(personsAbove30);
//callback
function logPerson(person) {
    console.log(person.name, person.age);
}
persons.forEach(logPerson);
persons.forEach(function (person) {
    console.log(person.name, person.age);
});
console.log(persons.filter(function (person) { return person.gender === "female"; }));
