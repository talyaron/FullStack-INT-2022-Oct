var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var david = new Person("david");
var uri = new Person("uri");
var persons = [david, uri];
console.log(persons);
console.log(persons[-2]);
