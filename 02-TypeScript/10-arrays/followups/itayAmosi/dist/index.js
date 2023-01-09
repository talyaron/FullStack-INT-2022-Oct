var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var moshe = new Person("Moshe");
var david = new Person("David");
var yoda = new Person("Yoda");
var people = [moshe, david, yoda];
console.log(people);
console.log(people[1]);
