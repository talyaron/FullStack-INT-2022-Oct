var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var noam = new Person("noam");
var ruth = new Person("Ruth");
var dan = new Person("Dan");
var persons = [noam, ruth, dan];
console.log(persons);
console.log(persons[-1]);
